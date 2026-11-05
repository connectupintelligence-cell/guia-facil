import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { initializeDatabase } from './config/db.js';

import tenantResolver from './middlewares/tenant.js';
import authRouter from './routes/auth.js';
import whatsappRouter from './routes/whatsapp.js';
import attractionsRouter from './routes/attractions.js';
import merchantsRouter from './routes/merchants.js';
import couponsRouter from './routes/coupons.js';
import eventsRouter from './routes/events.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware configuration
app.use(cors());
app.use(express.json());

// Public health check endpoint
app.get('/', (req, res) => {
  res.json({
    status: "online",
    message: "Guia Fácil SaaS API - Infraestrutura Digital e Territorial.",
    serverTime: new Date()
  });
});

// Mount Tenant context resolver on all API subroutes
app.use('/api', tenantResolver);

// Register API Routes
app.use('/api/auth', authRouter);
app.use('/api/whatsapp', whatsappRouter);
app.use('/api/attractions', attractionsRouter);
app.use('/api/merchants', merchantsRouter);
app.use('/api/coupons', couponsRouter);
app.use('/api/events', eventsRouter);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("Unhandled Server Error:", err);
  res.status(500).json({ error: "Erro interno no servidor da API." });
});

// Boot Database and Start Server
const bootServer = async () => {
  await initializeDatabase();
  app.listen(PORT, () => {
    console.log(`🚀 Servidor SaaS rodando em: http://localhost:${PORT}`);
    console.log(`🔌 API Territorial vinculada ao banco ativo.`);
  });
};

bootServer();
