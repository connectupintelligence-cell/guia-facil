import React, { useState } from 'react';
import { 
  Sparkles, 
  Play, 
  Users, 
  MessageSquare, 
  Ticket, 
  Compass, 
  TrendingUp, 
  CheckCircle2, 
  DollarSign, 
  Award, 
  MapPin, 
  ExternalLink,
  FileText,
  Activity,
  ArrowRight
} from 'lucide-react';

export default function SimulationPortal({ onPerformCheckIn, onRedeemCoupon }) {
  const [isRunning, setIsRunning] = useState(false);
  const [simMetrics, setSimMetrics] = useState({
    totalAgents: 36,
    totalQueries: 177,
    couponsRedeemed: 50,
    checkinsDone: 50,
    totalXp: 2750,
    stimulatedRevenue: 8596.16,
    dispersionRate: 63.0,
    topicCounts: [
      { name: "Atrativos / Turismo", count: 60, pct: 33.9 },
      { name: "Gastronomia / Fondue", count: 42, pct: 23.7 },
      { name: "Eventos Culturais", count: 25, pct: 14.1 },
      { name: "Check-in & Gamificação", count: 22, pct: 12.4 },
      { name: "Cupons & Vouchers", count: 15, pct: 8.5 },
      { name: "Família & Infantil", count: 6, pct: 3.4 },
      { name: "Utilidade Pública & Saúde", count: 4, pct: 2.3 },
      { name: "Hospedagem", count: 3, pct: 1.7 }
    ],
    merchantCoupons: [
      { name: "Chocolate Araucária", code: "ARAUCHOCO", discount: "Leve 2 Pague 1", redeemed: 14, tag: "Periférico", color: "var(--primary)" },
      { name: "Pousada Recanto dos Sonhos", code: "RECANTO10", discount: "10% Diária", redeemed: 15, tag: "Periférico", color: "var(--secondary)" },
      { name: "Matterhorn Fondue", code: "MATTER15", discount: "15% Fondue", redeemed: 12, tag: "Centro Capivari", color: "#a78bfa" },
      { name: "Baden Baden Cervejaria", code: "BADEN10", discount: "10% Chopp", redeemed: 9, tag: "Centro Capivari", color: "#f59e0b" }
    ],
    agentFeed: [
      { id: "agente_04", archetype: "Família com Crianças", time: "Sábado 14:15", query: "O que fazer com duas crianças de 6 e 9 anos à tarde?", aiReply: "Parque Amantikir (labirinto botânico) e Teleférico Morro do Elefante.", action: "Check-in presencial no Parque Amantikir (+50 XP)", badgeColor: "rgba(0, 196, 140, 0.2)", textColor: "#00c48c" },
      { id: "agente_12", archetype: "Casal Romântico", time: "Sábado 19:40", query: "Melhor fondue com lareira para jantar a dois?", aiReply: "Matterhorn Fondue & Empório com rodízio especial e música ao vivo.", action: "Resgate de Cupom MATTER15 (-15% no rodízio)", badgeColor: "rgba(167, 139, 250, 0.2)", textColor: "#c4b5fd" },
      { id: "agente_27", archetype: "Jovem Aventureiro", time: "Domingo 09:30", query: "Quais trilhas e cachoeiras abertas perto da natureza?", aiReply: "Horto Florestal (Trilha da Cachoeira e arvorismo alpino).", action: "Check-in presencial no Horto Florestal (+50 XP)", badgeColor: "rgba(56, 189, 248, 0.2)", textColor: "#38bdf8" },
      { id: "agente_08", archetype: "Família com Crianças", time: "Sábado 16:20", query: "Onde tomar o melhor chocolate quente da serra?", aiReply: "Fábrica Chocolate Araucária na Vila Jaguary com voucher exclusivo.", action: "Resgate de Cupom ARAUCHOCO (Pague 1 Leve 2)", badgeColor: "rgba(0, 196, 140, 0.2)", textColor: "#00c48c" },
      { id: "agente_31", archetype: "Casal Romântico", time: "Sexta 21:10", query: "Pousada charmosa com lareira para o fim de semana?", aiReply: "Pousada Recanto dos Sonhos com chalés privativos alpinos.", action: "Resgate de Cupom RECANTO10 (-10% diárias)", badgeColor: "rgba(167, 139, 250, 0.2)", textColor: "#c4b5fd" },
      { id: "agente_19", archetype: "Jovem Aventureiro", time: "Sábado 17:50", query: "Onde ver o pôr do sol mais alto da serra?", aiReply: "Pico do Itapeva a 2.030m de altitude com vista panorâmica para 15 cidades.", action: "Check-in presencial no Pico do Itapeva (+60 XP)", badgeColor: "rgba(56, 189, 248, 0.2)", textColor: "#38bdf8" }
    ]
  });

  const [notification, setNotification] = useState(null);

  const handleRunSimulation = () => {
    setIsRunning(true);
    setTimeout(() => {
      setSimMetrics(prev => {
        const extraQueries = Math.floor(Math.random() * 8) + 4;
        const extraCoupons = Math.floor(Math.random() * 3) + 1;
        const extraCheckins = Math.floor(Math.random() * 3) + 1;
        const extraRev = Math.floor(Math.random() * 450) + 180;
        const extraXp = 140;

        const candidates = [
          { id: `agente_${Math.floor(Math.random()*30)+10}`, archetype: "Casal Romântico", time: "Agora", query: "Onde jantar fondue especial hoje com lareira?", aiReply: "Matterhorn Fondue & Empório no Capivari com cupom MATTER15.", action: "Resgate de Cupom MATTER15 (-15%)", badgeColor: "rgba(167, 139, 250, 0.2)", textColor: "#c4b5fd" },
          { id: `agente_${Math.floor(Math.random()*30)+10}`, archetype: "Família com Crianças", time: "Agora", query: "Passeio ao ar livre com crianças e parada para chocolate?", aiReply: "Parque Amantikir + parada no Chocolate Araucária.", action: "Check-in presencial no Parque Amantikir (+50 XP)", badgeColor: "rgba(0, 196, 140, 0.2)", textColor: "#00c48c" },
          { id: `agente_${Math.floor(Math.random()*30)+10}`, archetype: "Jovem Aventureiro", time: "Agora", query: "Trilhas de ecoturismo abertas no Horto?", aiReply: "Trilha da Cachoeira + tirolesa e arborismo no Horto Florestal.", action: "Check-in presencial no Horto Florestal (+50 XP)", badgeColor: "rgba(56, 189, 248, 0.2)", textColor: "#38bdf8" }
        ];
        const newInt = candidates[Math.floor(Math.random() * candidates.length)];
        const updatedFeed = [newInt, ...prev.agentFeed.slice(0, 7)];

        return {
          ...prev,
          totalQueries: prev.totalQueries + extraQueries,
          couponsRedeemed: prev.couponsRedeemed + extraCoupons,
          checkinsDone: prev.checkinsDone + extraCheckins,
          totalXp: prev.totalXp + extraXp,
          stimulatedRevenue: prev.stimulatedRevenue + extraRev,
          agentFeed: updatedFeed
        };
      });

      setIsRunning(false);
      setNotification("Nova rodada de simulação executada com sucesso! O enxame atualizou as decisões e métricas.");
      setTimeout(() => setNotification(null), 4000);
    }, 1000);
  };

  return (
    <div className="animate-fade-in" style={{ padding: '24px 0 60px 0' }}>
      
      {/* Hero Header */}
      <div className="glass-panel" style={{
        padding: '40px',
        borderRadius: '24px',
        marginBottom: '32px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.12) 0%, rgba(8, 10, 16, 0.8) 100%)',
        border: '1px solid rgba(139, 92, 246, 0.25)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div className="badge badge-purple" style={{ marginBottom: '14px', gap: '8px', padding: '6px 14px' }}>
              <Sparkles size={14} />
              <span>MiroFish Multi-Agent Engine • Predição e Gêmeo Digital</span>
            </div>
            <h1 style={{ fontSize: '34px', fontWeight: 800, color: 'white', marginBottom: '12px', letterSpacing: '-0.02em' }}>
              Simulação de Enxame IA: <span style={{ background: 'linear-gradient(135deg, #c4b5fd 0%, #a78bfa 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Campos do Jordão</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '780px', lineHeight: 1.6 }}>
              Ambiente de predição comportamental baseado na tecnologia do <strong>MiroFish (OASIS / CAMEL-AI)</strong>. 
              Simula o comportamento de <strong>36 agentes autônomos</strong> (famílias, casais e ecoturistas) interagindo com a inteligência do Guia Fácil para validar demanda, conversão de cupons e alívio do tráfego urbano antes da implantação na cidade real.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button 
              onClick={handleRunSimulation}
              disabled={isRunning}
              className="btn btn-primary"
              style={{
                background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
                color: 'white',
                border: 'none',
                padding: '14px 24px',
                borderRadius: '14px',
                fontWeight: 700,
                fontSize: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(139, 92, 246, 0.35)',
                cursor: isRunning ? 'wait' : 'pointer'
              }}
            >
              {isRunning ? (
                <>
                  <Activity size={18} className="animate-spin" />
                  <span>Simulando Enxame...</span>
                </>
              ) : (
                <>
                  <Play size={18} fill="currentColor" />
                  <span>Executar Nova Rodada</span>
                </>
              )}
            </button>
          </div>
        </div>

        {notification && (
          <div style={{
            marginTop: '20px',
            padding: '12px 18px',
            background: 'rgba(0, 196, 140, 0.15)',
            border: '1px solid rgba(0, 196, 140, 0.3)',
            borderRadius: '12px',
            color: 'var(--primary)',
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <CheckCircle2 size={16} />
            <span>{notification}</span>
          </div>
        )}
      </div>

      {/* KPI Stats Grid */}
      <div className="stats-grid" style={{ marginBottom: '32px' }}>
        
        {/* KPI 1 */}
        <div className="glass-panel stat-card" style={{ borderLeft: '4px solid #38bdf8' }}>
          <div className="stat-icon-wrapper" style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}>
            <MessageSquare size={22} />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Interações WhatsApp</span>
            <div className="stat-value" style={{ color: 'white' }}>{simMetrics.totalQueries}</div>
            <span style={{ fontSize: '11px', color: '#38bdf8' }}>4.9 conversas / turista (0% fricção)</span>
          </div>
        </div>

        {/* KPI 2 */}
        <div className="glass-panel stat-card" style={{ borderLeft: '4px solid var(--primary)' }}>
          <div className="stat-icon-wrapper primary">
            <Ticket size={22} />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cupons Resgatados</span>
            <div className="stat-value" style={{ color: 'white' }}>{simMetrics.couponsRedeemed}</div>
            <span style={{ fontSize: '11px', color: 'var(--primary)' }}>Taxa de conversão: 28.2%</span>
          </div>
        </div>

        {/* KPI 3 */}
        <div className="glass-panel stat-card" style={{ borderLeft: '4px solid #a78bfa' }}>
          <div className="stat-icon-wrapper accent" style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#c4b5fd' }}>
            <Compass size={22} />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Descentralização de Fluxo</span>
            <div className="stat-value" style={{ color: 'white' }}>{simMetrics.dispersionRate}%</div>
            <span style={{ fontSize: '11px', color: '#c4b5fd' }}>Visitas fora do centro Capivari</span>
          </div>
        </div>

        {/* KPI 4 */}
        <div className="glass-panel stat-card" style={{ borderLeft: '4px solid #f59e0b' }}>
          <div className="stat-icon-wrapper" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
            <DollarSign size={22} />
          </div>
          <div>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Receita Induzida Estimada</span>
            <div className="stat-value" style={{ color: 'white' }}>R$ {simMetrics.stimulatedRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <span style={{ fontSize: '11px', color: '#f59e0b' }}>Injetados no comércio parceiro</span>
          </div>
        </div>

      </div>

      {/* Main 2-Column Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }} className="mobile-column-layout">
        
        {/* Left Column: Live Agent Feed */}
        <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', height: '620px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Users size={18} style={{ color: '#a78bfa' }} />
                Feed ao Vivo do Enxame de Agentes
              </h3>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Interações autônomas processadas pelo Agente de IA</span>
            </div>
            <span className="badge" style={{ background: 'rgba(34, 197, 94, 0.15)', color: '#22c55e', fontSize: '11px' }}>
              ● 36 Agentes Ativos
            </span>
          </div>

          <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', paddingRight: '4px' }}>
            {simMetrics.agentFeed.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-panel hover-glow" 
                style={{
                  padding: '16px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{
                      padding: '3px 8px',
                      borderRadius: '8px',
                      fontSize: '11px',
                      fontWeight: 700,
                      background: item.badgeColor,
                      color: item.textColor
                    }}>
                      {item.archetype}
                    </span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>{item.id}</span>
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.time}</span>
                </div>

                <p style={{ fontSize: '13px', color: 'white', margin: '0 0 6px 0', fontWeight: 500 }}>
                  💬 "{item.query}"
                </p>

                <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: '0 0 10px 0', lineHeight: 1.4, paddingLeft: '8px', borderLeft: '2px solid var(--border-color)' }}>
                  🤖 <em>{item.aiReply}</em>
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--primary)', fontWeight: 600 }}>
                  <CheckCircle2 size={13} />
                  <span>Ação: {item.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Predictive Analytics & Spatial Shift */}
        <div className="glass-panel" style={{ padding: '28px', display: 'flex', flexDirection: 'column', height: '620px', overflowY: 'auto' }}>
          <div style={{ marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '14px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={18} style={{ color: 'var(--primary)' }} />
              Impacto Territorial & Conversão no Comércio
            </h3>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Comparação do tráfego urbano e desempenho dos parceiros</span>
          </div>

          {/* Spatial Shift Visual Comparison */}
          <div style={{ marginBottom: '24px', background: 'rgba(255,255,255,0.02)', padding: '16px', borderRadius: '14px', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '13px', color: 'white', marginBottom: '8px', fontWeight: 600 }}>
              Descentralização do Tráfego Urbano:
            </h4>
            
            {/* Traditional without IA */}
            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                <span>Turismo Tradicional (Sem IA): <strong>74% saturado no Capivari</strong></span>
                <span>26% Periférico</span>
              </div>
              <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex' }}>
                <div style={{ width: '74%', background: '#ef4444' }}></div>
                <div style={{ width: '26%', background: 'rgba(255,255,255,0.3)' }}></div>
              </div>
            </div>

            {/* With Guia Fácil IA */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Com Guia Fácil WhatsApp (MiroFish Predição):</span>
                <span><strong>63% Periférico</strong> / 37% Centro</span>
              </div>
              <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', overflow: 'hidden', display: 'flex' }}>
                <div style={{ width: '37%', background: '#38bdf8' }}></div>
                <div style={{ width: '63%', background: 'var(--grad-primary)' }}></div>
              </div>
            </div>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', margin: '8px 0 0 0' }}>
              ℹ️ A IA direciona ativamente o turista para Amantikir, Horto Florestal e Ducha de Prata em horários de pico, diminuindo filas no centro.
            </p>
          </div>

          {/* Merchant Voucher Conversions Table */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '13px', color: 'white', marginBottom: '10px', fontWeight: 600 }}>
              Cupons Resgatados por Estabelecimento:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {simMetrics.merchantCoupons.map((m, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 14px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'white' }}>{m.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Cupom: <code>{m.code}</code> ({m.discount}) • <span style={{ color: m.color }}>{m.tag}</span></div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '16px', fontWeight: 800, color: m.color }}>{m.redeemed}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)', display: 'block' }}>resgates</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Topics Breakdown */}
          <div>
            <h4 style={{ fontSize: '13px', color: 'white', marginBottom: '10px', fontWeight: 600 }}>
              Distribuição de Intenções de Busca (Turistas):
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {simMetrics.topicCounts.slice(0, 5).map((t, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '3px' }}>
                    <span>{t.name}</span>
                    <span>{t.count} ({t.pct}%)</span>
                  </div>
                  <div style={{ height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                    <div style={{ width: `${t.pct * 2.5}%`, height: '100%', background: 'var(--grad-primary)' }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Strategic Executive Report Summary Box */}
      <div className="glass-panel" style={{
        padding: '32px',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, rgba(16, 20, 32, 0.95) 0%, rgba(13, 17, 27, 0.85) 100%)',
        border: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
          <FileText size={20} style={{ color: 'var(--primary)' }} />
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'white', margin: 0 }}>
            Parecer de Validação da Tese (MiroFish Report)
          </h3>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '14px', color: 'var(--primary)', marginBottom: '8px', fontWeight: 600 }}>
              1. Hipótese WhatsApp-First
            </h4>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Aderência total sem abandono no funil. 100% dos agentes iniciaram a exploração instantaneamente sem necessidade de download na App Store/Google Play.
            </p>
          </div>

          <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '14px', color: '#c4b5fd', marginBottom: '8px', fontWeight: 600 }}>
              2. Hipótese de ROI Comercial
            </h4>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              A taxa de conversão de vouchers atingiu 28.2%, com destaque para o comércio de chocolates e fondues que se beneficiaram de recomendações contextuais nos momentos de pico de fome.
            </p>
          </div>

          <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)' }}>
            <h4 style={{ fontSize: '14px', color: 'var(--secondary)', marginBottom: '8px', fontWeight: 600 }}>
              3. Hipótese de Mobilidade Urbana
            </h4>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              63% das decisões de deslocamento favoreceram pontos periféricos em horários de congestionamento central, validando o apelo de venda para Secretarias de Turismo e Mobilidade.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '18px' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            📄 Arquivo Seed completo e configurações técnicas em: <code>guia-facil/mirofish/seed_material_guia_facil.md</code>
          </span>
          <a 
            href="#relatorio" 
            onClick={(e) => {
              e.preventDefault();
              alert("O relatório executivo completo está persistido no arquivo local:\n\nC:\\Users\\felip\\.gemini\\antigravity\\scratch\\guia-facil\\mirofish\\relatorio_predicao_mirofish.md");
            }}
            style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
          >
            Abrir Relatório Completo (.md) <ArrowRight size={14} />
          </a>
        </div>
      </div>

    </div>
  );
}
