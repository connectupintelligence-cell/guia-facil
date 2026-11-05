// ==========================================
// SERVIÇO DE INTEGRAÇÃO SUPABASE / GUIA FÁCIL
// ==========================================

(function() {
  const STORAGE_KEY_CONFIG = 'guia_facil_supabase_config';
  const STORAGE_KEY_MERCHANTS = 'guia_facil_merchants_custom_';

  // Configuração padrão (ou recuperada do localStorage)
  function getConfig() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_CONFIG);
      if (stored) return JSON.parse(stored);
    } catch(e) {}
    return {
      url: window.SUPABASE_URL || '',
      anonKey: window.SUPABASE_ANON_KEY || '',
      isConfigured: false
    };
  }

  function setConfig(url, anonKey) {
    const cleanUrl = (url || '').trim().replace(/\/+$/, '');
    const cleanKey = (anonKey || '').trim();
    const config = {
      url: cleanUrl,
      anonKey: cleanKey,
      isConfigured: Boolean(cleanUrl && cleanKey)
    };
    try {
      localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(config));
    } catch(e) {}
    return config;
  }

  // Helper para requisições diretas na API REST do Supabase (sem depender de libs externas)
  async function supabaseRequest(endpoint, method = 'GET', body = null) {
    const config = getConfig();
    if (!config.isConfigured) return null;

    const headers = {
      'apikey': config.anonKey,
      'Authorization': `Bearer ${config.anonKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };

    const res = await fetch(`${config.url}/rest/v1/${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Erro Supabase (${res.status}): ${err}`);
    }

    return res.json();
  }

  // 1. Salvar ou atualizar comerciante (no Supabase ou fallback localStorage)
  async function saveMerchant(merchantData, cityId) {
    const config = getConfig();
    const timestamp = new Date().toISOString();
    
    // Assegura campos essenciais
    const enriched = {
      ...merchantData,
      city_id: cityId,
      updated_at: timestamp,
      approved: true // Auto-aprovado para teste imediato
    };

    // Tentativa via Supabase Cloud se configurado
    if (config.isConfigured) {
      try {
        const result = await supabaseRequest('merchants?on_conflict=email', 'POST', enriched);
        console.log("☁️ Comerciante sincronizado com Supabase Cloud com sucesso:", result);
      } catch (err) {
        console.warn("⚠️ Falha ao salvar no Supabase Cloud, salvando localmente:", err);
      }
    }

    // Persistência local (LocalStorage)
    try {
      const storageKey = `${STORAGE_KEY_MERCHANTS}${cityId}`;
      const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
      const index = existing.findIndex(m => m.email === enriched.email || m.id === enriched.id);
      
      if (index >= 0) {
        existing[index] = { ...existing[index], ...enriched };
      } else {
        existing.push(enriched);
      }

      localStorage.setItem(storageKey, JSON.stringify(existing));
    } catch(e) {
      console.warn("Erro ao persistir comerciante no localStorage:", e);
    }

    return enriched;
  }

  // 2. Recuperar comerciantes salvos (locais ou nuvem)
  async function getSavedMerchants(cityId) {
    const config = getConfig();
    let remoteMerchants = [];

    if (config.isConfigured) {
      try {
        remoteMerchants = await supabaseRequest(`merchants?city_id=eq.${cityId}&select=*`);
      } catch (err) {
        console.warn("Não foi possível carregar do Supabase Cloud:", err);
      }
    }

    let localMerchants = [];
    try {
      const storageKey = `${STORAGE_KEY_MERCHANTS}${cityId}`;
      localMerchants = JSON.parse(localStorage.getItem(storageKey) || '[]');
    } catch(e) {}

    // Une os dois sem duplicar por e-mail ou id
    const map = new Map();
    [...localMerchants, ...remoteMerchants].forEach(m => {
      const key = m.email || m.id;
      map.set(key, { ...map.get(key), ...m });
    });

    return Array.from(map.values());
  }

  // Expor globalmente
  window.supabaseService = {
    getConfig,
    setConfig,
    saveMerchant,
    getSavedMerchants
  };
})();
