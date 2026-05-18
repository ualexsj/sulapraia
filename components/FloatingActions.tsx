import Link from 'next/link';
import { site } from '@/lib/data';

export function FloatingActions() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Olá! Quero atendimento atacadista Sulapraia.')}`;
  return <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
    <Link href={wa} className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-2xl transition hover:scale-105">WhatsApp</Link>
    <button className="rounded-full border border-gold/30 bg-white/90 px-5 py-3 text-sm font-semibold text-ocean shadow-xl backdrop-blur">Chat online</button>
  </div>;
}
