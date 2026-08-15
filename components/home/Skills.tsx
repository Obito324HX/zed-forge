"use client";

import { learning, stackGroups } from "@/data/skills";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  return (
    <section className="border-y border-ff-border bg-ff-surface/40 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Technical Skills" title="The tools we build with" />
        <div className="grid gap-px overflow-hidden border border-ff-border bg-ff-border sm:grid-cols-2">
          {stackGroups.map((group) => (
            <div key={group.title} className={`bg-ff-surface p-5 ${group.featured ? "ring-1 ring-inset ring-ff-ember" : ""}`}>
              <h3 className="font-heading text-sm font-bold text-ff-text">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="border border-ff-border bg-ff-bg px-3 py-1 font-mono text-xs text-ff-muted">
                    {item}
                  </span>
                ))}
              </div>
              {group.description && (
                <p className="mt-3 text-sm leading-relaxed text-ff-muted">
                  {group.description}
                </p>
              )}
            </div>
          ))}
          <div className="bg-ff-surface p-5 sm:col-span-2">
            <span className="text-sm text-ff-muted">Currently learning: </span>
            <span className="text-sm font-medium text-ff-text">{learning.join(" · ")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
