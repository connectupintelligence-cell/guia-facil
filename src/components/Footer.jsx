import React from 'react';
import { Landmark, ShieldCheck, Heart } from 'lucide-react';
import logoImg from '../assets/logo_guia_facil.png';

export default function Footer({ setActivePortal }) {
  return (
    <footer className="glass-panel" style={{
      borderBottom: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      borderRadius: '16px 16px 0 0',
      background: 'rgba(16, 20, 32, 0.9)',
      padding: '60px 0 30px 0',
      marginTop: '80px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '40px'
        }}>
          {/* Brand Info */}
          <div>
            <img 
              src={logoImg} 
              alt="Guia Fácil" 
              style={{ height: '36px', width: 'auto', marginBottom: '20px' }} 
            />
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px', lineHeight: 1.6 }}>
              O Guia Fácil conecta a gestão municipal, os visitantes e o comércio de Campos do Jordão, criando um ecossistema inteligente baseado em dados e incentivos reais.
            </p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: 'var(--primary)' }}>
              <ShieldCheck size={16} />
              <span>Plataforma Oficial de Inteligência Territorial</span>
            </div>
          </div>

          {/* Tourism Services */}
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore Campos</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li>
                <a href="#attractions" onClick={(e) => { e.preventDefault(); setActivePortal('visitor'); }}>
                  Atrativos Turísticos
                </a>
              </li>
              <li>
                <a href="#gastronomy" onClick={(e) => { e.preventDefault(); setActivePortal('visitor'); }}>
                  Gastronomia Alpina
                </a>
              </li>
              <li>
                <a href="#hospedagem" onClick={(e) => { e.preventDefault(); setActivePortal('visitor'); }}>
                  Hotéis e Pousadas
                </a>
              </li>
              <li>
                <a href="#events" onClick={(e) => { e.preventDefault(); setActivePortal('visitor'); }}>
                  Calendário de Eventos
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Gov */}
          <div>
            <h4 style={{ fontSize: '16px', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portais Locais</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li>
                <a href="#merchant" onClick={(e) => { e.preventDefault(); setActivePortal('merchant'); }}>
                  Área do Comerciante
                </a>
              </li>
              <li>
                <a href="#manager" onClick={(e) => { e.preventDefault(); setActivePortal('manager'); }}>
                  Painel de Gestão Pública
                </a>
              </li>
              <li>
                <a href="#adicionar" onClick={(e) => { e.preventDefault(); setActivePortal('merchant'); }}>
                  Cadastrar Estabelecimento
                </a>
              </li>
              <li>
                <a href="#indicadores" onClick={(e) => { e.preventDefault(); setActivePortal('manager'); }}>
                  Indicadores de Demanda
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copy and credits */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '13px',
          color: 'var(--text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} Guia Fácil Campos do Jordão. Todos os direitos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <span>Desenvolvido com</span>
            <Heart size={12} style={{ color: 'var(--danger)', fill: 'var(--danger)' }} />
            <span>para o Turismo Municipal Sustentável</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
