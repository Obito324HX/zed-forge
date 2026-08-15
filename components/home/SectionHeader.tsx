export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-14 flex flex-col gap-4 border-b border-ff-border pb-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ff-gold">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ff-text sm:text-5xl">
          {title}
        </h2>
      </div>
      {sub ? <p className="max-w-sm text-base leading-7 text-ff-muted">{sub}</p> : null}
    </div>
  );
}
