import { services } from "@/data/services";
import { SectionHeader } from "./SectionHeader";

export function Services() {
  return (
    <section id="services" className="border-y border-ff-border bg-ff-surface/40 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="What We Build" title="Full-stack capability, not just a pretty frontend" />
        <div className="grid gap-px overflow-hidden border border-ff-border bg-ff-border lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article key={service.name} className="relative flex flex-col bg-ff-surface p-8 transition hover:bg-ff-surface-2">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-ff-muted">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <Icon className="mt-6 text-ff-ember" size={28} />
                <h3 className="mt-6 font-heading text-2xl font-bold text-ff-text">{service.name}</h3>
                <p className="mt-4 flex-1 leading-7 text-ff-muted">{service.description}</p>
                <div className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ff-muted">
                  {service.examples.map((example, i) => (
                    <span key={example}>
                      {example}
                      {i < service.examples.length - 1 ? " ·" : ""}
                    </span>
                  ))}
                </div>
                <a href="/#contact" className="mt-8 inline-flex text-sm font-semibold text-ff-text hover:text-ff-gold">
                  {service.cta} →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
