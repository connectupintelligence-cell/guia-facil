import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '..', '..', 'data');
const JSON_DB_PATH = path.join(DATA_DIR, 'local_db.json');

// Ensure data folder exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Environment variables
const connectionString = process.env.DATABASE_URL;
let pool = null;
let useFallback = false;

// Initialize Postgres connection
try {
  pool = new pg.Pool({
    connectionString,
    connectionTimeoutMillis: 2000 // Quick timeout to failover fast if no server is running
  });
} catch (e) {
  console.warn("⚠️ Não foi possível instanciar o Pool do PostgreSQL. Usando Banco JSON local.");
  useFallback = true;
}

// Fallback JSON local database structures (Campos do Jordão seed data)
const defaultJsonDb = {
  tenants: [
    { id: "t-101", name: "Campos do Jordão", subdomain: "camposdojordao", status: "active", created_at: new Date() }
  ],
  users: [
    { id: "u-1", tenant_id: "t-101", name: "Gestor Municipal", email: "gestor@campos.sp.gov.br", password_hash: "admin", role: "manager", xp: 0, created_at: new Date() },
    { id: "u-2", tenant_id: "t-101", name: "Baden Baden", email: "baden@contato.com.br", password_hash: "12345", role: "merchant", xp: 0, created_at: new Date() },
    { id: "u-3", tenant_id: "t-101", name: "Turista Explorador", email: "turista@gmail.com", password_hash: "turista", role: "tourist", xp: 120, created_at: new Date() }
  ],
  attractions: [
    { id: "a-1", tenant_id: "t-101", name: "Parque Amantikir", category: "Natureza", description: "Jardins temáticos exuberantes inspirados em diversos países.", location: "Rodovia Campos do Jordão, Km 4", hours: "Das 9h às 16h", price: "R$ 60,00", rating: 4.8, reviewsCount: 1240, imageUrl: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80", check_in_reward_xp: 50, medal_name: "Amigo das Flores" },
    { id: "a-2", tenant_id: "t-101", name: "Vila Capivari", category: "Cultura", description: "Centro turístico da cidade, famoso por sua arquitetura alpina europeia.", location: "Vila Capivari, Centro", hours: "Acesso livre", price: "Gratuito", rating: 4.9, reviewsCount: 4580, imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80", check_in_reward_xp: 30, medal_name: "Explorador Alpino" },
    { id: "a-3", tenant_id: "t-101", name: "Teleférico Capivari", category: "Lazer", description: "Mono-cabo que leva visitantes ao topo do Morro do Elefante.", location: "Praça São Benedito, Capivari", hours: "Das 9h às 18h", price: "R$ 40,00", rating: 4.6, reviewsCount: 2310, imageUrl: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80", check_in_reward_xp: 40, medal_name: "Nas Alturas" }
  ],
  merchants: [
    { id: "m-101", tenant_id: "t-101", user_id: "u-2", name: "Baden Baden Cervejaria", category: "Gastronomia", description: "Culinária alemã e cervejas artesanais premiadas no Capivari.", location: "Rua Djalma Forjaz, 93 - Capivari", phone: "(12) 3663-3610", whatsapp: "551236633610", imageUrl: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80", approved: true, views_count: 2150, whatsapp_clicks: 435, coupons_redeemed: 124 },
    { id: "m-102", tenant_id: "t-101", user_id: "u-4", name: "Matterhorn Fondue & Empório", category: "Gastronomia", description: "Especialista em rodízio de fondue de queijo e chocolates finos.", location: "Rua Djalma Forjaz, 115 - Capivari", phone: "(12) 3663-1841", whatsapp: "551236631841", imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80", approved: true, views_count: 1420, whatsapp_clicks: 218, coupons_redeemed: 65 },
    { id: "m-106", tenant_id: "t-101", user_id: "u-5", name: "Restaurante Alpes Suíços", category: "Gastronomia", description: "Nova casa de fondue e massas caseiras na subida do teleférico.", location: "Rua do Teleférico, 45", phone: "(12) 99822-1144", whatsapp: "5512998221144", imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80", approved: false, views_count: 0, whatsapp_clicks: 0, coupons_redeemed: 0 },
    { id: "m-107", tenant_id: "t-101", user_id: "u-6", name: "Cafeteria Trilhas do Sol", category: "Comércio", description: "Cafés especiais focados em ciclistas e praticantes de trekking.", location: "Estrada do Horto Florestal, Km 8", phone: "(12) 98144-5566", whatsapp: "5512981445566", imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80", approved: false, views_count: 0, whatsapp_clicks: 0, coupons_redeemed: 0 }
  ],
  coupons: [
    { id: "c-c1", merchant_id: "m-101", code: "BADEN10", description: "10% de desconto no Chopp Cristal de 500ml", limit_count: 150, redeemed_count: 92, active: true },
    { id: "c-c2", merchant_id: "m-102", code: "MATTER15", description: "15% de desconto no rodízio de Fondue", limit_count: 100, redeemed_count: 65, active: true }
  ],
  events: [
    { id: "e-201", tenant_id: "t-101", name: "Festival Internacional de Inverno", description: "Festival clássico no Auditório Claudio Santoro.", date: "04 de Julho a 02 de Agosto, 2026", location: "Auditório Claudio Santoro", category: "Música & Cultura", active: true }
  ],
  check_ins: []
};

// Load JSON Database on Startup if fallback
const loadJsonDb = () => {
  if (!fs.existsSync(JSON_DB_PATH)) {
    fs.writeFileSync(JSON_DB_PATH, JSON.stringify(defaultJsonDb, null, 2), 'utf-8');
    return defaultJsonDb;
  }
  try {
    const data = fs.readFileSync(JSON_DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return defaultJsonDb;
  }
};

const saveJsonDb = (data) => {
  fs.writeFileSync(JSON_DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
};

// SQL Query simulation router (for standalone testing without PostgreSQL server)
const simulateQuery = (sql, params = []) => {
  const db = loadJsonDb();
  sql = sql.trim().replace(/\s+/g, ' ');
  
  // 1. Resolve Tenant by Subdomain
  if (sql.includes('SELECT * FROM tenants WHERE subdomain')) {
    const subdomain = params[0];
    const tenant = db.tenants.find(t => t.subdomain === subdomain);
    return { rows: tenant ? [tenant] : [] };
  }

  // 1.5. Users and Auth Queries
  if (sql.includes('SELECT * FROM users WHERE email') && sql.includes('tenant_id')) {
    const email = params[0].toLowerCase().trim();
    const tenantId = params[1];
    const user = db.users.find(u => u.email.toLowerCase().trim() === email && u.tenant_id === tenantId);
    return { rows: user ? [user] : [] };
  }
  if (sql.includes('SELECT * FROM merchants WHERE user_id')) {
    const userId = params[0];
    const merchant = db.merchants.find(m => m.user_id === userId);
    return { rows: merchant ? [merchant] : [] };
  }
  if (sql.includes('SELECT id, name, email, role, tenant_id FROM users WHERE id')) {
    const id = params[0];
    const user = db.users.find(u => u.id === id);
    if (user) {
      return { rows: [{ id: user.id, name: user.name, email: user.email, role: user.role, tenant_id: user.tenant_id }] };
    }
    return { rows: [] };
  }

  // 2. Attractions Queries
  if (sql.includes('SELECT * FROM attractions WHERE tenant_id')) {
    const tenantId = params[0];
    const list = db.attractions.filter(a => a.tenant_id === tenantId);
    return { rows: list };
  }

  // 3. Merchants Queries
  if (sql.includes('SELECT * FROM merchants WHERE tenant_id')) {
    const tenantId = params[0];
    const list = db.merchants.filter(m => m.tenant_id === tenantId);
    return { rows: list };
  }
  if (sql.includes('UPDATE merchants SET approved = true WHERE id')) {
    const id = String(params[0]);
    db.merchants = db.merchants.map(m => m.id === id ? { ...m, approved: true } : m);
    saveJsonDb(db);
    return { rows: [db.merchants.find(m => m.id === id)] };
  }
  if (sql.includes('UPDATE merchants SET description') && sql.includes('WHERE id')) {
    // UPDATE merchants SET description = $1, location = $2, phone = $3, whatsapp = $4 WHERE id = $5
    const desc = params[0];
    const loc = params[1];
    const phone = params[2];
    const whatsapp = params[3];
    const id = String(params[4]);
    
    db.merchants = db.merchants.map(m => 
      m.id === id ? { ...m, description: desc, location: loc, phone: phone, whatsapp: whatsapp } : m
    );
    saveJsonDb(db);
    return { rows: [db.merchants.find(m => m.id === id)] };
  }

  // 4. Coupons Queries
  if (sql.includes('SELECT * FROM coupons WHERE merchant_id')) {
    const merchantId = String(params[0]);
    const list = db.coupons.filter(c => c.merchant_id === merchantId);
    return { rows: list };
  }
  if (sql.includes('INSERT INTO coupons')) {
    // INSERT INTO coupons (id, merchant_id, code, description, limit_count) VALUES ($1, $2, $3, $4, $5) RETURNING *
    const newCoupon = {
      id: params[0],
      merchant_id: params[1],
      code: params[2],
      description: params[3],
      limit_count: params[4],
      redeemed_count: 0,
      active: true
    };
    db.coupons.push(newCoupon);
    saveJsonDb(db);
    return { rows: [newCoupon] };
  }
  if (sql.includes('UPDATE coupons SET redeemed_count = redeemed_count + 1 WHERE id')) {
    const id = String(params[0]);
    db.coupons = db.coupons.map(c => {
      if (c.id === id) {
        // Also update merchant total redeems
        db.merchants = db.merchants.map(m => 
          m.id === c.merchant_id ? { ...m, coupons_redeemed: (m.coupons_redeemed || 0) + 1 } : m
        );
        return { ...c, redeemed_count: c.redeemed_count + 1 };
      }
      return c;
    });
    saveJsonDb(db);
    return { rows: [db.coupons.find(c => c.id === id)] };
  }

  // 5. Events Queries
  if (sql.includes('SELECT * FROM events WHERE tenant_id')) {
    const tenantId = params[0];
    const list = db.events.filter(e => e.tenant_id === tenantId);
    return { rows: list };
  }
  if (sql.includes('INSERT INTO events')) {
    // INSERT INTO events (id, tenant_id, name, description, date, location, category) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
    const newEvent = {
      id: params[0],
      tenant_id: params[1],
      name: params[2],
      description: params[3],
      date: params[4],
      location: params[5],
      category: params[6],
      active: true
    };
    db.events.push(newEvent);
    saveJsonDb(db);
    return { rows: [newEvent] };
  }

  // Default fallback returns empty array row
  return { rows: [] };
};

// Unified Query Handler
export const query = async (text, params) => {
  if (useFallback) {
    return simulateQuery(text, params);
  }

  try {
    const start = Date.now();
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    return res;
  } catch (error) {
    if (error.code === 'ECONNREFUSED' || error.message.includes('connect')) {
      console.warn("⚠️ Conexão PostgreSQL perdida ou recusada. Fazendo failover para JSON local.");
      useFallback = true;
      return simulateQuery(text, params);
    }
    throw error;
  }
};

// Initialize table queries DDL
export const initializeDatabase = async () => {
  if (useFallback) {
    console.log("📂 Banco de Dados JSON estruturado e inicializado em data/local_db.json");
    return;
  }

  try {
    const client = await pool.connect();
    console.log("🐘 Conectado com sucesso ao servidor PostgreSQL.");
    
    // Create Tables DDL
    await client.query(`
      CREATE TABLE IF NOT EXISTS tenants (
        id VARCHAR(50) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        subdomain VARCHAR(50) UNIQUE NOT NULL,
        status VARCHAR(20) DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(50) PRIMARY KEY,
        tenant_id VARCHAR(50) REFERENCES tenants(id),
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        role VARCHAR(20) NOT NULL,
        xp INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS attractions (
        id VARCHAR(50) PRIMARY KEY,
        tenant_id VARCHAR(50) REFERENCES tenants(id),
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

      CREATE TABLE IF NOT EXISTS merchants (
        id VARCHAR(50) PRIMARY KEY,
        tenant_id VARCHAR(50) REFERENCES tenants(id),
        user_id VARCHAR(50) REFERENCES users(id),
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

      CREATE TABLE IF NOT EXISTS coupons (
        id VARCHAR(50) PRIMARY KEY,
        merchant_id VARCHAR(50) REFERENCES merchants(id),
        code VARCHAR(50) NOT NULL,
        description VARCHAR(255) NOT NULL,
        limit_count INTEGER NOT NULL,
        redeemed_count INTEGER DEFAULT 0,
        active BOOLEAN DEFAULT true
      );

      CREATE TABLE IF NOT EXISTS events (
        id VARCHAR(50) PRIMARY KEY,
        tenant_id VARCHAR(50) REFERENCES tenants(id),
        name VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        date VARCHAR(100) NOT NULL,
        location VARCHAR(255) NOT NULL,
        category VARCHAR(50) NOT NULL,
        active BOOLEAN DEFAULT true
      );
    `);

    // Check if seeded
    const tenantCheck = await client.query("SELECT * FROM tenants LIMIT 1");
    if (tenantCheck.rows.length === 0) {
      console.log("🌱 Semeando dados iniciais de Campos do Jordão no PostgreSQL...");
      
      // Insert Tenant
      await client.query("INSERT INTO tenants (id, name, subdomain) VALUES ($1, $2, $3)", ["t-101", "Campos do Jordão", "camposdojordao"]);
      
      // Insert Users
      await client.query("INSERT INTO users (id, tenant_id, name, email, password_hash, role, xp) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
        ["u-1", "t-101", "Gestor Municipal", "gestor@campos.sp.gov.br", "admin", "manager", 0]);
      await client.query("INSERT INTO users (id, tenant_id, name, email, password_hash, role, xp) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
        ["u-2", "t-101", "Baden Baden", "baden@contato.com.br", "12345", "merchant", 0]);
      await client.query("INSERT INTO users (id, tenant_id, name, email, password_hash, role, xp) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
        ["u-3", "t-101", "Turista Explorador", "turista@gmail.com", "turista", "tourist", 120]);

      // Seed Attractions
      await client.query(`
        INSERT INTO attractions (id, tenant_id, name, category, description, location, hours, price, rating, reviewsCount, imageUrl, check_in_reward_xp, medal_name)
        VALUES 
        ('a-1', 't-101', 'Parque Amantikir', 'Natureza', 'Jardins temáticos exuberantes inspirados em diversos países.', 'Rodovia Campos do Jordão, Km 4', 'Das 9h às 16h', 'R$ 60,00', 4.8, 1240, 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=600&q=80', 50, 'Amigo das Flores'),
        ('a-2', 't-101', 'Vila Capivari', 'Cultura', 'Centro turístico da cidade, famoso por sua arquitetura alpina europeia.', 'Vila Capivari, Centro', 'Acesso livre', 'Gratuito', 4.9, 4580, 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80', 30, 'Explorador Alpino'),
        ('a-3', 't-101', 'Teleférico Capivari', 'Lazer', 'Mono-cabo que leva visitantes ao topo do Morro do Elefante.', 'Praça São Benedito, Capivari', 'Das 9h às 18h', 'R$ 40,00', 4.6, 2310, 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=600&q=80', 40, 'Nas Alturas')
      `);

      // Seed Merchants
      await client.query(`
        INSERT INTO merchants (id, tenant_id, user_id, name, category, description, location, phone, whatsapp, imageUrl, approved, views_count, whatsapp_clicks, coupons_redeemed)
        VALUES
        ('m-101', 't-101', 'u-2', 'Baden Baden Cervejaria', 'Gastronomia', 'Culinária alemã e cervejas artesanais premiadas no Capivari.', 'Rua Djalma Forjaz, 93 - Capivari', '(12) 3663-3610', '551236633610', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80', true, 2150, 435, 124),
        ('m-102', 't-101', 'u-4', 'Matterhorn Fondue & Empório', 'Gastronomia', 'Especialista em rodízio de fondue de queijo e chocolates finos.', 'Rua Djalma Forjaz, 115 - Capivari', '(12) 3663-1841', '551236631841', 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', true, 1420, 218, 65),
        ('m-106', 't-101', 'u-5', 'Restaurante Alpes Suíços', 'Gastronomia', 'Nova casa de fondue e massas caseiras na subida do teleférico.', 'Rua do Teleférico, 45', '(12) 99822-1144', '5512998221144', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80', false, 0, 0, 0),
        ('m-107', 't-101', 'u-6', 'Cafeteria Trilhas do Sol', 'Comércio', 'Cafés especiais focados em ciclistas e praticantes de trekking.', 'Estrada do Horto Florestal, Km 8', '(12) 98144-5566', '5512981445566', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80', false, 0, 0, 0)
      `);

      // Seed Coupons
      await client.query(`
        INSERT INTO coupons (id, merchant_id, code, description, limit_count, redeemed_count, active)
        VALUES 
        ('c-c1', 'm-101', 'BADEN10', '10% de desconto no Chopp Cristal de 500ml', 150, 92, true),
        ('c-c2', 'm-102', 'MATTER15', '15% de desconto no rodízio de Fondue', 100, 65, true)
      `);

      // Seed Events
      await client.query(`
        INSERT INTO events (id, tenant_id, name, description, date, location, category, active)
        VALUES ('e-201', 't-101', 'Festival Internacional de Inverno', 'Festival clássico no Auditório Claudio Santoro.', '04 de Julho a 02 de Agosto, 2026', 'Auditório Claudio Santoro', 'Música & Cultura', true)
      `);
    }

    client.release();
    console.log("✅ Banco de Dados PostgreSQL verificado, estruturado e alimentado.");
  } catch (err) {
    console.warn("⚠️ Falha ao conectar ao PostgreSQL durante a inicialização:", err.message);
    console.log("⚙️ Fazendo failover definitivo para o banco JSON local.");
    useFallback = true;
  }
};
