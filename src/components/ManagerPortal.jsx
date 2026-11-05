import React, { useState } from 'react';
import { Landmark, Users, TrendingUp, DollarSign, BedDouble, Check, X, ShieldAlert, Award, Calendar, PlusCircle, AlertCircle } from 'lucide-react';

export default function ManagerPortal({ 
  stats, 
  merchants, 
  events, 
  onApproveMerchant, 
  onAddEvent 
}) {
  const [selectedMonth, setSelectedMonth] = useState(6); // Default is July (index 6, pico de Campos do Jordão)
  const unapprovedMerchants = merchants.filter(m => !m.approved);

  // New Event Form State
  const [eventName, setEventName] = useState('');
  const [eventDesc, setEventDesc] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventCategory, setEventCategory] = useState('Música & Cultura');
  
  // Status flags
  const [eventSuccess, setEventSuccess] = useState(false);

  const handleApprove = (id) => {
    onApproveMerchant(id);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!eventName || !eventDesc || !eventDate || !eventLocation) return;
    
    onAddEvent({
      name: eventName,
      description: eventDesc,
      date: eventDate,
      location: eventLocation,
      category: eventCategory,
      active: true
    });

    setEventName('');
    setEventDesc('');
    setEventDate('');
    setEventLocation('');
    setEventSuccess(true);
    setTimeout(() => setEventSuccess(false), 3000);
  };

  // Month-specific tips/insights for Campos do Jordão
  const monthInsights = [
    { name: "Janeiro", tip: "Férias de verão. Atrai famílias em busca de ecoturismo, trilhas e clima ameno de montanha." },
    { name: "Fevereiro", tip: "Carnaval tranquilo. Público paulistano fugindo da folia litorânea para descansar na serra." },
    { name: "Março", tip: "Baixa temporada. Excelente período para turismo romântico e pacotes promocionais de hospedagem." },
    { name: "Abril", tip: "Páscoa e início do Festival do Pinhão. O clima começa a esfriar, impulsionando a gastronomia." },
    { name: "Maio", tip: "Outono dourado. As araucárias e as folhas secas atraem fotógrafos. Clima propício para vinhos e fondue." },
    { name: "Junho", tip: "Abertura oficial da temporada de inverno. Alta demanda nos finais de semana." },
    { name: "Julho", tip: "Pico máximo do ano! Festival Internacional de Inverno. Cidade lotada, hotéis com 98% de ocupação." },
    { name: "Agosto", tip: "Prolongamento da temporada de inverno. Dias ensolarados e noites muito geladas." },
    { name: "Setembro", tip: "Primavera na serra. Período excelente para visitar os jardins do Amantikir e fazer trilhas." },
    { name: "Outubro", tip: "Feriados prolongados aquecem o comércio local. Clima de montanha muito agradável." },
    { name: "Novembro", tip: "Abertura do Natal dos Sonhos. A iluminação de natal atrai visitantes nos fins de semana." },
    { name: "Dezembro", tip: "Turismo natalino e férias de fim de ano. Grande fluxo de famílias e eventos de luzes nas praças." }
  ];

  // Max value for monthly chart scaling
  const maxVisitors = Math.max(...stats.visitorFlowChart.map(m => m.visitors)) || 300000;

  return (
    <div className="animate-fade-in">
      {/* Manager Header */}
      <div className="glass-panel" style={{
        padding: '24px',
        marginBottom: '32px',
        background: 'linear-gradient(135deg, rgba(16, 20, 32, 0.85) 0%, rgba(20, 26, 40, 0.95) 100%)',
        borderLeft: '4px solid var(--accent)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Landmark size={28} style={{ color: 'var(--accent)' }} />
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>PAINEL DE GESTÃO PÚBLICA MUNICIPAL</span>
            <h2 style={{ fontSize: '24px', marginTop: '2px' }}>Secretaria de Turismo de Campos do Jordão</h2>
          </div>
        </div>
      </div>

      {/* Municipal Indicator Cards */}
      <div className="stats-grid">
        <div className="glass-panel stat-card">
          <div className="stat-icon-wrapper primary" style={{ color: 'var(--accent)', background: 'rgba(139, 92, 246, 0.12)' }}>
            <Users size={24} />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Visitantes no Município</span>
            <div className="stat-value">
              {stats.activeVisitorsToday.toLocaleString()}
              <span style={{ fontSize: '11px', color: 'var(--success)', fontWeight: 600, marginLeft: '6px' }}>ativos hoje</span>
            </div>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Média mensal: {stats.monthlyVisitors.toLocaleString()}</span>
          </div>
        </div>

        <div className="glass-panel stat-card">
          <div className="stat-icon-wrapper primary">
            <DollarSign size={24} />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Receita Turística</span>
            <div className="stat-value">
              R$ {(stats.estimatedTourismRevenue / 1000000).toFixed(1)}M
              <span className="stat-change up">{stats.estimatedTourismRevenueChange}</span>
            </div>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Injeção econômica estimada no mês</span>
          </div>
        </div>

        <div className="glass-panel stat-card">
          <div className="stat-icon-wrapper secondary">
            <BedDouble size={24} />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Ocupação Hoteleira</span>
            <div className="stat-value">
              {stats.hotelOccupancyRate}%
              <span className="stat-change up">{stats.hotelOccupancyRateChange}</span>
            </div>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Média ponderada de leitos ativos</span>
          </div>
        </div>
      </div>

      {/* Main Charts & Analytics Block */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gap: '24px',
        marginBottom: '32px'
      }} className="mobile-column-layout">
        
        {/* Interactive Monthly Visitor Flow Chart */}
        <div className="glass-panel chart-container" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="chart-header">
            <div>
              <h4 style={{ fontSize: '17px', fontWeight: 700 }}>Fluxo Mensal de Turistas</h4>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Previsão de movimentação para o ano de 2026</p>
            </div>
            <div className="badge badge-purple" style={{ gap: '4px' }}>
              <TrendingUp size={12} />
              <span>Pico em Julho: 280k</span>
            </div>
          </div>

          {/* SVG Bar Chart with Select State */}
          <div className="svg-chart" style={{ flexGrow: 1, minHeight: '200px' }}>
            {stats.visitorFlowChart.map((monthData, idx) => {
              const heightPct = (monthData.visitors / maxVisitors) * 85;
              const isSelected = selectedMonth === idx;
              return (
                <div 
                  key={idx} 
                  className="chart-bar-wrapper"
                  onClick={() => setSelectedMonth(idx)}
                >
                  <div className="chart-tooltip">
                    {monthData.visitors.toLocaleString()} turistas
                  </div>
                  <div 
                    className="chart-bar-fill" 
                    style={{ 
                      height: `${Math.max(heightPct, 6)}%`,
                      background: isSelected ? 'var(--grad-primary)' : 'rgba(255, 255, 255, 0.08)',
                      boxShadow: isSelected ? '0 0 15px var(--primary-glow)' : 'none',
                      border: isSelected ? '1px solid var(--primary)' : 'none'
                    }} 
                  />
                  <div 
                    className="chart-label" 
                    style={{ 
                      fontWeight: isSelected ? 700 : 400,
                      color: isSelected ? 'white' : 'var(--text-secondary)' 
                    }}
                  >
                    {monthData.month}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dynamic Details Box for Selected Month */}
          <div style={{
            marginTop: '20px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}>
            <AlertCircle size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <h5 style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '2px' }}>
                Dinâmica de Demanda: {monthInsights[selectedMonth].name}
              </h5>
              <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {monthInsights[selectedMonth].tip}
              </p>
            </div>
          </div>
        </div>

        {/* Origin and Spent Statistics (Manager Research) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Origin Stats */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '15px', marginBottom: '16px', fontWeight: 700 }}>Origem dos Turistas (Estados)</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {stats.touristOrigin.map((origin, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                    <span style={{ color: 'var(--text-secondary)' }}>{origin.state}</span>
                    <span style={{ color: 'white', fontWeight: 600 }}>{origin.percentage}%</span>
                  </div>
                  {/* Progress Bar */}
                  <div style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '3px',
                    background: 'rgba(255,255,255,0.04)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${origin.percentage}%`,
                      height: '100%',
                      background: idx === 0 ? 'var(--grad-primary)' : 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '3px'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Average Spending Stats */}
          <div className="glass-panel" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '15px', marginBottom: '16px', fontWeight: 700 }}>Distribuição do Gasto Médio Diário</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              {[
                { name: "Hospedagem", val: stats.averageSpending.hospedagem, color: 'var(--accent)' },
                { name: "Alimentação", val: stats.averageSpending.alimentacao, color: '#ef4444' },
                { name: "Compras Locais", val: stats.averageSpending.compras, color: 'var(--primary)' },
                { name: "Ingressos/Lazer", val: stats.averageSpending.ingressos, color: 'var(--secondary)' }
              ].map((spent, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '8px 12px',
                  background: 'rgba(255,255,255,0.01)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px'
                }}>
                  <span style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: spent.color }} />
                    {spent.name}
                  </span>
                  <span style={{ color: 'white', fontWeight: 600 }}>R$ {spent.val},00</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        gap: '24px'
      }} className="mobile-column-layout">
        
        {/* Commercial Homologation Queue */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShieldAlert style={{ color: 'var(--warning)' }} />
            Homologação de Estabelecimentos ({unapprovedMerchants.length})
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '24px' }}>
            Os estabelecimentos abaixo realizaram o cadastro no portal comercial. Revise os dados de alvará e aprove para integrá-los no mapa digital oficial de Campos do Jordão.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {unapprovedMerchants.map(merchant => (
              <div key={merchant.id} className="glass-panel" style={{
                padding: '20px',
                background: 'rgba(255, 255, 255, 0.01)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px'
              }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <img 
                    src={merchant.imageUrl} 
                    alt={merchant.name} 
                    style={{ width: '64px', height: '64px', borderRadius: '12px', objectFit: 'cover' }} 
                  />
                  <div>
                    <h4 style={{ fontSize: '16px', color: 'white' }}>{merchant.name}</h4>
                    <span className="badge badge-secondary" style={{ fontSize: '11px', margin: '4px 0' }}>{merchant.category}</span>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Endereço: {merchant.location}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => handleApprove(merchant.id)}
                    className="btn btn-primary btn-sm"
                    style={{ gap: '4px' }}
                  >
                    <Check size={14} /> Homologar
                  </button>
                  <button 
                    className="btn btn-secondary btn-sm"
                    style={{ color: 'var(--danger)', borderColor: 'rgba(239, 68, 68, 0.2)', background: 'rgba(239, 68, 68, 0.05)' }}
                  >
                    Recusar
                  </button>
                </div>
              </div>
            ))}

            {unapprovedMerchants.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '30px 0',
                color: 'var(--text-muted)',
                fontSize: '13px',
                border: '1px dashed var(--border-color)',
                borderRadius: '12px'
              }}>
                Nenhum cadastro comercial pendente de homologação.
              </div>
            )}
          </div>
        </div>

        {/* Public Event Creator */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '19px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar style={{ color: 'var(--primary)' }} />
            Cadastrar Evento Público
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '12px', marginBottom: '20px' }}>
            Publique feiras, concertos e atividades culturais no calendário municipal visível aos turistas.
          </p>

          <form onSubmit={handleAddEvent}>
            <div className="form-group">
              <label className="form-label">Nome do Evento</label>
              <input 
                type="text" 
                placeholder="Ex: Exposição de Flores do Horto"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="form-input"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Data / Período</label>
              <input 
                type="text" 
                placeholder="Ex: 12 a 15 de Setembro, 2026"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="form-input"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Local de Realização</label>
              <input 
                type="text" 
                placeholder="Ex: Auditório Cláudio Santoro"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                className="form-input"
                required 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Categoria</label>
              <select 
                value={eventCategory} 
                onChange={(e) => setEventCategory(e.target.value)}
                className="form-input"
              >
                <option value="Música & Cultura">Música & Cultura</option>
                <option value="Gastronomia">Gastronomia</option>
                <option value="Lazer & Família">Lazer & Família</option>
                <option value="Esporte & Aventura">Esporte & Aventura</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Descrição Geral</label>
              <textarea 
                rows="3" 
                placeholder="Detalhes sobre ingressos, programação..."
                value={eventDesc}
                onChange={(e) => setEventDesc(e.target.value)}
                className="form-input"
                style={{ resize: 'none' }}
                required 
              />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '8px' }}>
              {eventSuccess ? <Check size={18} /> : <PlusCircle size={18} />}
              {eventSuccess ? 'Evento Criado e Publicado!' : 'Publicar Evento Oficial'}
            </button>
          </form>
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
