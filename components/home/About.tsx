import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const values = ["Speed without shortcuts", "Honest communication", "Results over aesthetics", "Built to scale"];

export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="About zed-forge" title="Built in Zambia. Built for the world." />
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-7 text-ff-muted">
            <p className="text-lg text-ff-text">zed-forge is a design and development studio. We build digital products for teams that want more than a template: clean code, sharp design, systems built to scale.</p>
            <p>We work fast without cutting corners, using an AI-accelerated workflow to deliver production-ready work on tight timelines.</p>
            <p>No bloated proposals. No agency theatre. Just work that ships and performs.</p>
            <div className="border border-ff-ember/50 bg-ff-ember/10 p-5 text-ff-text">
              We build with the best tools available — including AI. It means faster delivery, cleaner code, and more time focused on what actually makes your project stand out.
            </div>
            <div className="grid gap-px overflow-hidden border border-ff-border bg-ff-border sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="bg-ff-surface p-4 text-sm text-ff-text">
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[480px] overflow-hidden border border-ff-border">
            <Image src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=800&q=80" alt="Developer workspace with laptop and code editor" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
