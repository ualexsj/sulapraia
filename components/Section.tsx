export function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="mx-auto mb-10 max-w-3xl text-center">
    <p className="text-xs font-bold uppercase tracking-[.32em] text-gold">{eyebrow}</p>
    <h2 className="mt-3 font-serif text-4xl leading-tight text-stone-950 md:text-6xl">{title}</h2>
    {text && <p className="mt-5 text-lg leading-8 text-stone-600">{text}</p>}
  </div>;
}
