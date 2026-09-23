'use client';

import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
        className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-cyan-300/80"
      >
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-3xl font-semibold tracking-tight text-white md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && <p className="mt-5 text-base leading-7 text-slate-400 md:text-lg">{description}</p>}
    </div>
  );
}
