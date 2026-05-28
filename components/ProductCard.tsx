import Image from 'next/image';
import Link from 'next/link';
import type { products } from '@/lib/data';

type Product = (typeof products)[number];
export function ProductCard({ product }: { product: Product }) {
  return <Link href={`/catalogo/${product.slug}`} className="card-hover group overflow-hidden rounded-[2rem] border border-gold/15 bg-white">
    <div className="product-zoom relative aspect-[4/5] overflow-hidden bg-nude/40">
      <Image src={product.image} alt={product.name} fill sizes="(max-width:768px) 100vw, 25vw" className="object-cover" />
      <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-ocean backdrop-blur">{product.badge}</span>
    </div>
    <div className="p-5">
      <p className="text-xs uppercase tracking-[.22em] text-gold">{product.category}</p>
      <h3 className="mt-2 font-serif text-2xl text-stone-900">{product.name}</h3>
      <p className="mt-2 text-sm text-stone-600">Pedido mínimo: {product.wholesale} peças</p>
      <div className="mt-4 flex items-center justify-between"><span className="font-bold text-ocean">R$ {product.price.toFixed(2).replace('.', ',')}</span><span className="text-sm text-gold">★ {product.rating}</span></div>
    </div>
  </Link>;
}
