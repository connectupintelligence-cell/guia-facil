import { Router } from 'express';
import * as db from '../config/db.js';

const router = Router();

// GET /api/attractions - Lists all attractions for the active tenant
router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM attractions WHERE tenant_id = $1',
      [req.tenantId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao carregar atrativos:", error);
    res.status(500).json({ error: "Erro ao carregar atrativos do município." });
  }
});

export default router;
