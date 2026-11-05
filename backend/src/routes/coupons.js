import { Router } from 'express';
import * as db from '../config/db.js';

const router = Router();

// GET /api/coupons/merchant/:merchantId - Lists coupons for a merchant
router.get('/merchant/:merchantId', async (req, res) => {
  const { merchantId } = req.params;
  try {
    const result = await db.query(
      'SELECT * FROM coupons WHERE merchant_id = $1',
      [merchantId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao carregar cupons:", error);
    res.status(500).json({ error: "Erro ao obter cupons do estabelecimento." });
  }
});

// POST /api/coupons - Create a coupon (Requires merchant context)
router.post('/', async (req, res) => {
  const { merchantId, code, description, limit } = req.body;

  if (!merchantId || !code || !description || !limit) {
    return res.status(400).json({ error: "Parâmetros obrigatórios ausentes." });
  }

  try {
    const id = `c-${Date.now()}`;
    const result = await db.query(
      `INSERT INTO coupons (id, merchant_id, code, description, limit_count) 
       VALUES ($1, $2, $3, $4, $5) 
       RETURNING *`,
      [id, merchantId, code.toUpperCase(), description, parseInt(limit)]
    );

    res.status(201).json({
      message: "Cupom promocional ativo e publicado com sucesso.",
      coupon: result.rows[0]
    });
  } catch (error) {
    console.error("Erro ao criar cupom:", error);
    res.status(500).json({ error: "Falha técnica ao emitir cupom promocional." });
  }
});

// POST /api/coupons/:id/redeem - Redeem coupon (Increments stats & awards visitor XP)
router.post('/:id/redeem', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      'UPDATE coupons SET redeemed_count = redeemed_count + 1 WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Cupom não encontrado." });
    }

    res.json({
      message: "Cupom resgatado com sucesso! +15 XP creditados ao perfil do turista.",
      coupon: result.rows[0],
      xpAwarded: 15
    });
  } catch (error) {
    console.error("Erro ao resgatar cupom:", error);
    res.status(500).json({ error: "Falha ao validar resgate de cupom." });
  }
});

export default router;
