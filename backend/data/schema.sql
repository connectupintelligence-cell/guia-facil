-- =======================================================
-- SCRIPT DE CRIAÇÃO E INICIALIZAÇÃO DO GUIA FÁCIL (SQL)
-- =======================================================

-- 1. Remoção preventiva das tabelas (Respeitando as chaves estrangeiras)
DROP TABLE IF EXISTS coupons;
DROP TABLE IF EXISTS merchants;
DROP TABLE IF EXISTS check_ins;
DROP TABLE IF EXISTS attractions;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tenants;

-- 2. DDL - Criação das Tabelas
CREATE TABLE tenants (
  id VARCHAR(50) PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  subdomain VARCHAR(50) UNIQUE NOT NULL,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  id VARCHAR(50) PRIMARY KEY,
  tenant_id VARCHAR(50) REFERENCES tenants(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(20) NOT NULL,
  xp INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE attractions (
  id VARCHAR(50) PRIMARY KEY,
  tenant_id VARCHAR(50) REFERENCES tenants(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(255) NOT NULL,
  hours VARCHAR(100),
  price VARCHAR(100),
  rating DECIMAL(3, 2),
  reviewsCount INTEGER DEFAULT 0,
  imageUrl VARCHAR(255),
  check_in_reward_xp INTEGER DEFAULT 30,
  medal_name VARCHAR(50)
);

CREATE TABLE merchants (
  id VARCHAR(50) PRIMARY KEY,
  tenant_id VARCHAR(50) REFERENCES tenants(id) ON DELETE CASCADE,
  user_id VARCHAR(50) REFERENCES users(id) ON DELETE SET NULL,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  whatsapp VARCHAR(50) NOT NULL,
  imageUrl VARCHAR(255),
  approved BOOLEAN DEFAULT false,
  views_count INTEGER DEFAULT 0,
  whatsapp_clicks INTEGER DEFAULT 0,
  coupons_redeemed INTEGER DEFAULT 0
);

CREATE TABLE coupons (
  id VARCHAR(50) PRIMARY KEY,
  merchant_id VARCHAR(50) REFERENCES merchants(id) ON DELETE CASCADE,
  code VARCHAR(50) NOT NULL,
  description VARCHAR(255) NOT NULL,
  limit_count INTEGER NOT NULL,
  redeemed_count INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true
);

CREATE TABLE events (
  id VARCHAR(50) PRIMARY KEY,
  tenant_id VARCHAR(50) REFERENCES tenants(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  date VARCHAR(100) NOT NULL,
  location VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  active BOOLEAN DEFAULT true
);

-- 3. DML - Semeando os Dados Iniciais (Campos do Jordão)
INSERT INTO tenants (id, name, subdomain) 
VALUES ('t-101', 'Campos do Jordão', 'camposdojordao');

INSERT INTO users (id, tenant_id, name, email, password_hash, role, xp) 
VALUES 
('u-1', 't-101', 'Gestor Municipal', 'gestor@campos.sp.gov.br', '$2a$10$t.Vigq9Wf9pA48.06xK8vO/Zg02wX.iWjV3fT8H1vV27x84pS5gN.', 'manager', 0),
('u-2', 't-101', 'Baden Baden', 'baden@contato.com.br', '$2a$10$t.Vigq9Wf9pA48.06xK8vO/Zg02wX.iWjV3fT8H1vV27x84pS5gN.', 'merchant', 0),
('u-3', 't-101', 'Turista Explorador', 'turista@gmail.com', '$2a$10$t.Vigq9Wf9pA48.06xK8vO/Zg02wX.iWjV3fT8H1vV27x84pS5gN.', 'tourist', 120);

INSERT INTO attractions (id, tenant_id, name, category, description, location, hours, price, rating, reviewsCount, imageUrl, check_in_reward_xp, medal_name)
VALUES 
('a-1', 't-101', 'Parque Amantikir', 'Natureza', 'Jardins temáticos exuberantes inspirados em diversos países.', 'Rodovia Campos do Jordão, Km 4', 'Das 9h às 16h', 'R$ 60,00', 4.80, 1240, 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80', 50, 'Amigo das Flores'),
('a-2', 't-101', 'Vila Capivari', 'Cultura', 'Centro turístico da cidade, famoso por sua arquitetura alpina europeia.', 'Vila Capivari, Centro', 'Acesso livre', 'Gratuito', 4.90, 4580, 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80', 30, 'Explorador Alpino'),
('a-3', 't-101', 'Teleférico Capivari', 'Lazer', 'Mono-cabo que leva visitantes ao topo do Morro do Elefante.', 'Praça São Benedito, Capivari', 'Das 9h às 18h', 'R$ 40,00', 4.60, 2310, 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80', 40, 'Nas Alturas');

INSERT INTO merchants (id, tenant_id, user_id, name, category, description, location, phone, whatsapp, imageUrl, approved, views_count, whatsapp_clicks, coupons_redeemed)
VALUES
('m-101', 't-101', 'u-2', 'Baden Baden Cervejaria', 'Gastronomia', 'Culinária alemã e cervejas artesanais premiadas no Capivari.', 'Rua Djalma Forjaz, 93 - Capivari', '(12) 3663-3610', '551236633610', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80', true, 2150, 435, 124),
('m-102', 't-101', NULL, 'Matterhorn Fondue & Empório', 'Gastronomia', 'Especialista em rodízio de fondue de queijo e chocolates finos.', 'Rua Djalma Forjaz, 115 - Capivari', '(12) 3663-1841', '551236631841', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', true, 1420, 218, 65),
('m-106', 't-101', NULL, 'Restaurante Alpes Suíços', 'Gastronomia', 'Nova casa de fondue e massas caseiras na subida do teleférico.', 'Rua do Teleférico, 45', '(12) 99822-1144', '5512998221144', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80', false, 0, 0, 0),
('m-107', 't-101', NULL, 'Cafeteria Trilhas do Sol', 'Comércio', 'Cafés especiais focados em ciclistas e praticantes de trekking.', 'Estrada do Horto Florestal, Km 8', '(12) 98144-5566', '5512981445566', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80', false, 0, 0, 0);

INSERT INTO coupons (id, merchant_id, code, description, limit_count, redeemed_count, active)
VALUES 
('c-c1', 'm-101', 'BADEN10', '10% de desconto no Chopp Cristal de 500ml', 150, 92, true),
('c-c2', 'm-102', 'MATTER15', '15% de desconto no rodízio de Fondue', 100, 65, true);

INSERT INTO events (id, tenant_id, name, description, date, location, category, active)
VALUES ('e-201', 't-101', 'Festival Internacional de Inverno', 'Festival clássico no Auditório Claudio Santoro.', '04 de Julho a 02 de Agosto, 2026', 'Auditório Claudio Santoro', 'Música & Cultura', true);
