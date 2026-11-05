import * as db from '../config/db.js';

export default async function tenantResolver(req, res, next) {
  // 1. Resolve subdomain from custom header or request host subdomain
  let subdomain = req.headers['x-tenant-subdomain'];
  
  if (!subdomain) {
    const host = req.headers.host || '';
    const parts = host.split('.');
    if (parts.length > 2) {
      subdomain = parts[0];
    }
  }

  // Fallback for easy API browser testing / documentation
  if (!subdomain) {
    subdomain = 'camposdojordao';
  }

  try {
    // 2. Query tenant
    const result = await db.query(
      'SELECT * FROM tenants WHERE subdomain = $1 AND status = $2',
      [subdomain.toLowerCase(), 'active']
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ 
        error: `Inquilino territorial '${subdomain}' não cadastrado ou suspenso na infraestrutura SaaS.` 
      });
    }

    // 3. Inject Tenant context into request
    req.tenantId = result.rows[0].id;
    req.tenantName = result.rows[0].name;
    
    next();
  } catch (error) {
    console.error("Erro no middleware de resolução de inquilino:", error);
    res.status(500).json({ error: "Erro interno ao validar inquilino territorial." });
  }
}
