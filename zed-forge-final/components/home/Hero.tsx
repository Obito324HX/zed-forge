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
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 border border-ff-border bg-ff-surface/70 px-4 py-2 text-sm text-ff-text backdrop-blur"
          >
            <span className="pulse-dot" /> Available for new projects
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-8 font-heading text-6xl font-extrabold leading-[0.95] tracking-tight text-ff-text sm:text-7xl lg:text-8xl"
          >
            We design
            <br />
            and build.
          </motion.h1>

          <motion.p variants={item} className="mt-8 max-w-xl text-lg leading-8 text-ff-muted">
            zed-forge is a design and development studio. We partner with ambitious teams to build websites, applications, and platforms engineered to perform, not just look good.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="focus-ring bg-ff-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              See Our Work
            </a>
            <a href="#contact" className="focus-ring border border-ff-border bg-ff-surface px-6 py-3 text-sm font-semibold text-ff-text transition hover:border-ff-blue hover:bg-ff-surface-2">
              Start a Project →
            </a>
          </motion.div>
        </div>

        <motion.div variants={item} className="border border-ff-border bg-ff-surface p-8">
          <p className="font-heading text-2xl font-bold text-ff-text">Full-stack,</p>
          <p className="font-heading text-2xl font-bold text-ff-cyan">design to deployment.</p>
          <div className="my-6 h-px bg-ff-border" />
          <p className="font-heading text-2xl font-bold text-ff-text">AI-accelerated,</p>
          <p className="font-heading text-2xl font-bold text-ff-cyan">without cutting corners.</p>
          <div className="my-6 h-px bg-ff-border" />
          <p className="font-heading text-2xl font-bold text-ff-text">Design-led,</p>
          <p className="font-heading text-2xl font-bold text-ff-cyan">engineering-driven.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
