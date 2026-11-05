import React, { useState } from 'react';
import { TrendingUp, BarChart2, Settings, PlusCircle, MessageSquare, Percent, Save, Phone, Check, RefreshCw } from 'lucide-react';

export default function MerchantPortal({ merchants, onUpdateMerchant, onCreateCoupon }) {
  // Authentication states
  const [isLogged, setIsLogged] = useState(() => {
    return !!sessionStorage.getItem('guia_facil_react_token') || false;
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Let the user switch between active merchants to see how different dashboards look!
  const approvedMerchants = merchants.filter(m => m.approved);
  const [selectedMerchantId, setSelectedMerchantId] = useState(approvedMerchants[0]?.id || 'm-101');
  
  // Current active merchant data
  const merchant = merchants.find(m => m.id === selectedMerchantId);

  // Form states
  const [description, setDescription] = useState(merchant?.description || '');
  const [location, setLocation] = useState(merchant?.location || '');
  const [phone, setPhone] = useState(merchant?.phone || '');
  const [whatsapp, setWhatsapp] = useState(merchant?.whatsapp || '');
  
  // New coupon states
  const [couponDesc, setCouponDesc] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [couponLimit, setCouponLimit] = useState(100);

  // Status flags
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [couponSuccess, setCouponSuccess] = useState(false);

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    // Authenticate using initial mock user credentials ( Baden Baden is u-2 -> baden@contato.com.br / 12345 )
    if (email.toLowerCase().trim() === 'baden@contato.com.br' && password === '12345') {
      setIsLogged(true);
      setSelectedMerchantId('m-101');
      const store = merchants.find(m => m.id === 'm-101');
      if (store) {
        setDescription(store.description);
        setLocation(store.location);
        setPhone(store.phone);
        setWhatsapp(store.whatsapp);
      }
      sessionStorage.setItem('guia_facil_react_token', 'mock_react_token');
    } else {
      setLoginError('E-mail ou senha incorretos.');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLogged(false);
    sessionStorage.removeItem('guia_facil_react_token');
  };

  // Save changes
  const handleSaveProfile = (e) => {
    e.preventDefault();
    onUpdateMerchant(selectedMerchantId, {
      description,
      location,
      phone,
      whatsapp
    });
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // Create coupon
  const handleCreateCoupon = (e) => {
    e.preventDefault();
    if (!couponCode || !couponDesc) return;

    onCreateCoupon(selectedMerchantId, {
      code: couponCode.toUpperCase().trim(),
      description: couponDesc.trim(),
      limit: parseInt(couponLimit) || 100
    });

    setCouponCode('');
    setCouponDesc('');
    setCouponLimit(100);
    setCouponSuccess(true);
    setTimeout(() => setCouponSuccess(false), 3000);
  };

  if (!isLogged) {
    return (
      <div className="animate-fade-in" style={{ maxWidth: '480px', margin: '60px auto', padding: '0 20px' }}>
        <div className="glass-panel" style={{ padding: '40px', borderRadius: '24px', background: 'rgba(16, 20, 32, 0.85)', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35)' }}>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(0, 196, 140, 0.1)', color: 'var(--primary)', marginBottom: '16px' }}>
              <Settings size={28} />
            </div>
            <h2 style={{ fontSize: '26px', fontWeight: 700, color: 'white' }}>Área do Comerciante</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '8px' }}>Acesse seu painel exclusivo para gerenciar seu comércio e cupons.</p>
          </div>

          {loginError && (
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444', padding: '12px 16px', borderRadius: '12px', marginBottom: '20px', fontSize: '13px', textAlign: 'center' }}>
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label">E-mail Comercial</label>
              <input 
                type="email" 
                className="form-input" 
                placeholder="exemplo@contato.com.br" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                style={{ padding: '12px 16px', background: 'rgba(30, 41, 59, 0.5)' }}
              />
            </div>

            <div className="form-group" style={{ marginBottom: '24px' }}>
              <label className="form-label">Senha</label>
              <input 
                type="password" 
                className="form-input" 
                placeholder="Digite sua senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                style={{ padding: '12px 16px', background: 'rgba(30, 41, 59, 0.5)' }}
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '12px', fontWeight: 600, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', borderRadius: '12px' }}>
              Acessar Painel
            </button>
          </form>
          
          <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', textAlign: 'center' }}>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Credenciais de teste: <strong>baden@contato.com.br</strong> / <strong>12345</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (!merchant) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
        Nenhum comerciante credenciado disponível para demonstração.
      </div>
    );
  }

  // Custom data for merchant weekly hits chart (Simulated)
  const weeklyHits = [
    { day: "Seg", hits: Math.floor(merchant.viewsThisWeek * 0.08) },
    { day: "Ter", hits: Math.floor(merchant.viewsThisWeek * 0.09) },
    { day: "Qua", hits: Math.floor(merchant.viewsThisWeek * 0.12) },
    { day: "Qui", hits: Math.floor(merchant.viewsThisWeek * 0.15) },
    { day: "Sex", hits: Math.floor(merchant.viewsThisWeek * 0.22) },
    { day: "Sáb", hits: Math.floor(merchant.viewsThisWeek * 0.24) },
    { day: "Dom", hits: Math.floor(merchant.viewsThisWeek * 0.10) }
  ];
  
  const maxHitValue = Math.max(...weeklyHits.map(d => d.hits)) || 100;

  return (
    <div className="animate-fade-in">
      {/* Merchant Switcher Header */}
      <div className="glass-panel" style={{
        padding: '24px',
        marginBottom: '32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase' }}>PAINEL DO COMERCIANTE</span>
          <h2 style={{ fontSize: '24px', marginTop: '4px' }}>Gerenciar: <span style={{ color: 'white' }}>{merchant.name}</span></h2>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>Usuário: <strong>Baden Baden</strong></span>
          <button 
            onClick={handleLogout} 
            className="btn btn-sm" 
            style={{ background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', border: '1px solid rgba(239, 68, 68, 0.2)', display: 'flex', alignItems: 'center', gap: '6px' }}
          >
            Sair
          </button>
        </div>
      </div>

      {/* Analytics Summary */}
      <div className="stats-grid">
        <div className="glass-panel stat-card">
          <div className="stat-icon-wrapper primary">
            <BarChart2 size={24} />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cliques no Perfil</span>
            <div className="stat-value">
              {merchant.viewsThisWeek}
              <span className="stat-change up">
                <TrendingUp size={12} style={{ display: 'inline', marginRight: '2px' }} />
                +18%
              </span>
            </div>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Nos últimos 7 dias</span>
          </div>
        </div>

        <div className="glass-panel stat-card">
          <div className="stat-icon-wrapper secondary">
            <Phone size={24} />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cliques no WhatsApp</span>
            <div className="stat-value">{merchant.whatsappClicks}</div>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Contatos e reservas iniciados</span>
          </div>
        </div>

        <div className="glass-panel stat-card">
          <div className="stat-icon-wrapper accent">
            <Percent size={24} />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cupons Resgatados</span>
            <div className="stat-value">{merchant.couponsRedeemed}</div>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Taxa de conversão: {Math.round((merchant.couponsRedeemed / (merchant.viewsThisWeek || 1)) * 100)}%</span>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gap: '24px',
        marginBottom: '32px'
      }} className="mobile-column-layout">
        {/* Left column: Profile Edit Form */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Settings style={{ color: 'var(--primary)' }} />
            Editar Dados da Empresa
          </h3>

          <form onSubmit={handleSaveProfile}>
            <div className="form-group">
              <label className="form-label">Descrição Comercial</label>
              <textarea 
                rows="4" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-input"
                style={{ resize: 'none' }}
                placeholder="Insira a descrição detalhada dos seus serviços, pratos especiais ou comodidades..."
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Endereço Físico</label>
              <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="form-input" 
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="mobile-column-layout">
              <div className="form-group">
                <label className="form-label">Telefone Fixo</label>
                <input 
                  type="text" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-input" 
                  placeholder="(12) 3663-0000"
                />
              </div>
              <div className="form-group">
                <label className="form-label">WhatsApp (DDD + Número)</label>
                <input 
                  type="text" 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="form-input" 
                  placeholder="551299999999"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px', gap: '8px' }}>
              {saveSuccess ? <Check size={18} /> : <Save size={18} />}
              {saveSuccess ? 'Dados Atualizados com Sucesso!' : 'Salvar Alterações no Perfil'}
            </button>
          </form>
        </div>

        {/* Right column: Weekly views Chart */}
        <div className="glass-panel chart-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="chart-header">
            <h4 style={{ fontSize: '16px' }}>Tráfego Semanal (Visualizações)</h4>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Média: {Math.round(merchant.viewsThisWeek / 7)} cliques/dia</span>
          </div>

          {/* Render custom CSS/SVG Bar Chart */}
          <div className="svg-chart" style={{ flexGrow: 1, minHeight: '180px' }}>
            {weeklyHits.map((dayData, idx) => {
              // Calculate height percentage
              const pct = (dayData.hits / maxHitValue) * 85;
              return (
                <div key={idx} className="chart-bar-wrapper">
                  {/* Tooltip */}
                  <div className="chart-tooltip">
                    {dayData.hits} acessos
                  </div>
                  {/* Bar fill */}
                  <div 
                    className="chart-bar-fill" 
                    style={{ height: `${Math.max(pct, 6)}%` }} 
                  />
                  {/* Label */}
                  <div className="chart-label">{dayData.day}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
        gap: '24px'
      }} className="mobile-column-layout">
        {/* Left column: Coupon Creator */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '19px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <PlusCircle style={{ color: 'var(--primary)' }} />
            Criar Cupom de Desconto
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '20px' }}>
            Crie ofertas exclusivas para atrair o fluxo de turistas que utilizam o Guia Fácil. O cupom aparecerá instantaneamente no portal do visitante.
          </p>

          <form onSubmit={handleCreateCoupon}>
            <div className="form-group">
              <label className="form-label">Benefício do Cupom</label>
              <input 
                type="text" 
                placeholder="Ex: 10% de desconto no chocolate quente"
                value={couponDesc}
                onChange={(e) => setCouponDesc(e.target.value)}
                className="form-input"
                required 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '12px' }} className="mobile-column-layout">
              <div className="form-group">
                <label className="form-label">Código de Resgate</label>
                <input 
                  type="text" 
                  placeholder="EX: CHOCO10"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="form-input"
                  style={{ fontFamily: 'monospace' }}
                  required 
                />
              </div>
              <div className="form-group">
                <label className="form-label">Limite</label>
                <input 
                  type="number" 
                  value={couponLimit}
                  onChange={(e) => setCouponLimit(Number(e.target.value))}
                  className="form-input"
                  min="5"
                  required 
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '8px' }}>
              {couponSuccess ? <Check size={18} /> : <Percent size={18} />}
              {couponSuccess ? 'Cupom Criado e Publicado!' : 'Publicar Nova Oferta'}
            </button>
          </form>
        </div>

        {/* Right column: Feedbacks and active coupons list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Active Coupons List */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '16px', marginBottom: '16px' }}>Cupons Ativos no Aplicativo</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(merchant.coupons || []).map((c, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--border-color)',
                  padding: '12px 16px',
                  borderRadius: '12px'
                }}>
                  <div>
                    <h5 style={{ fontSize: '14px', color: 'white' }}>{c.description}</h5>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                      Código: <strong>{c.code}</strong> • Resgatados: {c.redeemed}/{c.limit}
                    </span>
                  </div>
                  <span className={`badge ${c.active ? 'badge-primary' : 'badge-warning'}`}>
                    {c.active ? 'Ativo' : 'Pausado'}
                  </span>
                </div>
              ))}
              {(!merchant.coupons || merchant.coupons.length === 0) && (
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', padding: '10px 0' }}>
                  Nenhum cupom ativo no momento. Crie um acima!
                </div>
              )}
            </div>
          </div>

          {/* Feedback Feed */}
          <div className="glass-panel" style={{ padding: '24px', flexGrow: 1 }}>
            <h4 style={{ fontSize: '16px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MessageSquare size={18} style={{ color: 'var(--primary)' }} />
              Opinião dos Visitantes ({merchant.reviews?.length || 0})
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '250px', overflowY: 'auto' }}>
              {(merchant.reviews || []).map((rev, idx) => (
                <div key={idx} style={{
                  borderBottom: idx === merchant.reviews.length - 1 ? 'none' : '1px solid var(--border-color)',
                  paddingBottom: '16px',
                  marginBottom: idx === merchant.reviews.length - 1 ? 0 : '16px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'white' }}>{rev.user}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{rev.date}</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2px', color: 'var(--warning)', marginBottom: '8px' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill={i < rev.rating ? 'currentColor' : 'none'} stroke="currentColor" />
                    ))}
                  </div>

                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    "{rev.comment}"
                  </p>
                </div>
              ))}
              {(!merchant.reviews || merchant.reviews.length === 0) && (
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'center', padding: '20px 0' }}>
                  Nenhuma avaliação registrada ainda.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .mobile-column-layout {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}} />
    </div>
  );
}
