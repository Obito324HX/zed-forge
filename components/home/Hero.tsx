"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const reduced = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: reduced ? 0 : 0.1 }}
        className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end"
      >
        <div>
          <motion.h1
            variants={item}
            className="mt-8 font-heading text-6xl font-extrabold leading-[0.95] tracking-tight text-ff-text sm:text-7xl lg:text-8xl"
          >
            We engineer
            <br />
            digital assets.
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-8 text-ff-muted">
            zed-forge is an independent digital studio engineering high-performance web applications and bespoke digital platforms for ambitious brands, enterprises, and property developers who demand world-class execution.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="focus-ring bg-ff-ember px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a8461f]">
              View Our Engineering
            </a>
            <a href="#contact" className="focus-ring border border-ff-border bg-ff-surface px-6 py-3 text-sm font-semibold text-ff-text transition hover:border-ff-ember hover:bg-ff-surface-2">
              Initiate a Technical Consultation →
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="border border-ff-border bg-ff-surface p-8">
          <p className="font-heading text-4xl font-bold leading-tight text-ff-text">Design-led,</p>
          <p className="font-heading text-4xl font-bold leading-tight text-ff-gold">engineering-driven.</p>
          <p className="mt-6 text-sm leading-6 text-ff-muted">Built on Next.js and TypeScript. Deployed at the edge. Engineered for Core Web Vitals, not just visual polish.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
