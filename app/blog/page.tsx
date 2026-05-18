import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from '@/lib/data';
import { SectionTitle } from '@/components/Section';
export const metadata: Metadata = { title: 'Blog de moda praia atacado', description: 'Conteúdos SEO sobre biquíni atacado, moda praia brasileira, revenda e tendências 2026.' };
export default function Blog() { return <section className="luxury-gradient px-5 pb-20 pt-32"><SectionTitle eyebrow="Blog SEO" title="Estratégias para vender mais moda praia" text="Artigos otimizados para Google com URLs amigáveis, keywords e schema markup." /><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">{posts.map(p => <Link href={`/blog/${p.slug}`} className="card-hover rounded-[2rem] bg-white p-7" key={p.slug}><p className="text-xs uppercase tracking-[.22em] text-gold">{new Date(p.date).toLocaleDateString('pt-BR')}</p><h2 className="mt-3 font-serif text-3xl text-ocean">{p.title}</h2><p className="mt-4 text-stone-600">{p.excerpt}</p></Link>)}</div></section>; }
