import Link from 'next/link';
import { keywords, site } from '@/lib/data';

export function Footer() {
  return <footer className="bg-[#17100d] text-white">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <p className="font-serif text-4xl tracking-[.18em] text-gold">SULAPRAIA</p>
        <p className="mt-5 max-w-sm text-stone-300">Moda praia atacado com estética premium, curadoria tropical brasileira e condições especiais para lojistas, revendedoras e boutiques.</p>
        <div className="mt-6 flex flex-wrap gap-2">{keywords.slice(0,4).map(k => <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-stone-300" key={k}>{k}</span>)}</div>
      </div>
      <div><h3 className="font-semibold text-gold">Comprar</h3><ul className="mt-4 space-y-3 text-stone-300"><li><Link href="/catalogo/biquini-aurora-dourado">Catálogo</Link></li><li><Link href="/atacado">Atacado</Link></li><li><Link href="/checkout">Checkout rápido</Link></li></ul></div>
      <div><h3 className="font-semibold text-gold">Institucional</h3><ul className="mt-4 space-y-3 text-stone-300"><li><Link href="/sobre">Sobre a Sulapraia</Link></li><li><Link href="/contato">Contato</Link></li><li><Link href="/politicas/trocas">Política de troca</Link></li><li><Link href="/politicas/envio">Política de envio</Link></li></ul></div>
      <div><h3 className="font-semibold text-gold">Integrações</h3><ul className="mt-4 space-y-3 text-stone-300"><li>Mercado Pago, Pix e cartão</li><li>WhatsApp comercial</li><li>Instagram, TikTok e Pixel</li><li>GA4 e Google Tag Manager</li></ul></div>
    </div>
    <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-stone-400">© 2026 Sulapraia. Site otimizado para conversão, SEO e vendas no atacado.</div>
  </footer>;
}
