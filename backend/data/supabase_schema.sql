-- ==========================================
-- GUIA FÁCIL: SCHEMA DO BANCO DE DADOS SUPABASE
-- Execute este script no SQL Editor do Supabase
-- ==========================================

-- 1. Tabela de Cidades / Inquilinos Municipais (Tenants)
CREATE TABLE IF NOT EXISTS public.tenants (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    uf VARCHAR(2) NOT NULL,
    tagline TEXT,
    badge TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Tabela de Comerciantes e Estabelecimentos (Merchants)
CREATE TABLE IF NOT EXISTS public.merchants (
    id BIGSERIAL PRIMARY KEY,
    city_id TEXT NOT NULL,
    email TEXT UNIQUE,
    name TEXT NOT NULL,
    category TEXT DEFAULT 'Gastronomia',
    description TEXT,
    location TEXT,
    phone TEXT,
    whatsapp TEXT,
    hours TEXT,
    image_url TEXT,
    rating NUMERIC(2,1) DEFAULT 5.0,
    reviews_count INT DEFAULT 0,
    approved BOOLEAN DEFAULT TRUE,
    views_this_week INT DEFAULT 0,
    whatsapp_clicks INT DEFAULT 0,
    coupons_redeemed INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Tabela de Cupons e Ofertas Promocionais (Coupons)
CREATE TABLE IF NOT EXISTS public.coupons (
    id TEXT PRIMARY KEY,
    merchant_id BIGINT REFERENCES public.merchants(id) ON DELETE CASCADE,
    code TEXT NOT NULL,
    description TEXT NOT NULL,
    limit_count INT DEFAULT 100,
    redeemed_count INT DEFAULT 0,
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. Tabela de Atrativos Oficiais Municipais (Attractions)
CREATE TABLE IF NOT EXISTS public.attractions (
    id BIGSERIAL PRIMARY KEY,
    city_id TEXT NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    location TEXT,
    hours TEXT,
    price TEXT,
    rating NUMERIC(2,1) DEFAULT 4.8,
    reviews_count INT DEFAULT 0,
    image_url TEXT,
    featured BOOLEAN DEFAULT FALSE,
    check_in_reward_xp INT DEFAULT 40,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilita Row Level Security (RLS) com políticas de leitura aberta para o app
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.merchants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attractions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Leitura pública de inquilinos" ON public.tenants FOR SELECT USING (true);
CREATE POLICY "Leitura pública de comerciantes" ON public.merchants FOR SELECT USING (true);
CREATE POLICY "Inserção/Atualização pública de comerciantes para teste" ON public.merchants FOR ALL USING (true);
CREATE POLICY "Leitura pública de cupons" ON public.coupons FOR SELECT USING (true);
CREATE POLICY "Leitura pública de atrativos" ON public.attractions FOR SELECT USING (true);
