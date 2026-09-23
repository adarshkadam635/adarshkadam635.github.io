'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, BrainCircuit, BriefcaseBusiness, Check, Code2, Github, GraduationCap, Mail, MapPin, Phone, Sparkles, Terminal, Linkedin, ExternalLink, Cpu, Database, Network, Search, Bot, Workflow, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import HeroNetwork from '@/components/HeroNetwork';
import SectionHeading from '@/components/SectionHeading';
import PortfolioAssistant from '@/components/PortfolioAssistant';
import { capabilities, certifications, education, experiences, profile, projects, skills, stats } from '@/data/portfolio';

const reveal = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

function ProjectVisual({ flow }: { flow: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-4 md:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.10),transparent_25%),radial-gradient(circle_at_85%_75%,rgba(99,102,241,0.12),transparent_25%)]" />
      <div className="relative grid gap-2 sm:grid-cols-2">
        {flow.map((item, i) => (
          <div key={item} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2">
            <span className="font-mono text-[10px] text-cyan-300">0{i + 1}</span>
            <span className="text-xs text-slate-300">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <Navbar />

      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="absolute right-[-10rem] top-[30rem] h-[28rem] w-[28rem] rounded-full bg-indigo-500/8 blur-[140px]" />
        <div className="absolute left-[-10rem] top-[65rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/6 blur-[140px]" />
      </div>

      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/[0.04] px-3 py-1.5 text-xs font-medium text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.8)]" /> AI ENGINEERING / GENERATIVE AI / AGENTIC AI
          </motion.div>

          <h1 className="relative flex flex-col items-center">
            <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="block select-none text-[16vw] font-extrabold uppercase leading-[0.85] tracking-tight text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.85)] sm:text-[7.5rem] md:text-[9rem] lg:text-[10.5rem]">
              Adarsh
            </motion.span>{' '}
            <motion.span initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }} className="relative z-10 -my-[6vw] block h-[34vw] w-[28vw] sm:-my-14 sm:h-52 sm:w-44 md:-my-16 md:h-64 md:w-56">
              <span className="absolute inset-0 -z-10 block scale-110 rounded-[6rem] bg-cyan-400/15 blur-3xl" />
              <span className="relative block h-full w-full overflow-hidden rounded-t-[6rem] rounded-b-2xl border border-white/10 shadow-[0_0_60px_rgba(103,232,249,.18)]">
                <Image src="/profile.webp" alt="Adarsh Kadam, AI Engineer specializing in Agentic AI, Generative AI and RAG systems" fill sizes="(min-width: 768px) 224px, 28vw" className="object-cover object-top grayscale contrast-110 [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)]" priority />
              </span>
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="block select-none bg-gradient-to-r from-cyan-200 via-white to-indigo-300 bg-clip-text text-[16vw] font-extrabold uppercase leading-[0.85] tracking-tight text-transparent sm:text-[7.5rem] md:text-[9rem] lg:text-[10.5rem]">
              Kadam
            </motion.span>
          </h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            {profile.title}
          </motion.p>
        </div>

        <div className="mt-14 flex flex-col gap-10 border-t border-white/8 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-md">
            <p className="text-base leading-7 text-slate-400">
              AI Engineer specializing in Agentic AI, Generative AI, RAG architectures, machine learning, and production-grade AI applications.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100">Let's Collaborate <ArrowUpRight size={16} /></a>
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-slate-300 transition hover:border-white/20 hover:text-white">Resume <ArrowDown size={15} /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-row flex-wrap gap-3 sm:flex-col sm:items-end">
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"><Github size={15} /> GitHub <ExternalLink size={12} className="text-slate-600" /></a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"><Linkedin size={15} /> LinkedIn <ExternalLink size={12} className="text-slate-600" /></a>
            <a href={`mailto:${profile.contact.email}`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"><Mail size={15} /> Email <ExternalLink size={12} className="text-slate-600" /></a>
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-white/8 bg-white/[0.018]">
        <div className="mx-auto grid max-w-7xl gap-px bg-white/8 px-0 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="bg-slate-950 px-5 py-8 lg:px-8">
              <div className="font-mono text-3xl font-semibold tracking-tight text-white">{stat.value}</div>
              <div className="mt-2 max-w-[16rem] text-sm leading-6 text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="01 / About" title="Engineering intelligence for real-world problems" description="A focus on practical AI systems: from model architecture and retrieval pipelines to backend services, evaluation, and deployment." />
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>{profile.summary}</p>
            <p className="text-slate-400">{profile.summary2}</p>
            <p className="text-slate-400">{profile.summary3}</p>
          </div>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-6">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(34,211,238,.12),transparent_18%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,.12),transparent_18%)]" />
            <div className="relative space-y-3 font-mono text-xs">
              {['Machine Learning', 'Deep Learning', 'Generative AI', 'RAG', 'Agentic AI', 'Production AI Systems'].map((item, i) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-slate-950/70 px-4 py-3">
                  <span className="text-slate-600">0{i + 1}</span>
                  <span className={i === 5 ? 'text-cyan-200' : 'text-slate-300'}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
        <SectionHeading eyebrow="02 / Capabilities" title="What I build" description="AI systems that connect intelligence with workflows, knowledge, perception, and software infrastructure." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((card, i) => (
            <motion.article key={card.number} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }} whileHover={{ y: -4 }} className="group rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-cyan-300/15 hover:bg-white/[0.035]">
              <div className="flex items-start justify-between"><span className="font-mono text-xs text-slate-600">{card.number}</span><Sparkles size={17} className="text-slate-600 transition group-hover:text-cyan-200" /></div>
              <h3 className="mt-10 text-xl font-semibold text-white">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="relative border-y border-white/8 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHeading eyebrow="03 / Experience" title="Experience across AI engineering, software, and automation" />
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.article key={`${exp.company}-${exp.role}`} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="relative grid gap-8 rounded-[1.6rem] border border-white/10 bg-white/[0.02] p-6 md:grid-cols-[210px_1fr] md:p-8">
                <div>
                  <div className="font-mono text-xs text-cyan-300/80">{exp.period}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-600">{exp.location}</div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <div className="mt-1 text-sm text-slate-500">{exp.company}</div>
                    </div>
                    <BriefcaseBusiness size={20} className="text-slate-600" />
                  </div>
                  <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-400">
                    {exp.bullets.map((item) => <li key={item} className="flex gap-3"><Check size={15} className="mt-1.5 shrink-0 text-cyan-300" />{item}</li>)}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.tech.map((tech) => <span key={tech} className="rounded-full border border-white/8 bg-slate-950/80 px-3 py-1.5 font-mono text-[10px] text-slate-500">{tech}</span>)}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="04 / Projects" title="Projects built around measurable AI systems" description="Each case study is presented as a system: problem, architecture, technology, and documented outcome." />
        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article key={project.id} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.02]">
              <div className="grid gap-0 lg:grid-cols-[.82fr_1.18fr]">
                <div className="border-b border-white/10 bg-slate-950/60 p-6 md:p-8 lg:border-b-0 lg:border-r">
                  <div className="flex items-center justify-between gap-4"><span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.04] px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-cyan-100">{project.category}</span><span className="font-mono text-xs text-slate-600">{project.period}</span></div>
                  <h3 className="mt-8 text-3xl font-semibold tracking-tight text-white">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 font-mono text-[10px] text-slate-500">{tech}</span>)}</div>
                  {project.metrics.length > 0 && <div className="mt-8 grid gap-3 sm:grid-cols-2">{project.metrics.map((metric) => <div key={metric} className="rounded-xl border border-white/8 bg-white/[0.02] px-4 py-3 text-xs leading-5 text-slate-300">{metric}</div>)}</div>}
                  {project.note && <div className="mt-6 rounded-xl border border-amber-300/10 bg-amber-300/[0.02] px-4 py-3 text-xs leading-5 text-slate-500">{project.note}</div>}
                </div>
                <div className="p-6 md:p-8">
                  <ProjectVisual flow={project.flow} />
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">System components</div>
                      <div className="flex flex-wrap gap-2">{project.features.map((feature) => <span key={feature} className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2 text-xs text-slate-400">{feature}</span>)}</div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-4">
                      <div className="flex items-center gap-2 text-xs font-medium text-cyan-100"><Network size={14} /> Architecture snapshot</div>
                      <div className="mt-3 text-xs leading-6 text-slate-500">{project.flow.join(' → ')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative border-y border-white/8 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionHeading eyebrow="05 / Technical Depth" title="A stack built for shipping AI" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {Object.entries(skills).map(([group, items], i) => (
              <motion.div key={group} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.05 }} className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-cyan-200">{i % 2 === 0 ? <Cpu size={17} /> : <Code2 size={17} />}</div><h3 className="text-sm font-semibold text-white">{group}</h3></div>
                <div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-white/8 bg-slate-950/70 px-3 py-1.5 text-[10px] text-slate-500 transition hover:border-cyan-300/15 hover:text-cyan-200">{item}</span>)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="06 / Architecture" title="How I build AI systems" description="A typical production-oriented flow from user interaction to intelligent reasoning, retrieval, tools, services, and deployment." />
        <div className="mb-10">
          <HeroNetwork />
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {[
            ['USER', 'Intent', 'User input enters the system.'],
            ['AI AGENT', 'Planning', 'The agent plans the next actions.'],
            ['LLM + RAG', 'Reasoning', 'Retrieval and model inference work together.'],
            ['TOOLS + APIs', 'Execution', 'External data and actions extend the model.'],
            ['FASTAPI → DOCKER → CLOUD', 'Deployment', 'Backend services package the production workflow.']
          ].map(([title, label, copy], i) => (
            <motion.div key={title} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="relative rounded-2xl border border-white/10 bg-white/[0.025] p-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-300/75">{label}</div>
              <div className="mt-4 text-sm font-semibold text-white">{title}</div>
              <div className="mt-2 text-xs leading-6 text-slate-500">{copy}</div>
              {i < 4 && <ArrowUpRight className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-slate-700 xl:block" size={18} />}
            </motion.div>
          ))}
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {['Planning', 'Reasoning', 'Retrieval', 'Memory', 'Tools', 'Evaluation', 'Deployment'].map((x) => <div key={x} className="rounded-xl border border-white/8 bg-white/[0.018] px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">{x}</div>)}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
        <SectionHeading eyebrow="07 / Engineering Philosophy" title="From prototype to production" />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['01', 'Understand', 'Understand the problem, data, users, and business requirements.'],
            ['02', 'Engineer', 'Design the model, architecture, APIs, retrieval pipeline, and workflows.'],
            ['03', 'Evaluate', 'Measure accuracy, reliability, latency, hallucinations, and output quality.'],
            ['04', 'Deploy', 'Containerize, deploy, monitor, optimize, and continuously improve.']
          ].map(([number, title, copy], i) => (
            <motion.div key={number} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.06 }} className="rounded-[1.4rem] border border-white/10 bg-white/[0.02] p-6">
              <div className="font-mono text-xs text-cyan-300">{number}</div>
              <h3 className="mt-7 text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="education" className="relative border-y border-white/8 bg-white/[0.012]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-32">
          <div>
            <SectionHeading eyebrow="08 / Education" title="Computer Science foundation, focused on AI engineering" />
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div className="flex items-start justify-between gap-5"><div><div className="text-xs font-mono uppercase tracking-[0.18em] text-cyan-300/80">{education.period}</div><h3 className="mt-4 text-2xl font-semibold text-white">{education.degree}</h3><p className="mt-1 text-slate-400">{education.field}</p></div><GraduationCap size={24} className="text-slate-600" /></div>
              <div className="mt-6 text-sm text-slate-500">{education.institution} · {education.location}</div>
              <div className="mt-8"><div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">Specialization</div><div className="flex flex-wrap gap-2">{education.specialization.map((x) => <span key={x} className="rounded-full border border-white/8 bg-slate-950/70 px-3 py-1.5 text-xs text-slate-400">{x}</span>)}</div></div>
              <div className="mt-8"><div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">Relevant coursework</div><div className="grid gap-2 sm:grid-cols-2">{education.coursework.map((x) => <div key={x} className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.02] px-3 py-2 text-xs text-slate-500"><Check size={13} className="text-cyan-300" />{x}</div>)}</div></div>
            </div>
          </div>
          <div id="certifications">
            <SectionHeading eyebrow="09 / Certifications" title="Focused learning in modern Generative AI" />
            <div className="space-y-3">
              {certifications.map((item, i) => <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-slate-950/80 font-mono text-[10px] text-cyan-200">0{i + 1}</div><div className="text-sm leading-6 text-slate-400">{item}</div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="10 / Building in Public" title="See the engineering footprint" description="Public profile links are provided from the resume. Live contribution data should only be connected when a real API integration is configured." />
            <div className="flex flex-wrap gap-3">
              <a href={profile.contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"><Github size={16} /> github.com/adarshkadam635 <ExternalLink size={13} /></a>
              <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"><Linkedin size={16} /> linkedin.com/in/adarshkadam635 <ExternalLink size={13} /></a>
            </div>
          </div>
          <PortfolioAssistant />
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.02] to-indigo-400/[0.08] p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-200/70">Ready when the problem is</div>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-5xl">Have an AI problem worth solving?</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">Whether you're building an AI product, automating a business workflow, or exploring an intelligent system, let's build something meaningful.</p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">Start a Conversation <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/8 bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-8 lg:py-32">
          <div className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-300/80">11 / Contact</div>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">Let's build something intelligent.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-400">If you want to connect, here's every way to reach me.</p>
          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            <a href={`mailto:${profile.contact.email}`} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"><Mail size={18} className="text-cyan-200" />{profile.contact.email}</a>
            <a href={`tel:${profile.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"><Phone size={18} className="text-cyan-200" />{profile.contact.phone}</a>
            <a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"><Linkedin size={18} className="text-cyan-200" />linkedin.com/in/adarshkadam635</a>
            <a href={profile.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white"><Github size={18} className="text-cyan-200" />github.com/adarshkadam635</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <div><span className="text-slate-300">Adarsh Kadam</span> · AI Engineer · Machine Learning Engineer · Agentic AI</div>
          <div className="flex items-center gap-4"><a href="#home" className="hover:text-white">Top</a><a href={profile.contact.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a><a href={profile.contact.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a><a href={`mailto:${profile.contact.email}`} className="hover:text-white">Email</a></div>
        </div>
        <div className="pb-7 text-center text-xs text-slate-700">Building intelligent systems for the real world. · © 2026 Adarsh Kadam. All rights reserved.</div>
      </footer>
    </main>
  );
}
