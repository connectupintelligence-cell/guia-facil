import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VisitorPortal from './components/VisitorPortal';
import MerchantPortal from './components/MerchantPortal';
import ManagerPortal from './components/ManagerPortal';
import SimulationPortal from './components/SimulationPortal';

import { 
  initialAttractions, 
  initialMerchants, 
  initialEvents, 
  initialManagerStats 
} from './data/mockData';

import { Shield, Smartphone, Landmark, Building2, ChevronRight, Award, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [activePortal, setActivePortal] = useState('landing'); // landing, visitor, merchant, manager
  
  // Database States
  const [attractions, setAttractions] = useState(initialAttractions);
  const [merchants, setMerchants] = useState(initialMerchants);
  const [events, setEvents] = useState(initialEvents);
  const [managerStats, setManagerStats] = useState(initialManagerStats);
  const [visitorXp, setVisitorXp] = useState(120); // Initial simulated XP

  // Action: Redeem Coupon (Visitor -> Merchant)
  const handleRedeemCoupon = (merchantId, couponId) => {
    // 1. Update Merchant Coupon Redeem Count
    setMerchants(prevMerchants => 
      prevMerchants.map(m => {
        if (m.id === merchantId) {
          const updatedCoupons = m.coupons.map(c => 
            c.id === couponId ? { ...c, redeemed: c.redeemed + 1 } : c
          );
          return { 
            ...m, 
            coupons: updatedCoupons,
            couponsRedeemed: m.couponsRedeemed + 1
          };
        }
        return m;
      })
    );
    
    // 2. Increment visitor XP
    setVisitorXp(prev => prev + 15);
  };

  // Action: Check In at Attraction (Visitor)
  const handlePerformCheckIn = (attractionId, xpReward, medalName) => {
    // Increment visitor XP
    setVisitorXp(prev => prev + xpReward);
    
    // Increment active visitors statistic
    setManagerStats(prevStats => ({
      ...prevStats,
      activeVisitorsToday: prevStats.activeVisitorsToday + 1
    }));
  };

  // Action: Update Merchant Profile Details (Merchant)
  const handleUpdateMerchant = (merchantId, updatedFields) => {
    setMerchants(prevMerchants => 
      prevMerchants.map(m => 
        m.id === merchantId ? { ...m, ...updatedFields } : m
      )
    );
  };

  // Action: Create Coupon (Merchant -> Visitor)
  const handleCreateCoupon = (merchantId, newCoupon) => {
    setMerchants(prevMerchants => 
      prevMerchants.map(m => {
        if (m.id === merchantId) {
          const couponsArray = m.coupons || [];
          const generatedCoupon = {
            id: `COUPON_${Date.now()}`,
            redeemed: 0,
            active: true,
            ...newCoupon
          };
          return {
            ...m,
            coupons: [...couponsArray, generatedCoupon]
          };
        }
        return m;
      })
    );
  };

  // Action: Approve Merchant (Manager -> Visitor)
  const handleApproveMerchant = (merchantId) => {
    setMerchants(prevMerchants => 
      prevMerchants.map(m => 
        m.id === merchantId ? { ...m, approved: true } : m
      )
    );

    // Update Manager Stats
    setManagerStats(prevStats => ({
      ...prevStats,
      activeMerchants: prevStats.activeMerchants + 1
    }));
  };

  // Action: Add Event (Manager -> Visitor)
  const handleAddEvent = (newEvent) => {
    const formattedEvent = {
      id: Date.now(),
      ...newEvent
    };
    setEvents(prevEvents => [formattedEvent, ...prevEvents]);
  };

  // Count pending commercial registrations
  const pendingMerchantsCount = merchants.filter(m => !m.approved).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Navigation bar with XP and Pending notification indicators */}
      <Navbar 
        activePortal={activePortal} 
        setActivePortal={setActivePortal} 
        visitorXp={visitorXp}
        pendingMerchantsCount={pendingMerchantsCount}
      />

      {/* Main Container */}
      <main style={{ flexGrow: 1 }} className="container">
        
        {/* LANDING PAGE VIEW */}
        {activePortal === 'landing' && (
          <div className="animate-fade-in" style={{ padding: '40px 0' }}>
            
            {/* Hero Presentation */}
            <div className="glass-panel" style={{
              padding: '80px 40px',
              textAlign: 'center',
              borderRadius: '24px',
              marginBottom: '60px',
              position: 'relative',
              overflow: 'hidden',
              backgroundImage: 'radial-gradient(circle at bottom center, rgba(0, 196, 140, 0.15), transparent 70%)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div className="badge badge-primary" style={{ marginBottom: '24px', gap: '8px', padding: '6px 14px' }}>
                <Sparkles size={14} />
                <span>O Futuro da Inteligência Urbana e Turística</span>
              </div>
              
              <h1 style={{
                fontSize: '52px',
                fontWeight: 800,
                lineHeight: 1.15,
                marginBottom: '24px',
                letterSpacing: '-0.02em'
              }}>
                Infraestrutura Inteligente de <span className="brand-gradient">Integração Territorial</span>
              </h1>
              
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '18px',
                maxWidth: '750px',
                margin: '0 auto 40px auto',
                lineHeight: 1.6
              }}>
                O <strong>Guia Fácil</strong> transforma dados turísticos dispersos em valor econômico. Conectamos gestores públicos, visitantes e comerciantes de Campos do Jordão em um único ecossistema digital vivo e inteligente.
              </p>

              {/* Persona Entrance Cards CTA */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '24px',
                maxWidth: '960px',
                margin: '0 auto'
              }}>
                {/* 1. Tourist portal CTA */}
                <div 
                  className="glass-panel hover-glow" 
                  onClick={() => setActivePortal('visitor')}
                  style={{
                    padding: '30px 24px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    background: 'rgba(255, 255, 255, 0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <div className="stat-icon-wrapper primary" style={{ marginBottom: '20px' }}>
                    <Smartphone size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Portal do Turista</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px', flexGrow: 1 }}>
                    Guia de viagem instantâneo, roteiros inteligentes por GPS, cupons de desconto locais e gamificação.
                  </p>
                  <span style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                    Acessar Guia <ArrowRight size={14} />
                  </span>
                </div>

                {/* 2. Merchant portal CTA */}
                <div 
                  className="glass-panel hover-glow" 
                  onClick={() => setActivePortal('merchant')}
                  style={{
                    padding: '30px 24px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    background: 'rgba(255, 255, 255, 0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <div className="stat-icon-wrapper secondary" style={{ marginBottom: '20px' }}>
                    <Building2 size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Área do Lojista</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px', flexGrow: 1 }}>
                    Vitrine digital gratuita, estatísticas de acesso no WhatsApp e gerador de cupons de atração de demanda.
                  </p>
                  <span style={{ fontSize: '13px', color: 'var(--secondary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                    Acessar Painel <ArrowRight size={14} />
                  </span>
                </div>

                {/* 3. Gov Portal CTA */}
                <div 
                  className="glass-panel hover-glow" 
                  onClick={() => setActivePortal('manager')}
                  style={{
                    padding: '30px 24px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    background: 'rgba(255, 255, 255, 0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <div className="stat-icon-wrapper accent" style={{ marginBottom: '20px', background: 'rgba(139, 92, 246, 0.12)', color: '#a78bfa' }}>
                    <Landmark size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Gestão Municipal</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px', flexGrow: 1 }}>
                    Painel estratégico de turismo, monitoramento de gastos, gráficos de fluxo territorial e homologações comerciais.
                  </p>
                  <span style={{ fontSize: '13px', color: '#a78bfa', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                    Ver Indicadores <ArrowRight size={14} />
                  </span>
                </div>

                {/* 4. MiroFish Swarm Simulation CTA */}
                <div 
                  className="glass-panel hover-glow" 
                  onClick={() => setActivePortal('simulation')}
                  style={{
                    padding: '30px 24px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    background: 'rgba(139, 92, 246, 0.05)',
                    border: '1px solid rgba(139, 92, 246, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                  }}
                >
                  <div className="stat-icon-wrapper accent" style={{ marginBottom: '20px', background: 'rgba(139, 92, 246, 0.15)', color: '#c4b5fd' }}>
                    <Sparkles size={24} />
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#ede9fe' }}>Simulação MiroFish</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px', flexGrow: 1 }}>
                    Gêmeo digital e enxame de agentes com IA simulando o fluxo de turistas, resgate de cupons e faturamento do comércio.
                  </p>
                  <span style={{ fontSize: '13px', color: '#a78bfa', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginTop: 'auto' }}>
                    Explorar Enxame <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>

            {/* Platform Value Pillars Section */}
            <div style={{
              textAlign: 'center',
              marginBottom: '60px'
            }}>
              <h2 style={{ fontSize: '32px', marginBottom: '16px', fontWeight: 800 }}>Como a Plataforma Funciona</h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 48px auto', fontSize: '15px' }}>
                Unimos dados estruturados, gamificação territorial e incentivos fiscais/promocionais para criar impacto direto no PIB do município.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px'
              }}>
                <div className="glass-panel" style={{ padding: '32px', textAlign: 'left' }}>
                  <div className="badge badge-primary" style={{ marginBottom: '16px' }}>Gestão Baseada em Evidências</div>
                  <h4 style={{ fontSize: '18px', marginBottom: '12px' }}>Inteligência Territorial</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Gestores têm acesso a dashboards consolidados com o comportamento real de gastos, taxa de ocupação dos hotéis e fluxo mensal de visitantes no território, substituindo estimativas vagas por decisões orientadas a dados.
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '32px', textAlign: 'left' }}>
                  <div className="badge badge-secondary" style={{ marginBottom: '16px' }}>Ativação de Fluxo Econômico</div>
                  <h4 style={{ fontSize: '18px', marginBottom: '12px' }}>Fomento do Comércio Local</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Lojistas, chocolaterias e pousadas credenciadas ganham visibilidade gratuita no mapa turístico. A criação de cupons digitais atrai turistas para pontos de menor movimento comercial, equalizando a circulação de receita.
                  </p>
                </div>

                <div className="glass-panel" style={{ padding: '32px', textAlign: 'left' }}>
                  <div className="badge badge-purple" style={{ marginBottom: '16px' }}>Experiência do Turista</div>
                  <h4 style={{ fontSize: '18px', marginBottom: '12px' }}>Gamificação e Recompensas</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    O visitante utiliza rotas integradas de GPS, localiza pontos turísticos e faz check-ins para subir de nível e adquirir medalhas comemorativas da cultura alpina. A experiência torna-se dinâmica, interativa e altamente engajadora.
                  </p>
                </div>
              </div>
            </div>

            {/* Simulated Live Municipal Feed */}
            <div className="glass-panel" style={{
              padding: '32px',
              borderRadius: '16px',
              background: 'rgba(8, 10, 16, 0.4)',
              borderStyle: 'dashed',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'white' }}>Status da Infraestrutura Digital (Campos do Jordão)</h3>
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                gap: '24px'
              }}>
                <div>
                  <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--primary)' }}>
                    {merchants.filter(m => m.approved).length}
                  </span>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Estabelecimentos Ativos</p>
                </div>
                <div>
                  <span style={{ fontSize: '28px', fontWeight: 800, color: 'var(--secondary)' }}>
                    {pendingMerchantsCount}
                  </span>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Aguardando Homologação</p>
                </div>
                <div>
                  <span style={{ fontSize: '28px', fontWeight: 800, color: '#a78bfa' }}>
                    {events.length}
                  </span>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Eventos Oficiais Cadastrados</p>
                </div>
                <div>
                  <span style={{ fontSize: '28px', fontWeight: 800, color: 'white' }}>
                    {managerStats.activeVisitorsToday.toLocaleString()}
                  </span>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Turistas Monitorados Hoje</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* VISITOR PORTAL VIEW */}
        {activePortal === 'visitor' && (
          <VisitorPortal 
            attractions={attractions}
            merchants={merchants}
            events={events}
            visitorXp={visitorXp}
            setVisitorXp={setVisitorXp}
            onRedeemCoupon={handleRedeemCoupon}
            onPerformCheckIn={handlePerformCheckIn}
          />
        )}

        {/* MERCHANT PORTAL VIEW */}
        {activePortal === 'merchant' && (
          <MerchantPortal 
            merchants={merchants}
            onUpdateMerchant={handleUpdateMerchant}
            onCreateCoupon={handleCreateCoupon}
          />
        )}

        {/* PUBLIC MANAGER PORTAL VIEW */}
        {activePortal === 'manager' && (
          <ManagerPortal 
            stats={managerStats}
            merchants={merchants}
            events={events}
            onApproveMerchant={handleApproveMerchant}
            onAddEvent={handleAddEvent}
          />
        )}

        {/* MIROFISH SWARM SIMULATION PORTAL VIEW */}
        {activePortal === 'simulation' && (
          <SimulationPortal 
            onPerformCheckIn={handlePerformCheckIn}
            onRedeemCoupon={handleRedeemCoupon}
          />
        )}

      </main>

      {/* Shared municipal footer */}
      <Footer setActivePortal={setActivePortal} />
      
      {/* Small inline responsive fixes helper */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          h1 {
            font-size: 34px !important;
          }
          .glass-panel {
            padding: 24px 16px !important;
          }
        }
      `}} />
    </div>
  );
}
