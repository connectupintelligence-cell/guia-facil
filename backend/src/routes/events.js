import { Router } from 'express';
import * as db from '../config/db.js';

const router = Router();

// GET /api/events - List events for the active tenant
router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM events WHERE tenant_id = $1',
      [req.tenantId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao obter eventos:", error);
    res.status(500).json({ error: "Erro ao carregar eventos municipais." });
  }
});

// POST /api/events - Create new event (Requires manager context)
router.post('/', async (req, res) => {
  const { name, description, date, location, category } = req.body;

  if (!name || !description || !date || !location) {
    return res.status(400).json({ error: "Parâmetros obrigatórios ausentes." });
  }

  try {
    const id = `e-${Date.now()}`;
    const result = await db.query(
      `INSERT INTO events (id, tenant_id, name, description, date, location, category) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [id, req.tenantId, name, description, date, location, category || 'Lazer & Família']
    );

    res.status(201).json({
      message: "Evento oficial publicado com sucesso no calendário municipal.",
      event: result.rows[0]
    });
  } catch (error) {
    console.error("Erro ao cadastrar evento:", error);
    res.status(500).json({ error: "Falha ao registrar evento municipal." });
  }
});

export default router;
