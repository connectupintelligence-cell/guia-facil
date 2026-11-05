// ==========================================
// SERVIÇO DE CONEXÃO COM A API DO GUIA FÁCIL
// ==========================================

(function() {
  const API_BASE = 'http://localhost:5000';
  const API_URL = `${API_BASE}/api`;
  const DEFAULT_TENANT = 'camposdojordao';

  // Check if Express backend is running
  async function checkBackendStatus() {
    try {
      const controller = new AbortController();
      const id = setTimeout(() => controller.abort(), 800);
      const res = await fetch(API_BASE, { 
        method: 'GET', 
        signal: controller.signal 
      });
      clearTimeout(id);
      const data = await res.json();
      return data.status === 'online';
    } catch (err) {
      return false;
    }
  }

  // Helper for HTTP Requests with Tenant Header
  async function request(endpoint, method = 'GET', body = null) {
    const activeTenant = (window.appState && window.appState.activeCityId) || 
                         (new URLSearchParams(window.location.search).get('cidade')) || 
                         (new URLSearchParams(window.location.search).get('city')) ||
                         sessionStorage.getItem('guia_facil_active_city') || 
                         DEFAULT_TENANT;

    const headers = {
      'Content-Type': 'application/json',
      'X-Tenant-Subdomain': activeTenant
    };

    const token = sessionStorage.getItem('guia_facil_token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
      method,
      headers,
      body: body ? JSON.stringify(body) : null
    };

    const res = await fetch(`${API_URL}${endpoint}`, config);
    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${res.status}`);
    }
    return res.json();
  }

  // Bind to global window scope to bypass module CORS restriction on double-click
  window.apiService = {
    checkBackendStatus,
    login: (email, password) => request('/auth/login', 'POST', { email, password }),
    sendWhatsAppMessage: (message) => request('/whatsapp/message', 'POST', { message }),
    fetchAttractions: () => request('/attractions'),
    fetchMerchants: () => request('/merchants'),
    fetchEvents: () => request('/events'),
    updateMerchantProfile: (id, profileData) => request(`/merchants/${id}`, 'PUT', profileData),
    approveMerchantRegistration: (id) => request(`/merchants/${id}/approve`, 'PUT'),
    publishCoupon: (couponData) => request('/coupons', 'POST', couponData),
    validateCouponRedemption: (id) => request(`/coupons/${id}/redeem`, 'POST'),
    publishNewEvent: (eventData) => request('/events', 'POST', eventData)
  };
})();
