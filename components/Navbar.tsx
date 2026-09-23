'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills'],
  ['Certifications', '#certifications'],
  ['Education', '#education'],
  ['Contact', '#contact']
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/78 shadow-2xl shadow-cyan-950/10 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center" aria-label="Adarsh Kadam home">
          <span className="font-display text-2xl italic tracking-tight text-white">Adarsh Kadam</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-slate-400 transition hover:text-white">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10">
            Let's Connect <ArrowUpRight size={15} />
          </a>
        </div>

        <button className="rounded-lg border border-white/10 p-2 text-white lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-5 py-5 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-base text-slate-300 hover:text-white">
                {label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm font-medium text-cyan-100">
              Let's Connect <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
