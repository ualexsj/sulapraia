import Link from 'next/link';
import { site } from '@/lib/data';

const nav = [
  ['Catálogo','/catalogo/biquini-aurora-dourado'],
  ['Atacado','/atacado'],
  ['Blog','/blog/tendencias-de-biquini-2026'],
  ['Sobre','/sobre'],
  ['Contato','/contato']
];

export function Header() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Olá, quero comprar biquínis Sulapraia no atacado.')}`;
  return <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 md:px-8">
    <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-6" aria-label="Navegação principal">
      <Link href="/" className="font-serif text-2xl font-bold tracking-[.18em] text-ocean">SULAPRAIA</Link>
      <div className="hidden items-center gap-7 text-sm font-medium uppercase tracking-[.16em] text-stone-700 lg:flex">
        {nav.map(([label, href]) => <Link className="transition hover:text-gold" key={href} href={href}>{label}</Link>)}
      </div>
      <Link href={wa} className="rounded-full bg-ocean px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-ocean/20 transition hover:-translate-y-0.5 hover:bg-gold">Comprar no atacado</Link>
    </nav>
  </header>;
}
