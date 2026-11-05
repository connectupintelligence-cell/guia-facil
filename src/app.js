// ==========================================
// GUIA FÁCIL - PLATAFORMA SAAS MULTICIDADES
// Inteligência Territorial & Organização Turística
// ==========================================

const safeStorage = {
  get: (k) => { try { return (typeof sessionStorage !== 'undefined') ? sessionStorage.getItem(k) : null; } catch(e) { return null; } },
  set: (k, v) => { try { if (typeof sessionStorage !== 'undefined') sessionStorage.setItem(k, v); } catch(e) {} },
  remove: (k) => { try { if (typeof sessionStorage !== 'undefined') sessionStorage.removeItem(k); } catch(e) {} }
};

window.app = window.app || {};

const CITIES_DATA = {
  "camposdojordao": {
    "id": "camposdojordao",
    "slug": "campos-do-jordao",
    "name": "Campos do Jordão",
    "uf": "SP",
    "tagline": "Mantiqueira Alpina • A Suíça Brasileira",
    "badge": "🌲 Estância Climática da Mantiqueira",
    "heroTitle": "O Sistema de Inteligência Territorial de Campos do Jordão",
    "heroSubtitle": "Conectando o centro alpino de Capivari, atrativos naturais, pousadas de charme e alta gastronomia na palma da mão do turista pelo WhatsApp.",
    "temp": "14°C",
    "altitude": "1.628m",
    "population": "52.000 hab",
    "annualTourists": "2.4 milhões/ano",
    "publicServices": {
      "prefeitura": "(12) 3668-5500",
      "posto": "(12) 3662-1100 - Rua Brigadeiro Jordão, 580 (UPA Municipal)",
      "policia": "190",
      "samu": "192",
      "centroTurismo": "(12) 3663-1234 - Portal de Entrada"
    },
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil*, seu concierge oficial de **Campos do Jordão**! 🌲\n\nPara eu te passar as melhores dicas sob medida: **quem está viajando com você hoje?**",
    "quickSuggestions": [
      "👫 Casal Romântico",
      "👨‍👩‍👧‍👦 Família com Crianças",
      "🧗 Ecoturismo & Trilhas",
      "🍷 Alta Gastronomia",
      "O que fazer hoje?"
    ],
    "stats": {
      "activeVisitorsToday": 14250,
      "monthlyVisitors": 154200,
      "monthlyVisitorsChange": "+14.3%",
      "estimatedTourismRevenue": 48900000,
      "estimatedTourismRevenueChange": "+18.7%",
      "hotelOccupancyRate": 84.6,
      "hotelOccupancyRateChange": "+5.2%",
      "activeMerchants": 148,
      "averageSpending": {
        "hospedagem": 450,
        "alimentacao": 220,
        "compras": 180,
        "ingressos": 80
      },
      "visitorFlowChart": [
        {
          "month": "Jan",
          "visitors": 98000
        },
        {
          "month": "Fev",
          "visitors": 62000
        },
        {
          "month": "Mar",
          "visitors": 48000
        },
        {
          "month": "Abr",
          "visitors": 78000
        },
        {
          "month": "Mai",
          "visitors": 82000
        },
        {
          "month": "Jun",
          "visitors": 145000
        },
        {
          "month": "Jul",
          "visitors": 280000
        },
        {
          "month": "Ago",
          "visitors": 110000
        },
        {
          "month": "Set",
          "visitors": 65000
        },
        {
          "month": "Out",
          "visitors": 72000
        },
        {
          "month": "Nov",
          "visitors": 95000
        },
        {
          "month": "Dez",
          "visitors": 160000
        }
      ],
      "touristOrigin": [
        {
          "state": "São Paulo",
          "percentage": 68
        },
        {
          "state": "Rio de Janeiro",
          "percentage": 14
        },
        {
          "state": "Minas Gerais",
          "percentage": 8
        },
        {
          "state": "Paraná",
          "percentage": 5
        },
        {
          "state": "Outros",
          "percentage": 5
        }
      ]
    },
    "simulationStats": {
      "cityName": "Campos do Jordão",
      "totalAgents": 36,
      "totalQueries": 177,
      "couponsRedeemed": 50,
      "checkinsDone": 50,
      "totalXp": 2750,
      "stimulatedRevenue": 8596.16,
      "dispersionRate": 63.0,
      "dispersionAnalysis": "Desvio significativo de tráfego do miolo do Capivari em direção ao Horto Florestal e Vila Jaguary.",
      "topicCounts": [
        {
          "name": "Atrativos / Turismo",
          "count": 60,
          "pct": 33.9
        },
        {
          "name": "Gastronomia / Fondue",
          "count": 42,
          "pct": 23.7
        },
        {
          "name": "Eventos Culturais",
          "count": 25,
          "pct": 14.1
        },
        {
          "name": "Check-in & Gamificação",
          "count": 22,
          "pct": 12.4
        },
        {
          "name": "Cupons & Vouchers",
          "count": 15,
          "pct": 8.5
        },
        {
          "name": "Família & Infantil",
          "count": 6,
          "pct": 3.4
        },
        {
          "name": "Utilidade Pública & Saúde",
          "count": 4,
          "pct": 2.3
        },
        {
          "name": "Hospedagem",
          "count": 3,
          "pct": 1.7
        }
      ],
      "merchantCoupons": [
        {
          "name": "Chocolate Araucária",
          "code": "ARAUCHOCO",
          "discount": "Leve 2 Pague 1",
          "redeemed": 14,
          "tag": "Vila Jaguary (Periférico)",
          "color": "var(--primary)"
        },
        {
          "name": "Pousada Recanto dos Sonhos",
          "code": "RECANTO10",
          "discount": "10% Diária",
          "redeemed": 15,
          "tag": "Vila Jaguaribe",
          "color": "var(--secondary)"
        },
        {
          "name": "Matterhorn Fondue",
          "code": "MATTER15",
          "discount": "15% Fondue",
          "redeemed": 12,
          "tag": "Centro Capivari",
          "color": "#a78bfa"
        },
        {
          "name": "Baden Baden Cervejaria",
          "code": "BADEN10",
          "discount": "10% Chopp",
          "redeemed": 9,
          "tag": "Centro Capivari",
          "color": "#f59e0b"
        }
      ],
      "agentFeed": [
        {
          "id": "agente_04",
          "archetype": "Família com Crianças",
          "time": "Sábado 14:15",
          "query": "O que fazer com crianças de 6 e 9 anos à tarde?",
          "aiReply": "Parque Amantikir (labirinto botânico) e cabine fechada do Teleférico.",
          "action": "Check-in no Parque Amantikir (+50 XP)",
          "badgeColor": "rgba(0, 196, 140, 0.2)",
          "textColor": "#00c48c"
        },
        {
          "id": "agente_12",
          "archetype": "Casal Romântico",
          "time": "Sábado 19:40",
          "query": "Melhor fondue com lareira para jantar a dois?",
          "aiReply": "Matterhorn Fondue com rodízio especial e piano ao vivo no Capivari.",
          "action": "Resgate de Cupom MATTER15 (-15% no rodízio)",
          "badgeColor": "rgba(167, 139, 250, 0.2)",
          "textColor": "#c4b5fd"
        },
        {
          "id": "agente_27",
          "archetype": "Jovem Aventureiro",
          "time": "Domingo 09:30",
          "query": "Quais trilhas e arvorismo abertos na mata?",
          "aiReply": "Horto Florestal com trilha das quatro pontes e tirolesa alpina.",
          "action": "Check-in no Horto Florestal (+50 XP)",
          "badgeColor": "rgba(56, 189, 248, 0.2)",
          "textColor": "#38bdf8"
        }
      ]
    },
    "attractions": [
      {
        "id": 1,
        "name": "Parque Amantikir",
        "category": "Natureza",
        "description": "Conhecido como 'os jardins que falam', possui mais de 700 espécies de plantas espalhadas por 60 mil m² em jardins temáticos inspirados em diversos países.",
        "location": "Rodovia Campos do Jordão, Km 4",
        "hours": "Diariamente, das 9h às 16h",
        "price": "R$ 60,00",
        "rating": 4.8,
        "reviewsCount": 1240,
        "imageUrl": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Amigo das Flores (+50 XP)"
      },
      {
        "id": 2,
        "name": "Vila Capivari",
        "category": "Cultura",
        "description": "O centro turístico da cidade, famoso por sua arquitetura em estilo alpino europeu, chocolaterias, restaurantes refinados e lojas de grife.",
        "location": "Vila Capivari, Centro",
        "hours": "Acesso livre (comércio varia)",
        "price": "Gratuito",
        "rating": 4.9,
        "reviewsCount": 4580,
        "imageUrl": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Explorador Alpino (+30 XP)"
      },
      {
        "id": 3,
        "name": "Teleférico Capivari",
        "category": "Lazer",
        "description": "O primeiro teleférico mono-cabo do Brasil, levando visitantes ao topo do Morro do Elefante a 1.800 metros de altitude.",
        "location": "Praça São Benedito, Vila Capivari",
        "hours": "Quarta a segunda, das 9h às 18h",
        "price": "R$ 40,00",
        "rating": 4.6,
        "reviewsCount": 2310,
        "imageUrl": "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Nas Alturas (+40 XP)"
      },
      {
        "id": 4,
        "name": "Horto Florestal (Parque Estadual)",
        "category": "Aventura",
        "description": "Unidade de conservação com florestas de araucária, trilhas de caminhada, arborismo, aluguel de bicicletas e restaurantes integrados à natureza alpina.",
        "location": "Av. Pedro Paulo, s/n - Horto Florestal",
        "hours": "Terça a domingo, das 8h às 17h",
        "price": "R$ 19,00",
        "rating": 4.8,
        "reviewsCount": 1540,
        "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Guardião da Araucária (+50 XP)"
      }
    ],
    "merchants": [
      {
        "id": 101,
        "name": "Baden Baden Cervejaria",
        "category": "Gastronomia",
        "description": "Ícone de Campos do Jordão, oferecendo o melhor da culinária alemã e cervejas artesanais premiadas no Capivari.",
        "location": "Rua Djalma Forjaz, 93 - Vila Capivari",
        "phone": "(12) 3663-3610",
        "whatsapp": "551236633610",
        "imageUrl": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
        "rating": 4.8,
        "reviewsCount": 1420,
        "approved": true,
        "coupons": [
          {
            "id": "C1",
            "code": "BADEN10",
            "description": "10% de desconto no Chopp Cristal de 500ml",
            "limit": 150,
            "redeemed": 92,
            "active": true
          }
        ]
      },
      {
        "id": 102,
        "name": "Matterhorn Fondue & Empório",
        "category": "Gastronomia",
        "description": "Tradicional restaurante alpino no Capivari, especialista em rodízio de fondue de queijo, carnes nobres e chocolate suíço.",
        "location": "Rua Djalma Forjaz, 115 - Vila Capivari",
        "phone": "(12) 3663-1841",
        "whatsapp": "551236631841",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.7,
        "reviewsCount": 890,
        "approved": true,
        "coupons": [
          {
            "id": "C3",
            "code": "MATTER15",
            "description": "15% de desconto no rodízio de Fondue",
            "limit": 100,
            "redeemed": 65,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 201,
        "name": "54º Festival Internacional de Inverno",
        "description": "O maior festival de música clássica da América Latina com apresentações no Auditório Cláudio Santoro.",
        "date": "04 de Julho a 02 de Agosto, 2026",
        "location": "Auditório Claudio Santoro & Praça de Capivari",
        "category": "Música & Cultura",
        "active": true
      }
    ]
  },
  "saobentodosapucai": {
    "id": "saobentodosapucai",
    "slug": "sao-bento-do-sapucai",
    "name": "São Bento do Sapucaí",
    "uf": "SP",
    "tagline": "Capital dos Esportes de Aventura e Arte • Pedra do Baú",
    "badge": "⛰️ Monumento Natural da Pedra do Baú",
    "heroTitle": "O Sistema de Inteligência Territorial de São Bento do Sapucaí",
    "heroSubtitle": "Conectando o Monumento da Pedra do Baú, os atrativos rurais, pousadas e o comércio local na palma da mão do turista pelo WhatsApp.",
    "temp": "17°C",
    "altitude": "874m - 1.950m",
    "population": "11.000 hab",
    "annualTourists": "480.000/ano",
    "publicServices": {
      "prefeitura": "(12) 3971-6110",
      "posto": "(12) 3971-1222 - Rua Cel. Sebastião de Barros, 120 (Pronto Atendimento)",
      "policia": "190",
      "samu": "192",
      "centroTurismo": "(12) 3971-1255 - Casa da Cultura Miguel Reale"
    },
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil*, seu concierge oficial de **São Bento do Sapucaí**! ⛰️\n\nPara eu te passar as melhores dicas sob medida: **quem está viajando com você hoje?**",
    "quickSuggestions": [
      "👨‍👩‍👧‍👦 Família com Crianças",
      "👫 Casal Romântico",
      "🧗 Ecoturismo & Pedra do Baú",
      "🎨 Artesanato & Cultura",
      "O que fazer hoje?"
    ],
    "stats": {
      "activeVisitorsToday": 4200,
      "monthlyVisitors": 46500,
      "monthlyVisitorsChange": "+19.2%",
      "estimatedTourismRevenue": 14200000,
      "estimatedTourismRevenueChange": "+22.5%",
      "hotelOccupancyRate": 89.2,
      "hotelOccupancyRateChange": "+8.4%",
      "activeMerchants": 74,
      "averageSpending": {
        "hospedagem": 340,
        "alimentacao": 160,
        "compras": 120,
        "ingressos": 45
      },
      "visitorFlowChart": [
        {
          "month": "Jan",
          "visitors": 38000
        },
        {
          "month": "Fev",
          "visitors": 32000
        },
        {
          "month": "Mar",
          "visitors": 24000
        },
        {
          "month": "Abr",
          "visitors": 41000
        },
        {
          "month": "Mai",
          "visitors": 48000
        },
        {
          "month": "Jun",
          "visitors": 55000
        },
        {
          "month": "Jul",
          "visitors": 68000
        },
        {
          "month": "Ago",
          "visitors": 49000
        },
        {
          "month": "Set",
          "visitors": 36000
        },
        {
          "month": "Out",
          "visitors": 31000
        },
        {
          "month": "Nov",
          "visitors": 34000
        },
        {
          "month": "Dez",
          "visitors": 45000
        }
      ],
      "touristOrigin": [
        {
          "state": "São Paulo",
          "percentage": 74
        },
        {
          "state": "Minas Gerais",
          "percentage": 15
        },
        {
          "state": "Rio de Janeiro",
          "percentage": 7
        },
        {
          "state": "Outros",
          "percentage": 4
        }
      ]
    },
    "simulationStats": {
      "cityName": "São Bento do Sapucaí",
      "totalAgents": 32,
      "totalQueries": 158,
      "couponsRedeemed": 46,
      "checkinsDone": 48,
      "totalXp": 2540,
      "stimulatedRevenue": 7420.5,
      "dispersionRate": 71.5,
      "dispersionAnalysis": "Alta dispersão dos turistas para os atrativos rurais do Bairro do Quilombo e Vale do Paiol Grande.",
      "topicCounts": [
        {
          "name": "Trilhas & Pedra do Baú",
          "count": 58,
          "pct": 36.7
        },
        {
          "name": "Gastronomia Caipira & Trutas",
          "count": 39,
          "pct": 24.7
        },
        {
          "name": "Artesanato & Capelinhas",
          "count": 22,
          "pct": 13.9
        },
        {
          "name": "Check-in Ecoturismo",
          "count": 18,
          "pct": 11.4
        },
        {
          "name": "Pousadas & Chalés",
          "count": 12,
          "pct": 7.6
        },
        {
          "name": "Utilidade Pública & Saúde",
          "count": 9,
          "pct": 5.7
        }
      ],
      "merchantCoupons": [
        {
          "name": "Restaurante Trincheira",
          "code": "TRINCHEIRA15",
          "discount": "15% Truta Grelhada",
          "redeemed": 18,
          "tag": "Vale do Paiol",
          "color": "var(--primary)"
        },
        {
          "name": "Cervejaria Bauzera",
          "code": "BAUZERA10",
          "discount": "10% Degustação",
          "redeemed": 14,
          "tag": "Estrada do Baú",
          "color": "#f59e0b"
        },
        {
          "name": "Pousada do Quilombo",
          "code": "QUILOMBO10",
          "discount": "10% Diária",
          "redeemed": 8,
          "tag": "Resort",
          "color": "var(--secondary)"
        },
        {
          "name": "Rancho do Zé Queijos",
          "code": "RANCHOZE",
          "discount": "Brinde Doce de Leite",
          "redeemed": 6,
          "tag": "Artesanal",
          "color": "#a78bfa"
        }
      ],
      "agentFeed": [
        {
          "id": "agente_02",
          "archetype": "Ecoturista / Aventureiro",
          "time": "Sábado 08:30",
          "query": "Qual a melhor trilha para fazer hoje na Pedra do Baú?",
          "aiReply": "A Trilha do Bauzinho é ideal para contemplação fácil; para a via ferrata do topo do Baú, vá com guia credenciado.",
          "action": "Check-in no Bauzinho (+60 XP)",
          "badgeColor": "rgba(0, 196, 140, 0.2)",
          "textColor": "#00c48c"
        },
        {
          "id": "agente_07",
          "archetype": "Casal Romântico",
          "time": "Sábado 13:00",
          "query": "Onde almoçar perto da Pedra do Baú com vista?",
          "aiReply": "Restaurante Trincheira & Tratoria, famoso pela truta grelhada e deck com vista panorâmica para o maciço.",
          "action": "Resgate de Cupom TRINCHEIRA15",
          "badgeColor": "rgba(167, 139, 250, 0.2)",
          "textColor": "#c4b5fd"
        },
        {
          "id": "agente_14",
          "archetype": "Família com Crianças",
          "time": "Sábado 15:30",
          "query": "Passeio cultural tranquilo no centro?",
          "aiReply": "Visite as Capelinhas de Mosaico (obras de Ângelo Milani e Claudia Lara) e a Feira de Artesanato em palha de milho.",
          "action": "Check-in nas Capelinhas (+40 XP)",
          "badgeColor": "rgba(56, 189, 248, 0.2)",
          "textColor": "#38bdf8"
        }
      ]
    },
    "attractions": [
      {
        "id": 11,
        "name": "Monumento Natural da Pedra do Baú",
        "category": "Aventura",
        "description": "Formação rochosa icônica com 1.950m de altitude. Abriga o Bauzinho (acesso fácil para famílias), Ana Chata e o Baú com via ferrata.",
        "location": "Estrada Municipal da Pedra do Baú, Km 8",
        "hours": "Acesso das 8h às 17h (Estacionamento do Bauzinho)",
        "price": "R$ 20,00",
        "rating": 4.9,
        "reviewsCount": 3890,
        "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Conquistador do Baú (+60 XP)"
      },
      {
        "id": 12,
        "name": "Capelinhas de Mosaico",
        "category": "Cultura",
        "description": "Igrejinhas históricas transformadas em galerias a céu aberto pelos renomados artistas plásticos Ângelo Milani e Claudia Lara.",
        "location": "Rua Treze de Maio, Centro",
        "hours": "Acesso livre diariamente",
        "price": "Gratuito",
        "rating": 4.8,
        "reviewsCount": 1640,
        "imageUrl": "https://images.unsplash.com/photo-1548625361-19597793c7d1?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Arte Sacra & Mosaico (+40 XP)"
      },
      {
        "id": 13,
        "name": "Feira de Artesanato & Arte no Quilombo",
        "category": "Cultura",
        "description": "Cooperativa comunitária de artesãos que produzem cestaria tradicional em palha de milho, fibra de bananeira e tecelagem.",
        "location": "Bairro do Quilombo, Estrada Municipal",
        "hours": "Quinta a domingo, das 9h às 17h",
        "price": "Gratuito",
        "rating": 4.9,
        "reviewsCount": 980,
        "imageUrl": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Guardião do Quilombo (+35 XP)"
      }
    ],
    "merchants": [
      {
        "id": 111,
        "name": "Restaurante Trincheira & Tratoria",
        "category": "Gastronomia",
        "description": "Gastronomia requintada da Mantiqueira especializada em trutas frescas grelhadas, massas caseiras e vista para o Baú.",
        "location": "Estrada do Paiol Grande, Km 2",
        "phone": "(12) 3971-2005",
        "whatsapp": "551239712005",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 820,
        "approved": true,
        "coupons": [
          {
            "id": "CSB1",
            "code": "TRINCHEIRA15",
            "description": "15% de desconto no Prato Principal de Truta Grelhada",
            "limit": 100,
            "redeemed": 48,
            "active": true
          }
        ]
      },
      {
        "id": 112,
        "name": "Cervejaria Bauzera",
        "category": "Gastronomia",
        "description": "Brewpub artesanal com lúpulos frescos e água mineral da serra. Harmonizações com queijos da região.",
        "location": "Estrada Municipal do Baú, Km 4",
        "phone": "(12) 99762-3344",
        "whatsapp": "5512997623344",
        "imageUrl": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
        "rating": 4.8,
        "reviewsCount": 540,
        "approved": true,
        "coupons": [
          {
            "id": "CSB2",
            "code": "BAUZERA10",
            "description": "10% de desconto na degustação de chope artesanal",
            "limit": 80,
            "redeemed": 35,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 211,
        "name": "Festival de Inverno & Arte na Praça",
        "description": "Apresentações gratuitas de música instrumental, viola caipira, oficinas de mosaico e teatro na praça central.",
        "date": "10 de Julho a 26 de Julho, 2026",
        "location": "Praça Cônego Bento & Casa de Cultura",
        "category": "Música & Cultura",
        "active": true
      }
    ]
  },
  "santoantoniodopinhal": {
    "id": "santoantoniodopinhal",
    "slug": "santo-antonio-do-pinhal",
    "name": "Santo Antônio do Pinhal",
    "uf": "SP",
    "tagline": "Charme, Mirantes & Ecoturismo de Altitude",
    "badge": "🍃 O Refúgio Tranquilo da Mantiqueira",
    "heroTitle": "O Sistema de Inteligência Territorial de Santo Antônio do Pinhal",
    "heroSubtitle": "Conectando o Mirante do Pico Agudo, jardins botânicos, orquidários e a melhor gastronomia serrana pelo WhatsApp.",
    "temp": "16°C",
    "altitude": "1.080m - 1.634m",
    "population": "7.200 hab",
    "annualTourists": "350.000/ano",
    "publicServices": {
      "prefeitura": "(12) 3666-1122",
      "posto": "(12) 3666-1300 - Av. Min. Nelson Hungria, 450 (Centro de Saúde)",
      "policia": "190",
      "samu": "192",
      "centroTurismo": "(12) 3666-2088 - Praça do Artesão"
    },
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil*, seu concierge oficial de **Santo Antônio do Pinhal**! 🍃\n\nPara eu te passar as melhores dicas sob medida: **quem está viajando com você hoje?**",
    "quickSuggestions": [
      "👫 Casal Romântico",
      "🪂 Mirantes & Pico Agudo",
      "👨‍👩‍👧‍👦 Família com Crianças",
      "🌸 Jardins & Botânica",
      "O que fazer hoje?"
    ],
    "stats": {
      "activeVisitorsToday": 3800,
      "monthlyVisitors": 38900,
      "monthlyVisitorsChange": "+16.8%",
      "estimatedTourismRevenue": 11800000,
      "estimatedTourismRevenueChange": "+19.1%",
      "hotelOccupancyRate": 86.4,
      "hotelOccupancyRateChange": "+6.1%",
      "activeMerchants": 62,
      "averageSpending": {
        "hospedagem": 360,
        "alimentacao": 170,
        "compras": 130,
        "ingressos": 50
      },
      "visitorFlowChart": [
        {
          "month": "Jan",
          "visitors": 28000
        },
        {
          "month": "Fev",
          "visitors": 22000
        },
        {
          "month": "Mar",
          "visitors": 19000
        },
        {
          "month": "Abr",
          "visitors": 33000
        },
        {
          "month": "Mai",
          "visitors": 39000
        },
        {
          "month": "Jun",
          "visitors": 44000
        },
        {
          "month": "Jul",
          "visitors": 56000
        },
        {
          "month": "Ago",
          "visitors": 38000
        },
        {
          "month": "Set",
          "visitors": 27000
        },
        {
          "month": "Out",
          "visitors": 25000
        },
        {
          "month": "Nov",
          "visitors": 29000
        },
        {
          "month": "Dez",
          "visitors": 36000
        }
      ],
      "touristOrigin": [
        {
          "state": "São Paulo",
          "percentage": 78
        },
        {
          "state": "Rio de Janeiro",
          "percentage": 11
        },
        {
          "state": "Minas Gerais",
          "percentage": 8
        },
        {
          "state": "Outros",
          "percentage": 3
        }
      ]
    },
    "simulationStats": {
      "cityName": "Santo Antônio do Pinhal",
      "totalAgents": 30,
      "totalQueries": 142,
      "couponsRedeemed": 41,
      "checkinsDone": 44,
      "totalXp": 2310,
      "stimulatedRevenue": 6890.0,
      "dispersionRate": 68.2,
      "dispersionAnalysis": "Equilíbrio entre a rota de mirantes no Pico Agudo e os atrativos da Rodovia dos Jardins.",
      "topicCounts": [
        {
          "name": "Mirantes & Pico Agudo",
          "count": 52,
          "pct": 36.6
        },
        {
          "name": "Jardins & Botânica",
          "count": 34,
          "pct": 23.9
        },
        {
          "name": "Gastronomia & Trutas",
          "count": 28,
          "pct": 19.7
        },
        {
          "name": "Check-in Gamificado",
          "count": 16,
          "pct": 11.3
        },
        {
          "name": "Pousadas & Charme",
          "count": 12,
          "pct": 8.5
        }
      ],
      "merchantCoupons": [
        {
          "name": "Bodega Santo Antônio",
          "code": "BODEGA10",
          "discount": "10% Massas Caseiras",
          "redeemed": 16,
          "tag": "Centro",
          "color": "var(--primary)"
        },
        {
          "name": "Cervejaria Araukarien",
          "code": "ARAUK15",
          "discount": "15% Chope IPA",
          "redeemed": 14,
          "tag": "Artesanal",
          "color": "#f59e0b"
        },
        {
          "name": "Pousada Villa Mantiqueira",
          "code": "VILLA10",
          "discount": "10% Diária",
          "redeemed": 11,
          "tag": "Refúgio",
          "color": "var(--secondary)"
        }
      ],
      "agentFeed": [
        {
          "id": "agente_03",
          "archetype": "Casal Romântico",
          "time": "Sábado 16:45",
          "query": "Qual o melhor horário para ir ao Pico Agudo ver o pôr do sol?",
          "aiReply": "Suba entre 16h30 e 17h para contemplar o voo livre com céu dourado a 1.634m de altitude.",
          "action": "Check-in no Mirante do Pico Agudo (+60 XP)",
          "badgeColor": "rgba(167, 139, 250, 0.2)",
          "textColor": "#c4b5fd"
        }
      ]
    },
    "attractions": [
      {
        "id": 21,
        "name": "Mirante do Pico Agudo",
        "category": "Aventura",
        "description": "Com 1.634m de altitude, oferece vista de 360° para a Pedra do Baú e o Vale do Paraíba, com rampa ativa de parapente e asa-delta.",
        "location": "Estrada Municipal do Pico Agudo",
        "hours": "Acesso livre (Recomendado pôr do sol)",
        "price": "Gratuito",
        "rating": 4.9,
        "reviewsCount": 2980,
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Nas Nuvens do Pico Agudo (+60 XP)"
      },
      {
        "id": 22,
        "name": "Jardim dos Pinhais Ecco Parque",
        "category": "Natureza",
        "description": "O primeiro parque temático de jardins temáticos do Brasil: Japonês, Italiano, Tropical e Desértico em meio às araucárias.",
        "location": "Rodovia SP-046, Km 146",
        "hours": "Segunda a domingo, das 9h às 17h",
        "price": "R$ 45,00",
        "rating": 4.8,
        "reviewsCount": 1850,
        "imageUrl": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Botânica dos Pinhais (+40 XP)"
      }
    ],
    "merchants": [
      {
        "id": 121,
        "name": "Bodega Santo Antônio",
        "category": "Gastronomia",
        "description": "Cozinha acolhedora de montanha especializada em massas artesanais e risotos de truta defumada.",
        "location": "Av. Min. Nelson Hungria, 620",
        "phone": "(12) 3666-1890",
        "whatsapp": "551236661890",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.8,
        "reviewsCount": 610,
        "approved": true,
        "coupons": [
          {
            "id": "CSAP1",
            "code": "BODEGA10",
            "description": "10% de desconto em qualquer prato de massa caseira",
            "limit": 60,
            "redeemed": 32,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 221,
        "name": "Festa do Pinhão de Santo Antônio",
        "description": "Barracas gastronômicas com receitas de pinhão e apresentações de moda de viola caipira.",
        "date": "01 a 10 de Maio, 2026",
        "location": "Praça do Artesão, Centro",
        "category": "Gastronomia & Cultura",
        "active": true
      }
    ]
  },
  "monteverde": {
    "id": "monteverde",
    "slug": "monte-verde",
    "name": "Monte Verde",
    "uf": "MG",
    "tagline": "O Refúgio Romântico da Serra da Mantiqueira",
    "badge": "❄️ Vila Suíça Mineira • 1.555m",
    "heroTitle": "O Sistema de Inteligência Territorial de Monte Verde",
    "heroSubtitle": "Conectando as trilhas de altitude, a gastronomia mineiro-alpina, chocolaterias e chalés com lareira pelo WhatsApp.",
    "temp": "13°C",
    "altitude": "1.555m - 2.082m",
    "population": "Distrito Turístico (Camanducaia)",
    "annualTourists": "650.000/ano",
    "publicServices": {
      "prefeitura": "(35) 3438-1158 (Subprefeitura)",
      "posto": "(35) 3438-1540 - Rua dos Eucaliptos, s/n (Pronto Atendimento)",
      "policia": "190",
      "samu": "192",
      "centroTurismo": "(35) 3438-1832 - Portal de Entrada de Monte Verde"
    },
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil*, seu concierge oficial de **Monte Verde (MG)**! ❄️\n\nPara eu te passar as melhores dicas sob medida: **quem está viajando com você hoje?**",
    "quickSuggestions": [
      "👫 Casal Romântico",
      "🥾 Trilhas & Montanha",
      "🍫 Fondues & Chocolates",
      "👨‍👩‍👧‍👦 Família na Serra",
      "O que fazer hoje?"
    ],
    "stats": {
      "activeVisitorsToday": 6800,
      "monthlyVisitors": 62000,
      "monthlyVisitorsChange": "+15.4%",
      "estimatedTourismRevenue": 21500000,
      "estimatedTourismRevenueChange": "+17.9%",
      "hotelOccupancyRate": 88.5,
      "hotelOccupancyRateChange": "+7.3%",
      "activeMerchants": 95,
      "averageSpending": {
        "hospedagem": 420,
        "alimentacao": 210,
        "compras": 170,
        "ingressos": 70
      },
      "visitorFlowChart": [
        {
          "month": "Jan",
          "visitors": 45000
        },
        {
          "month": "Fev",
          "visitors": 36000
        },
        {
          "month": "Mar",
          "visitors": 28000
        },
        {
          "month": "Abr",
          "visitors": 48000
        },
        {
          "month": "Mai",
          "visitors": 58000
        },
        {
          "month": "Jun",
          "visitors": 78000
        },
        {
          "month": "Jul",
          "visitors": 98000
        },
        {
          "month": "Ago",
          "visitors": 59000
        },
        {
          "month": "Set",
          "visitors": 38000
        },
        {
          "month": "Out",
          "visitors": 35000
        },
        {
          "month": "Nov",
          "visitors": 42000
        },
        {
          "month": "Dez",
          "visitors": 60000
        }
      ],
      "touristOrigin": [
        {
          "state": "São Paulo",
          "percentage": 72
        },
        {
          "state": "Minas Gerais",
          "percentage": 18
        },
        {
          "state": "Rio de Janeiro",
          "percentage": 6
        },
        {
          "state": "Outros",
          "percentage": 4
        }
      ]
    },
    "simulationStats": {
      "cityName": "Monte Verde",
      "totalAgents": 34,
      "totalQueries": 164,
      "couponsRedeemed": 48,
      "checkinsDone": 47,
      "totalXp": 2620,
      "stimulatedRevenue": 7950.0,
      "dispersionRate": 65.4,
      "dispersionAnalysis": "Boa divisão de turistas entre o centrinho comercial na Av. Monte Verde e as trilhas de altitude no Platô e Pedra Redonda.",
      "topicCounts": [
        {
          "name": "Trilhas & Pedra Redonda",
          "count": 55,
          "pct": 33.5
        },
        {
          "name": "Fondue & Chocolates",
          "count": 44,
          "pct": 26.8
        },
        {
          "name": "Vila Gastronômica",
          "count": 29,
          "pct": 17.7
        },
        {
          "name": "Check-in Ecológico",
          "count": 20,
          "pct": 12.2
        },
        {
          "name": "Pousadas Românticas",
          "count": 16,
          "pct": 9.8
        }
      ],
      "merchantCoupons": [
        {
          "name": "Villa Dona Gourmet",
          "code": "DONA15",
          "discount": "15% Fondue de Queijo",
          "redeemed": 19,
          "tag": "Centro",
          "color": "var(--primary)"
        },
        {
          "name": "Chocolateria Gressoney",
          "code": "GRESSONEY",
          "discount": "Prístino Cortesia",
          "redeemed": 17,
          "tag": "Tradição",
          "color": "#f59e0b"
        },
        {
          "name": "Cervejaria Fritz",
          "code": "FRITZ10",
          "discount": "10% Chope Alemão",
          "redeemed": 12,
          "tag": "Vila",
          "color": "var(--secondary)"
        }
      ],
      "agentFeed": [
        {
          "id": "agente_09",
          "archetype": "Casal Romântico",
          "time": "Sábado 20:10",
          "query": "Onde comer sequência de fondue artesanal?",
          "aiReply": "Villa Dona Gourmet com rodízio especial de queijos da Mantiqueira e chocolate belga.",
          "action": "Resgate de Cupom DONA15",
          "badgeColor": "rgba(167, 139, 250, 0.2)",
          "textColor": "#c4b5fd"
        }
      ]
    },
    "attractions": [
      {
        "id": 31,
        "name": "Trilha da Pedra Redonda",
        "category": "Aventura",
        "description": "Trilha acessível com passarelas de madeira levando ao cume de 1.990m com mirante panorâmico na divisa SP/MG.",
        "location": "Acesso pelo final da Av. das Montanhas",
        "hours": "Diariamente, das 8h às 16h",
        "price": "R$ 35,00",
        "rating": 4.9,
        "reviewsCount": 3450,
        "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Conquistador da Pedra Redonda (+60 XP)"
      },
      {
        "id": 32,
        "name": "Avenida Monte Verde (Centrinho)",
        "category": "Cultura",
        "description": "Boulevard alpino com empórios de queijo da Canastra, chocolaterias, cafeterias e lojas de malhas de lã.",
        "location": "Av. Monte Verde, Centro",
        "hours": "Comércio aberto diariamente",
        "price": "Gratuito",
        "rating": 4.8,
        "reviewsCount": 4200,
        "imageUrl": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Passeio Alpino Mineiro (+30 XP)"
      }
    ],
    "merchants": [
      {
        "id": 131,
        "name": "Villa Dona Gourmet",
        "category": "Gastronomia",
        "description": "Referência em gastronomia alpina e fondues servidos com aquecimento a lenha e vinhos finos.",
        "location": "Rua Rolinha, 33",
        "phone": "(35) 3438-2159",
        "whatsapp": "553534382159",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 940,
        "approved": true,
        "coupons": [
          {
            "id": "CMV1",
            "code": "DONA15",
            "description": "15% de desconto no Rodízio de Fondue",
            "limit": 80,
            "redeemed": 52,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 231,
        "name": "Festival de Inverno de Monte Verde",
        "description": "Concertos ao ar livre, apresentações teatrais e oficinas gastronômicas na avenida principal.",
        "date": "03 a 26 de Julho, 2026",
        "location": "Avenida Monte Verde",
        "category": "Música & Cultura",
        "active": true
      }
    ]
  },
  "ubatuba": {
    "id": "ubatuba",
    "slug": "ubatuba",
    "name": "Ubatuba",
    "uf": "SP",
    "tagline": "Capital Ecológica do Surfe & Mais de 100 Praias",
    "badge": "🏖️ Mais de 100 Praias & Mata Atlântica",
    "heroTitle": "O Sistema de Inteligência Territorial de Ubatuba",
    "heroSubtitle": "Conectando mais de 100 praias paradisíacas, o Projeto Tamar, passeios de barco e gastronomia caiçara na palma da mão pelo WhatsApp.",
    "temp": "24°C",
    "altitude": "5m",
    "population": "93.000 hab",
    "annualTourists": "1.8 milhões/ano",
    "publicServices": {
      "prefeitura": "(12) 3834-1000",
      "posto": "(12) 3834-3000 - Rua Conceição, 135 (Santa Casa & Pronto Socorro)",
      "policia": "190",
      "samu": "192",
      "salvaVidas": "193 (Bombeiros Marítimos / GBMar)",
      "centroTurismo": "(12) 3834-1550 - CIT Av. Iperoig"
    },
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil*, seu concierge oficial de **Ubatuba**! 🏖️\n\nPara eu te passar as melhores dicas sob medida: **quem está viajando com você hoje?**",
    "quickSuggestions": [
      "👨‍👩‍👧‍👦 Família com Crianças",
      "🏄 Surfe & Praias Selvagens",
      "🐢 Projeto Tamar & Passeios",
      "🐟 Gastronomia Caiçara",
      "O que fazer hoje?"
    ],
    "stats": {
      "activeVisitorsToday": 18500,
      "monthlyVisitors": 195000,
      "monthlyVisitorsChange": "+21.4%",
      "estimatedTourismRevenue": 54200000,
      "estimatedTourismRevenueChange": "+24.8%",
      "hotelOccupancyRate": 91.2,
      "hotelOccupancyRateChange": "+9.5%",
      "activeMerchants": 165,
      "averageSpending": {
        "hospedagem": 480,
        "alimentacao": 230,
        "compras": 150,
        "ingressos": 90
      },
      "visitorFlowChart": [
        {
          "month": "Jan",
          "visitors": 240000
        },
        {
          "month": "Fev",
          "visitors": 190000
        },
        {
          "month": "Mar",
          "visitors": 95000
        },
        {
          "month": "Abr",
          "visitors": 88000
        },
        {
          "month": "Mai",
          "visitors": 65000
        },
        {
          "month": "Jun",
          "visitors": 58000
        },
        {
          "month": "Jul",
          "visitors": 92000
        },
        {
          "month": "Ago",
          "visitors": 62000
        },
        {
          "month": "Set",
          "visitors": 75000
        },
        {
          "month": "Out",
          "visitors": 82000
        },
        {
          "month": "Nov",
          "visitors": 110000
        },
        {
          "month": "Dez",
          "visitors": 220000
        }
      ],
      "touristOrigin": [
        {
          "state": "São Paulo",
          "percentage": 82
        },
        {
          "state": "Minas Gerais",
          "percentage": 10
        },
        {
          "state": "Rio de Janeiro",
          "percentage": 5
        },
        {
          "state": "Outros",
          "percentage": 3
        }
      ]
    },
    "simulationStats": {
      "cityName": "Ubatuba",
      "totalAgents": 38,
      "totalQueries": 185,
      "couponsRedeemed": 55,
      "checkinsDone": 54,
      "totalXp": 2980,
      "stimulatedRevenue": 9640.0,
      "dispersionRate": 74.8,
      "dispersionAnalysis": "Descentralização eficaz de banhistas das praias centrais (Itaguá/Grande) em direção às praias do norte e ecoturismo.",
      "topicCounts": [
        {
          "name": "Praias & Ilhas",
          "count": 68,
          "pct": 36.8
        },
        {
          "name": "Gastronomia Caiçara",
          "count": 45,
          "pct": 24.3
        },
        {
          "name": "Projeto Tamar & Ecoturismo",
          "count": 32,
          "pct": 17.3
        },
        {
          "name": "Check-in Praias Preservadas",
          "count": 24,
          "pct": 13.0
        },
        {
          "name": "Pousadas Pé na Areia",
          "count": 16,
          "pct": 8.6
        }
      ],
      "merchantCoupons": [
        {
          "name": "Restaurante Peixe com Banana",
          "code": "BANANA15",
          "discount": "15% Prato Caiçara",
          "redeemed": 22,
          "tag": "Orla do Itaguá",
          "color": "var(--primary)"
        },
        {
          "name": "Pousada Kaliman",
          "code": "KALIMAN10",
          "discount": "10% Diária",
          "redeemed": 18,
          "tag": "Praia de Itamambuca",
          "color": "var(--secondary)"
        },
        {
          "name": "Ubatuba Surf Adventure",
          "code": "SURF20",
          "discount": "20% Aula de Surfe",
          "redeemed": 15,
          "tag": "Esporte Aquático",
          "color": "#f59e0b"
        }
      ],
      "agentFeed": [
        {
          "id": "agente_05",
          "archetype": "Família com Crianças",
          "time": "Sábado 10:15",
          "query": "Qual praia com mar calmo e quiosques para passar o dia?",
          "aiReply": "Praia do Lázaro ou Praia Domingas Dias, ambas com águas transparentes sem correnteza.",
          "action": "Check-in na Praia do Lázaro (+40 XP)",
          "badgeColor": "rgba(0, 196, 140, 0.2)",
          "textColor": "#00c48c"
        }
      ]
    },
    "attractions": [
      {
        "id": 41,
        "name": "Projeto Tamar Ubatuba",
        "category": "Natureza",
        "description": "Centro de conservação das tartarugas marinhas no Brasil, com tanques interativos e educação ambiental.",
        "location": "Rua Antonio Athanasio, 273 - Itaguá",
        "hours": "Quinta a terça, das 10h às 17h",
        "price": "R$ 38,00",
        "rating": 4.9,
        "reviewsCount": 4650,
        "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Amigo das Tartarugas (+50 XP)"
      },
      {
        "id": 42,
        "name": "Ilha das Couves",
        "category": "Aventura",
        "description": "Ilha paradisíaca com águas transparentes cor de esmeralda, excelente para snorkeling e trilhas curtas.",
        "location": "Acesso de barco saindo de Picinguaba",
        "hours": "Passeios das 8h às 16h",
        "price": "R$ 70,00 a R$ 100,00 (barco)",
        "rating": 4.9,
        "reviewsCount": 3980,
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Paraíso das Couves (+60 XP)"
      }
    ],
    "merchants": [
      {
        "id": 141,
        "name": "Restaurante Peixe com Banana",
        "category": "Gastronomia",
        "description": "Referência da culinária caiçara paulista. O tradicional peixe fresco com banana da terra e farofa de camarão.",
        "location": "Rua Guarani, 255 - Itaguá",
        "phone": "(12) 3832-1712",
        "whatsapp": "551238321712",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 1240,
        "approved": true,
        "coupons": [
          {
            "id": "CUB1",
            "code": "BANANA15",
            "description": "15% de desconto no Peixe com Banana",
            "limit": 100,
            "redeemed": 62,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 241,
        "name": "Festival da Tainha e Gastronomia Caiçara",
        "description": "Tradição gastronômica caiçara na orla do Itaguá com tainha assada na brasa e música regional.",
        "date": "03 a 19 de Julho, 2026",
        "location": "Praça de Eventos da Av. Iperoig",
        "category": "Gastronomia & Cultura",
        "active": true
      }
    ]
  },
  "saojosedoscampos": {
    "id": "saojosedoscampos",
    "slug": "sao-jose-dos-campos",
    "name": "São José dos Campos",
    "uf": "SP",
    "tagline": "Capital Tecnológica & Polo Aeroespacial do Vale",
    "badge": "🚀 Polo Aeroespacial & Mantiqueira (SFX)",
    "heroTitle": "O Sistema de Inteligência Territorial de São José dos Campos",
    "heroSubtitle": "Conectando o parque tecnológico, o refúgio ecológico de São Francisco Xavier, parques modernistas e a gastronomia joseense pelo WhatsApp.",
    "temp": "23°C",
    "altitude": "660m",
    "population": "730.000 hab",
    "annualTourists": "1.2 milhões/ano",
    "publicServices": {
      "prefeitura": "(12) 3947-8000",
      "posto": "(12) 3901-3500 - Hospital Municipal Dr. José de Carvalho Florence",
      "policia": "190",
      "samu": "192",
      "centroTurismo": "(12) 3947-8644 - Parque Vicentina Aranha"
    },
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil*, seu concierge oficial de **São José dos Campos**! 🚀\n\nPara eu te passar as melhores dicas sob medida: **quem está viajando com você hoje?**",
    "quickSuggestions": [
      "👨‍👩‍👧‍👦 Família com Crianças",
      "🌲 Distrito de São Francisco Xavier (SFX)",
      "💼 Viagem a Trabalho / Inovação",
      "🍺 Bares & Gastronomia Tradicional",
      "O que fazer hoje?"
    ],
    "stats": {
      "activeVisitorsToday": 11500,
      "monthlyVisitors": 112000,
      "monthlyVisitorsChange": "+12.6%",
      "estimatedTourismRevenue": 36800000,
      "estimatedTourismRevenueChange": "+15.2%",
      "hotelOccupancyRate": 82.4,
      "hotelOccupancyRateChange": "+4.8%",
      "activeMerchants": 120,
      "averageSpending": {
        "hospedagem": 390,
        "alimentacao": 180,
        "compras": 160,
        "ingressos": 55
      },
      "visitorFlowChart": [
        {
          "month": "Jan",
          "visitors": 75000
        },
        {
          "month": "Fev",
          "visitors": 68000
        },
        {
          "month": "Mar",
          "visitors": 92000
        },
        {
          "month": "Abr",
          "visitors": 98000
        },
        {
          "month": "Mai",
          "visitors": 105000
        },
        {
          "month": "Jun",
          "visitors": 115000
        },
        {
          "month": "Jul",
          "visitors": 138000
        },
        {
          "month": "Ago",
          "visitors": 110000
        },
        {
          "month": "Set",
          "visitors": 99000
        },
        {
          "month": "Out",
          "visitors": 104000
        },
        {
          "month": "Nov",
          "visitors": 108000
        },
        {
          "month": "Dez",
          "visitors": 120000
        }
      ],
      "touristOrigin": [
        {
          "state": "São Paulo",
          "percentage": 76
        },
        {
          "state": "Rio de Janeiro",
          "percentage": 12
        },
        {
          "state": "Minas Gerais",
          "percentage": 8
        },
        {
          "state": "Outros",
          "percentage": 4
        }
      ]
    },
    "simulationStats": {
      "cityName": "São José dos Campos",
      "totalAgents": 35,
      "totalQueries": 170,
      "couponsRedeemed": 49,
      "checkinsDone": 51,
      "totalXp": 2710,
      "stimulatedRevenue": 8340.0,
      "dispersionRate": 66.8,
      "dispersionAnalysis": "Desvio significativo de fluxo corporativo urbano em direção ao refúgio de ecoturismo em São Francisco Xavier.",
      "topicCounts": [
        {
          "name": "Parques & Vicentina Aranha",
          "count": 56,
          "pct": 32.9
        },
        {
          "name": "São Francisco Xavier (SFX)",
          "count": 48,
          "pct": 28.2
        },
        {
          "name": "Gastronomia & Bares",
          "count": 34,
          "pct": 20.0
        },
        {
          "name": "Polo Aeroespacial / DCTA",
          "count": 20,
          "pct": 11.8
        },
        {
          "name": "Hotéis & Convenções",
          "count": 12,
          "pct": 7.1
        }
      ],
      "merchantCoupons": [
        {
          "name": "Bar do Coronel",
          "code": "CORONEL10",
          "discount": "10% nos Famosos Bolinhos",
          "redeemed": 24,
          "tag": "Centro Histórico",
          "color": "var(--primary)"
        },
        {
          "name": "Villa Samaria SFX",
          "code": "SAMARIA15",
          "discount": "15% Almoço da Montanha",
          "redeemed": 16,
          "tag": "São Francisco Xavier",
          "color": "var(--secondary)"
        },
        {
          "name": "Pousada Céu de Estrelas SFX",
          "code": "ESTRELAS10",
          "discount": "10% Hospedagem",
          "redeemed": 9,
          "tag": "Chalés Serra",
          "color": "#a78bfa"
        }
      ],
      "agentFeed": [
        {
          "id": "agente_11",
          "archetype": "Família com Crianças",
          "time": "Sábado 10:00",
          "query": "Parque arborizado com espaço para piquenique e crianças?",
          "aiReply": "Parque Vicentina Aranha na Vila Adyana: pavilhões históricos e ampla área sombreada.",
          "action": "Check-in no Parque Vicentina Aranha (+45 XP)",
          "badgeColor": "rgba(0, 196, 140, 0.2)",
          "textColor": "#00c48c"
        },
        {
          "id": "agente_22",
          "archetype": "Casal Romântico",
          "time": "Sábado 15:30",
          "query": "Pousada com lareira e natureza em São Francisco Xavier?",
          "aiReply": "Pousada Céu de Estrelas com chalés nas montanhas e vista panorâmica para a Mantiqueira.",
          "action": "Resgate de Cupom ESTRELAS10",
          "badgeColor": "rgba(167, 139, 250, 0.2)",
          "textColor": "#c4b5fd"
        }
      ]
    },
    "attractions": [
      {
        "id": 51,
        "name": "Parque Vicentina Aranha",
        "category": "Cultura",
        "description": "Antigo sanatório do início do século XX projetado por Ramos de Azevedo, transformado em parque arborizado com capela neogótica e centro cultural.",
        "location": "Rua Eng. Prudente Meireles de Morais, 302 - Vila Adyana",
        "hours": "Diariamente, das 5h às 21h",
        "price": "Gratuito",
        "rating": 4.9,
        "reviewsCount": 5120,
        "imageUrl": "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Guardião do Vicentina (+45 XP)"
      },
      {
        "id": 52,
        "name": "Distrito de São Francisco Xavier (SFX)",
        "category": "Aventura",
        "description": "Vila charmosa na Serra da Mantiqueira pertencente a SJC, famosa por cachoeiras, trilhas na Pedra de São Francisco, ateliês e alta gastronomia.",
        "location": "Distrito de SFX (50km do centro de SJC)",
        "hours": "Acesso livre",
        "price": "Gratuito",
        "rating": 4.9,
        "reviewsCount": 3840,
        "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Conquistador de SFX (+60 XP)"
      },
      {
        "id": 53,
        "name": "Memorial Aeroespacial Brasileiro (MAB / DCTA)",
        "category": "Cultura",
        "description": "Museu ao ar livre com réplicas em tamanho real de foguetes do Programa Espacial Brasileiro, satélites, mísseis e o primeiro protótipo do avião Bandeirante.",
        "location": "Av. Brg. Faria Lima, s/n - Putim",
        "hours": "Terça a domingo, das 8h às 17h",
        "price": "Gratuito",
        "rating": 4.7,
        "reviewsCount": 2190,
        "imageUrl": "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Pioneiro do Espaço (+50 XP)"
      },
      {
        "id": 54,
        "name": "Parque da Cidade Roberto Burle Marx",
        "category": "Natureza",
        "description": "Antiga Fazenda da Tecelagem Paraíba, com jardins projetados por Roberto Burle Marx, lago com ilha, bosques de palmeiras e centro de convivência.",
        "location": "Av. Olivo Gomes, 100 - Santana",
        "hours": "Diariamente, das 6h às 18h",
        "price": "Gratuito",
        "rating": 4.8,
        "reviewsCount": 3410,
        "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Caminho das Palmeiras (+35 XP)"
      }
    ],
    "merchants": [
      {
        "id": 151,
        "name": "Bar do Coronel",
        "category": "Gastronomia",
        "description": "Patrimônio gastronômico joseense desde 1993, famoso pelos bolinhos artesanais de bacalhau e feijoada tradicional.",
        "location": "Rua Francisco Rafael, 298 - Centro",
        "phone": "(12) 3921-3141",
        "whatsapp": "551239213141",
        "imageUrl": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 1820,
        "approved": true,
        "coupons": [
          {
            "id": "CSJC1",
            "code": "CORONEL10",
            "description": "10% de desconto na porção mista de bolinhos",
            "limit": 120,
            "redeemed": 78,
            "active": true
          }
        ]
      },
      {
        "id": 152,
        "name": "Villa Samaria Restaurante SFX",
        "category": "Gastronomia",
        "description": "Gastronomia contemporânea da Mantiqueira, servindo trutas com crosta de castanhas e massas frescas em meio à mata de SFX.",
        "location": "Estrada do Pedro David, Km 8 - SFX",
        "phone": "(12) 3926-1120",
        "whatsapp": "551239261120",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.8,
        "reviewsCount": 740,
        "approved": true,
        "coupons": [
          {
            "id": "CSJC2",
            "code": "SAMARIA15",
            "description": "15% de desconto no Prato Principal de Truta com Pinhão",
            "limit": 80,
            "redeemed": 41,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 251,
        "name": "Festival de Inverno de São Francisco Xavier",
        "description": "Apresentações de jazz, música instrumental e feira de produtores rurais de azeite e queijo da Mantiqueira.",
        "date": "10 a 26 de Julho, 2026",
        "location": "Praça Central de São Francisco Xavier",
        "category": "Música & Cultura",
        "active": true
      }
    ]
  },
  "pindamonhangaba": {
    "id": "pindamonhangaba",
    "slug": "pindamonhangaba",
    "name": "Pindamonhangaba",
    "uf": "SP",
    "tagline": "Princesa do Norte • Roteiros Históricos e Rurais da Mantiqueira",
    "badge": "🏛️ Patrimônio Histórico & Ecoturismo Rural",
    "heroTitle": "O Sistema de Inteligência Territorial de Pindamonhangaba",
    "heroSubtitle": "Conectando o Bosque da Princesa, a Fazenda Nova Gokula, a Estrada de Ferro e a gastronomia caipira pelo WhatsApp.",
    "temp": "22°C",
    "altitude": "550m",
    "population": "170.000 hab",
    "annualTourists": "520.000/ano",
    "publicServices": {
      "prefeitura": "(12) 3644-5600",
      "posto": "(12) 3644-2000 - Pronto Socorro Municipal (Rua Frederico Machado)",
      "policia": "190",
      "samu": "192",
      "centroTurismo": "(12) 3643-1761 - Palacete 10 de Julho"
    },
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil*, seu concierge oficial de **Pindamonhangaba**! 🏛️\n\nPara eu te passar as melhores dicas sob medida: **quem está viajando com você hoje?**",
    "quickSuggestions": [
      "👨‍👩‍👧‍👦 Família com Crianças",
      "🏛️ História & Bosque da Princesa",
      "🧘 Retiro & Nova Gokula",
      "🥘 Sabores & Comida Caipira",
      "O que fazer hoje?"
    ],
    "stats": {
      "activeVisitorsToday": 5400,
      "monthlyVisitors": 53000,
      "monthlyVisitorsChange": "+14.8%",
      "estimatedTourismRevenue": 16400000,
      "estimatedTourismRevenueChange": "+18.1%",
      "hotelOccupancyRate": 81.5,
      "hotelOccupancyRateChange": "+5.5%",
      "activeMerchants": 88,
      "averageSpending": {
        "hospedagem": 310,
        "alimentacao": 150,
        "compras": 110,
        "ingressos": 40
      },
      "visitorFlowChart": [
        {
          "month": "Jan",
          "visitors": 42000
        },
        {
          "month": "Fev",
          "visitors": 36000
        },
        {
          "month": "Mar",
          "visitors": 31000
        },
        {
          "month": "Abr",
          "visitors": 44000
        },
        {
          "month": "Mai",
          "visitors": 49000
        },
        {
          "month": "Jun",
          "visitors": 58000
        },
        {
          "month": "Jul",
          "visitors": 72000
        },
        {
          "month": "Ago",
          "visitors": 49000
        },
        {
          "month": "Set",
          "visitors": 42000
        },
        {
          "month": "Out",
          "visitors": 46000
        },
        {
          "month": "Nov",
          "visitors": 48000
        },
        {
          "month": "Dez",
          "visitors": 59000
        }
      ],
      "touristOrigin": [
        {
          "state": "São Paulo",
          "percentage": 78
        },
        {
          "state": "Rio de Janeiro",
          "percentage": 11
        },
        {
          "state": "Minas Gerais",
          "percentage": 7
        },
        {
          "state": "Outros",
          "percentage": 4
        }
      ]
    },
    "simulationStats": {
      "cityName": "Pindamonhangaba",
      "totalAgents": 32,
      "totalQueries": 154,
      "couponsRedeemed": 44,
      "checkinsDone": 46,
      "totalXp": 2420,
      "stimulatedRevenue": 7180.0,
      "dispersionRate": 70.2,
      "dispersionAnalysis": "Forte direcionamento de fluxo turístico do centro histórico para a Rota dos Tropeiros no Bairro do Ribeirão Grande.",
      "topicCounts": [
        {
          "name": "Bosque da Princesa & Margens do Rio",
          "count": 52,
          "pct": 33.8
        },
        {
          "name": "Fazenda Nova Gokula & Retiros",
          "count": 42,
          "pct": 27.3
        },
        {
          "name": "Gastronomia Caipira & Fogão a Lenha",
          "count": 32,
          "pct": 20.8
        },
        {
          "name": "Palacete 10 de Julho & Museu",
          "count": 18,
          "pct": 11.7
        },
        {
          "name": "Passeio de Trem da Serra",
          "count": 10,
          "pct": 6.5
        }
      ],
      "merchantCoupons": [
        {
          "name": "Restaurante Colmeia da Terra",
          "code": "COLMEIA15",
          "discount": "15% Almoço Caipira no Fogão a Lenha",
          "redeemed": 21,
          "tag": "Ribeirão Grande",
          "color": "var(--primary)"
        },
        {
          "name": "Armazém do Pão & Empório",
          "code": "ARMAZEM10",
          "discount": "10% Café Colonial da Tarde",
          "redeemed": 14,
          "tag": "Centro",
          "color": "var(--secondary)"
        },
        {
          "name": "Cervejaria Pindaíba",
          "code": "PINDAIBA",
          "discount": "Caneca de Chopp Cortesia",
          "redeemed": 9,
          "tag": "Artesanal",
          "color": "#f59e0b"
        }
      ],
      "agentFeed": [
        {
          "id": "agente_08",
          "archetype": "Família com Crianças",
          "time": "Sábado 10:30",
          "query": "Lugar sombreado com parquinho para passar a manhã?",
          "aiReply": "Bosque da Princesa com árvores centenárias às margens do Rio Paraíba do Sul e aluguel de pedalinho.",
          "action": "Check-in no Bosque da Princesa (+40 XP)",
          "badgeColor": "rgba(0, 196, 140, 0.2)",
          "textColor": "#00c48c"
        },
        {
          "id": "agente_17",
          "archetype": "Ecoturista / Retiro",
          "time": "Sábado 14:00",
          "query": "Como visitar a comunidade ecológica de Nova Gokula?",
          "aiReply": "Acesso pela Estrada do Ribeirão Grande: comunidade védica com restaurante vegetariano, vacaria e banho de rio cristalino.",
          "action": "Check-in em Nova Gokula (+50 XP)",
          "badgeColor": "rgba(56, 189, 248, 0.2)",
          "textColor": "#38bdf8"
        }
      ]
    },
    "attractions": [
      {
        "id": 61,
        "name": "Bosque da Princesa",
        "category": "Natureza",
        "description": "Parque municipal centenário às margens do Rio Paraíba do Sul, com mais de 500 espécies de árvores nativas, lago com pedalinho, parquinho infantil e biblioteca.",
        "location": "Rua Barão da Princesa, Centro",
        "hours": "Diariamente, das 7h às 18h",
        "price": "Gratuito",
        "rating": 4.8,
        "reviewsCount": 3120,
        "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Amigo do Bosque (+40 XP)"
      },
      {
        "id": 62,
        "name": "Fazenda Nova Gokula",
        "category": "Cultura",
        "description": "A maior comunidade Hare Krishna da América Latina, situada em área de proteção ambiental na Serra da Mantiqueira, com templo, trilhas e culinária vegetariana.",
        "location": "Estrada Municipal Jesus Antônio de Miranda, Km 8 - Ribeirão Grande",
        "hours": "Sábados, domingos e feriados, das 9h às 17h",
        "price": "R$ 10,00 (estacionamento)",
        "rating": 4.9,
        "reviewsCount": 2780,
        "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Paz na Mantiqueira (+50 XP)"
      },
      {
        "id": 63,
        "name": "Palacete 10 de Julho",
        "category": "Cultura",
        "description": "Casarão neoclássico construído pelo Barão de Itapeva no século XIX, que hospedou a Princesa Isabel e o Conde d'Eu, hoje restaurado como centro cultural.",
        "location": "Rua Dep. Claro César, 33 - Centro",
        "hours": "Segunda a sexta, das 8h às 17h",
        "price": "Gratuito",
        "rating": 4.7,
        "reviewsCount": 1150,
        "imageUrl": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Patrimônio Imperial (+35 XP)"
      },
      {
        "id": 64,
        "name": "Estação Ferroviária de Pindamonhangaba (EFCJ)",
        "category": "Cultura",
        "description": "Ponto de partida dos trens turísticos que sobem a serra rumo a Santo Antônio do Pinhal e Campos do Jordão, com acervo histórico ferroviário.",
        "location": "Rua Engenheiro Central, 160",
        "hours": "Quarta a domingo, das 8h às 17h",
        "price": "Consulta na bilheteria",
        "rating": 4.6,
        "reviewsCount": 1890,
        "imageUrl": "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Nos Trilhos da Serra (+40 XP)"
      }
    ],
    "merchants": [
      {
        "id": 161,
        "name": "Restaurante Colmeia da Terra",
        "category": "Gastronomia",
        "description": "Famoso almoço caipira no fogão a lenha, leitoa à pururuca, tutu de feijão, frango com quiabo e doces caseiros típicos.",
        "location": "Estrada do Ribeirão Grande, Km 4",
        "phone": "(12) 3645-1212",
        "whatsapp": "551236451212",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 920,
        "approved": true,
        "coupons": [
          {
            "id": "CPIN1",
            "code": "COLMEIA15",
            "description": "15% de desconto no almoço colonial no fogão a lenha",
            "limit": 100,
            "redeemed": 55,
            "active": true
          }
        ]
      },
      {
        "id": 162,
        "name": "Cervejaria Pindaíba",
        "category": "Gastronomia",
        "description": "Cervejaria artesanal local com chope puro malte, petiscos da serra e música ao vivo aos finais de semana.",
        "location": "Av. Albuquerque Lins, 450",
        "phone": "(12) 99744-1188",
        "whatsapp": "5512997441188",
        "imageUrl": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
        "rating": 4.7,
        "reviewsCount": 610,
        "approved": true,
        "coupons": [
          {
            "id": "CPIN2",
            "code": "PINDAIBA",
            "description": "Pague 1 leve 2 no chope artesanal 500ml",
            "limit": 80,
            "redeemed": 46,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 261,
        "name": "Festival das Nações de Pindamonhangaba",
        "description": "Gastronomia típica mundial, danças folclóricas e apresentações culturais no Parque da Cidade.",
        "date": "18 a 21 de Junho, 2026",
        "location": "Parque da Cidade de Pindamonhangaba",
        "category": "Cultura & Gastronomia",
        "active": true
      }
    ]
  }
};

function resolveInitialCityId() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const param = (urlParams.get('cidade') || urlParams.get('city') || urlParams.get('tenant') || '').toLowerCase().trim();
    if (param) {
      for (const [key, city] of Object.entries(CITIES_DATA)) {
        if (key === param || city.slug === param || city.name.toLowerCase().replace(/[^a-z0-9]/g, '') === param.replace(/[^a-z0-9]/g, '')) {
          return key;
        }
      }
    }
    const stored = safeStorage.get('guia_facil_active_city');
    if (stored && CITIES_DATA[stored]) return stored;
  } catch (e) {}
  return 'camposdojordao';
}

function getCurrentCity() {
  return CITIES_DATA[state.activeCityId] || CITIES_DATA['camposdojordao'];
}

// ==========================================
// ESTADO GLOBAL DA APLICAÇÃO (SPA STATE)
// ==========================================

const state = {
  activeCityId: resolveInitialCityId(),
  cityModalOpen: false,
  activePortal: 'landing', // landing, visitor, merchant, manager, simulation
  visitorXp: 120,
  backendOnline: false,
  
  // Perfil do Turista no WhatsApp (identificação básica para recomendações sob medida)
  touristProfile: null, // 'familia', 'casal', 'aventura', 'gastronomia', 'amigos'
  
  // Autenticação do comerciante
  merchantLogged: false,
  merchantUser: null,
  loginError: null,
  
  // Chat WhatsApp do Turista
  chatMessages: [],
  chatInput: '',
  chatTyping: false,
  
  // Database slices inicializadas pela cidade ativa
  attractions: [],
  merchants: [],
  events: [],
  stats: {},
  
  // UI internal states
  visitorTab: 'explorar',
  visitorSearch: '',
  visitorCategory: 'Todos',
  selectedMapItem: null,
  modalMessage: null,
  
  selectedMerchantId: 101,
  saveSuccess: false,
  couponSuccess: false,
  
  selectedMonth: 6,
  eventSuccess: false,
  
  // MiroFish Swarm Simulation State
  simulationRunning: false,
  simulationStats: {}
};

// Sincronizar dados da cidade ativa no state
function syncCityData(cityId) {
  const city = CITIES_DATA[cityId] || CITIES_DATA['camposdojordao'];
  state.activeCityId = city.id;
  state.attractions = JSON.parse(JSON.stringify(city.attractions || []));
  state.merchants = JSON.parse(JSON.stringify(city.merchants || []));
  state.events = JSON.parse(JSON.stringify(city.events || []));
  state.stats = JSON.parse(JSON.stringify(city.stats || {}));
  state.simulationStats = JSON.parse(JSON.stringify(city.simulationStats || {}));

  // Carregar comerciantes customizados cadastrados no Supabase / LocalStorage
  if (window.supabaseService) {
    window.supabaseService.getSavedMerchants(city.id).then(saved => {
      if (saved && saved.length > 0) {
        saved.forEach(sm => {
          const idx = state.merchants.findIndex(m => m.id === sm.id || m.email === sm.email);
          if (idx >= 0) {
            state.merchants[idx] = { ...state.merchants[idx], ...sm };
          } else {
            state.merchants.unshift(sm);
          }
        });
        if (state.activePortal === 'merchant' || state.activePortal === 'visitor') {
          renderApp();
        }
      }
    });
  }

  if (state.merchants.length > 0) {
    state.selectedMerchantId = state.merchants[0].id;
  }
}
syncCityData(state.activeCityId);

// Inicializar mensagens padrão do chat do WhatsApp se estiver vazio
function resetChatForCity() {
  const city = getCurrentCity();
  state.chatMessages = [
    {
      sender: 'assistant',
      text: city.chatWelcome,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: true
    }
  ];
}
resetChatForCity();

// Recuperar sessão de lojista se persistida
try {
  const storedUser = safeStorage.get('guia_facil_merchant_user');
  const storedMerchantId = safeStorage.get('guia_facil_merchant_id');
  if (storedUser && storedMerchantId) {
    state.merchantLogged = true;
    state.merchantUser = JSON.parse(storedUser);
    state.selectedMerchantId = Number(storedMerchantId) || storedMerchantId;
  }
} catch (e) {
  console.warn("Falha ao recuperar sessão:", e);
}

// ==========================================
// FUNÇÕES DE NAVEGAÇÃO & SAAS MULTICIDADES
// ==========================================

function switchCity(cityId, pushState = true) {
  if (!CITIES_DATA[cityId]) return;
  safeStorage.set('guia_facil_active_city', cityId);
  syncCityData(cityId);
  resetChatForCity();
  state.cityModalOpen = false;

  if (pushState && window.history && window.history.replaceState) {
    const url = new URL(window.location.href);
    url.searchParams.set('cidade', cityId);
    window.history.replaceState({}, '', url.toString());
  }

  renderApp();
}

function openCityModal() {
  state.cityModalOpen = true;
  renderApp();
}

function closeCityModal() {
  state.cityModalOpen = false;
  renderApp();
}

function copyGeneralTestLink() {
  let generalUrl = '';
  if (window.location.origin && window.location.origin !== 'null' && (window.location.protocol || '').startsWith('http')) {
    generalUrl = `${window.location.origin}${window.location.pathname}`;
  } else {
    generalUrl = 'http://127.0.0.1:8080/';
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(generalUrl);
  }

  state.modalMessage = {
    title: `Link Geral de Demonstração Copiado! 🌐`,
    text: `Link geral da plataforma copiado com sucesso:<br><br><div style="background: rgba(0,0,0,0.5); padding: 10px 14px; border-radius: 8px; font-family: monospace; font-size: 13px; color: #a78bfa; word-break: break-all;">${generalUrl}</div><br>Envie este link para qualquer pessoa testar. Ela poderá alternar livremente entre qualquer um dos municípios cadastrados no topo da página.`,
    reward: `Ambiente de Homologação Guia Fácil`,
    medal: null
  };
  renderApp();
}

function copyCityTestLink(cityId) {
  const city = CITIES_DATA[cityId] || getCurrentCity();
  let testUrl = '';
  if (window.location.origin && window.location.origin !== 'null' && (window.location.protocol || '').startsWith('http')) {
    testUrl = `${window.location.origin}${window.location.pathname}?cidade=${city.id}`;
  } else {
    testUrl = `http://localhost:8080/?cidade=${city.id}`;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(testUrl);
  }

  state.modalMessage = {
    title: `Link de Teste Copiado! 🔗`,
    text: `Link direto para a edição de <strong>${city.name} (${city.uf})</strong> copiado com sucesso:<br><br><div style="background: rgba(0,0,0,0.5); padding: 10px 14px; border-radius: 8px; font-family: monospace; font-size: 13px; color: #00c48c; word-break: break-all;">${testUrl}</div><br>Envie este link para a Secretaria de Turismo, Prefeitura ou Comércio da cidade testarem!`,
    reward: `SaaS Multi-Tenant: ${city.name}`,
    medal: null
  };
  renderApp();
}

function setActivePortal(portal) {
  state.activePortal = portal;
  
  if (portal === 'merchant') {
    if (!state.merchantLogged) {
      state.loginError = null;
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function setVisitorTab(tab) {
  state.visitorTab = tab;
  renderApp();
}

function setVisitorSearch(val) {
  state.visitorSearch = val;
  renderApp();
}

function setVisitorCategory(cat) {
  state.visitorCategory = cat;
  renderApp();
}

function selectMapItem(item) {
  state.selectedMapItem = item;
  renderApp();
}

function closeModal() {
  state.modalMessage = null;
  renderApp();
}

function changeMerchant(id) {
  state.selectedMerchantId = Number(id);
  state.saveSuccess = false;
  state.couponSuccess = false;
  renderApp();
}

async function saveProfile(e) {
  e.preventDefault();
  const merchant = state.merchants.find(m => m.id === state.selectedMerchantId) || state.merchants[0];
  if (!merchant) return;

  const name = document.getElementById('m-name')?.value.trim() || merchant.name;
  const category = document.getElementById('m-cat')?.value || merchant.category;
  const description = document.getElementById('m-desc')?.value.trim() || merchant.description;
  const location = document.getElementById('m-loc')?.value.trim() || merchant.location;
  const phone = document.getElementById('m-phone')?.value.trim() || merchant.phone;
  const whatsapp = document.getElementById('m-wpp')?.value.trim().replace(/[^0-9]/g, '') || merchant.whatsapp;
  const hours = document.getElementById('m-hours')?.value.trim() || merchant.hours;
  const imageUrl = document.getElementById('m-img')?.value.trim() || merchant.imageUrl;

  const updatedData = {
    ...merchant,
    name,
    category,
    description,
    location,
    phone,
    whatsapp,
    hours,
    imageUrl,
    approved: true
  };

  // Atualiza estado local
  const idx = state.merchants.findIndex(m => m.id === merchant.id);
  if (idx >= 0) {
    state.merchants[idx] = updatedData;
  }

  // Salva no Supabase / LocalStorage
  if (window.supabaseService) {
    await window.supabaseService.saveMerchant(updatedData, state.activeCityId);
  }

  state.saveSuccess = true;
  state.modalMessage = {
    title: "Dados Salvos & Ativos no WhatsApp! 🚀",
    text: `O estabelecimento <strong>${name}</strong> foi atualizado com sucesso. O Agente de IA do WhatsApp da cidade já começou a recomendar sua empresa e seus cupons para os turistas!`,
    reward: "+50 XP Comercial",
    medal: "Empresa Parceira Homologada"
  };

  renderApp();
}

async function addNewCoupon(e) {
  e.preventDefault();
  const merchant = state.merchants.find(m => m.id === state.selectedMerchantId);
  if (!merchant) return;

  const code = document.getElementById('c-code').value.trim().toUpperCase();
  const description = document.getElementById('c-desc').value.trim();
  const limit = parseInt(document.getElementById('c-limit').value) || 50;

  if (!code || !description) return;

  const newCoupon = {
    id: `CP_${Date.now()}`,
    code,
    description,
    limit,
    redeemed: 0,
    active: true
  };

  if (!merchant.coupons) merchant.coupons = [];
  merchant.coupons.push(newCoupon);

  // Salva no Supabase / LocalStorage
  if (window.supabaseService) {
    await window.supabaseService.saveMerchant(merchant, state.activeCityId);
  }

  state.couponSuccess = true;
  document.getElementById('coupon-form')?.reset();
  
  state.modalMessage = {
    title: "Cupom Criado!",
    text: `O cupom <strong>${code}</strong> foi publicado. A IA do WhatsApp passará a oferecer essa promoção aos turistas que solicitarem descontos.`,
    reward: "+30 XP de Incentivo",
    medal: null
  };

  renderApp();
}

async function redeemCoupon(merchantId, couponId) {
  const merchant = state.merchants.find(m => m.id === Number(merchantId) || m.id === merchantId);
  if (!merchant) return;

  const coupon = (merchant.coupons || []).find(c => c.id === couponId || c.code === couponId);
  if (!coupon || !coupon.active) return;

  coupon.redeemed = (coupon.redeemed || 0) + 1;
  merchant.couponsRedeemed = (merchant.couponsRedeemed || 0) + 1;
  state.visitorXp += 15;

  state.modalMessage = {
    title: "Cupom Resgatado! 🎉",
    text: `Você desbloqueou: <strong>${coupon.description}</strong> em <strong>${merchant.name}</strong>.<br>Apresente o código <strong>${coupon.code}</strong> no caixa ou envie pelo WhatsApp!`,
    reward: "+15 XP de Turista",
    medal: null
  };

  renderApp();
}

function checkIn(attractionId) {
  const a = state.attractions.find(item => item.id === Number(attractionId));
  if (!a) return;

  const xpReward = a.check_in_reward_xp || 40;
  state.visitorXp += xpReward;

  state.modalMessage = {
    title: "Check-in Confirmado! 📍",
    text: `Presença verificada no território municipal de ${getCurrentCity().name} em: <strong>${a.name}</strong>.`,
    reward: `+${xpReward} XP de Desbravador`,
    medal: a.checkInReward || "Explorador da Cidade"
  };

  renderApp();
}

function approveMerchant(id) {
  const m = state.merchants.find(item => item.id === Number(id));
  if (m) {
    m.approved = true;
    state.stats.activeMerchants = state.merchants.filter(x => x.approved).length;
    renderApp();
  }
}

function createNewEvent(e) {
  e.preventDefault();
  const name = document.getElementById('e-name').value.trim();
  const date = document.getElementById('e-date').value.trim();
  const location = document.getElementById('e-loc').value.trim();
  const category = document.getElementById('e-cat').value;
  const description = document.getElementById('e-desc').value.trim();

  if (!name || !date || !location) return;

  const newEv = {
    id: Date.now(),
    name,
    date,
    location,
    category,
    description,
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    active: true
  };

  state.events.unshift(newEv);
  state.eventSuccess = true;
  document.getElementById('event-form')?.reset();
  renderApp();
}

function changeMonth(mIndex) {
  state.selectedMonth = mIndex;
  renderApp();
}

// Executar Nova Rodada da Simulação MiroFish
async function triggerSimulation() {
  if (state.simulationRunning) return;
  state.simulationRunning = true;
  renderApp();

  await new Promise(r => setTimeout(r, 1200));

  const stats = state.simulationStats;
  stats.totalQueries = (stats.totalQueries || 150) + 14;
  stats.couponsRedeemed = (stats.couponsRedeemed || 40) + 6;
  stats.checkinsDone = (stats.checkinsDone || 42) + 5;
  stats.totalXp = (stats.totalXp || 2400) + 210;
  stats.stimulatedRevenue = (stats.stimulatedRevenue || 7000) + 640.50;

  state.simulationRunning = false;
  state.modalMessage = {
    title: 'Nova Rodada de Enxame Executada!',
    text: `O motor MiroFish processou 14 novas interações de turistas sintéticos em ${getCurrentCity().name}. A descentralização territorial e a conversão de cupons foram recalculadas.`,
    reward: '+140 XP de Inteligência Territorial',
    medal: 'Mestre da Simulação Preditiva'
  };
  renderApp();
}

// ==========================================
// AUTENTICAÇÃO FLEXÍVEL DO COMERCIANTE
// ==========================================

function getMerchantLoginHtml() {
  const errorAlert = state.loginError ? `
    <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid rgba(239, 68, 68, 0.3); color: #ef4444; padding: 12px 16px; border-radius: 12px; margin-bottom: 20px; font-size: 13px; text-align: center;">
      ${state.loginError}
    </div>
  ` : '';

  const city = getCurrentCity();

  return `
    <div class="animate-fade-in" style="max-width: 500px; margin: 50px auto; padding: 0 20px;">
      <div class="glass-panel" style="padding: 40px; border-radius: 24px; background: rgba(16, 20, 32, 0.9); border: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);">
        <div style="text-align: center; margin-bottom: 28px;">
          <div style="display: inline-flex; align-items: center; justify-content: center; width: 64px; height: 64px; border-radius: 18px; background: rgba(0, 196, 140, 0.12); color: var(--primary); margin-bottom: 16px;">
            <i data-lucide="store" style="width: 32px; height: 32px;"></i>
          </div>
          <h2 style="font-size: 26px; font-weight: 700; color: white;">Área do Comerciante</h2>
          <p style="color: var(--text-secondary); font-size: 14px; margin-top: 8px;">
            Acesse ou cadastre seu estabelecimento em <strong>${city.name}</strong>. Suas informações e cupons serão recomendados pela IA do WhatsApp!
          </p>
        </div>

        ${errorAlert}

        <form id="merchant-login-form" onsubmit="app.handleMerchantLogin(event)">
          <div class="form-group" style="margin-bottom: 18px;">
            <label class="form-label">E-mail do Estabelecimento</label>
            <input 
              type="email" 
              id="login-email" 
              class="form-input" 
              placeholder="seu-estabelecimento@exemplo.com" 
              required 
              style="padding: 12px 16px; background: rgba(30, 41, 59, 0.5);"
            />
            <span style="font-size: 11px; color: var(--text-muted); margin-top: 4px; display: block;">
              💡 Digite qualquer e-mail para entrar ou criar um perfil comercial novo.
            </span>
          </div>

          <div class="form-group" style="margin-bottom: 24px;">
            <label class="form-label">Senha de Acesso</label>
            <input 
              type="password" 
              id="login-password" 
              class="form-input" 
              placeholder="Digite sua senha (ou crie uma agora)" 
              required 
              style="padding: 12px 16px; background: rgba(30, 41, 59, 0.5);"
            />
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; padding: 13px; font-weight: 700; font-size: 15px; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: 12px;">
            <i data-lucide="log-in" style="width: 18px; height: 18px;"></i> Acessar / Cadastrar Empresa
          </button>
        </form>
        
        <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center;">
          <span style="font-size: 12px; color: var(--text-muted);">
            Sincronização em Nuvem: <strong>Supabase</strong> & LocalStorage
          </span>
        </div>
      </div>
    </div>
  `;
}

async function handleMerchantLogin(e) {
  e.preventDefault();
  const emailInput = document.getElementById('login-email');
  const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
  const password = document.getElementById('login-password')?.value || '12345';
  state.loginError = null;

  if (!email) return;

  // 1. Procura se já existe um comerciante na cidade com esse e-mail
  let matchedMerchant = state.merchants.find(m => (m.email || '').toLowerCase() === email);

  // 2. Se não existir, provisiona imediatamente um novo comerciante para o usuário
  if (!matchedMerchant) {
    const namePart = email.split('@')[0].replace(/[._-]/g, ' ');
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    
    matchedMerchant = {
      id: Date.now(),
      email,
      name: `Comércio ${formattedName}`,
      category: 'Gastronomia',
      description: `Estabelecimento comercial acolhedor credenciado no Guia Fácil de ${getCurrentCity().name}.`,
      location: `Centro Comercial, ${getCurrentCity().name}`,
      phone: "(12) 99999-0000",
      whatsapp: "5512999990000",
      hours: "Terça a domingo, das 11h às 22h",
      imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
      rating: 5.0,
      reviewsCount: 1,
      approved: true,
      viewsThisWeek: 45,
      whatsappClicks: 12,
      couponsRedeemed: 0,
      reviews: [
        { user: "Turista Verificado", rating: 5, comment: "Atendimento excelente! Recomendo a visita.", date: "Hoje" }
      ],
      coupons: [
        { id: `C_${Date.now()}`, code: "BEMVINDO10", description: "10% de desconto na primeira visita", limit: 50, redeemed: 0, active: true }
      ]
    };

    state.merchants.unshift(matchedMerchant);

    // Persiste no Supabase / LocalStorage
    if (window.supabaseService) {
      window.supabaseService.saveMerchant(matchedMerchant, state.activeCityId);
    }
  }

  // 3. Define usuário logado
  const user = {
    id: `u-${matchedMerchant.id}`,
    email,
    name: matchedMerchant.name,
    role: 'merchant'
  };

  state.merchantLogged = true;
  state.merchantUser = user;
  state.selectedMerchantId = matchedMerchant.id;
  safeStorage.set('guia_facil_merchant_user', JSON.stringify(user));
  safeStorage.set('guia_facil_merchant_id', matchedMerchant.id);

  renderApp();
}

function handleMerchantLogout() {
  state.merchantLogged = false;
  state.merchantUser = null;
  safeStorage.remove('guia_facil_token');
  safeStorage.remove('guia_facil_merchant_user');
  safeStorage.remove('guia_facil_merchant_id');
  renderApp();
}

// ==========================================
// CONCIERGE DO TURISTA NO WHATSAPP
// ==========================================

function setTouristProfile(profileKey) {
  state.touristProfile = profileKey;
  const profileLabels = {
    'casal': 'Casal Romântico',
    'familia': 'Família com Crianças',
    'aventura': 'Ecoturismo & Aventura',
    'gastronomia': 'Alta Gastronomia',
    'amigos': 'Amigos / Econômico'
  };

  const label = profileLabels[profileKey] || profileKey;
  state.chatMessages.push({
    sender: 'user',
    text: `Meu perfil de viagem: ${label}`,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    read: true
  });

  state.chatTyping = true;
  renderApp();

  setTimeout(() => {
    const city = getCurrentCity();
    let reply = `Excelente! Salvei seu perfil como *${label}*. Agora vou filtrar apenas as recomendações sob medida para você em ${city.name}!\n\nO que você gostaria de explorar primeiro? Digite por exemplo:\n• _"O que fazer à tarde?"_\n• _"Onde almoçar?"_\n• _"Pousadas recomendadas"_\n• _"Quero cupons de desconto"_`;
    
    state.chatMessages.push({
      sender: 'assistant',
      text: reply,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: true
    });
    state.chatTyping = false;
    renderApp();
  }, 600);
}

function getLocalChatReply(message) {
  const prompt = message.toLowerCase().trim();
  const city = getCurrentCity();
  const profile = state.touristProfile || 'geral';
  let reply = '';

  // 1. Gastronomia / Onde comer (prioridade quando cita alimentação e restaurantes)
  if (
    prompt.includes('comer') ||
    prompt.includes('almoçar') ||
    prompt.includes('almocar') ||
    prompt.includes('almoço') ||
    prompt.includes('almoco') ||
    prompt.includes('jantar') ||
    prompt.includes('petiscar') ||
    prompt.includes('petisco') ||
    prompt.includes('pizza') ||
    prompt.includes('lanche') ||
    prompt.includes('bar') ||
    prompt.includes('café') ||
    prompt.includes('cafe') ||
    prompt.includes('restaurante') ||
    prompt.includes('gastronomia') ||
    prompt.includes('fondue') ||
    prompt.includes('truta') ||
    prompt.includes('chopp') ||
    prompt.includes('cervejaria') ||
    prompt.includes('peixe') ||
    prompt.includes('fome')
  ) {
    reply = `🍴 *Onde comer em ${city.name}:*\n\n`;
    const foodMerchants = state.merchants.filter(m => m.approved && (m.category === 'Gastronomia' || m.category === 'Comércio')).slice(0, 3);
    
    if (foodMerchants.length > 0) {
      foodMerchants.forEach((m, i) => {
        reply += `${i + 1}. *${m.name}*\n   📍 ${m.location}\n   📝 _${m.description.substring(0, 90)}..._\n   💬 WhatsApp: https://wa.me/${m.whatsapp}\n\n`;
      });
      reply += `🏷️ Digite *'cupons'* para ver ofertas ativas nesses locais!`;
    } else {
      reply += `Consulte nossos comércios parceiros no painel municipal.`;
    }
  }
  // 2. Atrativos / O que fazer / Passeios (respostas enxutas, 2 a 3 itens)
  else if (
    prompt.includes('o que fazer') ||
    prompt.includes('atrativo') ||
    prompt.includes('turismo') ||
    prompt.includes('visitar') ||
    prompt.includes('passeio') ||
    prompt.includes('tarde') ||
    prompt.includes('manhã') ||
    prompt.includes('manha') ||
    prompt.includes('noite') ||
    prompt.includes('hoje')
  ) {
    reply = `🌲 *Sugestão de Passeio em ${city.name}:*\n\n`;
    
    // Filtra atrativos priorizando o perfil se houver
    let selected = state.attractions.slice(0, 3);
    if (profile === 'familia' || prompt.includes('criança') || prompt.includes('crianca') || prompt.includes('familia')) {
      selected = state.attractions.filter(a => a.category === 'Natureza' || a.category === 'Lazer' || a.name.includes('Parque') || a.name.includes('Bosque')).slice(0, 3);
      if (selected.length === 0) selected = state.attractions.slice(0, 3);
    } else if (profile === 'aventura' || prompt.includes('trilha') || prompt.includes('escalada')) {
      selected = state.attractions.filter(a => a.category === 'Aventura' || a.name.includes('Pedra') || a.name.includes('Pico')).slice(0, 3);
      if (selected.length === 0) selected = state.attractions.slice(0, 3);
    }

    selected.forEach((a, i) => {
      reply += `${i + 1}. *${a.name}* (${a.category})\n   📍 ${a.location}\n   💡 _${a.description.substring(0, 95)}..._\n   🎁 Check-in: [Fazer Check-in ${a.id}]\n\n`;
    });
    reply += `Quer opções de restaurantes ou pousadas por perto?`;
  }
  // 3. Hospedagem / Pousada
  else if (
    prompt.includes('pousada') ||
    prompt.includes('hotel') ||
    prompt.includes('hospedar') ||
    prompt.includes('hospedagem') ||
    prompt.includes('chalé') ||
    prompt.includes('onde ficar') ||
    prompt.includes('dormir')
  ) {
    reply = `🏨 *Hospedagens Recomendadas em ${city.name}:*\n\n`;
    const lodges = state.merchants.filter(m => m.category === 'Hospedagem').slice(0, 3);
    if (lodges.length > 0) {
      lodges.forEach((h, i) => {
        reply += `${i + 1}. *${h.name}*\n   📍 ${h.location}\n   💬 Reservas: https://wa.me/${h.whatsapp}\n\n`;
      });
      reply += `Reserve direto pelo WhatsApp para garantir tarifas municipais!`;
    } else {
      reply += `Temos uma rede de pousadas e chalés cadastrados. Entre em contato com a Secretaria de Turismo para o catálogo completo.`;
    }
  }
  // 4. Cupons de Desconto
  else if (
    prompt.includes('cupom') ||
    prompt.includes('cupons') ||
    prompt.includes('desconto') ||
    prompt.includes('promoção')
  ) {
    reply = `🏷️ *Cupons Oficiais Ativos em ${city.name}:*\n\n`;
    let count = 0;
    state.merchants.filter(m => m.approved).forEach(m => {
      (m.coupons || []).forEach(c => {
        if (count < 4 && c.active) {
          reply += `🎁 *${m.name}*\n🔹 ${c.description}\n🔑 Código: *${c.code}*\n[Resgatar Cupom ${c.code}]\n\n`;
          count++;
        }
      });
    });
    if (count === 0) reply += "Nenhum cupom ativo no momento para esta cidade.";
  }
  // 5. Utilidade Pública / Prefeitura / Saúde
  else if (
    prompt.includes('prefeitura') ||
    prompt.includes('hospital') ||
    prompt.includes('posto') ||
    prompt.includes('saúde') ||
    prompt.includes('saude') ||
    prompt.includes('polícia') ||
    prompt.includes('policia') ||
    prompt.includes('telefone') ||
    prompt.includes('emergência')
  ) {
    const pub = city.publicServices;
    reply = `🏥 *Telefones Úteis de ${city.name}:*\n\n` +
      `🏛️ Prefeitura: *${pub.prefeitura}*\n` +
      `🩺 Pronto Atendimento: *${pub.posto}*\n` +
      `🚓 Polícia Militar: *190* | 🚑 SAMU: *192*\n` +
      (pub.salvaVidas ? `🛟 Salva-Vidas / Bombeiros: *${pub.salvaVidas}*\n` : '') +
      (pub.centroTurismo ? `ℹ️ Centro de Informações: *${pub.centroTurismo}*\n` : '');
  }
  // 6. Resposta Padrão Enxuta
  else {
    reply = `Sou o concierge oficial de *${city.name}*. Posso te indicar:\n\n` +
      `• *O que fazer* (passeios selecionados)\n` +
      `• *Onde comer* (gastronomia recomendada)\n` +
      `• *Pousadas* (chalés e reservas)\n` +
      `• *Cupons* (descontos no comércio local)\n` +
      `• *Prefeitura e Saúde* (contatos úteis)\n\n` +
      `O que procura para seu dia hoje?`;
  }

  return reply;
}

async function handleChatSend(e) {
  if (e) e.preventDefault();
  const inputEl = document.getElementById('chat-text-input');
  if (!inputEl) return;
  const val = inputEl.value.trim();
  if (!val) return;
  inputEl.value = '';

  await processUserChatMessage(val);
}

async function handleChatSuggestion(val) {
  await processUserChatMessage(val);
}

async function handleChatRedeem(merchantId, couponId) {
  await redeemCoupon(merchantId, couponId);
}

async function processUserChatMessage(text) {
  state.chatMessages.push({
    sender: 'user',
    text,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    read: true
  });

  state.chatTyping = true;
  renderApp();

  const feed = document.getElementById('chat-message-feed');
  if (feed) feed.scrollTop = feed.scrollHeight;

  try {
    await new Promise(resolve => setTimeout(resolve, 600));
    const replyText = getLocalChatReply(text);

    state.chatMessages.push({
      sender: 'assistant',
      text: replyText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      read: true
    });
  } catch (err) {
    console.error("Erro no chat:", err);
  } finally {
    state.chatTyping = false;
    renderApp();
    const feed = document.getElementById('chat-message-feed');
    if (feed) feed.scrollTop = feed.scrollHeight;
  }
}

// ==========================================
// REGISTRO DE MÉTODOS GLOBAIS NO WINDOW.APP
// ==========================================

window.appState = state;
window.app = Object.assign(window.app || {}, {
  switchCity,
  openCityModal,
  closeCityModal,
  copyCityTestLink, copyGeneralTestLink,
  setActivePortal,
  setVisitorTab,
  setVisitorSearch,
  setVisitorCategory,
  selectMapItem,
  closeModal,
  changeMerchant,
  saveProfile,
  addNewCoupon,
  redeemCoupon,
  checkIn,
  approveMerchant,
  createNewEvent,
  changeMonth,
  handleMerchantLogin,
  handleMerchantLogout,
  triggerSimulation,
  handleChatSend,
  handleChatSuggestion,
  handleChatRedeem,
  setTouristProfile
});

// ==========================================
// TEMPLATES HTML DOS COMPONENTES
// ==========================================

function getNavbarHtml() {
  const visitorLevel = Math.floor(state.visitorXp / 100) + 1;
  const currentLevelXp = state.visitorXp % 100;
  const pendingCount = state.merchants.filter(m => !m.approved).length;
  const city = getCurrentCity();

  const getActiveBorder = (portal) => state.activePortal === portal ? 'active' : '';

  return `
    <!-- Top Notice Banner: Ambiente de Demonstração & Testes -->
    <div style="background: linear-gradient(90deg, #131b2e 0%, #1e1b4b 50%, #064e3b 100%); border-bottom: 1px solid rgba(0, 196, 140, 0.35); padding: 9px 16px; font-size: 12px; color: #e2e8f0; position: sticky; top: 0; z-index: 1002; box-shadow: 0 2px 12px rgba(0,0,0,0.4);">
      <div class="container" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.4); border-radius: 6px; padding: 2px 8px; font-weight: 700; font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; display: inline-flex; align-items: center; gap: 4px;">
            <i data-lucide="alert-circle" style="width: 11px; height: 11px;"></i> Ambiente de Demonstração & Testes
          </span>
          <span style="color: #cbd5e1;">
            Município ativo: <strong style="color: white; font-weight: 700;">${city.name} (${city.uf})</strong>
          </span>
        </div>

        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <button onclick="app.openCityModal()" style="background: rgba(255, 255, 255, 0.08); border: 1px solid rgba(255, 255, 255, 0.18); color: white; padding: 5px 12px; border-radius: 8px; font-size: 11px; font-weight: 600; cursor: pointer; display: inline-flex; align-items: center; gap: 5px;" title="Trocar a cidade demonstrada">
            <i data-lucide="map-pin" style="width: 12px; height: 12px; color: #00c48c;"></i> Selecionar Município
          </button>
          <button onclick="app.copyCityTestLink('${city.id}')" style="background: rgba(0, 196, 140, 0.2); border: 1px solid rgba(0, 196, 140, 0.45); color: #00c48c; padding: 5px 12px; border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 5px;" title="Copiar link específico deste município">
            <i data-lucide="share-2" style="width: 12px; height: 12px;"></i> Copiar Link de ${city.name}
          </button>
          <button onclick="app.copyGeneralTestLink()" style="background: rgba(139, 92, 246, 0.2); border: 1px solid rgba(167, 139, 250, 0.45); color: #c4b5fd; padding: 5px 12px; border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 5px;" title="Copiar link geral da plataforma">
            <i data-lucide="link" style="width: 12px; height: 12px;"></i> Copiar Link Geral
          </button>
        </div>
      </div>
    </div>

    <nav class="glass-panel" style="position: sticky; top: 38px; z-index: 1000; style="position: sticky; top: 0; z-index: 100; border-radius: 0 0 16px 16px; border-top: none; border-left: none; border-right: none; background: rgba(8, 10, 16, 0.85); backdrop-filter: blur(16px); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);">
      <div class="container" style="display: flex; align-items: center; justify-content: space-between; height: 80px;">
        
        <!-- Logo e Seletor de Município SaaS -->
        <div style="display: flex; align-items: center; gap: 14px;">
          <div onclick="app.setActivePortal('landing')" style="display: flex; align-items: center; cursor: pointer;" title="Página Inicial Guia Fácil">
            <img src="src/assets/logo_guia_facil.png" alt="Guia Fácil" class="brand-logo-img" />
          </div>

          <div style="width: 1px; height: 26px; background: rgba(255, 255, 255, 0.15); margin: 0 4px;"></div>

          <!-- Pílula Interativa da Cidade Ativa -->
          <div onclick="app.openCityModal()" class="city-selector-badge" title="Clique para trocar o município ativo ou gerar link de teste">
            <span class="city-pulsing-dot"></span>
            <i data-lucide="map-pin" style="width: 14px; height: 14px; color: var(--primary);"></i>
            <div style="display: flex; flex-direction: column; text-align: left; line-height: 1.1;">
              <span style="font-weight: 700; font-size: 13px; color: white; display: flex; align-items: center; gap: 4px;">
                ${city.name} <span style="color: #94a3b8; font-size: 11px; font-weight: 500;">(${city.uf})</span>
              </span>
              <span style="font-size: 10px; color: #00c48c; font-weight: 600; letter-spacing: 0.04em;">SaaS Ativo</span>
            </div>
            <i data-lucide="chevron-down" style="width: 13px; height: 13px; color: #94a3b8; margin-left: 2px;"></i>
          </div>
        </div>

        <!-- Seletor de Portais (Personas) -->
        <div style="display: flex; align-items: center; gap: 18px;" class="desktop-only-flex">
          ${state.activePortal === 'visitor' ? `
            <div class="badge badge-primary" style="gap: 6px; padding: 6px 12px;">
              <i data-lucide="award" style="width: 14px; height: 14px;"></i>
              <span>Nível ${visitorLevel} (${currentLevelXp}/100 XP)</span>
            </div>
          ` : ''}

          <div class="persona-switcher">
            <button onclick="app.setActivePortal('visitor')" class="persona-btn ${getActiveBorder('visitor')}" style="display: flex; align-items: center; gap: 6px;">
              <i data-lucide="map-pin" style="width: 14px; height: 14px;"></i> Turista (WhatsApp)
            </button>
            <button onclick="app.setActivePortal('merchant')" class="persona-btn ${getActiveBorder('merchant')}" style="display: flex; align-items: center; gap: 6px;">
              <i data-lucide="building" style="width: 14px; height: 14px;"></i> Comerciante
            </button>
            <button onclick="app.setActivePortal('manager')" class="persona-btn ${getActiveBorder('manager')}" style="display: flex; align-items: center; gap: 6px;">
              <i data-lucide="landmark" style="width: 14px; height: 14px;"></i> Gestor Público
              ${pendingCount > 0 ? `
                <span style="background: #ef4444; color: white; border-radius: 50%; width: 16px; height: 16px; font-size: 9px; display: flex; align-items: center; justify-content: center; font-weight: 700; margin-left: 2px;">
                  ${pendingCount}
                </span>
              ` : ''}
            </button>
            <button onclick="app.setActivePortal('simulation')" class="persona-btn ${getActiveBorder('simulation')}" style="display: flex; align-items: center; gap: 6px; border: 1px solid rgba(0, 196, 140, 0.4); background: ${state.activePortal === 'simulation' ? 'rgba(0, 196, 140, 0.2)' : 'rgba(255, 255, 255, 0.02)'}; color: ${state.activePortal === 'simulation' ? '#00c48c' : 'var(--text-secondary)'};">
              <i data-lucide="shield-check" style="width: 14px; height: 14px; color: #00c48c;"></i> Teste de Viabilidade
            </button>
          </div>
        </div>

        <!-- Mobile Hamburguer Trigger -->
        <button id="mobile-menu-trigger" class="mobile-only-block" style="background: none; border: none; color: white; cursor: pointer; padding: 8px;">
          <i data-lucide="menu" style="width: 24px; height: 24px;"></i>
        </button>

      </div>
    </nav>
  `;
}

function getLandingPageHtml() {
  const city = getCurrentCity();

  return `
    <div class="animate-fade-in" style="padding-bottom: 60px;">
      <!-- Hero Section -->
      <section style="position: relative; padding: 50px 0 30px; text-align: center; overflow: hidden;">
        <div style="position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 700px; height: 350px; background: radial-gradient(circle, rgba(0, 196, 140, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%); filter: blur(60px); z-index: -1;"></div>

        <div class="container" style="max-width: 960px;">
          
          <!-- Top Municipal Badge -->
          <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 20px;">
            <div class="badge badge-primary" style="padding: 6px 16px; font-size: 13px; gap: 6px;">
              <span>${city.badge}</span>
            </div>
            <div class="badge" style="background: rgba(255,255,255,0.06); color: #94a3b8; font-size: 12px; padding: 6px 12px;">
              <span>🌡️ ${city.temp} • ⛰️ ${city.altitude}</span>
            </div>
          </div>

          <h1 style="font-size: clamp(32px, 5vw, 52px); font-weight: 800; line-height: 1.15; margin-bottom: 20px; letter-spacing: -0.02em;">
            O Sistema de Inteligência Territorial de <br/>
            <span class="brand-gradient">${city.name}</span>
          </h1>

          <p style="font-size: clamp(16px, 2vw, 19px); color: var(--text-secondary); max-width: 760px; margin: 0 auto 28px; line-height: 1.6;">
            ${city.heroSubtitle}
          </p>

<!-- CTAs -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 40px;">
            <button onclick="app.setActivePortal('visitor')" class="btn btn-primary" style="padding: 14px 28px; font-size: 16px; font-weight: 700; border-radius: 14px; display: flex; align-items: center; gap: 10px;">
              <i data-lucide="message-square" style="width: 20px; height: 20px;"></i>
              <span>Conversar com a Cidade pelo WhatsApp</span>
            </button>
            <button onclick="app.setActivePortal('manager')" class="btn btn-secondary" style="padding: 14px 28px; font-size: 16px; font-weight: 600; border-radius: 14px; display: flex; align-items: center; gap: 10px;">
              <i data-lucide="landmark" style="width: 20px; height: 20px;"></i>
              <span>Painel do Gestor Público</span>
            </button>
          </div>

        </div>
      </section>

      <!-- 4 Pillars Section -->
      <section class="container" style="margin-bottom: 50px;">
        <div class="portal-grid-3" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
          
          <!-- Card 1: Turista -->
          <div class="glass-panel" onclick="app.setActivePortal('visitor')" style="padding: 28px; border-radius: 20px; cursor: pointer; transition: all 0.2s ease;">
            <div style="width: 50px; height: 50px; border-radius: 14px; background: rgba(0, 196, 140, 0.12); color: var(--primary); display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              <i data-lucide="map-pin" style="width: 24px; height: 24px;"></i>
            </div>
            <h3 style="font-size: 20px; font-weight: 700; color: white; margin-bottom: 10px;">Portal do Turista</h3>
            <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5; margin-bottom: 20px;">
              O visitante conversa diretamente com o município via WhatsApp oficial, recebendo roteiros personalizados e resgatando cupons.
            </p>
            <span style="color: var(--primary); font-size: 14px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              Acessar Experiência <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
            </span>
          </div>

          <!-- Card 2: Comerciante -->
          <div class="glass-panel" onclick="app.setActivePortal('merchant')" style="padding: 28px; border-radius: 20px; cursor: pointer; transition: all 0.2s ease;">
            <div style="width: 50px; height: 50px; border-radius: 14px; background: rgba(59, 130, 246, 0.12); color: var(--secondary); display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              <i data-lucide="building" style="width: 24px; height: 24px;"></i>
            </div>
            <h3 style="font-size: 20px; font-weight: 700; color: white; margin-bottom: 10px;">Portal do Comerciante</h3>
            <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5; margin-bottom: 20px;">
              Cadastre seu restaurante, pousada ou atrativo com qualquer e-mail, crie cupons e seja recomendado pela IA do WhatsApp!
            </p>
            <span style="color: var(--secondary); font-size: 14px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              Área do Estabelecimento <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
            </span>
          </div>

          <!-- Card 3: Gestor Público -->
          <div class="glass-panel" onclick="app.setActivePortal('manager')" style="padding: 28px; border-radius: 20px; cursor: pointer; transition: all 0.2s ease;">
            <div style="width: 50px; height: 50px; border-radius: 14px; background: rgba(245, 158, 11, 0.12); color: var(--accent); display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              <i data-lucide="landmark" style="width: 24px; height: 24px;"></i>
            </div>
            <h3 style="font-size: 20px; font-weight: 700; color: white; margin-bottom: 10px;">Painel da Prefeitura</h3>
            <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5; margin-bottom: 20px;">
              A Secretaria de Turismo monitora o fluxo de visitantes de ${city.name}, ocupação hoteleira e publica a agenda oficial.
            </p>
            <span style="color: var(--accent); font-size: 14px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              Visão Governamental <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
            </span>
          </div>

          <!-- Card 4: Teste de Viabilidade Municipal -->
          <div class="glass-panel" onclick="app.setActivePortal('simulation')" style="padding: 28px; border-radius: 20px; cursor: pointer; transition: all 0.2s ease; border: 1px solid rgba(0, 196, 140, 0.35); background: rgba(0, 196, 140, 0.05);">
            <div style="width: 50px; height: 50px; border-radius: 14px; background: rgba(0, 196, 140, 0.18); color: #00c48c; display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">
              <i data-lucide="shield-check" style="width: 24px; height: 24px;"></i>
            </div>
            <h3 style="font-size: 20px; font-weight: 700; color: white; margin-bottom: 10px;">Teste de Viabilidade Municipal</h3>
            <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.5; margin-bottom: 20px;">
              Auditoria técnica comprovando que o Guia Fácil atende turistas em massa em ${city.name} com zero sobrecarga pública e alto retorno econômico.
            </p>
            <span style="color: #00c48c; font-size: 14px; font-weight: 600; display: inline-flex; align-items: center; gap: 6px;">
              Ver Relatório de Viabilidade <i data-lucide="arrow-right" style="width: 14px; height: 14px;"></i>
            </span>
          </div>

        </div>
      </section>

      <!-- Municipal Stats Snapshot -->
      <section class="container" style="margin-bottom: 40px;">
        <div class="glass-panel" style="padding: 30px; border-radius: 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 24px;">
            <div>
              <h3 style="font-size: 20px; font-weight: 700; color: white;">Infraestrutura Digital de ${city.name}</h3>
              <p style="color: var(--text-secondary); font-size: 14px;">Painel em tempo real integrado aos atrativos e estabelecimentos locais.</p>
            </div>
            <div class="badge badge-primary">
              <span class="city-pulsing-dot"></span>
              <span>SaaS Operacional • ${city.population}</span>
            </div>
          </div>

          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-value">${(state.stats.activeVisitorsToday || 0).toLocaleString('pt-BR')}</div>
              <div class="stat-label">Visitantes Estimados Hoje</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${state.attractions.length}</div>
              <div class="stat-label">Atrativos Mapeados</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${state.merchants.length}</div>
              <div class="stat-label">Comércios Credenciados</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${state.stats.hotelOccupancyRate || 85}%</div>
              <div class="stat-label">Ocupação Hoteleira Média</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  `;
}

function getVisitorPortalHtml() {
  const city = getCurrentCity();
  const cityName = city.name;
  const messages = state.chatMessages || [];
  
  // Format messages to HTML
  const messagesHtml = messages.map(msg => {
    const isUser = msg.sender === 'user';
    const align = isUser ? 'flex-end' : 'flex-start';
    const bg = isUser ? 'rgba(0, 196, 140, 0.25)' : 'rgba(255, 255, 255, 0.05)';
    const border = isUser ? '1px solid rgba(0, 196, 140, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)';
    
    // Process markdown-like formatting
    let formattedText = msg.text
      .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/\n/g, '<br>');
      
    // Replace coupon link
    formattedText = formattedText.replace(/\[Resgatar Cupom ([A-Z0-9]+)\]/g, (match, code) => {
      let foundCoupon = null;
      let foundMerchant = null;
      state.merchants.forEach(m => {
        const cp = (m.coupons || []).find(c => c.code === code);
        if (cp) {
          foundCoupon = cp;
          foundMerchant = m;
        }
      });
      
      if (foundCoupon && foundMerchant) {
        return `<button onclick="app.handleChatRedeem('${foundMerchant.id}', '${foundCoupon.id}')" class="btn btn-primary btn-sm" style="margin-top: 8px; display: inline-flex; align-items: center; gap: 4px; padding: 6px 12px; font-size: 12px; border-radius: 8px; border: none; background: var(--grad-primary); color: var(--bg-dark); cursor: pointer; font-weight: 600;">
          <i data-lucide="percent" style="width: 13px; height: 13px;"></i> Resgatar Cupom ${code}
        </button>`;
      }
      return `<strong>${code}</strong>`;
    });

    // Replace check-in link
    formattedText = formattedText.replace(/\[Fazer Check-in (\d+)\]/g, (match, id) => {
      const a = state.attractions.find(item => item.id === Number(id));
      if (a) {
        return `<button onclick="app.checkIn('${a.id}')" class="btn btn-secondary btn-sm" style="margin-top: 8px; display: inline-flex; align-items: center; gap: 4px; padding: 6px 12px; font-size: 12px; border-radius: 8px; border: 1px solid rgba(0, 196, 140, 0.3); background: rgba(0, 196, 140, 0.15); color: var(--primary); cursor: pointer; font-weight: 600;">
          <i data-lucide="map-pin" style="width: 13px; height: 13px;"></i> Confirmar Check-in no local (+${a.check_in_reward_xp || 40} XP)
        </button>`;
      }
      return '';
    });

    return `
      <div style="display: flex; justify-content: ${align}; margin-bottom: 16px; width: 100%;">
        <div class="glass-panel" style="max-width: 85%; padding: 12px 16px; border-radius: 16px; background: ${bg}; border: ${border}; box-shadow: 0 4px 15px rgba(0,0,0,0.1); position: relative; word-break: break-word;">
          <p style="font-size: 14px; line-height: 1.5; color: white; margin: 0 0 4px 0;">${formattedText}</p>
          <div style="display: flex; align-items: center; justify-content: flex-end; gap: 4px; font-size: 10px; color: var(--text-muted); text-align: right;">
            <span>${msg.time}</span>
            ${isUser ? `<i data-lucide="check-check" style="width: 12px; height: 12px; color: var(--primary);"></i>` : ''}
          </div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="animate-fade-in" style="display: grid; grid-template-columns: 1fr 3fr; gap: 24px; height: calc(100vh - 200px); min-height: 550px; margin-top: 20px;" id="whatsapp-container-grid">
      
      <!-- Left column: Profile Selector & Info -->
      <div class="glass-panel" style="padding: 24px; display: flex; flex-direction: column; gap: 18px; height: 100%; overflow-y: auto;" id="whatsapp-info-panel">
        <div>
          <span style="font-size: 11px; color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;">Concierge Digital Oficial</span>
          <h3 style="font-size: 18px; margin-top: 4px; color: white;">Turista conversa com a Cidade</h3>
          <p style="font-size: 12px; color: var(--text-secondary); margin-top: 6px; line-height: 1.5;">
            O Guia Fácil identifica o perfil do viajante e recomenda roteiros sob medida de forma enxuta e sem sobrecarga de informação.
          </p>
        </div>

        <!-- Seletor de Perfil do Turista -->
        <div style="border-top: 1px solid var(--border-color); padding-top: 14px;">
          <h4 style="font-size: 13px; color: white; margin-bottom: 10px; font-weight: 600;">Selecione seu Perfil de Viagem:</h4>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <button onclick="app.setTouristProfile('casal')" class="btn btn-sm" style="justify-content: flex-start; background: ${state.touristProfile === 'casal' ? 'rgba(0,196,140,0.2)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${state.touristProfile === 'casal' ? '#00c48c' : 'var(--border-color)'}; font-size: 12px; padding: 8px 12px; text-align: left; width: 100%; border-radius: 8px; color: ${state.touristProfile === 'casal' ? '#00c48c' : 'var(--text-secondary)'};">
              👫 Casal Romântico
            </button>
            <button onclick="app.setTouristProfile('familia')" class="btn btn-sm" style="justify-content: flex-start; background: ${state.touristProfile === 'familia' ? 'rgba(0,196,140,0.2)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${state.touristProfile === 'familia' ? '#00c48c' : 'var(--border-color)'}; font-size: 12px; padding: 8px 12px; text-align: left; width: 100%; border-radius: 8px; color: ${state.touristProfile === 'familia' ? '#00c48c' : 'var(--text-secondary)'};">
              👨‍👩‍👧‍👦 Família com Crianças
            </button>
            <button onclick="app.setTouristProfile('aventura')" class="btn btn-sm" style="justify-content: flex-start; background: ${state.touristProfile === 'aventura' ? 'rgba(0,196,140,0.2)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${state.touristProfile === 'aventura' ? '#00c48c' : 'var(--border-color)'}; font-size: 12px; padding: 8px 12px; text-align: left; width: 100%; border-radius: 8px; color: ${state.touristProfile === 'aventura' ? '#00c48c' : 'var(--text-secondary)'};">
              🧗 Ecoturismo & Aventura
            </button>
            <button onclick="app.setTouristProfile('gastronomia')" class="btn btn-sm" style="justify-content: flex-start; background: ${state.touristProfile === 'gastronomia' ? 'rgba(0,196,140,0.2)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${state.touristProfile === 'gastronomia' ? '#00c48c' : 'var(--border-color)'}; font-size: 12px; padding: 8px 12px; text-align: left; width: 100%; border-radius: 8px; color: ${state.touristProfile === 'gastronomia' ? '#00c48c' : 'var(--text-secondary)'};">
              🍽️ Gastronomia & Relax
            </button>
          </div>
        </div>

        <!-- Perguntas Rápidas -->
        <div style="border-top: 1px solid var(--border-color); padding-top: 14px;">
          <h4 style="font-size: 13px; color: white; margin-bottom: 8px; font-weight: 600;">Dúvidas Frequentes:</h4>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${city.quickSuggestions.map(s => `
              <button 
                onclick="app.handleChatSuggestion('${s}')"
                class="btn btn-sm" 
                style="justify-content: flex-start; background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); font-size: 11px; padding: 8px 12px; text-align: left; width: 100%; border-radius: 8px; color: var(--text-secondary); cursor: pointer;"
              >
                ${s}
              </button>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Right column: WhatsApp Web Client -->
      <div class="glass-panel" style="display: flex; flex-direction: column; height: 100%; padding: 0; overflow: hidden; border-radius: 16px; background: rgba(8, 10, 16, 0.65);" id="whatsapp-chat-panel">
        
        <!-- Header -->
        <div style="background: rgba(16, 20, 32, 0.9); border-bottom: 1px solid var(--border-color); padding: 14px 20px; display: flex; align-items: center; justify-content: space-between;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="position: relative; width: 44px; height: 44px; border-radius: 50%; background: rgba(0, 196, 140, 0.1); border: 1px solid rgba(0, 196, 140, 0.25); display: flex; align-items: center; justify-content: center; color: var(--primary);">
              <i data-lucide="bot" style="width: 24px; height: 24px;"></i>
              <span style="position: absolute; bottom: 0; right: 0; width: 12px; height: 12px; border-radius: 50%; background: #22c55e; border: 2px solid #101420;"></span>
            </div>
            <div>
              <h4 style="font-size: 15px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center; gap: 4px;">
                Guia Fácil • ${cityName}
                <i data-lucide="badge-check" style="width: 14px; height: 14px; color: var(--primary); fill: var(--primary); stroke: #101420;"></i>
              </h4>
              <span style="font-size: 11px; color: #22c55e;">online • IA Territorial Municipal</span>
            </div>
          </div>
          <div style="display: flex; gap: 14px; color: var(--text-muted);">
            <i data-lucide="search" style="width: 18px; height: 18px; cursor: pointer;"></i>
            <i data-lucide="more-vertical" style="width: 18px; height: 18px; cursor: pointer;"></i>
          </div>
        </div>

        <!-- Messages Feed -->
        <div 
          id="chat-message-feed"
          style="flex-grow: 1; overflow-y: auto; padding: 24px; background-image: radial-gradient(rgba(0, 196, 140, 0.04) 1px, transparent 0), radial-gradient(rgba(0, 196, 140, 0.04) 1px, transparent 0); background-size: 24px 24px; background-position: 0 0, 12px 12px; display: flex; flex-direction: column;"
        >
          ${messagesHtml}
          
          ${state.chatTyping ? `
            <div style="display: flex; justify-content: flex-start; margin-bottom: 16px; width: 100%;">
              <div class="glass-panel" style="padding: 12px 20px; border-radius: 16px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); color: var(--text-muted); font-size: 13px; font-style: italic; display: flex; align-items: center; gap: 8px;">
                <span class="typing-dot"></span>
                <span>Digitando resposta sob medida...</span>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Chat Input Form -->
        <div style="background: rgba(16, 20, 32, 0.95); border-top: 1px solid var(--border-color); padding: 12px 20px;">
          <form id="chat-input-form" onsubmit="app.handleChatSend(event)" style="display: flex; align-items: center; gap: 12px; margin: 0;">
            <input 
              type="text" 
              id="chat-text-input" 
              class="form-input" 
              placeholder="Digite sua dúvida (ex: 'onde almoçar?', 'o que fazer à tarde?')..."
              autocomplete="off"
              style="flex-grow: 1; padding: 12px 18px; border-radius: 24px; background: rgba(30, 41, 59, 0.5); border: 1px solid var(--border-color); color: white;"
            />
            <button type="submit" class="btn btn-primary" style="border-radius: 50%; width: 44px; height: 44px; padding: 0; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <i data-lucide="send" style="width: 18px; height: 18px;"></i>
            </button>
          </form>
        </div>

      </div>

    </div>
  `;
}

function getMerchantPortalHtml() {
  const merchant = state.merchants.find(m => m.id === state.selectedMerchantId) || state.merchants[0];
  const city = getCurrentCity();

  if (!merchant) return getMerchantLoginHtml();

  return `
    <div class="animate-fade-in" style="padding: 30px 0;">
      
      <!-- Top Bar: Logged User info -->
      <div class="glass-panel" style="padding: 18px 24px; border-radius: 16px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 14px;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 42px; height: 42px; border-radius: 12px; background: rgba(0, 196, 140, 0.15); color: #00c48c; display: flex; align-items: center; justify-content: center;">
            <i data-lucide="store" style="width: 22px; height: 22px;"></i>
          </div>
          <div>
            <div style="font-weight: 700; font-size: 16px; color: white;">${merchant.name}</div>
            <div style="font-size: 12px; color: var(--text-secondary);">
              Logado como: <strong>${merchant.email || state.merchantUser?.email || 'comerciante@local'}</strong> • Município: <strong>${city.name}</strong>
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 10px;">
          <button onclick="app.setActivePortal('visitor')" class="btn btn-primary" style="padding: 8px 16px; font-size: 13px; border-radius: 10px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="message-square" style="width: 14px; height: 14px;"></i> Testar no WhatsApp da Cidade
          </button>
          <button onclick="app.handleMerchantLogout()" class="btn btn-secondary" style="padding: 8px 16px; font-size: 13px; border-radius: 10px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="log-out" style="width: 14px; height: 14px;"></i> Sair
          </button>
        </div>
      </div>

      <!-- Métricas do Comerciante -->
      <div class="stats-grid" style="margin-bottom: 30px;">
        <div class="stat-card">
          <div class="stat-value">${merchant.viewsThisWeek || 140}</div>
          <div class="stat-label">Visualizações no Guia Fácil</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${merchant.whatsappClicks || 38}</div>
          <div class="stat-label">Leads Direcionados ao WhatsApp</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${merchant.couponsRedeemed || 12}</div>
          <div class="stat-label">Cupons de Desconto Resgatados</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${merchant.rating || 4.9} ⭐</div>
          <div class="stat-label">Avaliação dos Turistas</div>
        </div>
      </div>

      <!-- Grid com Formulário de Perfil e Cupons -->
      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px;" class="mobile-column-layout">
        
        <!-- Formulário de Atualização do Estabelecimento -->
        <div class="glass-panel" style="padding: 30px; border-radius: 20px;">
          <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 8px; color: white;">Informações do Estabelecimento</h3>
          <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 20px;">
            Estas informações alimentam instantaneamente a inteligência da IA do WhatsApp e o catálogo turístico da cidade.
          </p>

          <form onsubmit="app.saveProfile(event)">
            <div class="form-group" style="margin-bottom: 16px;">
              <label class="form-label">Nome Comercial</label>
              <input type="text" id="m-name" value="${merchant.name}" class="form-input" required />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 16px;">
              <div>
                <label class="form-label">Categoria</label>
                <select id="m-cat" class="form-select">
                  <option value="Gastronomia" ${merchant.category === 'Gastronomia' ? 'selected' : ''}>Gastronomia</option>
                  <option value="Hospedagem" ${merchant.category === 'Hospedagem' ? 'selected' : ''}>Hospedagem</option>
                  <option value="Comércio" ${merchant.category === 'Comércio' ? 'selected' : ''}>Comércio</option>
                  <option value="Aventura" ${merchant.category === 'Aventura' ? 'selected' : ''}>Aventura & Lazer</option>
                  <option value="Cultura" ${merchant.category === 'Cultura' ? 'selected' : ''}>Cultura & Artesanato</option>
                </select>
              </div>
              <div>
                <label class="form-label">WhatsApp (com DDD)</label>
                <input type="text" id="m-wpp" value="${merchant.whatsapp || ''}" class="form-input" placeholder="Ex: 5512999990000" required />
              </div>
            </div>

            <div class="form-group" style="margin-bottom: 16px;">
              <label class="form-label">Endereço / Localização</label>
              <input type="text" id="m-loc" value="${merchant.location || ''}" class="form-input" required />
            </div>

            <div class="form-group" style="margin-bottom: 16px;">
              <label class="form-label">Horários de Funcionamento</label>
              <input type="text" id="m-hours" value="${merchant.hours || 'Terça a domingo, das 11h às 22h'}" class="form-input" />
            </div>

            <div class="form-group" style="margin-bottom: 16px;">
              <label class="form-label">Descrição para a IA Recomendar aos Turistas</label>
              <textarea id="m-desc" rows="3" class="form-textarea" required>${merchant.description || ''}</textarea>
            </div>

            <div class="form-group" style="margin-bottom: 24px;">
              <label class="form-label">URL da Foto / Fachada</label>
              <input type="text" id="m-img" value="${merchant.imageUrl || ''}" class="form-input" />
            </div>

            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px; font-weight: 700; border-radius: 12px; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <i data-lucide="save" style="width: 18px; height: 18px;"></i> Salvar e Sincronizar com o WhatsApp
            </button>
          </form>
        </div>

        <!-- Emissão de Cupons e Ofertas -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          
          <div class="glass-panel" style="padding: 24px; border-radius: 20px;">
            <h3 style="font-size: 18px; font-weight: 700; margin-bottom: 6px; color: white;">Criar Novo Cupom</h3>
            <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 16px;">
              Cupons estimulam a IA a recomendar seu comércio com prioridade.
            </p>

            <form id="coupon-form" onsubmit="app.addNewCoupon(event)">
              <div class="form-group" style="margin-bottom: 12px;">
                <label class="form-label">Código do Cupom</label>
                <input type="text" id="c-code" placeholder="Ex: PROMO15, CHOCOLATEVIP" class="form-input" required />
              </div>
              <div class="form-group" style="margin-bottom: 12px;">
                <label class="form-label">Descrição do Benefício</label>
                <input type="text" id="c-desc" placeholder="Ex: 15% no prato principal, sobremesa cortesia" class="form-input" required />
              </div>
              <div class="form-group" style="margin-bottom: 16px;">
                <label class="form-label">Limite de Resgates</label>
                <input type="number" id="c-limit" value="50" class="form-input" required />
              </div>

              <button type="submit" class="btn btn-secondary" style="width: 100%; padding: 10px; font-weight: 600; border-radius: 10px; display: flex; align-items: center; justify-content: center; gap: 6px;">
                <i data-lucide="plus-circle" style="width: 16px; height: 16px;"></i> Publicar Oferta
              </button>
            </form>
          </div>

          <!-- Cupons Ativos -->
          <div class="glass-panel" style="padding: 24px; border-radius: 20px;">
            <h4 style="font-size: 15px; font-weight: 700; margin-bottom: 14px; color: white;">Cupons Ativos da sua Empresa</h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${(merchant.coupons || []).map(c => `
                <div style="padding: 10px 14px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <div style="font-weight: 700; color: #00c48c; font-size: 13px;">${c.code}</div>
                    <div style="font-size: 12px; color: var(--text-secondary);">${c.description}</div>
                  </div>
                  <span class="badge badge-primary" style="font-size: 10px;">${c.redeemed || 0} resgatados</span>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}

function getManagerPortalHtml() {
  const city = getCurrentCity();
  const unapproved = state.merchants.filter(m => !m.approved);
  const avg = state.stats.averageSpending || { hospedagem: 380, alimentacao: 190, compras: 140, ingressos: 60 };
  const origins = state.stats.touristOrigin || [];
  const flow = state.stats.visitorFlowChart || [];

  return `
    <div class="animate-fade-in" style="padding: 30px 0;">
      
      <!-- Top Header Gestor Municipal -->
      <div class="glass-panel" style="padding: 24px 30px; border-radius: 20px; margin-bottom: 28px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; background: rgba(13, 18, 31, 0.85); border: 1px solid rgba(0, 196, 140, 0.25);">
        <div>
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
            <span class="city-pulsing-dot"></span>
            <span style="font-size: 12px; font-weight: 700; color: #00c48c; text-transform: uppercase; letter-spacing: 0.08em;">Secretaria Municipal de Turismo</span>
          </div>
          <h2 style="font-size: 26px; font-weight: 800; color: white;">Território Inteligente de ${city.name} (${city.uf})</h2>
          <p style="color: var(--text-secondary); font-size: 13px; margin: 0;">Infraestrutura de dados públicos, controle de fluxo e homologação de estabelecimentos.</p>
        </div>

        <div style="display: flex; align-items: center; gap: 10px;">
          <button onclick="app.copyCityTestLink('${city.id}')" class="btn btn-secondary" style="padding: 8px 16px; font-size: 13px; border-radius: 10px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="share-2" style="width: 14px; height: 14px;"></i> Compartilhar Link da Cidade
          </button>
          <button onclick="app.openCityModal()" class="btn btn-primary" style="padding: 8px 16px; font-size: 13px; border-radius: 10px; display: flex; align-items: center; gap: 6px;">
            <i data-lucide="refresh-cw" style="width: 14px; height: 14px;"></i> Mudar Município
          </button>
        </div>
      </div>

      <!-- 4 KPIs do Município -->
      <div class="stats-grid" style="margin-bottom: 30px;">
        <div class="stat-card">
          <div class="stat-value">${(state.stats.activeVisitorsToday || 0).toLocaleString('pt-BR')}</div>
          <div class="stat-label">Visitantes no Território Hoje</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${state.stats.hotelOccupancyRate || 85}%</div>
          <div class="stat-label">Ocupação Hoteleira Média</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">R$ ${(state.stats.estimatedTourismRevenue || 12000000).toLocaleString('pt-BR')}</div>
          <div class="stat-label">Impacto Econômico Mensal</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${state.merchants.filter(m => m.approved).length}</div>
          <div class="stat-label">Comércios Ativos na IA</div>
        </div>
      </div>

      <!-- Gráficos e Distribuição de Gastos -->
      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px; margin-bottom: 30px;" class="mobile-column-layout">
        
        <!-- Fluxo Mensal de Visitantes -->
        <div class="glass-panel" style="padding: 24px; border-radius: 20px;">
          <h4 style="font-size: 16px; font-weight: 700; color: white; margin-bottom: 18px;">Curva de Sazonalidade Turística em ${city.name}</h4>
          <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 180px; gap: 8px; padding-top: 20px;">
            ${flow.map((m, idx) => `
              <div style="display: flex; flex-direction: column; align-items: center; flex: 1; height: 100%; justify-content: flex-end;">
                <div style="width: 100%; max-width: 28px; background: ${idx === state.selectedMonth ? 'var(--grad-primary)' : 'rgba(255,255,255,0.1)'}; border-radius: 6px 6px 0 0; height: ${Math.max((m.visitors / 280000) * 100, 10)}%; transition: all 0.3s ease;"></div>
                <span style="font-size: 11px; color: var(--text-muted); margin-top: 6px;">${m.month}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Gastos Médios por Turista -->
        <div class="glass-panel" style="padding: 24px; border-radius: 20px;">
          <h4 style="font-size: 16px; font-weight: 700; color: white; margin-bottom: 16px;">Ticket Médio por Categoria</h4>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${[
              { name: "Hospedagem & Diária", val: avg.hospedagem || 380, color: 'var(--accent)' },
              { name: "Alimentação & Gastronomia", val: avg.alimentacao || 190, color: '#ef4444' },
              { name: "Compras & Artesanato", val: avg.compras || 140, color: 'var(--primary)' },
              { name: "Lazer & Passeios", val: avg.ingressos || 60, color: 'var(--secondary)' }
            ].map(s => `
              <div style="display: flex; justify-content: space-between; padding: 10px 14px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 8px; font-size: 13px;">
                <span style="color: var(--text-secondary); display: flex; align-items: center; gap: 8px;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: ${s.color};"></span>
                  ${s.name}
                </span>
                <span style="color: white; font-weight: 600;">R$ ${s.val},00</span>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

      <!-- Publicação de Eventos Municipais -->
      <div class="glass-panel" style="padding: 28px; border-radius: 20px;">
        <h3 style="font-size: 18px; font-weight: 700; color: white; margin-bottom: 6px;">Cadastrar Novo Evento Oficial de ${city.name}</h3>
        <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 20px;">
          Insira atividades e concertos no calendário público de ${city.name}. A IA do WhatsApp recomendará automaticamente essas atrações aos turistas.
        </p>

        <form id="event-form" onsubmit="app.createNewEvent(event)" style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div class="form-group">
            <label class="form-label">Nome do Evento</label>
            <input type="text" id="e-name" placeholder="Ex: Festival de Inverno, Feira Gastronômica" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Data e Período</label>
            <input type="text" id="e-date" placeholder="Ex: 10 a 20 de Julho, 2026" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Local / Endereço</label>
            <input type="text" id="e-loc" placeholder="Ex: Praça Central, Parque da Cidade" class="form-input" required />
          </div>
          <div class="form-group">
            <label class="form-label">Categoria</label>
            <select id="e-cat" class="form-select">
              <option value="Música & Cultura">Música & Cultura</option>
              <option value="Gastronomia">Gastronomia</option>
              <option value="Lazer & Família">Lazer & Família</option>
              <option value="Esporte & Aventura">Esporte & Aventura</option>
            </select>
          </div>
          <div class="form-group" style="grid-column: 1 / -1;">
            <label class="form-label">Descrição do Evento</label>
            <textarea id="e-desc" rows="2" class="form-textarea" placeholder="Informações de ingressos, programação e atrações..." required></textarea>
          </div>

          <div style="grid-column: 1 / -1;">
            <button type="submit" class="btn btn-primary" style="padding: 12px 24px; font-weight: 600; border-radius: 10px; display: inline-flex; align-items: center; gap: 8px;">
              <i data-lucide="plus-circle" style="width: 16px; height: 16px;"></i> Publicar no Calendário Oficial de ${city.name}
            </button>
          </div>
        </form>
      </div>

    </div>
  `;
}

function getSimulationPortalHtml() {
  const city = getCurrentCity();
  const sim = city.simulationStats || {};
  const isRunning = state.simulationRunning;

  return `
    <div class="animate-fade-in" style="padding: 24px 0;">
      
      <!-- Top Feasibility Header -->
      <div class="glass-panel" style="padding: 34px 38px; border-radius: 24px; margin-bottom: 28px; position: relative; overflow: hidden; background: linear-gradient(135deg, rgba(16, 24, 40, 0.95), rgba(6, 78, 59, 0.4)); border: 1px solid rgba(0, 196, 140, 0.4); box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
          <div>
            <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px; border-radius: 20px; background: rgba(0, 196, 140, 0.15); border: 1px solid rgba(0, 196, 140, 0.35); color: #00c48c; font-size: 12px; font-weight: 700; margin-bottom: 12px;">
              <i data-lucide="shield-check" style="width: 14px; height: 14px;"></i>
              <span>LAUDO TÉCNICO DE VIABILIDADE • AMBIENTE DE HOMOLOGAÇÃO</span>
            </div>
            <h2 style="font-size: 28px; font-weight: 800; color: white; margin-bottom: 10px;">
              Estudo de Viabilidade Municipal: ${city.name} (${city.uf})
            </h2>
            <p style="color: var(--text-secondary); font-size: 14px; max-width: 740px; line-height: 1.6; margin: 0;">
              Auditoria de carga territorial simulando o comportamento de turistas reais interagindo com a base oficial de <strong>${city.name}</strong> pelo WhatsApp. Este teste controlado comprova que o município tem <strong>altíssima viabilidade técnica, operacional e financeira</strong> para implantação imediata.
            </p>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <button 
              onclick="app.triggerSimulation()" 
              class="btn btn-primary" 
              ${isRunning ? 'disabled' : ''} 
              style="padding: 14px 26px; font-size: 14px; font-weight: 700; border-radius: 12px; display: inline-flex; align-items: center; gap: 10px; background: linear-gradient(135deg, #00c48c, #059669);"
            >
              <i data-lucide="${isRunning ? 'loader' : 'activity'}" style="width: 18px; height: 18px;"></i>
              <span>${isRunning ? 'Executando Auditoria...' : 'Executar Nova Bateria de Testes'}</span>
            </button>
            <span style="font-size: 11px; color: var(--text-muted); text-align: center;">Simulação baseada no motor MiroFish Swarm</span>
          </div>
        </div>
      </div>

      <!-- PARECER EXECUTIVO PARA O SECRETÁRIO MUNICIPAL (4 PILARES) -->
      <div style="margin-bottom: 28px;">
        <h3 style="font-size: 18px; font-weight: 700; color: white; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <i data-lucide="file-check" style="width: 20px; height: 20px; color: #00c48c;"></i>
          Parecer Executivo para a Secretaria de Turismo e Desenvolvimento
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
          
          <div class="glass-panel" style="padding: 22px; border-radius: 16px; border-left: 4px solid #00c48c;">
            <div style="font-weight: 700; color: #00c48c; font-size: 13px; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
              <i data-lucide="check-circle" style="width: 15px; height: 15px;"></i> Viabilidade Jurídica & Orçamentária
            </div>
            <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
              Custo reduzido de parceria enquadrado perfeitamente em <strong>Dispensa de Licitação (Lei 14.133/2021)</strong>. Sem burocracia excessiva e com retorno econômico de mais de 40x o investimento.
            </div>
          </div>

          <div class="glass-panel" style="padding: 22px; border-radius: 16px; border-left: 4px solid #3b82f6;">
            <div style="font-weight: 700; color: #60a5fa; font-size: 13px; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
              <i data-lucide="server" style="width: 15px; height: 15px;"></i> Zero Sobrecarga de Pessoal
            </div>
            <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
              O atendimento opera <strong>24 horas por dia no WhatsApp</strong> sem demandar contratação de funcionários públicos ou plantões. Capacidade auditada para mais de 5.000 turistas simultâneos.
            </div>
          </div>

          <div class="glass-panel" style="padding: 22px; border-radius: 16px; border-left: 4px solid #f59e0b;">
            <div style="font-weight: 700; color: #fbbf24; font-size: 13px; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
              <i data-lucide="compass" style="width: 15px; height: 15px;"></i> Descentralização do Tráfego
            </div>
            <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
              A IA orienta os visitantes para atrativos periféricos, rotas ecológicas e artesanato, reduzindo o congestionamento nos eixos centrais da cidade durante feriados e temporadas.
            </div>
          </div>

          <div class="glass-panel" style="padding: 22px; border-radius: 16px; border-left: 4px solid #a855f7;">
            <div style="font-weight: 700; color: #c084fc; font-size: 13px; text-transform: uppercase; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
              <i data-lucide="trending-up" style="width: 15px; height: 15px;"></i> Injeção de Receita no Comércio
            </div>
            <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.5;">
              Os estabelecimentos cadastrados (restaurantes, pousadas, lojas) recebem turistas direcionados e cupons ativos, estimulando a economia e gerando mais arrecadação para o município.
            </div>
          </div>

        </div>
      </div>

      <!-- 4 KPIs do Teste Auditado -->
      <div class="stats-grid" style="margin-bottom: 28px;">
        <div class="stat-card">
          <div class="stat-value">${sim.totalQueries || 150}</div>
          <div class="stat-label">Diálogos Auditados no WhatsApp</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">99.8%</div>
          <div class="stat-label">Taxa de Assertividade (Sem Erros)</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${sim.dispersionRate || 68}%</div>
          <div class="stat-label">Índice de Dispersão Territorial</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">R$ ${((sim.stimulatedRevenue || 7500)).toLocaleString('pt-BR')}</div>
          <div class="stat-label">Movimentação Comercial Induzida</div>
        </div>
      </div>

      <!-- Feed ao Vivo dos Testes & Conversão Comercial -->
      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 24px;" class="mobile-column-layout">
        
        <!-- Live Test Feed -->
        <div class="glass-panel" style="padding: 26px; border-radius: 20px;">
          <h3 style="font-size: 18px; font-weight: 700; color: white; margin-bottom: 6px; display: flex; align-items: center; gap: 8px;">
            <i data-lucide="check-circle-2" style="width: 18px; height: 18px; color: #00c48c;"></i>
            Amostragem de Testes com Agentes em ${city.name}
          </h3>
          <p style="font-size: 12px; color: var(--text-secondary); margin-bottom: 20px;">
            Perguntas submetidas no teste controlado e as respostas enxutas fornecidas pelo Agente Municipal de IA.
          </p>

          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${(sim.agentFeed || []).map(f => `
              <div style="padding: 14px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 12px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                  <span class="badge" style="background: ${f.badgeColor}; color: ${f.textColor}; font-size: 11px;">${f.archetype}</span>
                  <span style="font-size: 11px; color: #00c48c; font-weight: 600;">Status: Validado</span>
                </div>
                <div style="font-size: 13px; color: white; font-weight: 600; margin-bottom: 4px;">💬 Pergunta: "${f.query}"</div>
                <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.4; margin-bottom: 8px;">🤖 Resposta IA: ${f.aiReply}</div>
                <div style="font-size: 11px; color: #00c48c; font-weight: 600;">📍 Resultado: ${f.action}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Análise Territorial & Cupons -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          
          <div class="glass-panel" style="padding: 24px; border-radius: 20px;">
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin-bottom: 12px;">Descentralização de Fluxo Turístico</h4>
            <p style="font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
              ${sim.dispersionAnalysis || 'Equilíbrio auditado com sucesso entre atrativos do centro e rotas periféricas/rurais.'}
            </p>
            <div class="badge badge-primary" style="font-size: 12px; padding: 6px 12px;">
              <span>Dispersão Territorial: ${sim.dispersionRate || 68}%</span>
            </div>
          </div>

          <div class="glass-panel" style="padding: 24px; border-radius: 20px;">
            <h4 style="font-size: 16px; font-weight: 700; color: white; margin-bottom: 14px;">Resgates de Cupons no Comércio</h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              ${(sim.merchantCoupons || []).map(mc => `
                <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-color); border-radius: 10px;">
                  <div>
                    <div style="font-size: 13px; font-weight: 700; color: white;">${mc.name}</div>
                    <div style="font-size: 11px; color: var(--text-muted);">${mc.discount} • ${mc.tag}</div>
                  </div>
                  <span class="badge" style="background: rgba(0,196,140,0.15); color: #00c48c; font-size: 12px; font-weight: 700;">${mc.redeemed} resgates</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Selo Conclusivo -->
          <div style="padding: 16px; border-radius: 14px; background: rgba(0, 196, 140, 0.1); border: 1px solid rgba(0, 196, 140, 0.3); text-align: center;">
            <div style="font-size: 13px; font-weight: 700; color: #00c48c; margin-bottom: 4px;">✅ Conclusão da Auditoria</div>
            <div style="font-size: 12px; color: var(--text-secondary);">
              O município de ${city.name} reúne todos os pré-requisitos para ativação comercial e governamental do Guia Fácil.
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}

function getFooterHtml() {
  const currentYear = new Date().getFullYear();
  const city = getCurrentCity();

  return `
    <footer style="margin-top: 80px; border-top: 1px solid rgba(255, 255, 255, 0.08); background: rgba(5, 7, 12, 0.95); padding: 50px 0 30px;">
      <div class="container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; margin-bottom: 40px;">
          
          <!-- Brand Col -->
          <div>
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; cursor: pointer;" onclick="app.setActivePortal('landing')">
              <img src="src/assets/logo_guia_facil.png" alt="Guia Fácil" class="brand-logo-img" style="height: 38px;" />
            </div>
            <p style="color: var(--text-secondary); font-size: 13px; line-height: 1.6; margin-bottom: 16px;">
              O Guia Fácil conecta a gestão municipal, os visitantes e o comércio de <strong>${city.name} (${city.uf})</strong>, transformando turismo em inteligência territorial.
            </p>
            <div style="display: inline-flex; align-items: center; gap: 8px;">
              <button onclick="app.copyCityTestLink('${city.id}')" class="btn btn-secondary" style="padding: 6px 12px; font-size: 12px; border-radius: 8px; display: flex; align-items: center; gap: 4px;">
                <i data-lucide="share-2" style="width: 13px; height: 13px;"></i> Compartilhar ${city.name}
              </button>
            </div>
          </div>

          <!-- Portais -->
          <div>
            <h4 style="color: white; font-size: 15px; font-weight: 700; margin-bottom: 16px;">Portais do Sistema</h4>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; display: flex; flex-direction: column; gap: 10px;">
              <li><a href="#" onclick="event.preventDefault(); app.setActivePortal('visitor')" style="color: var(--text-secondary); text-decoration: none;">Turista (WhatsApp)</a></li>
              <li><a href="#" onclick="event.preventDefault(); app.setActivePortal('merchant')" style="color: var(--text-secondary); text-decoration: none;">Comerciante</a></li>
              <li><a href="#" onclick="event.preventDefault(); app.setActivePortal('manager')" style="color: var(--text-secondary); text-decoration: none;">Gestor Público</a></li>
              <li><a href="#" onclick="event.preventDefault(); app.setActivePortal('simulation')" style="color: var(--text-secondary); text-decoration: none;">Simulação MiroFish</a></li>
            </ul>
          </div>

          <!-- Cidades Ativas no SaaS -->
          <div>
            <h4 style="color: white; font-size: 15px; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 6px;">
              <i data-lucide="globe" style="width: 15px; height: 15px; color: #00c48c;"></i>
              Municípios Cadastrados
            </h4>
            <ul style="list-style: none; padding: 0; margin: 0; font-size: 13px; display: flex; flex-direction: column; gap: 8px;">
              ${Object.values(CITIES_DATA).map(c => `
                <li>
                  <a href="#" onclick="event.preventDefault(); app.switchCity('${c.id}')" style="color: ${c.id === city.id ? '#00c48c' : 'var(--text-secondary)'}; text-decoration: none; font-weight: ${c.id === city.id ? '700' : '400'}; display: flex; align-items: center; gap: 6px;">
                    <span>${c.badge.split(' ')[0]}</span>
                    <span>${c.name} (${c.uf})</span>
                    ${c.id === city.id ? '<span style="font-size: 10px; background: rgba(0,196,140,0.2); padding: 1px 5px; border-radius: 4px;">Ativo</span>' : ''}
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Contato Governamental -->
          <div>
            <h4 style="color: white; font-size: 15px; font-weight: 700; margin-bottom: 16px;">Prefeitura & Atendimento</h4>
            <p style="color: var(--text-secondary); font-size: 13px; line-height: 1.6; margin-bottom: 8px;">
              🏛️ Prefeitura: <strong>${city.publicServices.prefeitura}</strong>
            </p>
            <p style="color: var(--text-secondary); font-size: 13px; line-height: 1.6; margin-bottom: 8px;">
              🩺 Saúde: <strong>${city.publicServices.posto}</strong>
            </p>
            <p style="color: var(--text-secondary); font-size: 13px; line-height: 1.6;">
              🚓 Emergência: <strong>190</strong> | 🚑 SAMU: <strong>192</strong>
            </p>
          </div>

        </div>

        <div style="border-top: 1px solid rgba(255, 255, 255, 0.05); padding-top: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; font-size: 12px; color: var(--text-muted);">
          <div>
            © ${currentYear} Guia Fácil ${city.name} (${city.uf}). Plataforma Governamental de Inteligência Territorial.
          </div>
          <div style="display: flex; gap: 16px;">
            <a href="#" onclick="event.preventDefault(); app.openCityModal();" style="color: #00c48c; text-decoration: none;">Mudar Cidade</a>
            <span>•</span>
            <a href="#" onclick="event.preventDefault(); app.copyCityTestLink('${city.id}');" style="color: var(--text-secondary); text-decoration: none;">Copiar Link de Teste</a>
          </div>
        </div>

      </div>
    </footer>
  `;
}

function getModalHtml() {
  if (!state.modalMessage) return '';
  return `
    <div class="modal-overlay" onclick="if(event.target === this) app.closeModal()">
      <div class="modal-content glass-panel" style="max-width: 480px; padding: 32px; text-align: center; border-radius: 24px; position: relative; background: #0d121f; border: 1px solid rgba(255, 255, 255, 0.15); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);">
        <button class="modal-close" onclick="app.closeModal()">
          <i data-lucide="x" style="width: 20px; height: 20px;"></i>
        </button>
        <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(0, 196, 140, 0.15); color: var(--primary); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
          <i data-lucide="award" style="width: 30px; height: 30px;"></i>
        </div>
        <h3 style="font-size: 22px; font-weight: 700; color: white; margin-bottom: 12px;">${state.modalMessage.title}</h3>
        <p style="color: var(--text-secondary); font-size: 14px; line-height: 1.6; margin-bottom: 20px;">${state.modalMessage.text}</p>
        ${state.modalMessage.reward ? `
          <div class="badge badge-primary" style="padding: 8px 16px; font-size: 14px; margin-bottom: 24px; display: inline-flex;">
            ${state.modalMessage.reward}
          </div>
        ` : ''}
        <div>
          <button onclick="app.closeModal()" class="btn btn-primary" style="width: 100%; padding: 12px; font-size: 15px; border-radius: 12px; font-weight: 600;">
            Fechar
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderApp() {
  const root = document.getElementById('root');
  if (!root) return;

  let pageContent = '';
  if (state.activePortal === 'landing') pageContent = getLandingPageHtml();
  else if (state.activePortal === 'visitor') pageContent = getVisitorPortalHtml();
  else if (state.activePortal === 'merchant') pageContent = state.merchantLogged ? getMerchantPortalHtml() : getMerchantLoginHtml();
  else if (state.activePortal === 'manager') pageContent = getManagerPortalHtml();
  else if (state.activePortal === 'simulation') pageContent = getSimulationPortalHtml();

  root.innerHTML = `
    <div style="display: flex; flex-direction: column; min-height: 100vh;">
      ${getNavbarHtml()}
      <main style="flex-grow: 1;" class="container">
        ${pageContent}
      </main>
      ${getFooterHtml()}
      ${getModalHtml()}
    </div>
  `;

  // Modal de Seleção de Município SaaS Multicidades
  if (state.cityModalOpen) {
    const currentCity = getCurrentCity();
    const cityModalHtml = `
      <div class="city-modal-overlay" onclick="if(event.target === this) app.closeCityModal()">
        <div class="city-modal-content">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <img src="src/assets/logo_guia_facil.png" alt="Guia Fácil" style="height: 34px; width: auto;" />
              <div>
                <h3 style="font-size: 20px; font-weight: 700; color: white;">Selecione o Município (SaaS)</h3>
                <p style="font-size: 13px; color: var(--text-secondary); margin: 0;">Ambiente de teste e homologação controlada da plataforma.</p>
              </div>
            </div>
            <button onclick="app.closeCityModal()" style="background: none; border: none; color: var(--text-muted); cursor: pointer; padding: 6px;">
              <i data-lucide="x" style="width: 22px; height: 22px;"></i>
            </button>
          </div>

          <div style="margin-bottom: 20px;">
            ${Object.values(CITIES_DATA).map(c => `
              <div class="city-card-item ${c.id === currentCity.id ? 'active' : ''}" onclick="app.switchCity('${c.id}')">
                <div style="display: flex; align-items: center; gap: 14px;">
                  <div style="font-size: 28px;">${c.badge.split(' ')[0]}</div>
                  <div>
                    <div style="font-weight: 700; font-size: 16px; color: white; display: flex; align-items: center; gap: 8px;">
                      ${c.name} <span style="font-size: 12px; color: #94a3b8; font-weight: 500;">(${c.uf})</span>
                      ${c.id === currentCity.id ? '<span class="badge badge-primary" style="font-size: 10px; padding: 2px 6px;">Ativo</span>' : ''}
                    </div>
                    <div style="font-size: 12px; color: var(--text-secondary); margin-top: 2px;">${c.tagline}</div>
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 8px;" onclick="event.stopPropagation()">
                  <button onclick="app.copyCityTestLink('${c.id}')" class="btn btn-secondary" style="padding: 6px 12px; font-size: 12px; border-radius: 8px; display: flex; align-items: center; gap: 4px;" title="Copiar link de teste desta cidade">
                    <i data-lucide="share-2" style="width: 13px; height: 13px;"></i> Copiar Link
                  </button>
                  <button onclick="app.switchCity('${c.id}')" class="btn ${c.id === currentCity.id ? 'btn-primary' : 'btn-secondary'}" style="padding: 6px 14px; font-size: 12px; border-radius: 8px;">
                    ${c.id === currentCity.id ? 'Visualizando' : 'Acessar'}
                  </button>
                </div>
              </div>
            `).join('')}
          </div>

          <div style="padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.08); font-size: 12px; color: var(--text-muted); text-align: center;">
            💡 Ao enviar o link <code>?cidade=nome-da-cidade</code>, o Guia Fácil carrega diretamente os atrativos e a identidade local daquele município.
          </div>
        </div>
      </div>
    `;
    root.insertAdjacentHTML('beforeend', cityModalHtml);
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

async function syncWithBackend() {
  try {
    if (window.apiService && window.apiService.checkBackendStatus) {
      const online = await window.apiService.checkBackendStatus();
      state.backendOnline = online;
    }
  } catch (err) {
    state.backendOnline = false;
  }
}

// Immediate initial render for instant display
try {
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        renderApp();
        syncWithBackend();
      });
    } else {
      renderApp();
      syncWithBackend();
    }
  }
} catch (e) {
  console.error("Erro na inicialização da interface:", e);
}
