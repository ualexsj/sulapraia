export const site = {
  name: 'Sulapraia',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://sulapraia.com.br',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '5511999999999',
  instagram: 'https://instagram.com/sulapraia',
  mercadoPagoLink: process.env.NEXT_PUBLIC_MERCADO_PAGO_LINK || 'https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=SULAPRAIA-DEMO',
  analytics: process.env.NEXT_PUBLIC_GA_ID || '',
  gtm: process.env.NEXT_PUBLIC_GTM_ID || '',
  pixel: process.env.NEXT_PUBLIC_META_PIXEL_ID || ''
};

export const keywords = ['biquíni atacado','moda praia atacado','fornecedor de biquíni','biquíni feminino','beachwear atacado','fábrica de biquíni','moda praia feminina','biquínis tendência 2026'];

export const collections = [
  { title: 'Aurora Dourada', tag: 'Lançamento', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop', description: 'Peças em branco, champagne e dourado para vitrines premium.' },
  { title: 'Oceano 2026', tag: 'Tendência', image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1400&auto=format&fit=crop', description: 'Azuis profundos, verde água e modelagens de alto giro.' },
  { title: 'Resort Nude', tag: 'Boutique', image: 'https://images.unsplash.com/photo-1520483601560-389dff434fdf?q=80&w=1400&auto=format&fit=crop', description: 'Minimalismo sensual para boutiques e revendas sofisticadas.' }
];

export const products = [
  { slug: 'biquini-aurora-dourado', name: 'Biquíni Aurora Dourado', category: 'Lançamentos', price: 79.9, wholesale: 12, rating: 4.9, colors: ['Branco','Dourado','Nude'], sizes: ['P','M','G','GG'], badge: 'Mais desejado', image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1400&auto=format&fit=crop', gallery: ['https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1400&auto=format&fit=crop','https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200&auto=format&fit=crop'], description: 'Biquíni premium com acabamento sofisticado, toque macio e cartela elegante para vitrines de alto valor percebido.' },
  { slug: 'biquini-oceano-canelado', name: 'Biquíni Oceano Canelado', category: 'Mais Vendidos', price: 69.9, wholesale: 12, rating: 4.8, colors: ['Azul Oceano','Verde Água','Preto'], sizes: ['P','M','G'], badge: 'Alto giro', image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1400&auto=format&fit=crop', gallery: ['https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1400&auto=format&fit=crop','https://images.unsplash.com/photo-1520454974749-611b7248ffdb?q=80&w=1200&auto=format&fit=crop'], description: 'Textura canelada moderna, modelagem confortável e cores comerciais para revendedoras aumentarem margem.' },
  { slug: 'conjunto-resort-nude', name: 'Conjunto Resort Nude', category: 'Boutique', price: 89.9, wholesale: 10, rating: 5, colors: ['Nude','Areia','Off White'], sizes: ['P','M','G','GG'], badge: 'Premium', image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop', gallery: ['https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop','https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop'], description: 'Conjunto elegante para lojas que trabalham com moda praia feminina sofisticada e mix de resortwear.' },
  { slug: 'biquini-tropical-luxo', name: 'Biquíni Tropical Luxo', category: 'Tendências Verão', price: 74.9, wholesale: 12, rating: 4.9, colors: ['Verde Água','Coral','Dourado'], sizes: ['P','M','G'], badge: 'Verão 2026', image: 'https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?q=80&w=1400&auto=format&fit=crop', gallery: ['https://images.unsplash.com/photo-1484821582734-6c6c9f99a672?q=80&w=1400&auto=format&fit=crop','https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop'], description: 'Peça com apelo tropical brasileiro, ideal para campanhas digitais, vitrines e conteúdo de influenciadoras.' }
];

export const benefits = [
  ['Envio para todo Brasil','Logística preparada para lojistas, boutiques e revendedoras.'],
  ['Compra segura','Checkout com Mercado Pago, Pix e cartão em ambiente protegido.'],
  ['Atendimento rápido','Equipe comercial via WhatsApp para montar grade e repor estoque.'],
  ['Pedido mínimo atacado','Condições comerciais claras a partir de 10 a 12 peças.']
];

export const testimonials = [
  { name: 'Marina A.', role: 'Boutique em Florianópolis', text: 'As peças têm presença de vitrine. A reposição é rápida e o ticket médio subiu.' },
  { name: 'Camila R.', role: 'Revendedora em Salvador', text: 'Comprei a primeira grade pelo WhatsApp e vendi quase tudo no lançamento.' },
  { name: 'Bianca M.', role: 'Loja multimarcas', text: 'A curadoria de cores deixa o mix sofisticado e muito fácil de fotografar.' }
];

export const posts = [
  { slug: 'tendencias-de-biquini-2026', title: 'Tendências de biquíni 2026 para revender com alto valor percebido', excerpt: 'Cores, modelagens e acabamentos que devem impulsionar vitrines de moda praia.', date: '2026-01-12', keywords: ['biquínis tendência 2026','moda praia feminina'] },
  { slug: 'moda-praia-atacado', title: 'Moda praia atacado: como montar uma coleção rentável', excerpt: 'Estratégias para comprar grade, criar mix e melhorar margem no verão.', date: '2026-01-20', keywords: ['moda praia atacado','beachwear atacado'] },
  { slug: 'como-revender-biquinis', title: 'Como revender biquínis: guia prático para começar', excerpt: 'Passos para escolher fornecedor, calcular preço e vender pelo Instagram.', date: '2026-02-02', keywords: ['como revender biquínis','fornecedor de biquíni'] },
  { slug: 'biquinis-que-mais-vendem', title: 'Biquínis que mais vendem em boutiques e revendas', excerpt: 'Modelagens campeãs para giro de estoque e campanhas comerciais.', date: '2026-02-14', keywords: ['biquíni atacado','biquíni feminino'] },
  { slug: 'moda-praia-brasileira', title: 'Moda praia brasileira: por que o beachwear nacional encanta clientes', excerpt: 'A força da estética tropical sofisticada nas coleções de verão premium.', date: '2026-03-01', keywords: ['moda praia brasileira','fábrica de biquíni'] }
];
