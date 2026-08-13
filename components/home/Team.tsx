"use client";

import { motion } from "framer-motion";
import { team } from "@/data/team";
import { SectionHeader } from "./SectionHeader";

export function Team() {
  return (
    <section id="team" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Who We Are" title="The people behind zed-forge" />
        <div className="grid gap-px overflow-hidden border border-ff-border bg-ff-border sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col items-center bg-ff-surface p-8 text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center bg-gradient-to-br from-ff-blue to-ff-cyan font-heading text-xl font-bold text-white">
                {member.initials}
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-ff-text">{member.name}</h3>
              <p className="mt-1 text-sm text-ff-muted">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
