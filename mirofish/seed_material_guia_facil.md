# SEED MATERIAL: GUIA FÁCIL & INTELIGÊNCIA TERRITORIAL (CAMPOS DO JORDÃO)
**Documento de Entrada para o Motor de Predição e Simulação Multi-Agente MiroFish (OASIS / GraphRAG)**

---

## 1. Contexto e Cenário do Território (Background & Environment)

* **Município:** Campos do Jordão (Estado de São Paulo, Brasil).
* **Perfil do Destino:** Conhecida como "A Suíça Brasileira", localizada na Serra da Mantiqueira a 1.628 metros de altitude média (com picos acima de 2.000m). É o principal destino turístico de inverno e montanha do Brasil.
* **Economia & Turismo:**
  * Fluxo anual: ~1,5 milhão de turistas/ano, concentrado fortemente na temporada de inverno (junho/julho/agosto) e feriados prolongados.
  * População residente: ~48.000 habitantes.
  * Base de empresas cadastradas no piloto: 148 estabelecimentos comerciais mapeados.
  * Taxa de ocupação hoteleira média na alta temporada: 84.6% a 98%.
  * PIB induzido pelo turismo estimado: R$ 48,9 milhões/mês na alta estação.
* **Gargalos Tradicionais da Cidade:**
  1. *Hiperconcentração no Capivari:* Mais de 70% dos turistas concentram-se num raio de 1,5 km na Vila Capivari, gerando trânsito pesado e saturação de mesas em restaurantes, enquanto atrativos e comércios periféricos (Horto Florestal, Ducha de Prata, Alto da Boa Vista) sofrem com oscilação de público.
  2. *Fricção do Aplicativo Tradicional:* Baixa adesão a apps de turismo da prefeitura (taxa de download menor que 4%, pois o visitante não quer gastar pacote de dados móveis ou preencher cadastros longos apenas para passar 2 dias na cidade).
  3. *Comunicação Fragmentada:* A prefeitura divulga eventos e utilidade pública em sites desatualizados; os comerciantes divulgam em redes sociais dispersas; o turista fica perdido ou recorre a guias informais.

---

## 2. A Inovação em Teste: Plataforma Guia Fácil (WhatsApp-First)

* **Tese Central:** *"O turista não baixa aplicativo. O turista conversa diretamente com a cidade através do WhatsApp."*
* **Arquitetura da Solução:**
  * O visitante adiciona o número oficial do **Guia Fácil** no WhatsApp ou escaneia QR Codes espalhados em totens, hotéis e restaurantes.
  * Um **Agente de IA Territorial** treinado sobre o banco de dados oficial do município processa perguntas em linguagem natural e responde em milissegundos.
  * A prefeitura cadastra eventos, serviços públicos, horários de postos de saúde e alertas.
  * Os comerciantes locais acessam um painel web exclusivo para gerenciar cardápios, horários, fotos e emitir **Cupons de Desconto Dinâmicos**.
  * Mecânica de **Gamificação Territorial:** Turistas fazem check-in presencial por geolocalização e resgatam cupons no WhatsApp para acumular Pontos de Experiência (XP) e desbloquear medalhas alpinas ("Explorador Alpino", "Guardião da Araucária", etc.).

---

## 3. Entidades Oficiais Mapeadas no Banco de Dados (Knowledge Graph Entities)

### 3.1. Principais Atrativos Municipais (Attractions)
1. **Parque Amantikir ("Jardins que Falam"):** 60 mil m² com mais de 700 espécies botânicas e labirintos temáticos. Foco em casais e famílias contemplativas. Entrada paga (R$ 60). Recompensa check-in: +50 XP.
2. **Vila Capivari (Centro Turístico Europeu):** Ponto de encontro, chocolaterias, restaurantes refinados e lojas de grife. Acesso livre, tráfego intenso. Recompensa check-in: +30 XP.
3. **Teleférico Capivari (Morro do Elefante):** Tradicional passeio a 1.800 metros de altitude com cabines modernas. Grande apelo infantil e familiar. Entrada paga (R$ 40). Recompensa check-in: +40 XP.
4. **Ducha de Prata:** Cachoeiras artificiais e pontes de madeira com feirinha de artesanato típico da serra. Acesso gratuito, periférico. Recompensa check-in: +20 XP.
5. **Pico do Itapeva:** Mirante natural a 2.030 metros de altitude com vista panorâmica para o Vale do Paraíba (15 cidades). Pôr do sol concorrido. Foco em casais e aventureiros. Recompensa: +60 XP.
6. **Horto Florestal (Parque Estadual):** Unidade de conservação de araucárias, trilhas ecológicas, arvorismo, tirolesa e aluguel de bicicletas. Foco em ecoturismo e aventura. Entrada: R$ 19. Recompensa: +50 XP.

### 3.2. Comércio Local Credenciado (Merchants & Vouchers)
1. **Baden Baden Cervejaria (Capivari):** Gastronomia alemã premium e chopes artesanais premiados. Alta procura, filas frequentes. Cupom ativo: `BADEN10` (10% de desconto no Chopp Cristal de 500ml).
2. **Matterhorn Fondue & Empório (Capivari):** Rodízio de fondue suíço (queijo, carnes nobres e chocolate alpino com lareira). Ticket médio elevado, público de casais. Cupom ativo: `MATTER15` (15% de desconto de seg a qui).
3. **Chocolate Araucária (Jaguary / Periférico):** Fábrica pioneira de chocolates artesanais, trufas e chocolate quente cremoso. Cupom ativo: `ARAUCHOCO` (Pague 1 leve 2 no chocolate quente tradicional).
4. **Pousada Recanto dos Sonhos (Jaguaribe):** Chalés temáticos com lareira privativa e banheira de hidromassagem. Foco em casais e famílias com crianças. Cupom ativo: `RECANTO10` (10% off em diárias de meio de semana).
5. **Hotel Toriba (Toriba / Afastado):** Hotel histórico de luxo fundado em 1943 com fazendinha e spa L'Occitane. Cupom ativo: `TORIBASPA` (15min adicionais em massagens).
6. **Restaurante Alpes Suíços (Em homologação):** Nova casa de massas e fondues no acesso ao Morro do Elefante.
7. **Cafeteria Trilhas do Sol (Em homologação):** Cafés especiais e lanches para ciclistas e trilheiros na rota do Horto.

### 3.3. Eventos Oficiais do Município (Events)
* **Festival Internacional de Inverno:** Maior festival de música clássica da América Latina (julho a agosto). Apresentações no Auditório Cláudio Santoro e Praça do Capivari. Atrai mais de 280 mil pessoas no mês.
* **Festival Gastronômico do Pinhão:** Abril a maio, pratos exclusivos em restaurantes credenciados.
* **Natal dos Sonhos:** Novembro a janeiro, iluminação cênica e paradas temáticas.

### 3.4. Serviços Públicos & Utilidade
* Hospital/UPA Municipal: (12) 3662-1100
* Prefeitura Municipal: (12) 3668-5500
* Secretaria de Turismo: (12) 3663-1098
* Polícia Militar: 190 | SAMU: 192 | Bombeiros: 193

---

## 4. Arquétipos das Personas do Enxame (Agent Profiles for Swarm Simulation)

Para que o motor MiroFish simule as interações de forma fidedigna, os agentes do enxame devem ser instanciados com as seguintes características comportamentais:

### Persona 1: Turista Família com Crianças (Segmento: 38% dos visitantes)
* **Objetivo:** Lazer tranquilo, passeios sem risco, locais com estrutura para crianças, paradas para sorvete/chocolate quente.
* **Comportamento no WhatsApp:** Faz perguntas como *"onde passear com criança hoje à tarde?"*, *"tem restaurante com espaço kids?"*, *"o teleférico está funcionando?"*.
* **Sensibilidade a Preço:** Média. Valoriza cupons em atrações ou combos familiares.
* **Comportamento Espacial:** Tende a ficar entre Capivari e Teleférico; precisa de incentivo para ir a parques afastados.

### Persona 2: Casal Romântico (Segmento: 35% dos visitantes)
* **Objetivo:** Experiências gastronômicas sofisticadas, vinhos, fondues à luz de velas, chalés aconchegantes e mirantes para fotos.
* **Comportamento no WhatsApp:** Pergunta *"qual o melhor fondue romântico no Capivari?"*, *"onde ver o pôr do sol?"*, *"indicação de pousada com lareira"*.
* **Sensibilidade a Preço:** Baixa a moderada. Aceita pagar ticket alto, mas adora mimos e vouchers de boas-vindas.
* **Comportamento Espacial:** Frequenta Capivari à noite e Amantikir/Pico do Itapeva durante a tarde.

### Persona 3: Jovem Aventureiro / Ecoturista (Segmento: 17% dos visitantes)
* **Objetivo:** Trilhas, tirolesa, arborismo, mountain bike, mirantes radicais e cervejarias artesanais no pós-trilha.
* **Comportamento no WhatsApp:** Pergunta *"como chegar no Horto Florestal?"*, *"quais trilhas estão abertas?"*, *"onde beber uma cerveja boa e comer porção barata?"*, *"como faz check-in para ganhar XP?"*.
* **Sensibilidade a Preço:** Alta. Busca ingressos mais econômicos e prioriza a gamificação (quer bater recordes de XP).
* **Comportamento Espacial:** Descentralizado; circula intensamente pelas áreas periféricas e trilhas da serra.

### Persona 4: Lojista / Comerciante Credenciado (Restaurantes & Pousadas)
* **Objetivo:** Aumentar vendas em dias de menor movimento (segunda a quinta), preencher mesas ociosas, atrair novos leads no WhatsApp para reservas diretas sem pagar comissão abusiva ao iFood/Booking.
* **Comportamento:** Cria cupons dinâmicos, atualiza cardápio e acompanha se a IA está recomendando seu prato ou chopp.

### Persona 5: Gestor Municipal da Prefeitura (Secretaria de Turismo & Segurança)
* **Objetivo:** Monitorar o fluxo em tempo real, diminuir o engavetamento de veículos no Capivari, promover eventos culturais e garantir que serviços essenciais (saúde, emergência) sejam facilmente encontrados pelo turista.

---

## 5. Hipóteses e Cenários de Predição a Simular (What-If Scenarios)

O motor MiroFish deve executar **3 cenários de simulação social** e gerar os relatórios de predição:

### Cenário A: Adesão & Engajamento Conversacional
* **Hipótese:** Um canal de WhatsApp sem barreiras de download tem 8x mais probabilidade de engajar o turista do que um app tradicional baixado na loja.
* **Perguntas para o MiroFish:**
  * Qual a taxa de desistência do turista quando apresentado ao WhatsApp vs. App?
  * Quais dúvidas surgem primeiro (gastronomia x passeios x hospedagem)?
  * O tom amigável e local da IA gera confiança para seguir as recomendações de roteiro?

### Cenário B: Eficácia do Mecanismo de Cupons & Gamificação
* **Hipótese:** A combinação de recomendação contextual da IA + cupom com botão de resgate direto no chat gera taxa de conversão superior a 25% para comerciantes parceiros.
* **Perguntas para o MiroFish:**
  * Quantos agentes decidem ir ao Chocolate Araucária ou à Pousada Recanto dos Sonhos motivados exclusivamente pelo cupom no chat?
  * O incentivo de XP e medalhas virtuais motiva o turista a fazer check-in físico nos pontos turísticos?

### Cenário C: Descentralização do Tráfego Urbano no Fim de Semana
* **Hipótese:** Ao sugerir atrativos periféricos em horários de pico (ex: Ducha de Prata e Horto às 14h em vez do centrinho lotado), o Guia Fácil reduz a sobrecarga do Capivari em pelo menos 18%.
* **Perguntas para o MiroFish:**
  * Como a recomendação inteligente altera a mobilidade dos agentes no mapa simulado?
  * Qual o aumento de faturamento estimado para comércios fora do quadrilátero central?
