import { Router } from 'express';
import * as db from '../config/db.js';

const router = Router();

// GET /api/merchants - List merchants for the active tenant
router.get('/', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM merchants WHERE tenant_id = $1',
      [req.tenantId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Erro ao carregar comércios:", error);
    res.status(500).json({ error: "Erro ao obter dados do comércio local." });
  }
});

// PUT /api/merchants/:id - Update merchant profile details
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { description, location, phone, whatsapp } = req.body;

  if (!description || !location || !whatsapp) {
    return res.status(400).json({ error: "Descrição, endereço e WhatsApp são obrigatórios." });
  }

  try {
    const result = await db.query(
      `UPDATE merchants 
       SET description = $1, location = $2, phone = $3, whatsapp = $4 
       WHERE id = $5 
       RETURNING *`,
      [description, location, phone || '', whatsapp, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Estabelecimento não encontrado." });
    }

    res.json({
      message: "Perfil do estabelecimento atualizado com sucesso.",
      merchant: result.rows[0]
    });
  } catch (error) {
    console.error("Erro ao atualizar comerciante:", error);
    res.status(500).json({ error: "Falha ao gravar alterações do perfil comercial." });
  }
});

// PUT /api/merchants/:id/approve - Approve merchant registration (Municipal Homologation)
router.put('/:id/approve', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query(
      'UPDATE merchants SET approved = true WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Estabelecimento não encontrado." });
    }

    res.json({
      message: "Estabelecimento homologado e publicado no guia com sucesso.",
      merchant: result.rows[0]
    });
  } catch (error) {
    console.error("Erro ao homologar lojista:", error);
    res.status(500).json({ error: "Falha técnica ao homologar o comércio." });
  }
});

export default router;
