import React, { useState } from 'react';
import { MapPin, User, Building, Landmark, Award, ShieldAlert, Menu, X, Sparkles, ChevronDown } from 'lucide-react';
import logoImg from '../assets/logo_guia_facil.png';

export default function Navbar({ activePortal, setActivePortal, visitorXp, pendingMerchantsCount, activeCity, onOpenCityModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const city = activeCity || { name: 'Campos do Jordão', uf: 'SP' };

  const portals = [
    { id: 'visitor', label: 'Turista', icon: MapPin },
    { id: 'merchant', label: 'Comerciante', icon: Building },
    { id: 'manager', label: 'Gestor Público', icon: Landmark },
    { id: 'simulation', label: 'Simulação MiroFish', icon: Sparkles }
  ];

  return (
    <nav className="glass-panel" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      borderRadius: '0 0 16px 16px',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      background: 'rgba(8, 10, 16, 0.85)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        {/* Logo, Brand & City Tenant Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div 
            onClick={() => setActivePortal('landing')} 
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            title="Página Inicial Guia Fácil"
          >
            <img 
              src={logoImg} 
              alt="Guia Fácil" 
              className="brand-logo-img"
            />
          </div>

          <div style={{ width: '1px', height: '26px', background: 'rgba(255, 255, 255, 0.15)', margin: '0 4px' }}></div>

          {/* City Selector Badge */}
          <div 
            onClick={onOpenCityModal} 
            className="city-selector-badge" 
            title="Clique para trocar o município ativo ou gerar link de teste"
          >
            <span className="city-pulsing-dot"></span>
            <MapPin size={14} color="var(--primary)" />
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', lineHeight: 1.1 }}>
              <span style={{ fontWeight: 700, fontSize: '13px', color: 'white', display: 'flex', alignItems: 'center', gap: '4px' }}>
                {city.name} <span style={{ color: '#94a3b8', fontSize: '11px', fontWeight: 500 }}>({city.uf})</span>
              </span>
              <span style={{ fontSize: '10px', color: '#00c48c', fontWeight: 600, letterSpacing: '0.04em' }}>SaaS Ativo</span>
            </div>
            <ChevronDown size={13} color="#94a3b8" style={{ marginLeft: '2px' }} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="desktop-only-flex">
          {/* Gamification Indicator for Tourist */}
          {activePortal === 'visitor' && (
            <div className="badge badge-primary" style={{ gap: '6px', padding: '6px 12px' }}>
              <Award size={14} />
              <span>Nível {Math.floor(visitorXp / 100) + 1} ({visitorXp % 100}/100 XP)</span>
            </div>
          )}

          {/* Persona / Portal Switcher */}
          <div className="persona-switcher">
            {portals.map((p) => {
              const Icon = p.icon;
              const isActive = activePortal === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePortal(p.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`persona-btn ${isActive ? 'active' : ''}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Icon size={14} />
                  {p.label}
                  {p.id === 'manager' && pendingMerchantsCount > 0 && (
                    <span style={{
                      background: '#ef4444',
                      color: 'white',
                      borderRadius: '50%',
                      width: '16px',
                      height: '16px',
                      fontSize: '9px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700
                    }}>
                      {pendingMerchantsCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            padding: '8px'
          }}
          className="mobile-only-block"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="glass-panel" style={{
          position: 'absolute',
          top: '80px',
          left: 0,
          right: 0,
          background: '#101420',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          borderLeft: 'none',
          borderRight: 'none',
          borderRadius: 0,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          zIndex: 99
        }}>
          {activePortal === 'visitor' && (
            <div className="badge badge-primary" style={{ alignSelf: 'flex-start', gap: '6px', padding: '6px 12px' }}>
              <Award size={14} />
              <span>Nível {Math.floor(visitorXp / 100) + 1} ({visitorXp % 100}/100 XP)</span>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mudar Perfil de Acesso:</span>
            {portals.map((p) => {
              const Icon = p.icon;
              const isActive = activePortal === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    setActivePortal(p.id);
                    setMobileMenuOpen(false);
                  }}
                  className="btn"
                  style={{
                    justifyContent: 'flex-start',
                    background: isActive ? 'var(--grad-primary)' : 'rgba(255,255,255,0.03)',
                    color: isActive ? 'var(--bg-dark)' : 'white',
                    border: '1px solid ' + (isActive ? 'transparent' : 'rgba(255,255,255,0.06)')
                  }}
                >
                  <Icon size={16} />
                  {p.label}
                  {p.id === 'manager' && pendingMerchantsCount > 0 && (
                    <span style={{
                      background: '#ef4444',
                      color: 'white',
                      borderRadius: '50%',
                      padding: '2px 6px',
                      fontSize: '10px',
                      marginLeft: 'auto',
                      fontWeight: 700
                    }}>
                      {pendingMerchantsCount} pendentes
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Embedded CSS trick to handle responsive displays without class pollution */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 769px) {
          .mobile-only-block { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-only-flex { display: none !important; }
        }
      `}} />
    </nav>
  );
}
