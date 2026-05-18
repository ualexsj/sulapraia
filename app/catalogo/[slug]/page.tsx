import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, site } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';

export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) return {};
  return { title: `${product.name} | Biquíni atacado`, description: `${product.description} Pedido mínimo de ${product.wholesale} peças para lojistas e revendedoras.`, alternates: { canonical: `/catalogo/${product.slug}` }, openGraph: { title: product.name, description: product.description, images: [product.image], type: 'website' } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  if (!product) notFound();
  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Olá, quero comprar ${product.name} no atacado.`)}`;
  const productSchema = { '@context': 'https://schema.org', '@type': 'Product', name: product.name, image: product.gallery, description: product.description, brand: { '@type': 'Brand', name: 'Sulapraia' }, aggregateRating: { '@type': 'AggregateRating', ratingValue: product.rating, reviewCount: 38 }, offers: { '@type': 'Offer', priceCurrency: 'BRL', price: product.price, availability: 'https://schema.org/InStock', url: `${site.url}/catalogo/${product.slug}` } };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    <section className="luxury-gradient px-5 pb-20 pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div className="grid gap-4 md:grid-cols-2">{product.gallery.map((src, i) => <div className="product-zoom relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white" key={src}><Image priority={i===0} src={src} alt={`${product.name} foto ${i+1}`} fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" /></div>)}<div className="relative col-span-full aspect-video overflow-hidden rounded-[2rem] bg-ocean/10"><Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop" alt="Vídeo de campanha do produto" fill className="object-cover opacity-70" /><div className="absolute inset-0 grid place-items-center"><span className="rounded-full bg-white/85 px-6 py-3 font-bold text-ocean">▶ Vídeo do produto</span></div></div></div>
        <div className="rounded-[2.4rem] bg-white p-7 shadow-2xl shadow-stone-200/70 md:p-10">
          <p className="text-xs font-bold uppercase tracking-[.28em] text-gold">{product.category}</p>
          <h1 className="mt-4 font-serif text-5xl text-stone-950 md:text-6xl">{product.name}</h1>
          <p className="mt-5 text-lg leading-8 text-stone-600">{product.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3"><span className="rounded-full bg-ocean/10 px-4 py-2 font-bold text-ocean">R$ {product.price.toFixed(2).replace('.', ',')} atacado</span><span className="rounded-full bg-gold/10 px-4 py-2 font-bold text-gold">Mínimo {product.wholesale} peças</span><span className="text-gold">★★★★★ {product.rating}</span></div>
          <div className="mt-8 space-y-6"><div><label className="font-bold">Cor</label><div className="mt-3 flex flex-wrap gap-2">{product.colors.map(c => <button className="rounded-full border border-gold/30 px-4 py-2 text-sm hover:bg-gold hover:text-white" key={c}>{c}</button>)}</div></div><div><label className="font-bold">Tamanho</label><div className="mt-3 flex gap-2">{product.sizes.map(s => <button className="grid h-11 w-11 place-items-center rounded-full border border-ocean/20 font-bold hover:bg-ocean hover:text-white" key={s}>{s}</button>)}</div></div><div><label className="font-bold">Quantidade atacado</label><input defaultValue={product.wholesale} min={product.wholesale} type="number" className="mt-3 w-full rounded-2xl border border-stone-200 px-4 py-4 outline-none focus:border-gold" /></div></div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2"><Link href="/checkout" className="rounded-full bg-ocean px-6 py-4 text-center font-bold text-white hover:bg-gold">Adicionar ao carrinho</Link><Link href={wa} className="rounded-full border border-gold/40 px-6 py-4 text-center font-bold text-ocean hover:bg-gold hover:text-white">Comprar no WhatsApp</Link><Link href={site.mercadoPagoLink} className="sm:col-span-2 rounded-full bg-[#009ee3] px-6 py-4 text-center font-bold text-white">Pagar com Mercado Pago</Link></div>
          <div className="mt-9 rounded-3xl bg-sand/15 p-5"><h2 className="font-serif text-2xl text-ocean">Tabela de tamanhos</h2><div className="mt-4 grid grid-cols-4 gap-2 text-center text-sm"><b>Tam.</b><b>Busto</b><b>Cintura</b><b>Quadril</b>{['P 82-88 62-68 88-94','M 89-94 69-74 95-100','G 95-102 75-82 101-108'].flatMap(r => r.split(' ').map((c,i)=><span key={`${r}-${i}`} className="rounded-xl bg-white py-2">{c}</span>))}</div></div>
        </div>
      </div>
    </section>
    <section className="bg-white px-5 py-20"><div className="mx-auto max-w-7xl"><h2 className="font-serif text-4xl">Produtos relacionados</h2><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.filter(p => p.slug !== product.slug).slice(0,3).map(p => <ProductCard key={p.slug} product={p} />)}</div></div></section>
  </>;
}
