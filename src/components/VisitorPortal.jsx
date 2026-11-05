import React, { useState, useEffect, useRef } from 'react';
import { Search, MoreVertical, Paperclip, Send, Bot, BadgeCheck, Percent, Gift, Award, CheckCircle2, MapPin } from 'lucide-react';

export default function VisitorPortal({ 
  attractions, 
  merchants, 
  events, 
  visitorXp, 
  setVisitorXp, 
  onRedeemCoupon, 
  onPerformCheckIn 
}) {
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'assistant',
      text: `👋 Olá! Sou o *Guia Fácil Campos do Jordão*, seu assistente virtual de inteligência territorial.
      
Como posso ajudar você hoje? Você pode digitar perguntas em linguagem natural como:
🌲 _"O que fazer hoje?"_ (passeios e atrativos)
🍴 _"Onde comer?"_ (restaurantes e bares)
📅 _"O que acontece neste fim de semana?"_ (agenda de eventos)
🏡 _"Preciso de pousada para casal"_ (hospedagem)
🏥 _"Qual o telefone da prefeitura?"_ (utilidade pública)
🏷️ _"Quero cupons de desconto"_ (ofertas locais)

Digite sua dúvida e eu buscarei na base de dados oficial da cidade!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: true
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatTyping, setChatTyping] = useState(false);
  const [modalMessage, setModalMessage] = useState(null);
  
  const feedRef = useRef(null);

  useEffect(() => {
    if (feedRef.current) {
      feedRef.current.scrollTop = feedRef.current.scrollHeight;
    }
  }, [chatMessages, chatTyping]);

  const getLocalChatReply = (message) => {
    const prompt = message.toLowerCase().trim();
    const cityName = "Campos do Jordão";
    let reply = '';
    
    if (
      prompt.includes('o que fazer') ||
      prompt.includes('atrativo') ||
      prompt.includes('turismo') ||
      prompt.includes('visitar') ||
      prompt.includes('passeio') ||
      prompt.includes('passear') ||
      prompt.includes('pontos turísticos') ||
      prompt.includes('ponto turístico')
    ) {
      reply = `🌲 *O que fazer em ${cityName}:*\n\nAqui estão alguns dos principais atrativos:\n\n`;
      attractions.forEach(a => {
        reply += `📍 *${a.name}* (${a.category})\n`;
        reply += `📝 _${a.description}_\n`;
        reply += `📍 Endereço: ${a.location}\n`;
        if (a.hours) reply += `⏰ Horários: ${a.hours}\n`;
        if (a.rating) reply += `⭐ Avaliação: ${a.rating} (${a.reviewsCount} avaliações)\n`;
        reply += `🎁 Recompensa: +${a.check_in_reward_xp || 30} XP no check-in digital!\n\n`;
      });
      reply += `💡 *Dica:* Quando estiver em um desses locais, faça o check-in no aplicativo!`;
    }
    else if (
      prompt.includes('criança') ||
      prompt.includes('filho') ||
      prompt.includes('família') ||
      prompt.includes('familia') ||
      prompt.includes('infantil') ||
      prompt.includes('pequeno')
    ) {
      reply = `👶 *Passeios em Família em ${cityName}:*\n\nSelecionei locais ótimos para curtir com as crianças:\n\n`;
      const kids = attractions.filter(a => a.name.includes('Amantikir') || a.name.includes('Teleférico') || a.category.toLowerCase().includes('lazer'));
      kids.forEach(a => {
        reply += `📍 *${a.name}*\nRecompensa: +${a.check_in_reward_xp || 30} XP!\n🗺️ Local: ${a.location}\n\n`;
      });
    }
    else if (
      prompt.includes('comer') ||
      prompt.includes('almoçar') ||
      prompt.includes('almoço') ||
      prompt.includes('jantar') ||
      prompt.includes('restaurante') ||
      prompt.includes('gastronomia') ||
      prompt.includes('fondue') ||
      prompt.includes('fome')
    ) {
      reply = `🍴 *Onde comer em ${cityName}:*\n\nRestaurantes credenciados:\n\n`;
      merchants.filter(m => m.approved).forEach(m => {
        reply += `🍔 *${m.name}*\n📝 _${m.description}_\n📍 Endereço: ${m.location}\n💬 WhatsApp: https://wa.me/${m.whatsapp}\n\n`;
      });
      reply += `🏷️ *Cupons Disponíveis:* Digite *'cupons'* para ver ofertas especiais!`;
    }
    else if (
      prompt.includes('pousada') ||
      prompt.includes('hotel') ||
      prompt.includes('hotéis') ||
      prompt.includes('hospedar') ||
      prompt.includes('hospedagem') ||
      prompt.includes('onde ficar') ||
      prompt.includes('dormir')
    ) {
      reply = `🏨 *Hospedagens em ${cityName}:*\n\nRecomendações parceiras no Capivari:\n\n`;
      reply += `🏡 *Pousada Vila Capivari* (Excelente para casais, a 200m do centrinho)\n`;
      reply += `🏡 *Hotel Toriba* (Tradicional, com ampla área verde)\n`;
      reply += `🏡 *Pousada Recanto dos Sonhos* (Chalés românticos com lareira)\n\n`;
      reply += `💬 Faça contato por WhatsApp com os hotéis parceiros para conferir tarifas!`;
    }
    else if (
      prompt.includes('evento') ||
      prompt.includes('eventos') ||
      prompt.includes('festival') ||
      prompt.includes('fim de semana') ||
      prompt.includes('final de semana') ||
      prompt.includes('agenda')
    ) {
      reply = `📅 *Agenda de Eventos em ${cityName}:*\n\n`;
      if (events.length > 0) {
        events.forEach(e => {
          reply += `✨ *${e.name}* (${e.category})\n📝 _${e.description}_\n📅 Data: ${e.date}\n📍 Local: ${e.location}\n\n`;
        });
      } else {
        reply += `Não há eventos oficiais agendados para este final de semana em ${cityName}.`;
      }
    }
    else if (
      prompt.includes('prefeitura') ||
      prompt.includes('hospital') ||
      prompt.includes('posto de saúde') ||
      prompt.includes('posto') ||
      prompt.includes('saúde') ||
      prompt.includes('polícia') ||
      prompt.includes('policia') ||
      prompt.includes('telefone') ||
      prompt.includes('utilidade')
    ) {
      reply = `🏥 *Telefones Úteis em ${cityName}:*\n\n📞 *UPA Municipal:* (12) 3662-1100\n📞 *Prefeitura:* (12) 3668-5500\n📞 *Polícia:* 190\n📞 *SAMU:* 192\n\n📍 *Posto de Saúde Central:* Av. Dr. Januário Miraglia, 2400.`;
    }
    else if (
      prompt.includes('cupom') ||
      prompt.includes('cupons') ||
      prompt.includes('desconto') ||
      prompt.includes('promoção')
    ) {
      reply = `🏷️ *Cupons de Desconto do Comércio Local:*\n\n`;
      let count = 0;
      merchants.filter(m => m.approved).forEach(m => {
        (m.coupons || []).forEach(c => {
          reply += `🎁 *${m.name}*\n🔹 *${c.description}*\n🔑 Código: *${c.code}*\nRedirecionamento de cupom: [Resgatar Cupom ${c.code}]\n\n`;
          count++;
        });
      });
      if (count === 0) reply += "Nenhum cupom ativo no momento. Crie um no painel do lojista!";
    }
    else {
      reply = `👋 Olá! Sou o *Guia Fácil ${cityName}*, seu assistente virtual de inteligência territorial.\n\nComo posso ajudar você hoje? Você pode digitar perguntas em linguagem natural como:\n\n`;
      reply += `🌲 _"O que fazer hoje?"_ (passeios e atrativos)\n`;
      reply += `🍴 _"Onde comer?"_ (restaurantes)\n`;
      reply += `📅 _"O que acontece neste fim de semana?"_ (agenda de eventos)\n`;
      reply += `🏡 _"Preciso de pousada para casal"_ (hospedagem)\n`;
      reply += `🏥 _"Qual o telefone da prefeitura?"_ (utilidade pública)\n`;
      reply += `🏷️ _"Quero cupons de desconto"_ (ofertas locais)\n\n`;
      reply += `Digite sua dúvida e eu buscarei na base de dados oficial da cidade!`;
    }
    return reply;
  };

  const processUserChatMessage = async (text) => {
    const userMsg = {
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: true
    };
    setChatMessages(prev => [...prev, userMsg]);
    setChatTyping(true);

    try {
      let replyText = '';
      await new Promise(resolve => setTimeout(resolve, 800));

      let online = false;
      if (window.apiService && typeof window.apiService.checkBackendStatus === 'function') {
        online = await window.apiService.checkBackendStatus();
      }

      if (online && window.apiService && typeof window.apiService.sendWhatsAppMessage === 'function') {
        const result = await window.apiService.sendWhatsAppMessage(text);
        replyText = result.response;
      } else {
        replyText = getLocalChatReply(text);
      }

      const assistantMsg = {
        sender: 'assistant',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: true
      };
      setChatMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error("Erro ao obter resposta do chatbot:", err);
      const errorMsg = {
        sender: 'assistant',
        text: "⚠️ Desculpe, encontrei uma falha temporária ao consultar as informações da cidade. Por favor, tente novamente.",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: true
      };
      setChatMessages(prev => [...prev, errorMsg]);
    } finally {
      setChatTyping(false);
    }
  };

  const handleChatSend = (e) => {
    if (e) e.preventDefault();
    const val = chatInput.trim();
    if (!val) return;
    setChatInput('');
    processUserChatMessage(val);
  };

  const handleChatSuggestion = (val) => {
    processUserChatMessage(val);
  };

  const handleChatRedeem = (merchantId, coupon) => {
    onRedeemCoupon(merchantId, coupon.id);
    
    setModalMessage({
      title: "Cupom Resgatado!",
      text: `Código: ${coupon.code}. Apresente este código no estabelecimento ${merchants.find(m => m.id === merchantId)?.name} para receber o benefício.`,
      reward: "+15 XP de incentivo à economia local",
      medal: null
    });
  };

  const handleChatCheckIn = (item) => {
    const xp = item.check_in_reward_xp || (item.checkInReward ? parseInt(item.checkInReward.match(/\d+/)[0]) : 30);
    const medal = item.checkInReward ? item.checkInReward.replace(/\(\+\d+ XP\)/, '').trim() : "Explorador da Cidade";

    onPerformCheckIn(item.id, xp, medal);

    setModalMessage({
      title: "Check-in Realizado!",
      text: `Presença verificada no território municipal de ${cityName} em: ${item.name}. Obrigado por compartilhar sua visita!`,
      reward: `+${xp} XP obtidos`,
      medal: medal
    });
  };

  const formatMessageContent = (text) => {
    let html = text
      .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');

    const regex = /(\[Resgatar Cupom [A-Z0-9]+\]|\[Fazer Check-in \d+\])/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(html)) !== null) {
      const matchIndex = match.index;
      const marker = match[1];

      if (matchIndex > lastIndex) {
        parts.push(
          <span 
            key={`text-${lastIndex}`} 
            dangerouslySetInnerHTML={{ __html: html.substring(lastIndex, matchIndex) }} 
          />
        );
      }

      if (marker.startsWith('[Resgatar Cupom')) {
        const code = marker.match(/\[Resgatar Cupom ([A-Z0-9]+)\]/)[1];
        let foundCoupon = null;
        let foundMerchant = null;
        merchants.forEach(m => {
          const cp = (m.coupons || []).find(c => c.code === code);
          if (cp) {
            foundCoupon = cp;
            foundMerchant = m;
          }
        });

        if (foundCoupon && foundMerchant) {
          const mId = foundMerchant.id;
          const cp = foundCoupon;
          parts.push(
            <button
              key={`coupon-${code}-${matchIndex}`}
              onClick={() => handleChatRedeem(mId, cp)}
              className="btn btn-primary btn-sm"
              style={{
                marginTop: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 12px',
                fontSize: '12px',
                borderRadius: '8px',
                border: 'none',
                background: 'var(--grad-primary)',
                color: 'var(--bg-dark)',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              <Percent size={13} /> Resgatar Cupom {code}
            </button>
          );
        } else {
          parts.push(<strong key={`code-${code}-${matchIndex}`}>{code}</strong>);
        }
      } else if (marker.startsWith('[Fazer Check-in')) {
        const attractionId = parseInt(marker.match(/\[Fazer Check-in (\d+)\]/)[1]);
        const a = attractions.find(item => item.id === attractionId);
        if (a) {
          parts.push(
            <button
              key={`checkin-${attractionId}-${matchIndex}`}
              onClick={() => handleChatCheckIn(a)}
              className="btn btn-secondary btn-sm"
              style={{
                marginTop: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 12px',
                fontSize: '12px',
                borderRadius: '8px',
                border: 'none',
                background: 'rgba(0, 196, 140, 0.15)',
                border: '1px solid rgba(0, 196, 140, 0.3)',
                color: 'var(--primary)',
                cursor: 'pointer',
                fontWeight: '600'
              }}
            >
              <MapPin size={13} /> Confirmar Check-in no local
            </button>
          );
        }
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < html.length) {
      parts.push(
        <span 
          key={`text-${lastIndex}`} 
          dangerouslySetInnerHTML={{ __html: html.substring(lastIndex) }} 
        />
      );
    }

    return parts;
  };

  const cityName = "Campos do Jordão";

  const suggestions = [
    { text: "🌲 O que fazer hoje?", val: "O que fazer hoje?" },
    { text: "🍴 Onde comer?", val: "Onde comer?" },
    { text: "👶 Passeios com crianças", val: "Passeios com crianças" },
    { text: "📅 Eventos da semana", val: "Eventos da semana" },
    { text: "🏥 Telefones úteis", val: "Telefones úteis" },
    { text: "🏷️ Cupons de desconto", val: "Quero cupons de desconto" }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '24px', height: 'calc(100vh - 200px)', minHeight: '550px', marginTop: '20px' }} id="whatsapp-container-grid">
      
      {/* Left column: Info & Suggestions */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px', height: '100%', overflowY: 'auto' }} id="whatsapp-info-panel">
        <div>
          <span style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Interface Principal</span>
          <h3 style={{ fontSize: '18px', marginTop: '4px', color: 'white' }}>Turista conversa com a Cidade</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '8px', lineHeight: '1.6' }}>
            No Guia Fácil, o visitante interage diretamente através do WhatsApp alimentado por um Agente de IA Territorial que consulta o banco de dados oficial do município.
          </p>
        </div>

        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
          <h4 style={{ fontSize: '13px', color: 'white', marginBottom: '10px', fontWeight: 600 }}>Fluxos Rápidos:</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {suggestions.map((s, idx) => (
              <button 
                key={idx}
                onClick={() => handleChatSuggestion(s.val)}
                className="btn btn-sm" 
                style={{ justifyContent: 'flex-start', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', fontSize: '12px', padding: '10px 14px', textAlign: 'left', width: '100%', borderRadius: '8px', gap: '8px', color: 'var(--text-secondary)', cursor: 'pointer' }}
              >
                {s.text}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-color)', fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
          ℹ️ Os dados exibidos pela IA são atualizados em tempo real conforme as informações inseridas pela Prefeitura (Gestor) e Comércios (Lojistas) nos painéis correspondentes.
        </div>
      </div>

      {/* Right column: WhatsApp Web Client */}
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: 0, overflow: 'hidden', borderRadius: '16px', background: 'rgba(8, 10, 16, 0.65)' }} id="whatsapp-chat-panel">
        
        {/* Header */}
        <div style={{ background: 'rgba(16, 20, 32, 0.9)', borderBottom: '1px solid var(--border-color)', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyBetween: 'center', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(0, 196, 140, 0.1)', border: '1px solid rgba(0, 196, 140, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Bot size={24} style={{ alignSelf: 'center' }} />
              <span style={{ position: 'absolute', bottom: 0, right: 0, width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e', border: '2px solid #101420' }}></span>
            </div>
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'white', margin: 0, display: 'flex', alignItems: 'center', gap: '4px' }}>
                Guia Fácil - {cityName}
                <BadgeCheck size={14} style={{ color: 'var(--primary)', fill: 'var(--primary)', stroke: '#101420' }} />
              </h4>
              <span style={{ fontSize: '11px', color: '#22c55e' }}>online</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '14px', color: 'var(--text-muted)' }}>
            <Search size={18} style={{ cursor: 'pointer' }} />
            <MoreVertical size={18} style={{ cursor: 'pointer' }} />
          </div>
        </div>

        {/* Messages Feed */}
        <div 
          ref={feedRef}
          id="chat-message-feed"
          style={{ flexGrow: 1, overflowY: 'auto', padding: '24px', backgroundImage: 'radial-gradient(rgba(0, 196, 140, 0.04) 1px, transparent 0), radial-gradient(rgba(0, 196, 140, 0.04) 1px, transparent 0)', backgroundSize: '24px 24px', backgroundPosition: '0 0, 12px 12px', display: 'flex', flexDirection: 'column' }}
        >
          {chatMessages.map((msg, idx) => {
            const isUser = msg.sender === 'user';
            const align = isUser ? 'flex-end' : 'flex-start';
            const bg = isUser ? 'rgba(0, 196, 140, 0.25)' : 'rgba(255, 255, 255, 0.05)';
            const border = isUser ? '1px solid rgba(0, 196, 140, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)';

            return (
              <div key={idx} style={{ display: 'flex', justifyContent: align, marginBottom: '16px', width: '100%' }}>
                <div className="glass-panel" style={{ maxWidth: '85%', padding: '12px 16px', borderRadius: '16px', background: bg, border: border, boxShadow: '0 4px 15px rgba(0,0,0,0.1)', position: 'relative', wordBreak: 'break-word' }}>
                  <div style={{ fontSize: '14px', lineHeight: 1.5, color: 'white', margin: '0 0 4px 0' }}>
                    {formatMessageContent(msg.text)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px', fontSize: '10px', color: 'var(--text-muted)', textAlign: 'right' }}>
                    <span>{msg.time}</span>
                    {isUser && <span style={{ color: 'var(--primary)', fontSize: '10px', fontWeight: 'bold' }}>✓✓</span>}
                  </div>
                </div>
              </div>
            );
          })}
          
          {chatTyping && (
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px', width: '100%' }}>
              <div className="glass-panel" style={{ padding: '12px 20px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', color: 'var(--text-muted)', fontSize: '13px', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="typing-dot" style={{ animationDelay: '0s' }}></span>
                <span className="typing-dot" style={{ animationDelay: '0.2s' }}></span>
                <span className="typing-dot" style={{ animationDelay: '0.4s' }}></span>
                Digitando...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div style={{ background: 'rgba(16, 20, 32, 0.9)', borderTop: '1px solid var(--border-color)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }} aria-label="Anexar arquivo"><Paperclip size={20} /></button>
          
          <form onSubmit={handleChatSend} style={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: '12px', margin: 0 }}>
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="form-input" 
              placeholder="Pergunte ao guia..." 
              required
              aria-label="Pergunte ao guia"
              autoComplete="off"
              style={{ borderRadius: '24px', padding: '10px 20px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', color: 'white', width: '100%' }}
            />
            <button 
              type="submit" 
              className="btn" 
              aria-label="Enviar mensagem"
              style={{ borderRadius: '50%', width: '42px', height: '42px', minWidth: '42px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--grad-primary)', border: 'none', color: 'var(--bg-dark)', cursor: 'pointer' }}
            >
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>

      {/* Gamification Success Modal popup */}
      {modalMessage && (
        <div className="modal-overlay" onClick={() => setModalMessage(null)}>
          <div className="glass-panel modal-content" onClick={(e) => e.stopPropagation()} style={{ background: 'var(--bg-surface)', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0,196,140,0.12)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
              <CheckCircle2 size={32} />
            </div>

            <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>{modalMessage.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '24px', lineHeight: 1.6 }}>
              {modalMessage.text}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px' }}>
              <div className="badge badge-primary" style={{ padding: '8px 16px', justifyContent: 'center', fontSize: '13px', alignSelf: 'center' }}>
                {modalMessage.reward}
              </div>
              
              {modalMessage.medal && (
                <div className="badge badge-purple" style={{ padding: '8px 16px', justifyContent: 'center', fontSize: '13px', alignSelf: 'center', gap: '6px' }}>
                  <Award size={14} /> Medalha Desbloqueada: {modalMessage.medal}
                </div>
              )}
            </div>

            <button onClick={() => setModalMessage(null)} className="btn btn-primary" style={{ width: '100%' }}>
              Continuar Explorando
            </button>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--text-muted);
          display: inline-block;
          animation: typingBlink 1.4s infinite both;
        }
        @keyframes typingBlink {
          0% { opacity: .2; }
          20% { opacity: 1; }
          100% { opacity: .2; }
        }
        #chat-message-feed::-webkit-scrollbar {
          width: 6px;
        }
        #chat-message-feed::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 3px;
        }
        @media (max-width: 768px) {
          #whatsapp-container-grid {
            grid-template-columns: 1fr !important;
            height: calc(100vh - 180px) !important;
          }
          #whatsapp-info-panel {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
}
