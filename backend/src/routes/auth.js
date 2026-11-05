import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import * as db from '../config/db.js';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'supersecretjwtkeyforguiafacilsaas2026';

// POST /api/auth/login - Validate credentials and return JWT session
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "E-mail e senha são obrigatórios." });
  }

  try {
    // 1. Fetch user matching email & active tenant ID
    const userResult = await db.query(
      'SELECT * FROM users WHERE email = $1 AND tenant_id = $2',
      [email.toLowerCase().trim(), req.tenantId]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: "E-mail ou senha incorretos." });
    }

    const user = userResult.rows[0];

    // 2. Validate password (supports plaintext from local simulation or bcrypt hash from DDL seed)
    let passwordMatch = false;
    if (user.password_hash.startsWith('$2a$') || user.password_hash.startsWith('$2b$')) {
      passwordMatch = await bcrypt.compare(password, user.password_hash);
    } else {
      passwordMatch = (password === user.password_hash);
    }

    if (!passwordMatch) {
      return res.status(401).json({ error: "E-mail ou senha incorretos." });
    }

    // 3. If user is a merchant, resolve their associated establishment profile
    let merchant = null;
    if (user.role === 'merchant') {
      const merchantResult = await db.query(
        'SELECT * FROM merchants WHERE user_id = $1',
        [user.id]
      );
      if (merchantResult.rows.length > 0) {
        merchant = merchantResult.rows[0];
      }
    }

    // 4. Generate JWT session token
    const token = jwt.sign(
      {
        id: user.id,
        tenant_id: user.tenant_id,
        role: user.role,
        merchantId: merchant ? merchant.id : null
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // 5. Send successful login response
    res.json({
      message: "Autenticação realizada com sucesso.",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      merchant
    });

  } catch (error) {
    console.error("Erro no processamento de login:", error);
    res.status(500).json({ error: "Falha técnica no servidor de autenticação." });
  }
});

// GET /api/auth/me - Validate current session using JWT token (optional helper for reliability)
router.get('/me', async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: "Sessão não autorizada ou expirada." });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // Fetch fresh user data
    const userResult = await db.query(
      'SELECT id, name, email, role, tenant_id FROM users WHERE id = $1',
      [decoded.id]
    );

    if (userResult.rows.length === 0) {
      return res.status(404).json({ error: "Usuário não encontrado." });
    }

    const user = userResult.rows[0];
    let merchant = null;

    if (user.role === 'merchant') {
      const merchantResult = await db.query(
        'SELECT * FROM merchants WHERE user_id = $1',
        [user.id]
      );
      if (merchantResult.rows.length > 0) {
        merchant = merchantResult.rows[0];
      }
    }

    res.json({
      user,
      merchant
    });
  } catch (err) {
    return res.status(401).json({ error: "Sessão inválida ou expirada." });
  }
});

export default router;
