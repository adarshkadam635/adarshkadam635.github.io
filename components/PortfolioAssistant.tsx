'use client';

import { useMemo, useState } from 'react';
import { Bot, ChevronRight, Send } from 'lucide-react';
import { experiences, projects, skills } from '@/data/portfolio';

const questions = [
  'What does Adarsh specialize in?',
  'What AI projects has he built?',
  'Tell me about SentinelDrive.',
  'What is his RAG experience?'
];

function answerFor(question: string) {
  const q = question.toLowerCase();
  if (q.includes('special') || q.includes('expert')) {
    return 'Adarsh specializes in Agentic AI, Generative AI, RAG architectures, machine learning, deep learning, NLP, computer vision, AI automation, and production backend systems.';
  }
  if (q.includes('project')) {
    return projects.map((p) => p.title).join(', ') + '.';
  }
  if (q.includes('sentinel')) {
    return 'SentinelDrive is a 2025 real-time driver drowsiness detection system combining CNN, LSTM, and GRU models, with multi-GPU training across 3× NVIDIA A6000 GPUs and a reported 2.8× throughput/scalability improvement.';
  }
  if (q.includes('rag')) {
    return 'His RAG work includes production-ready LangChain + Pinecone pipelines, a privacy-policy/internal-knowledge assistant, knowledge-based AI solutions, and SmartRAG built with LlamaIndex, Pinecone, Claude API, and Python.';
  }
  if (q.includes('technology') || q.includes('stack')) {
    return `Key technologies include ${skills['AI / LLM / NLP'].slice(0, 6).join(', ')}, plus PyTorch, TensorFlow, FastAPI, Docker, AWS, Pinecone, ChromaDB, Pandas, NumPy, and OpenCV.`;
  }
  if (q.includes('experience')) {
    return `Adarsh's listed experience includes ${experiences.map((e) => `${e.role} at ${e.company}`).join('; ')}.`;
  }
  return 'Ask about his specialties, projects, experience, technology stack, SentinelDrive, or RAG work.';
}

export default function PortfolioAssistant() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('Ask me anything about Adarsh’s portfolio.');

  const suggestions = useMemo(() => questions, []);

  const submit = (value = question) => {
    const clean = value.trim();
    if (!clean) return;
    setAnswer(answerFor(clean));
    setQuestion('');
  };

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] shadow-2xl shadow-cyan-950/10">
      <div className="border-b border-white/10 bg-white/[0.02] px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/5 text-cyan-200"><Bot size={19} /></div>
          <div>
            <div className="text-sm font-semibold text-white">Ask My Portfolio</div>
            <div className="text-xs text-slate-500">Answers are grounded in the portfolio content</div>
          </div>
        </div>
      </div>
      <div className="min-h-44 p-5">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-300">{answer}</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button key={s} onClick={() => submit(s)} className="group inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] px-3 py-2 text-xs text-slate-400 transition hover:border-cyan-300/20 hover:text-cyan-100">
              {s} <ChevronRight size={12} className="transition group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 p-4">
        <div className="flex gap-2 rounded-2xl border border-white/10 bg-slate-950/70 p-2">
          <input value={question} onChange={(e) => setQuestion(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && submit()} placeholder="Ask about skills, projects, experience..." className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-600" aria-label="Ask about the portfolio" />
          <button onClick={() => submit()} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-300 text-slate-950 transition hover:bg-cyan-200" aria-label="Send question"><Send size={16} /></button>
        </div>
      </div>
    </div>
  );
}
