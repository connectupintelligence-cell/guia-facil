// Banco de Dados simulado para o Guia Fácil - Campos do Jordão

export const initialAttractions = [
  {
    id: 1,
    name: "Parque Amantikir",
    category: "Natureza",
    description: "Conhecido como 'os jardins que falam', possui mais de 700 espécies de plantas espalhadas por 60 mil m² em jardins temáticos inspirados em diversos países.",
    location: "Rodovia Campos do Jordão, Km 4",
    hours: "Diariamente, das 9h às 16h",
    price: "R$ 60,00",
    rating: 4.8,
    reviewsCount: 1240,
    imageUrl: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80",
    featured: true,
    latitude: -22.7533,
    longitude: -45.6291,
    checkInReward: "Medalha Amigo das Flores (+50 XP)"
  },
  {
    id: 2,
    name: "Vila Capivari",
    category: "Cultura",
    description: "O centro turístico da cidade, famoso por sua arquitetura em estilo alpino europeu, chocolaterias, restaurantes refinados e lojas de grife.",
    location: "Vila Capivari, Centro",
    hours: "Acesso livre (comércio varia)",
    price: "Gratuito",
    rating: 4.9,
    reviewsCount: 4580,
    imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    featured: true,
    latitude: -22.7388,
    longitude: -45.5904,
    checkInReward: "Medalha Explorador Alpino (+30 XP)"
  },
  {
    id: 3,
    name: "Teleférico e Parque Capivari",
    category: "Lazer",
    description: "O primeiro teleférico mono-cabo do Brasil, levando visitantes ao topo do Morro do Elefante a 1.800 metros de altitude, agora com cabines fechadas e abertas super modernas.",
    location: "Praça São Benedito, Vila Capivari",
    hours: "Quarta a segunda, das 9h às 18h",
    price: "R$ 40,00 (teleférico)",
    rating: 4.6,
    reviewsCount: 2310,
    imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
    featured: true,
    latitude: -22.7392,
    longitude: -45.5882,
    checkInReward: "Medalha Nas Alturas (+40 XP)"
  },
  {
    id: 4,
    name: "Ducha de Prata",
    category: "Natureza",
    description: "Cachoeiras artificiais formadas pelas águas do Ribeirão das Perdizes, onde os turistas podem tirar fotos em pontes de madeira e comprar artesanato local.",
    location: "Av. Senador Roberto Simonsen, Vila Inglesa",
    hours: "Diariamente, das 9h às 17h",
    price: "Gratuito",
    rating: 4.3,
    reviewsCount: 1890,
    imageUrl: "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=600&q=80",
    featured: false,
    latitude: -22.7231,
    longitude: -45.5712,
    checkInReward: "Medalha Ducha Gelada (+20 XP)"
  },
  {
    id: 5,
    name: "Pico do Itapeva",
    category: "Aventura",
    description: "Mirante natural situado a 2.030 metros de altitude na divisa com Pindamonhangaba. Oferece vista panorâmica para o Vale do Paraíba e cerca de 15 cidades da região.",
    location: "Estrada do Pico do Itapeva, Km 10",
    hours: "Diariamente, das 9h às 17h",
    price: "R$ 20,00 por veículo",
    rating: 4.7,
    reviewsCount: 1740,
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    featured: false,
    latitude: -22.7599,
    longitude: -45.5562,
    checkInReward: "Medalha No Topo do Mundo (+60 XP)"
  },
  {
    id: 6,
    name: "Horto Florestal (Parque Estadual)",
    category: "Aventura",
    description: "Unidade de conservação com florestas de araucária, trilhas de caminhada, arborismo, aluguel de bicicletas, tirolesa e restaurantes integrados à natureza alpina.",
    location: "Av. Pedro Paulo, s/n - Horto Florestal",
    hours: "Terça a domingo, das 8h às 17h",
    price: "R$ 19,00",
    rating: 4.8,
    reviewsCount: 1540,
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    featured: false,
    latitude: -22.6865,
    longitude: -45.5212,
    checkInReward: "Medalha Guardião da Araucária (+50 XP)"
  }
];

export const initialMerchants = [
  {
    id: 101,
    name: "Baden Baden Cervejaria",
    category: "Gastronomia",
    description: "Um dos ícones de Campos do Jordão. Oferece o melhor da culinária alemã e cervejas artesanais premiadas no coração do Capivari.",
    location: "Rua Djalma Forjaz, 93 - Vila Capivari",
    phone: "(12) 3663-3610",
    whatsapp: "+551236633610",
    imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
    rating: 4.8,
    reviewsCount: 1420,
    approved: true,
    viewsThisWeek: 2150,
    whatsappClicks: 435,
    couponsRedeemed: 124,
    reviews: [
      { user: "Carlos A.", rating: 5, comment: "Chopp gelado e o joelho de porco estava sensacional! Ótimo atendimento.", date: "02/06/2026" },
      { user: "Mariana R.", rating: 4, comment: "Lugar lotado, mas a qualidade da cerveja compensa. Recomendo a Baden Baden Cristal.", date: "31/05/2026" },
      { user: "Fernando M.", rating: 5, comment: "Cupom do Guia Fácil deu 10% de desconto direto. Muito prático!", date: "28/05/2026" }
    ],
    coupons: [
      { id: "BADEN10", code: "BADEN10", description: "10% de desconto no Chopp Cristal de 500ml", limit: 150, redeemed: 92, active: true },
      { id: "PROMOBADEN", code: "PROMOBADEN", description: "Sobremesa cortesia na compra de um prato principal", limit: 50, redeemed: 32, active: true }
    ]
  },
  {
    id: 102,
    name: "Matterhorn Fondue & Empório",
    category: "Gastronomia",
    description: "Tradicional restaurante alpino localizado no Capivari, especialista em rodízio de fondue de queijo, carnes e chocolate premium.",
    location: "Rua Djalma Forjaz, 115 - Vila Capivari",
    phone: "(12) 3663-1841",
    whatsapp: "+551236631841",
    imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
    rating: 4.7,
    reviewsCount: 890,
    approved: true,
    viewsThisWeek: 1420,
    whatsappClicks: 218,
    couponsRedeemed: 65,
    reviews: [
      { user: "Juliana K.", rating: 5, comment: "Melhor fondue de chocolate da cidade. O ambiente com piano ao vivo é acolhedor.", date: "04/06/2026" },
      { user: "Guilherme B.", rating: 4, comment: "Excelente qualidade, preço elevado, mas vale para ocasiões especiais.", date: "25/05/2026" }
    ],
    coupons: [
      { id: "MATTER15", code: "MATTER15", description: "15% de desconto no rodízio de Fondue de segunda a quinta", limit: 100, redeemed: 65, active: true }
    ]
  },
  {
    id: 103,
    name: "Chocolate Araucária",
    category: "Comércio",
    description: "Fábrica e loja de chocolates artesanais pioneira na região, produzindo trufas, barras, bombons e o tradicional chocolate quente cremoso.",
    location: "Av. Amadeu Carletti Junior, 255 - Vila Jaguary",
    phone: "(12) 3668-9588",
    whatsapp: "+551236689588",
    imageUrl: "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
    rating: 4.6,
    reviewsCount: 620,
    approved: true,
    viewsThisWeek: 980,
    whatsappClicks: 154,
    couponsRedeemed: 88,
    reviews: [
      { user: "Luiza F.", rating: 5, comment: "O chocolate quente cremoso é divino. As trufas de maracujá são minhas favoritas.", date: "05/06/2026" }
    ],
    coupons: [
      { id: "ARAUCHOCO", code: "ARAUCHOCO", description: "Pague 1 leve 2 no chocolate quente tradicional", limit: 200, redeemed: 88, active: true }
    ]
  },
  {
    id: 104,
    name: "Pousada Recanto dos Sonhos",
    category: "Hospedagem",
    description: "Cenário de conto de fadas com chalés privativos inspirados em vilas europeias, cercado por jardins verdes e ampla área de lazer infantil.",
    location: "Rua Ricardo Gonçalves, Vila Jaguaribe",
    phone: "(12) 3663-1222",
    whatsapp: "+551236631222",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviewsCount: 940,
    approved: true,
    viewsThisWeek: 1250,
    whatsappClicks: 198,
    couponsRedeemed: 24,
    reviews: [
      { user: "Patricia G.", rating: 5, comment: "Amamos a estadia. Chalé limpo, aquecimento impecável e café da manhã dos deuses.", date: "01/06/2026" }
    ],
    coupons: [
      { id: "RECANTO10", code: "RECANTO10", description: "10% de desconto em diárias de meio de semana", limit: 30, redeemed: 24, active: true }
    ]
  },
  {
    id: 105,
    name: "Hotel Toriba",
    category: "Hospedagem",
    description: "Um marco da hotelaria nacional, inaugurado em 1943. Cercado por araucárias em uma fazenda com infraestrutura completa de lazer e spa L'Occitane.",
    location: "Av. Ernesto Diederichsen, 2100 - Toriba",
    phone: "(12) 3668-5000",
    whatsapp: "+551236685000",
    imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    rating: 4.9,
    reviewsCount: 1110,
    approved: true,
    viewsThisWeek: 850,
    whatsappClicks: 122,
    couponsRedeemed: 8,
    reviews: [
      { user: "Roberto S.", rating: 5, comment: "Serviço perfeito de ponta a ponta. Uma viagem de volta ao charme dos anos 40.", date: "22/05/2026" }
    ],
    coupons: [
      { id: "TORIBASPA", code: "TORIBASPA", description: "Ganhe 15min adicionais em qualquer massagem no Spa Toriba", limit: 20, redeemed: 8, active: true }
    ]
  },
  
  // Solicitações Comerciais Pendentes (para fila de moderação do Gestor Público)
  {
    id: 106,
    name: "Restaurante Alpes Suíços",
    category: "Gastronomia",
    description: "Nova casa de fondue e massas caseiras, localizada na subida do teleférico com deck panorâmico.",
    location: "Rua do Teleférico, 45",
    phone: "(12) 99822-1144",
    whatsapp: "+5512998221144",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    rating: 0.0,
    reviewsCount: 0,
    approved: false,
    viewsThisWeek: 0,
    whatsappClicks: 0,
    couponsRedeemed: 0,
    reviews: [],
    coupons: []
  },
  {
    id: 107,
    name: "Cafeteria Trilhas do Sol",
    category: "Comércio",
    description: "Cafés especiais moídos na hora e lanches rápidos focados em ciclistas e praticantes de trekking.",
    location: "Estrada do Horto Florestal, Km 8",
    phone: "(12) 98144-5566",
    whatsapp: "+5512981445566",
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    rating: 0.0,
    reviewsCount: 0,
    approved: false,
    viewsThisWeek: 0,
    whatsappClicks: 0,
    couponsRedeemed: 0,
    reviews: [],
    coupons: []
  }
];

export const initialEvents = [
  {
    id: 201,
    name: "Festival Internacional de Inverno de Campos do Jordão",
    description: "O maior e mais prestigiado festival de música clássica da América Latina. Apresenta orquestras, quartetos e concertistas mundiais no Auditório Cláudio Santoro e praça do Capivari.",
    date: "04 de Julho a 02 de Agosto, 2026",
    location: "Auditório Claudio Santoro & Praça de Capivari",
    imageUrl: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=600&q=80",
    category: "Música & Cultura",
    active: true
  },
  {
    id: 202,
    name: "Festival Gastronômico do Pinhão",
    description: "Restaurantes locais criam receitas exclusivas utilizando o pinhão (semente da araucária) como ingrediente principal, promovendo a gastronomia de montanha.",
    date: "15 de Abril a 17 de Maio, 2026",
    location: "Estabelecimentos participantes associados",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    category: "Gastronomia",
    active: false
  },
  {
    id: 203,
    name: "Natal dos Sonhos",
    description: "A cidade inteira se ilumina com decoração natalina espetacular. Evento com corais infantis, paradas com Papai Noel e desfile de luzes.",
    date: "14 de Novembro a 06 de Janeiro, 2026",
    location: "Principais vias e praças da cidade",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    category: "Lazer & Família",
    active: false
  }
];

// Indicadores do Gestor Público (Inteligência Territorial)
export const initialManagerStats = {
  activeVisitorsToday: 12450,
  monthlyVisitors: 154200,
  monthlyVisitorsChange: "+14.3%",
  estimatedTourismRevenue: 48900000, // R$ 48.9 M
  estimatedTourismRevenueChange: "+18.7%",
  hotelOccupancyRate: 84.6, // 84.6%
  hotelOccupancyRateChange: "+5.2%",
  activeMerchants: 148,
  
  // Fluxo de visitantes mensal (Janeiro - Dezembro 2026 projetado/simulado)
  visitorFlowChart: [
    { month: "Jan", visitors: 98000 },
    { month: "Fev", visitors: 62000 },
    { month: "Mar", visitors: 48000 },
    { month: "Abr", visitors: 78000 }, // Páscoa / Pinhão
    { month: "Mai", visitors: 82000 },
    { month: "Jun", visitors: 145000 }, // Início das férias
    { month: "Jul", visitors: 280000 }, // Pico do inverno
    { month: "Ago", visitors: 110000 },
    { month: "Set", visitors: 65000 },
    { month: "Out", visitors: 72000 },
    { month: "Nov", visitors: 95000 }, // Início do Natal
    { month: "Dez", visitors: 160000 }  // Natal
  ],

  // Origem dos turistas (por estado em %)
  touristOrigin: [
    { state: "São Paulo", percentage: 68 },
    { state: "Rio de Janeiro", percentage: 14 },
    { state: "Minas Gerais", percentage: 8 },
    { state: "Paraná", percentage: 5 },
    { state: "Outros", percentage: 5 }
  ],

  // Distribuição de gastos médios por visitante (em R$)
  averageSpending: {
    hospedagem: 450,
    alimentacao: 220,
    compras: 180,
    ingressos: 80,
    transporte: 70
  }
};


export const CITIES_DATA = {
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
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil Campos do Jordão*, seu assistente virtual de inteligência territorial.\n      \nComo posso transformar sua viagem hoje?\n🌲 _\"O que fazer hoje?\"_ (Parque Amantikir, Teleférico, Capivari)\n🍴 _\"Onde comer fondue ou tomar chopp?\"_ (Baden Baden, Matterhorn)\n👶 _\"Estou com crianças para a tarde\"_ (roteiros familiares)\n📅 _\"O que acontece neste final de semana?\"_ (Festival de Inverno)\n🏨 _\"Preciso de pousada para casal\"_ (chalés alpinos)\n🏥 _\"Qual o telefone da prefeitura e posto de saúde?\"_\n\nDigite sua dúvida ou clique em uma sugestão abaixo!",
    "quickSuggestions": [
      "O que fazer hoje?",
      "Onde comer fondue no Capivari?",
      "Passeio para a tarde com crianças",
      "Pousada com lareira para casal",
      "Telefone da prefeitura e hospital"
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
      "totalAgents": 36,
      "totalQueries": 177,
      "couponsRedeemed": 50,
      "checkinsDone": 50,
      "totalXp": 2750,
      "stimulatedRevenue": 8596.16,
      "dispersionRate": 63.0,
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
          "tag": "Periférico",
          "color": "var(--primary)"
        },
        {
          "name": "Pousada Recanto dos Sonhos",
          "code": "RECANTO10",
          "discount": "10% Diária",
          "redeemed": 15,
          "tag": "Periférico",
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
          "query": "O que fazer com duas crianças de 6 e 9 anos à tarde?",
          "aiReply": "Parque Amantikir (labirinto botânico) e Teleférico Morro do Elefante.",
          "action": "Check-in presencial no Parque Amantikir (+50 XP)",
          "badgeColor": "rgba(0, 196, 140, 0.2)",
          "textColor": "#00c48c"
        },
        {
          "id": "agente_12",
          "archetype": "Casal Romântico",
          "time": "Sábado 19:40",
          "query": "Melhor fondue com lareira para jantar a dois?",
          "aiReply": "Matterhorn Fondue & Empório com rodízio especial e música ao vivo.",
          "action": "Resgate de Cupom MATTER15 (-15% no rodízio)",
          "badgeColor": "rgba(167, 139, 250, 0.2)",
          "textColor": "#c4b5fd"
        },
        {
          "id": "agente_27",
          "archetype": "Jovem Aventureiro",
          "time": "Domingo 09:30",
          "query": "Quais trilhas e cachoeiras abertas perto da natureza?",
          "aiReply": "Horto Florestal (Trilha da Cachoeira e arvorismo alpino).",
          "action": "Check-in presencial no Horto Florestal (+50 XP)",
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
        "description": "O primeiro teleférico mono-cabo do Brasil, levando visitantes ao topo do Morro do Elefante a 1.800 metros de altitude, com cabines fechadas e abertas super modernas.",
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
        "name": "Ducha de Prata",
        "category": "Natureza",
        "description": "Cachoeiras artificiais formadas pelas águas do Ribeirão das Perdizes, onde os turistas podem tirar fotos em pontes de madeira e comprar artesanato local.",
        "location": "Av. Senador Roberto Simonsen, Vila Inglesa",
        "hours": "Diariamente, das 9h às 17h",
        "price": "Gratuito",
        "rating": 4.3,
        "reviewsCount": 1890,
        "imageUrl": "https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Ducha Gelada (+20 XP)"
      },
      {
        "id": 5,
        "name": "Pico do Itapeva",
        "category": "Aventura",
        "description": "Mirante natural situado a 2.030 metros de altitude com vista panorâmica para o Vale do Paraíba e cerca de 15 cidades da região da Mantiqueira.",
        "location": "Estrada do Pico do Itapeva, Km 10",
        "hours": "Diariamente, das 9h às 17h",
        "price": "R$ 20,00 por veículo",
        "rating": 4.7,
        "reviewsCount": 1740,
        "imageUrl": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha No Topo do Mundo (+60 XP)"
      },
      {
        "id": 6,
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
        "description": "Um dos ícones de Campos do Jordão. Oferece o melhor da culinária alemã e cervejas artesanais premiadas no coração do Capivari.",
        "location": "Rua Djalma Forjaz, 93 - Vila Capivari",
        "phone": "(12) 3663-3610",
        "whatsapp": "551236633610",
        "imageUrl": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
        "rating": 4.8,
        "reviewsCount": 1420,
        "approved": true,
        "viewsThisWeek": 2150,
        "whatsappClicks": 435,
        "couponsRedeemed": 124,
        "coupons": [
          {
            "id": "C1",
            "code": "BADEN10",
            "description": "10% de desconto no Chopp Cristal de 500ml",
            "limit": 150,
            "redeemed": 92,
            "active": true
          },
          {
            "id": "C2",
            "code": "PROMOBADEN",
            "description": "Sobremesa cortesia na compra de um prato principal",
            "limit": 50,
            "redeemed": 32,
            "active": true
          }
        ]
      },
      {
        "id": 102,
        "name": "Matterhorn Fondue & Empório",
        "category": "Gastronomia",
        "description": "Tradicional restaurante alpino no Capivari, especialista em rodízio de fondue de queijo, carnes e chocolate suíço com música ao vivo.",
        "location": "Rua Djalma Forjaz, 115 - Vila Capivari",
        "phone": "(12) 3663-1841",
        "whatsapp": "551236631841",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.7,
        "reviewsCount": 890,
        "approved": true,
        "viewsThisWeek": 1420,
        "whatsappClicks": 218,
        "couponsRedeemed": 65,
        "coupons": [
          {
            "id": "C3",
            "code": "MATTER15",
            "description": "15% de desconto no rodízio de Fondue de segunda a quinta",
            "limit": 100,
            "redeemed": 65,
            "active": true
          }
        ]
      },
      {
        "id": 103,
        "name": "Chocolate Araucária",
        "category": "Comércio",
        "description": "Fábrica e loja de chocolates artesanais pioneira na região, produzindo trufas, barras, bombons e o tradicional chocolate quente cremoso.",
        "location": "Av. Amadeu Carletti Junior, 255 - Vila Jaguary",
        "phone": "(12) 3668-9588",
        "whatsapp": "551236689588",
        "imageUrl": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
        "rating": 4.6,
        "reviewsCount": 620,
        "approved": true,
        "viewsThisWeek": 980,
        "whatsappClicks": 154,
        "couponsRedeemed": 88,
        "coupons": [
          {
            "id": "C4",
            "code": "ARAUCHOCO",
            "description": "Pague 1 leve 2 no chocolate quente tradicional",
            "limit": 200,
            "redeemed": 88,
            "active": true
          }
        ]
      },
      {
        "id": 104,
        "name": "Pousada Recanto dos Sonhos",
        "category": "Hospedagem",
        "description": "Chalés privativos com lareira inspirados em vilas europeias, cercado por jardins verdes e ampla área de lazer.",
        "location": "Rua Ricardo Gonçalves, Vila Jaguaribe",
        "phone": "(12) 3663-1222",
        "whatsapp": "551236631222",
        "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 940,
        "approved": true,
        "viewsThisWeek": 1250,
        "whatsappClicks": 198,
        "couponsRedeemed": 24,
        "coupons": [
          {
            "id": "C5",
            "code": "RECANTO10",
            "description": "10% de desconto em diárias de meio de semana",
            "limit": 30,
            "redeemed": 24,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 201,
        "name": "Festival Internacional de Inverno",
        "description": "O maior festival de música clássica da América Latina, com orquestras internacionais no Auditório Cláudio Santoro.",
        "date": "04 de Julho a 02 de Agosto, 2026",
        "location": "Auditório Claudio Santoro & Praça de Capivari",
        "category": "Música & Cultura",
        "active": true
      },
      {
        "id": 202,
        "name": "Festival Gastronômico do Pinhão",
        "description": "Restaurantes locais criam receitas exclusivas utilizando o pinhão como ingrediente principal.",
        "date": "15 de Abril a 17 de Maio, 2026",
        "location": "Estabelecimentos participantes",
        "category": "Gastronomia",
        "active": false
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
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil São Bento do Sapucaí*, seu assistente virtual oficial.\n      \nComo posso ajudar em sua aventura na montanha hoje?\n⛰️ _\"O que fazer hoje em São Bento do Sapucaí?\"_ (Pedra do Baú, Bauzinho, Capelinhas)\n🍴 _\"Onde almoçar perto da Pedra do Baú?\"_ (Restaurante Trincheira, Cervejaria Bauzera)\n👶 _\"Estou com duas crianças e quero um passeio para a tarde\"_ (roteiros com cachoeiras leves)\n🏨 _\"Preciso de pousada para casal com vista para o Baú\"_ (chalés panorâmicos)\n🎨 _\"Feira de Artesanato e capelinhas de mosaico\"_ (roteiro cultural)\n🏥 _\"Qual o telefone da prefeitura e posto de saúde?\"_\n\nDigite sua dúvida ou selecione uma opção abaixo!",
    "quickSuggestions": [
      "O que fazer hoje em São Bento do Sapucaí?",
      "Onde almoçar perto da Pedra do Baú?",
      "Estou com duas crianças e quero um passeio para a tarde",
      "Preciso de pousada para casal",
      "Qual o telefone da prefeitura e posto de saúde?"
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
      "totalAgents": 32,
      "totalQueries": 158,
      "couponsRedeemed": 46,
      "checkinsDone": 48,
      "totalXp": 2540,
      "stimulatedRevenue": 7420.5,
      "dispersionRate": 71.5,
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
          "aiReply": "A Trilha do Bauzinho é ideal para contemplação fácil; para escalada na via ferrata, vá com guia credenciado ao topo do Baú.",
          "action": "Check-in digital no Bauzinho (+60 XP)",
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
        "description": "Formação rochosa icônica da Mantiqueira com 1.950m de altitude. Abriga o Bauzinho (acesso fácil para famílias), a Ana Chata e o imponente Baú com via ferrata.",
        "location": "Estrada Municipal da Pedra do Baú, Km 8",
        "hours": "Acesso das 8h às 17h (Estacionamento do Bauzinho)",
        "price": "R$ 20,00 (acesso/estacionamento)",
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
        "description": "Igrejinhas históricas transformadas em verdadeiras galerias a céu aberto pelos renomados artistas plásticos Ângelo Milani e Claudia Lara.",
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
        "description": "Cooperativa comunitária de artesãos que produzem cestaria tradicional em palha de milho, fibra de bananeira, madeira esculpida e tecelagem.",
        "location": "Bairro do Quilombo, Estrada Municipal",
        "hours": "Quinta a domingo, das 9h às 17h",
        "price": "Gratuito",
        "rating": 4.9,
        "reviewsCount": 980,
        "imageUrl": "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Guardião do Quilombo (+35 XP)"
      },
      {
        "id": 14,
        "name": "Cachoeira dos Amores & Tobogã",
        "category": "Natureza",
        "description": "Cachoeira com piscina natural de águas cristalinas, escorregador natural de pedra e trilhas cercadas pela exuberante Mata Atlântica.",
        "location": "Bairro do Paiol Grande",
        "hours": "Diariamente, das 9h às 17h",
        "price": "R$ 10,00 taxa de preservação",
        "rating": 4.7,
        "reviewsCount": 1210,
        "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Águas da Mantiqueira (+30 XP)"
      },
      {
        "id": 15,
        "name": "Mirante do Cruzeiro",
        "category": "Lazer",
        "description": "Mirante panorâmico no topo da colina da cidade, com vista de 360° para todo o vale, o centro histórico e a silhueta da Pedra do Baú.",
        "location": "Subida do Morro do Cruzeiro",
        "hours": "Acesso livre (pôr do sol imperdível)",
        "price": "Gratuito",
        "rating": 4.7,
        "reviewsCount": 850,
        "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Pôr do Sol no Cruzeiro (+30 XP)"
      },
      {
        "id": 16,
        "name": "Igreja Matriz e Centro Histórico",
        "category": "Cultura",
        "description": "Praça central arborizada com coreto, cafés acolhedores e a secular Igreja Matriz construída por escravizados com pedras da região.",
        "location": "Praça Cônego Bento de Almeida, Centro",
        "hours": "Diariamente",
        "price": "Gratuito",
        "rating": 4.6,
        "reviewsCount": 780,
        "imageUrl": "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Centro Histórico (+25 XP)"
      }
    ],
    "merchants": [
      {
        "id": 111,
        "name": "Restaurante Trincheira & Tratoria",
        "category": "Gastronomia",
        "description": "Gastronomia requintada da Mantiqueira especializada em trutas frescas grelhadas, massas caseiras e vinhos selecionados com deck para a Pedra do Baú.",
        "location": "Estrada do Paiol Grande, Km 2",
        "phone": "(12) 3971-2005",
        "whatsapp": "551239712005",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 820,
        "approved": true,
        "viewsThisWeek": 1180,
        "whatsappClicks": 290,
        "couponsRedeemed": 72,
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
        "description": "Brewpub artesanal com lúpulos frescos e água mineral da serra. Harmonizações com queijos locais e petiscos caipiras.",
        "location": "Estrada Municipal do Baú, Km 4",
        "phone": "(12) 99762-3344",
        "whatsapp": "5512997623344",
        "imageUrl": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
        "rating": 4.8,
        "reviewsCount": 540,
        "approved": true,
        "viewsThisWeek": 860,
        "whatsappClicks": 180,
        "couponsRedeemed": 45,
        "coupons": [
          {
            "id": "CSB2",
            "code": "BAUZERA10",
            "description": "10% de desconto na régua de degustação de chope artesanal",
            "limit": 80,
            "redeemed": 35,
            "active": true
          }
        ]
      },
      {
        "id": 113,
        "name": "Pousada do Quilombo Resort",
        "category": "Hospedagem",
        "description": "Resort ecológico com chalés panorâmicos privativos de frente para a Pedra do Baú, piscina aquecida, spa e restaurante autoral.",
        "location": "Estrada do Quilombo, Km 2",
        "phone": "(12) 3971-2688",
        "whatsapp": "551239712688",
        "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 1120,
        "approved": true,
        "viewsThisWeek": 1450,
        "whatsappClicks": 240,
        "couponsRedeemed": 30,
        "coupons": [
          {
            "id": "CSB3",
            "code": "QUILOMBO10",
            "description": "10% de desconto em reservas diretas de chalé com lareira",
            "limit": 40,
            "redeemed": 22,
            "active": true
          }
        ]
      },
      {
        "id": 114,
        "name": "Rancho do Zé & Queijos Artesanais",
        "category": "Comércio",
        "description": "Tradicional produtor de queijos curados da Mantiqueira, doce de leite artesanal na palha, geleias orgânicas e café de altitude moído na hora.",
        "location": "Rodovia SP-042, Km 15",
        "phone": "(12) 99655-1122",
        "whatsapp": "5512996551122",
        "imageUrl": "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=80",
        "rating": 4.8,
        "reviewsCount": 670,
        "approved": true,
        "viewsThisWeek": 790,
        "whatsappClicks": 110,
        "couponsRedeemed": 64,
        "coupons": [
          {
            "id": "CSB4",
            "code": "RANCHOZE",
            "description": "Ganhe um pote de doce de leite artesanal em compras acima de R$ 80",
            "limit": 100,
            "redeemed": 64,
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
      },
      {
        "id": 212,
        "name": "Encontro de Montanhismo da Mantiqueira",
        "description": "Atletas e entusiastas de escalada de todo o país reunidos para palestras, clínicas de via ferrata e conservação ambiental.",
        "date": "21 a 24 de Maio, 2026",
        "location": "Monumento Natural da Pedra do Baú",
        "category": "Esporte & Aventura",
        "active": false
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
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil Santo Antônio do Pinhal*, seu assistente virtual.\n      \nComo posso transformar seu passeio na serra hoje?\n🍃 _\"O que fazer hoje em Santo Antônio do Pinhal?\"_ (Pico Agudo, Jardim dos Pinhais, Estação)\n🪂 _\"Como subir ao Pico Agudo para ver o pôr do sol?\"_ (dicas de voo livre e mirante)\n🍴 _\"Onde comer truta ou massa artesanal?\"_ (Bodega Santo Antônio, cafés de estação)\n🏨 _\"Pousadas românticas de montanha com hidromassagem\"_\n🏥 _\"Qual o telefone da prefeitura e posto de saúde?\"_\n\nDigite sua dúvida ou selecione uma opção!",
    "quickSuggestions": [
      "O que fazer hoje em Santo Antônio do Pinhal?",
      "Como chegar ao Pico Agudo?",
      "Onde comer truta fresca na cidade?",
      "Pousada romântica para casal",
      "Telefones úteis e prefeitura"
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
      "totalAgents": 30,
      "totalQueries": 142,
      "couponsRedeemed": 41,
      "checkinsDone": 44,
      "totalXp": 2310,
      "stimulatedRevenue": 6890.0,
      "dispersionRate": 68.2,
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
          "aiReply": "Suba entre 16h30 e 17h para estacionar com calma e contemplar o voo livre com céu dourado a 1.634m de altitude.",
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
        "description": "Com 1.634m de altitude, oferece vista espetacular de 360° para a Pedra do Baú e o Vale do Paraíba, com rampa ativa de parapente e asa-delta.",
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
        "description": "O primeiro parque temático de jardins temáticos do Brasil: jardins Japonês, Italiano, Tropical, Desértico e Canadense em meio às araucárias.",
        "location": "Rodovia SP-046, Km 146",
        "hours": "Segunda a domingo, das 9h às 17h",
        "price": "R$ 45,00",
        "rating": 4.8,
        "reviewsCount": 1850,
        "imageUrl": "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Botânica dos Pinhais (+40 XP)"
      },
      {
        "id": 23,
        "name": "Fazenda Renópolis & Bosque de Lavandas",
        "category": "Lazer",
        "description": "Tradicional casa de chá e fazenda histórica com trilhas sensoriais na mata, campos de lavanda perfumados e doces artesanais.",
        "location": "Estrada do Lageado, Km 3",
        "hours": "Sexta a domingo, das 10h às 18h",
        "price": "R$ 15,00",
        "rating": 4.7,
        "reviewsCount": 920,
        "imageUrl": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Aroma de Lavanda (+30 XP)"
      },
      {
        "id": 24,
        "name": "Estação Eugênio Lefèvre & Café da Estação",
        "category": "Cultura",
        "description": "Estação centenária da Estrada de Ferro Campos do Jordão, famosa pelo mirante Nossa Senhora Auxiliadora e pelo melhor pastel de truta da serra.",
        "location": "Rodovia Floriano Rodrigues Pinheiro, Km 43",
        "hours": "Diariamente, das 9h às 17h",
        "price": "Gratuito",
        "rating": 4.6,
        "reviewsCount": 1410,
        "imageUrl": "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Viajante dos Trilhos (+30 XP)"
      }
    ],
    "merchants": [
      {
        "id": 121,
        "name": "Bodega Santo Antônio",
        "category": "Gastronomia",
        "description": "Cozinha acolhedora de montanha com ênfase em massas recheadas artesanais, risotos de truta defumada e carta de vinhos finos.",
        "location": "Av. Min. Nelson Hungria, 620",
        "phone": "(12) 3666-1890",
        "whatsapp": "551236661890",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.8,
        "reviewsCount": 610,
        "approved": true,
        "viewsThisWeek": 820,
        "whatsappClicks": 170,
        "couponsRedeemed": 48,
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
      },
      {
        "id": 122,
        "name": "Cervejaria Araukarien",
        "category": "Gastronomia",
        "description": "Microcervejaria artesanal aos pés da serra. Cervejas premiadas com notas de pinhão e lúpulo fresco.",
        "location": "Rodovia Oswaldo Barbosa Guisardi, Km 2",
        "phone": "(12) 99712-4455",
        "whatsapp": "5512997124455",
        "imageUrl": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
        "rating": 4.7,
        "reviewsCount": 430,
        "approved": true,
        "viewsThisWeek": 650,
        "whatsappClicks": 120,
        "couponsRedeemed": 35,
        "coupons": [
          {
            "id": "CSAP2",
            "code": "ARAUK15",
            "description": "15% de desconto no segundo chope",
            "limit": 70,
            "redeemed": 35,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 221,
        "name": "Festa do Pinhão de Santo Antônio",
        "description": "Barracas gastronômicas com receitas de pinhão, shows de moda de viola e feira de artesanato sustentável.",
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
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil Monte Verde*, seu concierge inteligente nas montanhas de Minas.\n      \nComo posso tornar sua estadia inesquecível?\n❄️ _\"O que fazer hoje em Monte Verde?\"_ (Trilha da Pedra Redonda, Vila, Fábrica de Chocolates)\n🍴 _\"Onde comer o melhor fondue ou truta mineira?\"_ (Villa Dona Gourmet, Fritz)\n🥾 _\"Como agendar a Trilha da Pedra Redonda?\"_ (dicas de calçado e altitude)\n🏨 _\"Pousada romântica com lareira e hidromassagem\"_\n🏥 _\"Telefones de emergência e posto de saúde\"_\n\nDigite sua dúvida ou escolha uma sugestão!",
    "quickSuggestions": [
      "O que fazer hoje em Monte Verde?",
      "Dicas para a Trilha da Pedra Redonda",
      "Onde comer fondue ou chocolate artesanal?",
      "Pousada romântica com lareira",
      "Telefones úteis de Monte Verde"
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
      "totalAgents": 34,
      "totalQueries": 164,
      "couponsRedeemed": 48,
      "checkinsDone": 47,
      "totalXp": 2620,
      "stimulatedRevenue": 7950.0,
      "dispersionRate": 65.4,
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
        "description": "Trilha acessível com passarelas de madeira levando ao cume de 1.990m de altitude com mirante espetacular de divisa de estados.",
        "location": "Acesso pelo final da Av. das Montanhas",
        "hours": "Diariamente, das 8h às 16h (Agendamento obrigatório)",
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
        "description": "Boulevard alpino com galerias floridas, empórios de queijo da canastra, chocolaterias, cafeterias e lojas de malhas de lã.",
        "location": "Av. Monte Verde, Centro",
        "hours": "Comércio aberto diariamente",
        "price": "Gratuito",
        "rating": 4.8,
        "reviewsCount": 4200,
        "imageUrl": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Passeio Alpino Mineiro (+30 XP)"
      },
      {
        "id": 33,
        "name": "Fábrica de Chocolates Gressoney",
        "category": "Comércio",
        "description": "Fundada em 1978, a pioneira em chocolates finos de Monte Verde, criadora da famosa sobremesa 'Prístino' e bombons recheados.",
        "location": "Av. Monte Verde, 636",
        "hours": "Diariamente, das 10h às 19h",
        "price": "Gratuito",
        "rating": 4.8,
        "reviewsCount": 1980,
        "imageUrl": "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Mestre Chocolatier (+35 XP)"
      },
      {
        "id": 34,
        "name": "Parque Oschin",
        "category": "Natureza",
        "description": "45 mil m² de natureza exuberante, araucárias centenárias, nascentes, lhamas soltas pelo gramado e restaurante na floresta.",
        "location": "Rua Mantiqueira, 1460",
        "hours": "Quarta a segunda, das 9h30 às 18h",
        "price": "R$ 50,00",
        "rating": 4.8,
        "reviewsCount": 1280,
        "imageUrl": "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Amigo da Floresta Oschin (+40 XP)"
      }
    ],
    "merchants": [
      {
        "id": 131,
        "name": "Villa Dona Gourmet",
        "category": "Gastronomia",
        "description": "Referência em gastronomia alpina e fondues especiais servidos na lareira, com ampla adega subterrânea.",
        "location": "Rua Rolinha, 33",
        "phone": "(35) 3438-2159",
        "whatsapp": "553534382159",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 940,
        "approved": true,
        "viewsThisWeek": 1320,
        "whatsappClicks": 260,
        "couponsRedeemed": 78,
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
      },
      {
        "id": 132,
        "name": "Cervejaria Fritz Monte Verde",
        "category": "Gastronomia",
        "description": "Tradicional cervejaria artesanal alemã com visitas guiadas à fábrica e pratos típicos como eisbein e salsichões artesanais.",
        "location": "Rua Rolinha, 40",
        "phone": "(35) 3438-2419",
        "whatsapp": "553534382419",
        "imageUrl": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
        "rating": 4.7,
        "reviewsCount": 780,
        "approved": true,
        "viewsThisWeek": 1100,
        "whatsappClicks": 190,
        "couponsRedeemed": 44,
        "coupons": [
          {
            "id": "CMV2",
            "code": "FRITZ10",
            "description": "10% de desconto no chope Naturtrüb 500ml",
            "limit": 90,
            "redeemed": 44,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 231,
        "name": "Festival de Inverno de Monte Verde",
        "description": "Concertos ao ar livre, apresentações teatrais e workshops de culinária alpina na avenida principal.",
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
    "chatWelcome": "👋 Olá! Sou o *Guia Fácil Ubatuba*, seu guia inteligente do litoral!\n      \nQual o seu destino perfeito hoje?\n🏖️ _\"Melhores praias para família com crianças\"_ (Praia Grande, Lázaro, Sununga)\n🏄 _\"Onde surfar as melhores ondas?\"_ (Itamambuca, Vermelha do Norte)\n🐢 _\"Horários e ingressos do Projeto Tamar\"_ (educação ambiental)\n⛵ _\"Passeio de escuna para a Ilha das Couves ou Anchieta\"_\n🐟 _\"Onde comer peixe fresco e frutos do mar caiçaras?\"_\n🏥 _\"Telefones de emergência, bombeiros e pronto-socorro\"_\n\nDigite sua pergunta ou escolha uma sugestão!",
    "quickSuggestions": [
      "Melhores praias para família com crianças",
      "Onde comer peixe fresco e comida caiçara?",
      "Passeio de barco para Ilha das Couves",
      "Horário de visita do Projeto Tamar",
      "Telefones de emergência e salva-vidas"
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
      "totalAgents": 38,
      "totalQueries": 185,
      "couponsRedeemed": 55,
      "checkinsDone": 54,
      "totalXp": 2980,
      "stimulatedRevenue": 9640.0,
      "dispersionRate": 74.8,
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
          "tag": "Orla",
          "color": "var(--primary)"
        },
        {
          "name": "Pousada Kaliman",
          "code": "KALIMAN10",
          "discount": "10% Diária",
          "redeemed": 18,
          "tag": "Itamambuca",
          "color": "var(--secondary)"
        },
        {
          "name": "Ubatuba Surf Adventure",
          "code": "SURF20",
          "discount": "20% Aula de Surfe",
          "redeemed": 15,
          "tag": "Esporte",
          "color": "#f59e0b"
        }
      ],
      "agentFeed": [
        {
          "id": "agente_05",
          "archetype": "Família com Crianças",
          "time": "Sábado 10:15",
          "query": "Qual praia calma com sombra para passar o dia com crianças?",
          "aiReply": "Praia do Lázaro ou Praia Domingas Dias, com mar espelhado sem ondas e quiosques estruturados.",
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
        "description": "Centro pioneiro de conservação das tartarugas marinhas no Brasil, com tanques interativos, museu caiçara e educação ambiental.",
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
        "description": "Ilha paradisíaca no extremo norte com águas cristalinas em tons de esmeralda, excelente para snorkeling e trilhas curtas.",
        "location": "Acesso de barco saindo de Picinguaba",
        "hours": "Passeios das 8h às 16h",
        "price": "R$ 70,00 a R$ 100,00 (barco)",
        "rating": 4.9,
        "reviewsCount": 3980,
        "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Paraíso das Couves (+60 XP)"
      },
      {
        "id": 43,
        "name": "Praia de Itamambuca",
        "category": "Aventura",
        "description": "Santuário internacional do surfe e ecoturismo, com rio de águas calmas desaguando no mar aberto em meio à Mata Atlântica intocada.",
        "location": "Acesso pela Rodovia Rio-Santos, Km 35",
        "hours": "Acesso livre",
        "price": "Gratuito",
        "rating": 4.8,
        "reviewsCount": 2780,
        "imageUrl": "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80",
        "featured": true,
        "checkInReward": "Medalha Espírito do Surfe (+45 XP)"
      },
      {
        "id": 44,
        "name": "Cachoeira do Prumirim",
        "category": "Natureza",
        "description": "Cachoeira com sucessivas quedas d'água formando piscinas naturais e tobogã de pedra liso cercado por densa floresta tropical.",
        "location": "Rodovia Rio-Santos, próximo à Praia do Prumirim",
        "hours": "Diariamente, das 8h às 17h",
        "price": "R$ 15,00 (estacionamento)",
        "rating": 4.7,
        "reviewsCount": 1650,
        "imageUrl": "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80",
        "featured": false,
        "checkInReward": "Medalha Banho de Cachoeira (+35 XP)"
      }
    ],
    "merchants": [
      {
        "id": 141,
        "name": "Restaurante Peixe com Banana",
        "category": "Gastronomia",
        "description": "Referência da culinária caiçara paulista. O tradicional filé de peixe fresco com banana da terra e farofa especial de camarão.",
        "location": "Rua Guarani, 255 - Itaguá",
        "phone": "(12) 3832-1712",
        "whatsapp": "551238321712",
        "imageUrl": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        "rating": 4.9,
        "reviewsCount": 1240,
        "approved": true,
        "viewsThisWeek": 1680,
        "whatsappClicks": 340,
        "couponsRedeemed": 95,
        "coupons": [
          {
            "id": "CUB1",
            "code": "BANANA15",
            "description": "15% de desconto no prato executivo de Peixe com Banana",
            "limit": 100,
            "redeemed": 62,
            "active": true
          }
        ]
      },
      {
        "id": 142,
        "name": "Pousada Kaliman Itamambuca",
        "category": "Hospedagem",
        "description": "Pousada pé na areia com estrutura de lazer integrada à praia de Itamambuca, piscina e aluguel de pranchas.",
        "location": "Rua Dezesseis, 20 - Itamambuca",
        "phone": "(12) 3834-3100",
        "whatsapp": "551238343100",
        "imageUrl": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
        "rating": 4.8,
        "reviewsCount": 980,
        "approved": true,
        "viewsThisWeek": 1420,
        "whatsappClicks": 220,
        "couponsRedeemed": 40,
        "coupons": [
          {
            "id": "CUB2",
            "code": "KALIMAN10",
            "description": "10% de desconto em estadias de segunda a quinta",
            "limit": 50,
            "redeemed": 28,
            "active": true
          }
        ]
      }
    ],
    "events": [
      {
        "id": 241,
        "name": "Festival da Tainha e Gastronomia Caiçara",
        "description": "Tradição gastronômica caiçara na orla do Itaguá, com tainha na brasa, música regional e feira de artesanato indígena.",
        "date": "03 a 19 de Julho, 2026",
        "location": "Praça de Eventos da Av. Iperoig",
        "category": "Gastronomia & Cultura",
        "active": true
      }
    ]
  }
};
