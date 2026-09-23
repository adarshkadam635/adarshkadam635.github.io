'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const nodes = [
  { id: 'USER', x: 12, y: 44 },
  { id: 'AI AGENT', x: 31, y: 24 },
  { id: 'RAG', x: 50, y: 42 },
  { id: 'VECTOR DB', x: 72, y: 22 },
  { id: 'TOOLS', x: 72, y: 66 },
  { id: 'RESPONSE', x: 90, y: 44 }
];

const edges = [
  [12, 44, 31, 24],
  [31, 24, 50, 42],
  [50, 42, 72, 22],
  [50, 42, 72, 66],
  [72, 22, 90, 44],
  [72, 66, 90, 44]
];

export default function HeroNetwork() {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 120, damping: 22 });
  const sy = useSpring(py, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      px.set((event.clientX / window.innerWidth - 0.5) * 16);
      py.set((event.clientY / window.innerHeight - 0.5) * 16);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [px, py]);

  return (
    <motion.div style={{ x: sx, y: sy }} className="relative mx-auto aspect-[1.2/1] w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 shadow-[0_0_80px_rgba(34,211,238,0.08)] backdrop-blur-xl md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(56,189,248,0.11),transparent_24%),radial-gradient(circle_at_76%_68%,rgba(99,102,241,0.11),transparent_24%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:30px_30px]" />

      <div className="relative h-full">
        <div className="absolute left-0 top-0 font-mono text-[10px] uppercase tracking-[0.25em] text-slate-600">agentic_runtime / visual</div>
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 88" preserveAspectRatio="none" aria-hidden="true">
          {edges.map(([x1, y1, x2, y2], index) => (
            <g key={index}>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(148,163,184,.24)" strokeWidth="0.35" />
              <motion.circle r="0.8" fill="rgba(103,232,249,.95)" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0], cx: [x1, x2], cy: [y1, y2] }} transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.45, ease: 'linear' }} />
            </g>
          ))}
        </svg>

        {nodes.map((node, index) => (
          <div key={node.id} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${node.x}%`, top: `${node.y}%` }}>
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3.4, repeat: Infinity, delay: index * 0.3 }} className="rounded-2xl border border-white/10 bg-slate-950/85 px-3 py-2 shadow-2xl shadow-cyan-950/20">
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">node {String(index + 1).padStart(2, '0')}</div>
              <div className="mt-1 whitespace-nowrap text-[10px] font-semibold text-cyan-100 md:text-xs">{node.id}</div>
            </motion.div>
          </div>
        ))}

        <div className="absolute bottom-0 left-0 flex flex-wrap gap-2">
          {['RAG', 'LLM', 'Agents', 'NLP', 'PyTorch', 'FastAPI', 'Vector DB', 'APIs'].map((chip) => (
            <span key={chip} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-slate-400 md:text-[10px]">{chip}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
