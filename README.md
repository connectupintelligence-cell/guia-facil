# Guia Fácil - Plataforma SaaS Multi-Cidades & IA Concierge 🌲📱

> "O turista conversa com a cidade pelo WhatsApp."

O **Guia Fácil** é uma plataforma GovTech & B2B SaaS de inteligência territorial que transforma a experiência turística municipal. Em vez de forçar o turista a baixar aplicativos pesados ou navegar em portais lentos, ele interage diretamente com o agente de IA da cidade no **WhatsApp**.

---

## 🏛️ Três Pilares Integrados

1. **Turista (Interface WhatsApp)**: Concierge de IA 24/7 que entende o perfil da viagem (família, casal, ecoturismo, negócios) e faz recomendações sob medida, enxutas e sem excesso de texto.
2. **Gestor Público (Secretaria de Turismo)**: Painel de inteligência de dados com fluxo de visitantes, origem, gastos médios e distribuição territorial do público para embasar projetos como MIT e verbas estaduais.
3. **Comércio Local (Restaurantes, Pousadas e Lojas)**: Área exclusiva para cadastro de cardápios, horários, fotos e emissão de cupons de desconto rastreáveis.

---

## 🏙️ Cidades Suportadas no Piloto

* 🚀 **São José dos Campos (SP)**
* 🌳 **Pindamonhangaba (SP)**
* 🌲 **Campos do Jordão (SP)**
* 🧗 **São Bento do Sapucaí (SP)**
* 🌸 **Santo Antônio do Pinhal (SP)**
* ❄️ **Monte Verde (MG)**
* 🏖️ **Ubatuba (SP)**

---

## 🚀 Como Executar Localmente

Como o frontend é uma Single Page Application construída com HTML5, CSS3 moderno e Vanilla JavaScript, basta abrir o `index.html` em qualquer navegador:

```bash
# Ou via servidor local (ex: Python)
python -m http.server 8080
```
Acesse: `http://localhost:8080`

Para testar diretamente um município via URL:
* `http://localhost:8080/?cidade=saojosedoscampos`
* `http://localhost:8080/?cidade=pindamonhangaba`
* `http://localhost:8080/?cidade=camposdojordao`

---

## 🛠️ Tecnologias Utilizadas

* **Frontend**: HTML5, Vanilla JavaScript (ES6+), CSS3 Design System, Lucide Icons
* **Backend**: Node.js, Express, Middleware Multi-Tenant
* **Banco de Dados**: Supabase (PostgreSQL) + Fallback Local
* **Inteligência Artificial**: Multi-Agent Swarm (MiroFish Engine) & Modelos de Linguagem para WhatsApp
