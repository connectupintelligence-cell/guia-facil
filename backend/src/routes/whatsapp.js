import { Router } from 'express';
import * as db from '../config/db.js';

const router = Router();

// POST /api/whatsapp/message - Receive a chat message and reply as a local AI Agent
router.post('/message', async (req, res) => {
  const { message, phone } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem vazia." });
  }

  const prompt = message.toLowerCase().trim();

  try {
    // 1. Fetch current tenant (city) details
    const tenantResult = await db.query(
      'SELECT name FROM tenants WHERE id = $1',
      [req.tenantId]
    );
    const cityName = tenantResult.rows[0]?.name || 'Campos do Jordão';

    // 2. Load all entities for the tenant to run local search matching
    const attractionsResult = await db.query(
      'SELECT * FROM attractions WHERE tenant_id = $1',
      [req.tenantId]
    );
    const merchantsResult = await db.query(
      'SELECT * FROM merchants WHERE tenant_id = $1 AND approved = true',
      [req.tenantId]
    );
    const eventsResult = await db.query(
      'SELECT * FROM events WHERE tenant_id = $1 AND active = true',
      [req.tenantId]
    );

    const attractions = attractionsResult.rows;
    const merchants = merchantsResult.rows;
    const events = eventsResult.rows;

    let responseText = '';

    // Flow 1: Turismo / Atrativos
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
      responseText = `🌲 *O que fazer em ${cityName}:*\n\nAqui estão alguns dos principais atrativos cadastrados na nossa base municipal:\n\n`;
      
      if (attractions.length > 0) {
        attractions.forEach(a => {
          responseText += `📍 *${a.name}* (${a.category})\n`;
          responseText += `📝 _${a.description}_\n`;
          responseText += `📍 Endereço: ${a.location}\n`;
          if (a.hours) responseText += `⏰ Horários: ${a.hours}\n`;
          if (a.rating) responseText += `⭐ Avaliação: ${a.rating} (${a.reviewsCount} avaliações)\n`;
          responseText += `🎁 Recompensa: +${a.check_in_reward_xp || 30} XP no check-in digital!\n\n`;
        });
        responseText += `💡 *Dica:* Quando estiver em um desses locais, peça para fazer o check-in por aqui para subir de nível e desbloquear medalhas!`;
      } else {
        responseText += `Desculpe, não encontrei nenhum atrativo registrado para ${cityName} no momento.`;
      }
    }

    // Flow 2: Crianças / Família
    else if (
      prompt.includes('criança') ||
      prompt.includes('filho') ||
      prompt.includes('família') ||
      prompt.includes('familia') ||
      prompt.includes('infantil') ||
      prompt.includes('pequeno')
    ) {
      responseText = `👶 *Passeios em Família em ${cityName}:*\n\nSelecionei locais ótimos para curtir com as crianças:\n\n`;
      
      const familyPlaces = attractions.filter(a => 
        a.category.toLowerCase().includes('natureza') || 
        a.category.toLowerCase().includes('lazer') ||
        a.name.toLowerCase().includes('amantikir') ||
        a.name.toLowerCase().includes('teleférico')
      );

      if (familyPlaces.length > 0) {
        familyPlaces.forEach(a => {
          responseText += `📍 *${a.name}*\n`;
          responseText += `👪 Recomendado para famílias. Recompensa: +${a.check_in_reward_xp} XP!\n`;
          responseText += `🗺️ Local: ${a.location}\n\n`;
        });
        responseText += `🍨 *Dica de Lanche:* Visite a chocolateria ou sorveteria local no centrinho para adoçar a tarde!`;
      } else {
        responseText += `Não encontrei atrativos específicos para crianças cadastrados, mas caminhar pelo centrinho e parques é sempre uma ótima opção!`;
      }
    }

    // Flow 3: Gastronomia / Onde comer
    else if (
      prompt.includes('comer') ||
      prompt.includes('almoçar') ||
      prompt.includes('almoço') ||
      prompt.includes('jantar') ||
      prompt.includes('restaurante') ||
      prompt.includes('gastronomia') ||
      prompt.includes('fondue') ||
      prompt.includes('fome') ||
      prompt.includes('chocolateria') ||
      prompt.includes('cerveja')
    ) {
      responseText = `🍴 *Onde comer em ${cityName}:*\n\nAqui estão opções incríveis do comércio credenciado no guia oficial:\n\n`;
      
      const foodMerchants = merchants.filter(m => 
        m.category.toLowerCase().includes('gastronomia') || 
        m.category.toLowerCase().includes('comércio') ||
        m.category.toLowerCase().includes('comercio')
      );

      if (foodMerchants.length > 0) {
        foodMerchants.forEach(m => {
          responseText += `🍔 *${m.name}*\n`;
          responseText += `📜 _${m.description}_\n`;
          responseText += `📍 Endereço: ${m.location}\n`;
          responseText += `📞 Telefone: ${m.phone || 'Não informado'}\n`;
          responseText += `💬 WhatsApp: https://wa.me/${m.whatsapp}\n\n`;
        });
        responseText += `🏷️ *Cupons Disponíveis:* Digite *'cupons'* para ver ofertas especiais desses estabelecimentos!`;
      } else {
        responseText += `Não encontrei restaurantes parceiros cadastrados em ${cityName} no momento.`;
      }
    }

    // Flow 4: Hospedagem
    else if (
      prompt.includes('pousada') ||
      prompt.includes('hotel') ||
      prompt.includes('hotéis') ||
      prompt.includes('hospedar') ||
      prompt.includes('hospedagem') ||
      prompt.includes('onde ficar') ||
      prompt.includes('dormir') ||
      prompt.includes('quarto') ||
      prompt.includes('casal')
    ) {
      responseText = `🏨 *Hospedagens em ${cityName}:*\n\nConfira os hotéis e pousadas cadastrados para relaxar no clima alpino:\n\n`;
      
      const hotels = merchants.filter(m => m.category.toLowerCase().includes('hotel') || m.category.toLowerCase().includes('pousada'));
      
      if (hotels.length > 0) {
        hotels.forEach(h => {
          responseText += `🏡 *${h.name}*\n`;
          responseText += `📝 _${h.description}_\n`;
          responseText += `📍 Endereço: ${h.location}\n`;
          responseText += `💬 Contato WhatsApp: https://wa.me/${h.whatsapp}\n\n`;
        });
      } else {
        // Fallback friendly recommendations for demonstration
        responseText += `💡 *Recomendações parceiras no Capivari:*\n\n`;
        responseText += `🏡 *Pousada Vila Capivari* (Excelente para casais, a 200m do centrinho)\n`;
        responseText += `🏡 *Hotel Toriba* (Tradicional, com ampla área verde e fazendinha)\n`;
        responseText += `🏡 *Pousada Recanto dos Sonhos* (Chalés românticos com lareira)\n\n`;
        responseText += `💬 Peça recomendações de reservas enviando mensagens diretas.`;
      }
    }

    // Flow 5: Eventos
    else if (
      prompt.includes('evento') ||
      prompt.includes('eventos') ||
      prompt.includes('festival') ||
      prompt.includes('fim de semana') ||
      prompt.includes('final de semana') ||
      prompt.includes('agenda') ||
      prompt.includes('calendário') ||
      prompt.includes('acontece')
    ) {
      responseText = `📅 *Agenda de Eventos Oficiais em ${cityName}:*\n\nFique por dentro das atividades culturais e festivas do município:\n\n`;
      
      if (events.length > 0) {
        events.forEach(e => {
          responseText += `✨ *${e.name}* (${e.category})\n`;
          responseText += `📝 _${e.description}_\n`;
          responseText += `📅 Data: ${e.date}\n`;
          responseText += `📍 Local: ${e.location}\n\n`;
        });
      } else {
        responseText += `Não há eventos oficiais agendados para este final de semana em ${cityName}. Fique de olho nos canais da prefeitura!`;
      }
    }

    // Flow 6: Serviços Públicos e Telefones Úteis
    else if (
      prompt.includes('prefeitura') ||
      prompt.includes('hospital') ||
      prompt.includes('posto de saúde') ||
      prompt.includes('posto') ||
      prompt.includes('saúde') ||
      prompt.includes('polícia') ||
      prompt.includes('policia') ||
      prompt.includes('serviço') ||
      prompt.includes('telefone') ||
      prompt.includes('ajuda') ||
      prompt.includes('utilidade')
    ) {
      responseText = `🏥 *Telefones Úteis e Serviços Públicos em ${cityName}:*\n\nAqui estão os contatos essenciais para emergências e informações locais:\n\n`;
      responseText += `📞 *Hospital/UPA Municipal:* (12) 3662-1100\n`;
      responseText += `📞 *Prefeitura Municipal:* (12) 3668-5500\n`;
      responseText += `📞 *Secretaria de Turismo:* (12) 3663-1098\n`;
      responseText += `📞 *Polícia Militar:* 190\n`;
      responseText += `📞 *SAMU:* 192\n`;
      responseText += `📞 *Bombeiros:* 193\n\n`;
      responseText += `📍 *Posto de Saúde Central:* Av. Dr. Januário Miraglia, 2400 (Aberto das 7h às 17h).`;
    }

    // Flow 7: Cupons de Desconto
    else if (
      prompt.includes('cupom') ||
      prompt.includes('cupons') ||
      prompt.includes('desconto') ||
      prompt.includes('promoção') ||
      prompt.includes('promoções')
    ) {
      responseText = `🏷️ *Cupons de Desconto do Comércio Local:*\n\nResgate cupons ativos para economizar na sua estadia:\n\n`;
      
      // Fetch all coupons dynamically
      const couponsList = [];
      for (const m of merchants) {
        const couponsResult = await db.query(
          'SELECT * FROM coupons WHERE merchant_id = $1 AND active = true',
          [m.id]
        );
        couponsResult.rows.forEach(c => {
          couponsList.push({ merchantName: m.name, merchantId: m.id, ...c });
        });
      }

      if (couponsList.length > 0) {
        couponsList.forEach(c => {
          responseText += `🎁 *${c.merchantName}*\n🔹 *${c.description}*\n🔑 Código de Resgate: *${c.code}*\nRedirecionamento de cupom: [Resgatar Cupom ${c.code}] (Clique para +15 XP)\n\n`;
        });
      } else {
        responseText += `Não há cupons de desconto ativos no momento. Volte mais tarde!`;
      }
    }

    // Flow 8: Check-in / Presença
    else if (
      prompt.includes('check-in') ||
      prompt.includes('checkin') ||
      prompt.includes('marcar presença') ||
      prompt.includes('marcar presenca') ||
      prompt.includes('presença') ||
      prompt.includes('presenca') ||
      prompt.includes('visitei') ||
      prompt.includes('estou em')
    ) {
      // Check if they named a specific attraction
      let matchedAttraction = null;
      for (const a of attractions) {
        if (prompt.includes(a.name.toLowerCase()) || prompt.includes(a.name.toLowerCase().replace('parque ', '').replace('vila ', ''))) {
          matchedAttraction = a;
          break;
        }
      }

      if (matchedAttraction) {
        responseText = `📍 *Check-in disponível para ${matchedAttraction.name}:*\n\nClique no botão abaixo para verificar sua geolocalização no local e receber os seus pontos de experiência:\n\n[Fazer Check-in ${matchedAttraction.id}]`;
      } else {
        responseText = `🗺️ *Check-in digital do Guia Fácil:*\n\nEscolha qual atrativo você deseja registrar presença para ganhar XP e medalhas de viagem:\n\n`;
        attractions.forEach(a => {
          responseText += `📍 *${a.name}* (Ganhe +${a.check_in_reward_xp || 30} XP)\n`;
          responseText += `👉 Clique para registrar: [Fazer Check-in ${a.id}]\n\n`;
        });
        responseText += `💡 *Nota:* Para o check-in ser validado, você deve estar no local físico.`;
      }
    }

    // Default Fallback
    else {
      responseText = `👋 Olá! Sou o *Guia Fácil ${cityName}*, seu assistente virtual de inteligência territorial.\n\nComo posso ajudar você hoje? Você pode digitar perguntas em linguagem natural como:\n\n`;
      responseText += `🌲 _"O que fazer hoje?"_ (passeios e atrativos)\n`;
      responseText += `🍴 _"Onde comer?"_ (restaurantes e bares)\n`;
      responseText += `📅 _"O que acontece neste fim de semana?"_ (agenda de eventos)\n`;
      responseText += `🏡 _"Preciso de pousada para casal"_ (hospedagem)\n`;
      responseText += `🏥 _"Qual o telefone da prefeitura?"_ (utilidade pública)\n`;
      responseText += `🏷️ _"Quero cupons de desconto"_ (ofertas locais)\n\n`;
      responseText += `Digite sua dúvida e eu buscarei na base de dados oficial da cidade!`;
    }

    // Return the generated natural language response
    res.json({
      response: responseText
    });

  } catch (error) {
    console.error("Erro ao gerar resposta do WhatsApp:", error);
    res.status(500).json({ error: "Falha interna ao processar a conversa do WhatsApp." });
  }
});

export default router;
