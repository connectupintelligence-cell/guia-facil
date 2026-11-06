import re

with open(r'C:\Users\felip\.gemini\antigravity\scratch\guia-facil\generate_full_app_code.py', 'r', encoding='utf-8') as f:
    code = f.read()

# Let's inspect where setTouristProfile and getLocalChatReply are located
target = "function setTouristProfile(profileKey) {{"

logical_lines_code = '''
const LOGICAL_LINES = {
  camposdojordao: {
    casal: {
      title: "Roteiro Romântico a Dois em Campos do Jordão",
      stay: "Pousadas de charme no Alto Capivari com lareira e vista para as araucárias",
      morning: "Passeio romântico pelos jardins floridos do Parque Amantikir",
      lunch: "Truta grelhada com crosta de pinhão no centrinho de Capivari",
      afternoon: "Pôr do sol no Mirante do Morro do Elefante + chocolates na Geneve",
      icecream: "Sorvete artesanal de frutas vermelhas e chocolate quente no Capivari",
      dinner: "Fondue suíço à luz de velas com vinho da Mantiqueira",
      coupon: "JORDAN15 (15% OFF no rodízio de fondue)"
    },
    familia: {
      title: "Roteiro Família com Crianças em Campos do Jordão",
      stay: "Hotel fazenda ou pousada com parquinho e área verde no Jaguaribe",
      morning: "Horto Florestal de Campos do Jordão (trilhas leves e bicicletas)",
      lunch: "Buffet caipira no fogão a lenha com parquinho para crianças",
      afternoon: "Passeio de bondinho histórico + chocolate artesanal",
      icecream: "Sorvete artesanal na Sorveteria do Capivari",
      dinner: "Pizzaria artesanal no forno a lenha no centro",
      coupon: "FAMILIA10 (10% OFF em pizzas grandes)"
    },
    aventura: {
      title: "Roteiro Ecoturismo & Aventura em Campos do Jordão",
      stay: "Chalé rústico na serra ou refúgio no Horto Florestal",
      morning: "Trilha da Cachoeira do Galharada e mirantes da Mantiqueira",
      lunch: "Comida de montanha com feijão tropeiro e grelhados",
      afternoon: "Tirolesa e arborismo no Parque Tarundu",
      icecream: "Açaí artesanal e sorvete artesanal no centrinho",
      dinner: "Chopp artesanal e hambúrguer de picanha na choperia local",
      coupon: "TRILHA10 (10% OFF na choperia artesanal)"
    },
    gastronomia: {
      title: "Roteiro Alta Gastronomia & Cultura em Campos do Jordão",
      stay: "Pousada boutique com café da manhã artesanal",
      morning: "Visita cultural ao Palácio Boa Vista (acervo de arte brasileira)",
      lunch: "Menu autoral com truta salmonada e risoto de queijo da serra",
      afternoon: "Degustação de queijos e azeites artesanais da Mantiqueira",
      icecream: "Gelato artesanal italiano no Capivari",
      dinner: "Jantar contemporâneo harmonizado com vinhos locais",
      coupon: "GOURMET10 (Sobremesa cortesia no jantar)"
    }
  },
  saobentodosapucai: {
    casal: {
      title: "Roteiro Romântico em São Bento do Sapucaí",
      stay: "Chalé isolado no Paiol Grande com banheira e vista para a Pedra do Baú",
      morning: "Visita ao Ateliê Ditinho Joana (artesanato vivo) e tour de azeites na Oliq",
      lunch: "Restaurante com vista panorâmica da Pedra do Baú",
      afternoon: "Pôr do sol no Mirante do Cruzeiro + café coado com bolo de pinhão na praça",
      icecream: "Sorvete artesanal de frutas locais na praça da Matriz",
      dinner: "Massas artesanais recheadas e vinhos da Mantiqueira",
      coupon: "BAU10 (10% OFF na refeição para casal)"
    },
    familia: {
      title: "Roteiro Família em São Bento do Sapucaí",
      stay: "Pousada rural com piscina e animais no vale do Serrano",
      morning: "Cachoeira dos Amores (trilha curta e poço calmo para banho)",
      lunch: "Comida caseira no fogão a lenha no restaurante Trincheira",
      afternoon: "Passeio pela praça da Matriz e compras de doces caseiros",
      icecream: "Picolés naturais e sorvete artesanal da serra",
      dinner: "Pizzaria acolhedora no centro histórico",
      coupon: "SAOBENTO10 (10% de desconto no almoço)"
    },
    aventura: {
      title: "Roteiro Ecoturismo & Escalada em São Bento",
      stay: "Camping ou refúgio de montanha próximo ao Bauzinho",
      morning: "Subida na Trilha da Pedra do Baú (ou Bauzinho e Ana Chata)",
      lunch: "Almoço caipira reforçado no Paiol Grande",
      afternoon: "Escalada ou banho na Cachoeira do Tobogã",
      icecream: "Açaí com frutas da época na vila",
      dinner: "Hambúrguer artesanal e cerveja artesanal na vila",
      coupon: "AVENTURA15 (15% OFF no lanche pós-trilha)"
    },
    gastronomia: {
      title: "Roteiro Gastronomia da Terra em São Bento",
      stay: "Pousada de montanha com café colonial artesanal",
      morning: "Tour pelos olivais da Oliq com degustação de azeites premiados",
      lunch: "Cordeiro assado lentamente com ervas e polenta cremosa",
      afternoon: "Cafés especiais premiados no Empório local",
      icecream: "Sorvete artesanal com redução de azeite e mel da serra",
      dinner: "Jantar intimista com truta defumada e queijos de cabra da Mantiqueira",
      coupon: "OLIQ10 (10% OFF em compras de azeites)"
    }
  },
  santoantoniodopinhal: {
    casal: {
      title: "Roteiro Romântico em Santo Antônio do Pinhal",
      stay: "Pousada boutique no Vale do Lageado com ofurô e lareira",
      morning: "Passeio pelos ateliês de cerâmica na Rota das Águas e Praça do Artesão",
      lunch: "Truta grelhada em crosta de pinhão e risoto de queijo da serra",
      afternoon: "Subida ao Pico Agudo (vista 360° e pôr do sol épico com asa-delta)",
      icecream: "Sorvete artesanal de queijo com calda de goiabada",
      dinner: "Jantar intimista com fondue e vinho à beira da lareira",
      coupon: "PINHAL10 (Sobremesa cortesia no jantar)"
    },
    familia: {
      title: "Roteiro Família em Santo Antônio do Pinhal",
      stay: "Pousada com piscina aquecida e área verde",
      morning: "Jardim dos Pinhais Ecco Parque (jardins temáticos e trilhas fáceis)",
      lunch: "Almoço caipira com fogão a lenha no centro",
      afternoon: "Mirante da Santa para vista da cidade + chocolates artesanais",
      icecream: "Sorveteria artesanal na pracinha central",
      dinner: "Pizzaria rústica no centrinho de Pinhal",
      coupon: "PINHALKIDS (10% OFF para famílias)"
    },
    aventura: {
      title: "Roteiro Aventura em Santo Antônio do Pinhal",
      stay: "Chalé próximo ao Pico Agudo",
      morning: "Voo livre de parapente ou asa-delta no Pico Agudo",
      lunch: "Prato caipira reforçado com tutu e linguiça artesanal",
      afternoon: "Trilha do Tropeiro e banho na Cachoeira do Lajeado",
      icecream: "Açaí refrescante pós-trilha no centro",
      dinner: "Chopp artesanal e petiscos na praça central",
      coupon: "RADICAL10 (10% OFF em atividades de aventura)"
    },
    gastronomia: {
      title: "Roteiro Gastronômico em Santo Antônio do Pinhal",
      stay: "Pousada de charme com café da manhã artesanal",
      morning: "Visita às queijarias artesanais e cachaçarias do Lageado",
      lunch: "Truta salmonada com alcaparras e purê de batata-doce roxa",
      afternoon: "Cafés especiais torrados na hora no centro",
      icecream: "Gelato artesanal de lavanda e mel da serra",
      dinner: "Menu contemporâneo com cogumelos frescos da Mantiqueira",
      coupon: "PINHAL15 (15% OFF na degustação de trutas)"
    }
  },
  monteverde: {
    casal: {
      title: "Roteiro Romântico em Monte Verde (MG)",
      stay: "Chalé suíço com lareira, banheira de hidromassagem e deck na mata",
      morning: "Caminhada leve pela Trilha da Pedra Redonda (divisa SP/MG com vista panorâmica)",
      lunch: "Costelinha suína ao molho de jabuticaba com tutu de feijão mineiro",
      afternoon: "Passeio pelas galerias alpinas + chocolate quente cremoso e strudel de maçã",
      icecream: "Sorvete artesanal na taça com frutas silvestres",
      dinner: "Rodízio de fondue suíço completo com carnes na pedra e chocolate",
      coupon: "MONTEVERDE15 (15% OFF no fondue suíço)"
    },
    familia: {
      title: "Roteiro Família em Monte Verde",
      stay: "Hotel fazenda com recreação infantil e animais",
      morning: "Parque Oschin (área verde com lhamas, araucárias e lagos)",
      lunch: "Buffet mineiro no fogão a lenha com comida caseira",
      afternoon: "Pista de patinação no gelo na galeria suíça",
      icecream: "Sorveteria artesanal da vila alpina",
      dinner: "Pizzaria no forno a lenha com queijo da Canastra",
      coupon: "MINAS10 (10% OFF no consumo familiar)"
    },
    aventura: {
      title: "Roteiro Ecoturismo & Montanha em Monte Verde",
      stay: "Pousada próxima à entrada das trilhas",
      morning: "Trilha do Pico do Selado ou Pedra Partida (caminhada de nível médio-alto)",
      lunch: "Feijão tropeiro e grelhados reforçados",
      afternoon: "Passeio de quadriciclo ou Mega Tirolesa na Fazenda Radical",
      icecream: "Açaí reforçado no centro",
      dinner: "Cerveja artesanal nas microcervejarias da avenida",
      coupon: "RADICAL15 (15% OFF no quadriciclo)"
    },
    gastronomia: {
      title: "Roteiro Gastronomia Mineira & Europeia",
      stay: "Pousada com café da manhã premiado",
      morning: "Visita às fábricas de chocolates artesanais e queijarias",
      lunch: "Leitão à pururuca com farofa de milho e pimenta biquinho",
      afternoon: "Degustação de geleias artesanais e licores",
      icecream: "Sorvete de queijo com doce de leite mineiro",
      dinner: "Truta fresca recheada com cogumelos e fondue doce",
      coupon: "CHOC10 (10% OFF na loja de chocolates)"
    }
  },
  ubatuba: {
    casal: {
      title: "Roteiro Romântico & Praias de Charme em Ubatuba",
      stay: "Pousada pé na areia na Praia do Tenório ou Praia Grande com varanda para o mar",
      morning: "Passeio de lancha para as piscinas naturais da Ilha das Couves",
      lunch: "Peixe grelhado à caiçara com camarão crocante e pirão",
      afternoon: "Pôr do sol no Mirante do Farol no Itaguá",
      icecream: "Açaí artesanal e sorvete de cambuci no calçadão do Itaguá",
      dinner: "Bistrô de frutos do mar à beira-mar com música ao vivo no Itaguá",
      coupon: "UBA10 (10% OFF no combo caiçara)"
    },
    familia: {
      title: "Roteiro Família em Ubatuba",
      stay: "Hotel ou pousada com piscina perto da Praia das Toninhas ou Lázaro",
      morning: "Praia do Lázaro (mar calmo estilo piscina para crianças) ou Projeto TAMAR",
      lunch: "Restaurante à beira-mar com pastel de camarão e pratos infantis",
      afternoon: "Visita ao Aquário de Ubatuba no centro",
      icecream: "Sorveteria tradicional no centro histórico",
      dinner: "Pizzaria artesanal ou hamburgueria no calçadão do Itaguá",
      coupon: "TAMARKIDS (10% OFF na alimentação no Itaguá)"
    },
    aventura: {
      title: "Roteiro Surf & Ecoturismo em Ubatuba",
      stay: "Pousada na Praia de Itamambuca ou Félix",
      morning: "Aula de surf em Itamambuca ou Trilha das Sete Praias",
      lunch: "Poke havaiano fresco ou prato feito caiçara",
      afternoon: "Banho de água doce na Cachoeira do Prumirim",
      icecream: "Açaí batido na tigela com granola",
      dinner: "Petiscos de lula à dorê e chopp gelado na vila",
      coupon: "SURF10 (10% OFF em aluguel de pranchas)"
    },
    gastronomia: {
      title: "Roteiro Alta Gastronomia Caiçara em Ubatuba",
      stay: "Pousada boutique no Itaguá",
      morning: "Mercado de Peixes de Ubatuba e casario colonial",
      lunch: "Moqueca caiçara de badejo com farofa de banana-da-terra",
      afternoon: "Cafés artesanais com doces de banana e castanha",
      icecream: "Sorvete artesanal de frutas nativas da Mata Atlântica",
      dinner: "Jantar requintado com lagosta grelhada e vinhos brancos",
      coupon: "MARISCO10 (10% OFF no festival de frutos do mar)"
    }
  },
  saojosedoscampos: {
    casal: {
      title: "Roteiro Romântico em São José dos Campos",
      stay: "Hotel executivo de luxo no Jardim Aquarius ou Vila Ema",
      morning: "Passeio romântico nos jardins históricos do Parque Vicentina Aranha",
      lunch: "Gastronomia contemporânea ou bistrô italiano na Vila Ema",
      afternoon: "Café especial na Avenida Anchieta + pôr do sol no Mirante do Banhado",
      icecream: "Gelato artesanal italiano na Vila Ema",
      dinner: "Vinhos e tábua de queijos ou jantar sofisticado com cortes nobres",
      coupon: "SJCROMANCE (15% OFF na garrafa de vinho)"
    },
    familia: {
      title: "Roteiro Família em São José dos Campos",
      stay: "Hotel com piscina e fácil acesso à Dutra",
      morning: "Parque da Cidade (Burle Marx) com lagos, patos e ciclovia",
      lunch: "Restaurante com buffet amplo e espaço kids no Aquarius",
      afternoon: "Memorial Aeroespacial Brasileiro (MAB) vendo foguetes em tamanho real",
      icecream: "Sorveteria artesanal no bairro Aquarius",
      dinner: "Pizzaria tradicional joseense no centro",
      coupon: "SJCPIZZA (10% OFF em pizzas grandes)"
    },
    aventura: {
      title: "Roteiro Ecoturismo em São Francisco Xavier (SFX)",
      stay: "Pousada ecológica no distrito de São Francisco Xavier (SFX)",
      morning: "Trilha da Pedra de São Francisco ou Pedra do Queixo em SFX",
      lunch: "Truta grelhada e comida caipira no vilarejo de SFX",
      afternoon: "Banho de cachoeira no Pedro David",
      icecream: "Sorvete natural de frutas da montanha em SFX",
      dinner: "Hambúrguer artesanal e cerveja artesanal local em SFX",
      coupon: "SFX15 (15% OFF no restaurante parceiro de SFX)"
    },
    gastronomia: {
      title: "Roteiro Gastronomia & Tradição Joseense",
      stay: "Hotel boutique com alta gastronomia",
      morning: "Visita cultural ao MAB / DCTA e Parque Santos Dumont",
      lunch: "Almoço no icônico Bar do Coronel (bolinhos artesanais de bacalhau desde 1993)",
      afternoon: "Cafeteria boutique com grãos especiais do Vale do Paraíba",
      icecream: "Gelateria artesanal premiada na Vila Ema",
      dinner: "Cortes nobres ou culinária autoral na Vila Ema",
      coupon: "SJC10 (Petisco ou chopp em dobro no Bar do Coronel)"
    }
  },
  pindamonhangaba: {
    casal: {
      title: "Roteiro Romântico & Rural em Pindamonhangaba",
      stay: "Pousada histórica ou chalé de charme no circuito do Ribeirão Grande",
      morning: "Passeio pelo Bosque da Princesa e visita ao Palacete 10 de Julho",
      lunch: "Almoço caipira sofisticado no Restaurante Colmeia da Terra",
      afternoon: "Tarde de relaxamento nos jardins orientais de Nova Gokula + mirante",
      icecream: "Sorvete natural de frutas nos jardins de Nova Gokula",
      dinner: "Chopp artesanal puro malte e petiscos da serra na Cervejaria Pindaíba",
      coupon: "PINDA15 (15% OFF no chopp ou almoço caipira)"
    },
    familia: {
      title: "Roteiro Família & Tradição em Pindamonhangaba",
      stay: "Hotel fazenda com recreação rural e pesqueiro",
      morning: "Bosque da Princesa com pedalinho no lago e parque infantil",
      lunch: "Buffet no fogão a lenha com leitoa à pururuca no Ribeirão Grande",
      afternoon: "Passeio de trem histórico ou compras de artesanato de argila",
      icecream: "Sorvete artesanal no centro histórico de Pinda",
      dinner: "Pizzaria aconchegante no centro histórico",
      coupon: "PINDAKIDS (10% OFF para famílias)"
    },
    aventura: {
      title: "Roteiro Aventura & Trilhas em Pindamonhangaba",
      stay: "Camping ou pousada rural próxima à Serra da Mantiqueira",
      morning: "Trilha do Pico do Itapeva ou cicloturismo no circuito rural",
      lunch: "Prato caipira reforçado com feijão tropeiro e couve",
      afternoon: "Banho nas cachoeiras do Ribeirão Grande",
      icecream: "Açaí refrescante pós-trilha no centro",
      dinner: "Lanche artesanal e chopp na Cervejaria Pindaíba",
      coupon: "PINDACHOPP (Chopp artesanal em dobro)"
    },
    gastronomia: {
      title: "Roteiro Sabores Caipiras de Pindamonhangaba",
      stay: "Pousada rural com café colonial",
      morning: "Tour pelos alambiques tradicionais e queijarias rurais",
      lunch: "O famoso almoço caipira completo da Colmeia da Terra no fogão a lenha",
      afternoon: "Café colonial com broa de milho assada na palha",
      icecream: "Doce de leite artesanal e sorvete caipira",
      dinner: "Degustação de cervejas premiadas na Cervejaria Pindaíba",
      coupon: "PINDA15 (15% OFF no fechamento da conta)"
    }
  }
};
'''

# New setTouristProfile and enhanced getLocalChatReply
new_profile_func = '''function setTouristProfile(profileKey) {{
  state.touristProfile = profileKey;
  const profileLabels = {{
    'casal': 'Casal Romântico',
    'familia': 'Família com Crianças',
    'aventura': 'Ecoturismo & Aventura',
    'gastronomia': 'Alta Gastronomia',
    'amigos': 'Amigos / Econômico'
  }};

  const label = profileLabels[profileKey] || profileKey;
  state.chatMessages.push({{
    sender: 'user',
    text: `Meu perfil de viagem: ${label}`,
    time: new Date().toLocaleTimeString([], {{ hour: '2-digit', minute: '2-digit' }}),
    read: true
  }});

  state.chatTyping = true;
  renderApp();

  setTimeout(() => {{
    const city = getCurrentCity();
    const cityLines = LOGICAL_LINES[city.id] || LOGICAL_LINES['camposdojordao'];
    const plan = (cityLines && cityLines[profileKey]) ? cityLines[profileKey] : (cityLines ? cityLines.casal : null);

    let reply = '';
    if (plan) {{
      reply = `✨ *${plan.title}* (${city.name}):\\n\\n` +
        `🏨 *1. Onde Ficar*: ${plan.stay}\\n` +
        `🌸 *2. Manhã & Passeio*: ${plan.morning}\\n` +
        `🍴 *3. Almoço Típico*: ${plan.lunch}\\n` +
        `🌄 *4. Tarde & Vista*: ${plan.afternoon}\\n` +
        `🍦 *5. Sobremesa / Sorvete*: ${plan.icecream}\\n` +
        `🍷 *6. Noite & Jantar*: ${plan.dinner}\\n\\n` +
        `🏷️ *Cupom Exclusivo*: *${plan.coupon}*\\n\\n` +
        `💬 *Como posso te ajudar agora?* Digite:\\n` +
        `• _"Onde almoçar?"_ (ver restaurantes)\\n` +
        `• _"Onde tomar sorvete?"_ (doces e mirantes)\\n` +
        `• _"Pousadas recomendadas"_\\n` +
        `• _"Quero cupons"_`;
    }} else {{
      reply = `Excelente! Salvei seu perfil como *${label}*. Vou guiar você pelos melhores atrativos e restaurantes de ${city.name} sob medida!`;
    }}

    state.chatMessages.push({{
      sender: 'assistant',
      text: reply,
      time: new Date().toLocaleTimeString([], {{ hour: '2-digit', minute: '2-digit' }}),
      read: true
    }});
    state.chatTyping = false;
    renderApp();
  }}, 600);
}}'''

# In getLocalChatReply, add handlers for sorvete/sobremesa, vista/mirante, onde ficar/pousada, roteiro completo
target_reply = "function getLocalChatReply(message) {{"
new_reply_prefix = '''function getLocalChatReply(message) {{
  const prompt = message.toLowerCase().trim();
  const city = getCurrentCity();
  const profile = state.touristProfile || 'casal';
  const cityLines = LOGICAL_LINES[city.id] || LOGICAL_LINES['camposdojordao'];
  const plan = (cityLines && cityLines[profile]) ? cityLines[profile] : (cityLines ? cityLines.casal : null);
  let reply = '';

  // 0. Roteiro Completo / Linha Lógica do Dia
  if (
    prompt.includes('roteiro') ||
    prompt.includes('linha logica') ||
    prompt.includes('linha lógica') ||
    prompt.includes('o que fazer hoje') ||
    prompt.includes('programação') ||
    prompt.includes('itinerario') ||
    prompt.includes('itinerário')
  ) {{
    if (plan) {{
      return `🧭 *${plan.title}* (${city.name}):\\n\\n` +
        `🏨 *Onde Ficar*: ${plan.stay}\\n` +
        `🌸 *Manhã*: ${plan.morning}\\n` +
        `🍴 *Almoço*: ${plan.lunch}\\n` +
        `🌄 *Tarde & Vista*: ${plan.afternoon}\\n` +
        `🍦 *Sobremesa / Sorvete*: ${plan.icecream}\\n` +
        `🍷 *Noite & Jantar*: ${plan.dinner}\\n\\n` +
        `🏷️ Cupom do Comércio: *${plan.coupon}*\\n` +
        `Deseja reservar algum desses locais ou ver o mapa?`;
    }}
  }}

  // 0.1 Vista / Mirante / Pôr do Sol
  if (
    prompt.includes('vista') ||
    prompt.includes('mirante') ||
    prompt.includes('pôr do sol') ||
    prompt.includes('por do sol') ||
    prompt.includes('panorâmica') ||
    prompt.includes('panoramica')
  ) {{
    if (plan) {{
      return `🌄 *Melhor Vista & Pôr do Sol em ${city.name}:*\\n\\n` +
        `📍 *Sugestão Curada*: ${plan.afternoon}\\n` +
        `💡 _Dica do Concierge_: Chegue por volta das 17h para pegar a melhor luz da Mantiqueira e tirar fotos incríveis!\\n\\n` +
        `Depois da vista, que tal uma sobremesa ou café? Digite *'sorvete'* ou *'onde jantar'*!`;
    }}
  }}

  // 0.2 Sorvete / Sobremesa / Doce / Café
  if (
    prompt.includes('sorvete') ||
    prompt.includes('gelato') ||
    prompt.includes('sobremesa') ||
    prompt.includes('doce') ||
    prompt.includes('chocolat') ||
    prompt.includes('café da tarde')
  ) {{
    if (plan) {{
      return `🍦 *Sobremesa & Sabores Doces em ${city.name}:*\\n\\n` +
        `📍 *Recomendação do seu perfil*: ${plan.icecream}\\n` +
        `💡 _Tradição Local_: Os estabelecimentos parceiros utilizam frutas e leite da região serrana/caiçara.\\n\\n` +
        `Quer esticar para o jantar? Digite *'onde jantar'*!`;
    }}
  }}
'''

pattern_set_profile = r'function setTouristProfile\(profileKey\) \{\{.*?\}\}\n\nfunction getLocalChatReply\(message\) \{\{'

if re.search(pattern_set_profile, code, re.DOTALL):
    code = re.sub(pattern_set_profile, logical_lines_code + '\n' + new_profile_func + '\n\n' + new_reply_prefix, code, flags=re.DOTALL)
    print("Replaced setTouristProfile and injected LOGICAL_LINES successfully.")
else:
    print("pattern_set_profile match failed.")

with open(r'C:\Users\felip\.gemini\antigravity\scratch\guia-facil\generate_full_app_code.py', 'w', encoding='utf-8') as f:
    f.write(code)
print("Saved generate_full_app_code.py successfully.")
