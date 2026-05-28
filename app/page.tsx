import Image from 'next/image';
import Link from 'next/link';
import { benefits, collections, products, site, testimonials } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { SectionTitle } from '@/components/Section';

export default function Home() {
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('Olá, quero ver o catálogo atacadista Sulapraia.')}`;
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Store', name: 'Sulapraia', url: site.url, description: 'Moda praia atacado premium para lojistas e revendedoras.', areaServed: 'BR', paymentAccepted: 'Pix, Cartão de crédito, Mercado Pago' };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="luxury-gradient relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 opacity-20"><video className="h-full w-full object-cover" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop"></video></div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 md:grid-cols-[1fr_.85fr]">
        <div className="fade-up max-w-3xl">
          <p className="rounded-full border border-gold/30 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[.28em] text-ocean backdrop-blur w-fit">Moda praia atacado • verão premium 2026</p>
          <h1 className="mt-7 font-serif text-6xl leading-[.92] text-stone-950 md:text-8xl">Biquínis de atacado com desejo de marca de luxo.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700 md:text-xl">Coleções sofisticadas, fotos irresistíveis e condições pensadas para lojistas, revendedoras e boutiques venderem mais no verão brasileiro.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row"><Link className="rounded-full bg-ocean px-8 py-4 text-center font-bold text-white shadow-2xl shadow-ocean/25 transition hover:-translate-y-1 hover:bg-gold" href={wa}>Comprar no Atacado</Link><Link className="rounded-full border border-gold/40 bg-white/70 px-8 py-4 text-center font-bold text-ocean backdrop-blur transition hover:-translate-y-1 hover:border-ocean" href="/catalogo/biquini-aurora-dourado">Ver Catálogo</Link></div>
          <div className="mt-10 grid grid-cols-3 gap-4 text-center"><div><b className="text-3xl text-ocean">+12</b><p className="text-xs uppercase tracking-widest text-stone-500">peças mínimo</p></div><div><b className="text-3xl text-ocean">24h</b><p className="text-xs uppercase tracking-widest text-stone-500">atendimento</p></div><div><b className="text-3xl text-ocean">BR</b><p className="text-xs uppercase tracking-widest text-stone-500">envio nacional</p></div></div>
        </div>
        <div className="relative hidden md:block"><div className="float relative aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/70 shadow-2xl"><Image priority src="https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop" alt="Campanha tropical Sulapraia" fill className="object-cover" /></div><div className="glass absolute -bottom-8 -left-8 rounded-3xl p-6"><p className="text-xs uppercase tracking-[.22em] text-gold">coleção destaque</p><p className="font-serif text-3xl text-ocean">Aurora Dourada</p></div></div>
      </div>
    </section>

    <section className="overflow-hidden bg-white py-8"><div className="marquee flex w-[200%] gap-8 text-sm font-bold uppercase tracking-[.26em] text-gold"><span>biquíni atacado • beachwear atacado • fornecedor de biquíni • moda praia feminina • fábrica de biquíni • </span><span>biquíni atacado • beachwear atacado • fornecedor de biquíni • moda praia feminina • fábrica de biquíni • </span></div></section>

    <section className="px-5 py-20"><SectionTitle eyebrow="Coleções premium" title="Slider editorial para vitrines irresistíveis" text="Curadoria de cores, modelagens e campanhas prontas para acelerar sua venda digital." /><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">{collections.map(c => <article key={c.title} className="card-hover relative min-h-[440px] overflow-hidden rounded-[2.4rem] p-7 text-white"><Image src={c.image} alt={c.title} fill className="-z-10 object-cover" /><div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent" /><span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold backdrop-blur">{c.tag}</span><h3 className="mt-60 font-serif text-4xl">{c.title}</h3><p className="mt-3 text-white/85">{c.description}</p></article>)}</div></section>

    <section className="bg-white px-5 py-20"><SectionTitle eyebrow="Catálogo atacado" title="Lançamentos, mais vendidos e tendências verão" text="Produtos com descrições SEO, pedido mínimo, avaliação, cores, tamanhos e compra por WhatsApp ou Mercado Pago." /><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.map(p => <ProductCard key={p.slug} product={p} />)}</div></section>

    <section className="luxury-gradient px-5 py-20"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">{benefits.map(([t,d]) => <div className="glass rounded-[2rem] p-7" key={t}><div className="mb-5 h-12 w-12 rounded-full bg-gold/20" /><h3 className="font-serif text-2xl text-ocean">{t}</h3><p className="mt-3 text-sm leading-7 text-stone-600">{d}</p></div>)}</div></section>

    <section className="px-5 py-20"><SectionTitle eyebrow="Prova social" title="Depoimentos de quem revende Sulapraia" /><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">{testimonials.map(t => <figure className="rounded-[2rem] border border-gold/15 bg-white p-7 shadow-xl shadow-stone-200/50" key={t.name}><p className="text-gold">★★★★★</p><blockquote className="mt-5 text-lg leading-8 text-stone-700">“{t.text}”</blockquote><figcaption className="mt-6 font-bold text-ocean">{t.name}<span className="block text-sm font-normal text-stone-500">{t.role}</span></figcaption></figure>)}</div></section>

    <section className="bg-[#17100d] px-5 py-20 text-white"><div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[.3em] text-gold">Seja uma revendedora</p><h2 className="mt-4 font-serif text-5xl">Condições especiais para vender beachwear premium.</h2><p className="mt-5 text-stone-300">Cadastre sua loja, receba consultoria comercial e monte uma grade com cores de alto giro, campanhas para redes sociais e reposição rápida.</p><Link href="/atacado" className="mt-8 inline-block rounded-full bg-gold px-8 py-4 font-bold text-[#17100d]">Quero revender</Link></div><div className="grid grid-cols-3 gap-3">{products.slice(0,3).map(p => <div className="relative aspect-[3/4] overflow-hidden rounded-3xl" key={p.slug}><Image src={p.image} alt={p.name} fill className="object-cover" /></div>)}</div></div></section>

    <section className="px-5 py-20"><SectionTitle eyebrow="Instagram style" title="Conteúdo de campanha pronto para encantar" /><div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-6">{[...products, ...products.slice(0,2)].map((p,i) => <div className="relative aspect-square overflow-hidden rounded-3xl" key={`${p.slug}-${i}`}><Image src={p.gallery[0]} alt={`Feed Sulapraia ${i+1}`} fill className="object-cover transition duration-500 hover:scale-110" /></div>)}</div></section>

    <section className="px-5 pb-24"><div className="mx-auto rounded-[2.6rem] bg-ocean p-8 text-center text-white md:p-14"><p className="text-gold">Oferta de abertura de coleção</p><h2 className="mt-3 font-serif text-5xl">Monte seu pedido atacado com Pix, cartão ou Mercado Pago.</h2><p className="mt-5 text-white/80">Cupom, frete calculado e confirmação elegante no checkout rápido.</p><Link href="/checkout" className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-bold text-ocean">Ir para o checkout</Link></div></section>
  </>;
}
