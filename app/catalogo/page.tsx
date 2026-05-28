import type { Metadata } from 'next';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/ProductCard';
import { SectionTitle } from '@/components/Section';
export const metadata: Metadata = { title: 'Catálogo de biquíni atacado', description: 'Catálogo Sulapraia com biquínis atacado, moda praia feminina e beachwear premium para revenda.' };
export default function Catalogo() { return <section className="luxury-gradient px-5 pb-20 pt-32"><SectionTitle eyebrow="Catálogo completo" title="Biquínis atacado para lojistas e revendedoras" text="Peças com pedido mínimo, cores, tamanhos e compra via WhatsApp ou Mercado Pago." /><div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.map(p => <ProductCard key={p.slug} product={p} />)}</div></section>; }
