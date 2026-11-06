import Image from 'next/image';
import { Activity, BarChart3, Bot, BrainCircuit, BriefcaseBusiness, Code2, Database, Eye, Layers3, MessageSquare, Network, ScanLine, Settings2, ShieldCheck, SlidersHorizontal, Users, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const logos: Record<string, string> = {
  Python: 'python', PyTorch: 'pytorch', TensorFlow: 'tensorflow',
  'Scikit-learn': 'scikitlearn', 'ONNX Runtime': 'onnx', FastAPI: 'fastapi',
  Flask: 'flask', React: 'react', 'Next.js': 'nextjs', TypeScript: 'typescript',
  JavaScript: 'javascript', HTML5: 'html5', CSS3: 'css3', 'Tailwind CSS': 'tailwindcss',
  NumPy: 'numpy', SciPy: 'scipy', Pandas: 'pandas', Matplotlib: 'matplotlib',
  LangChain: 'langchain', 'OpenAI API': 'openai', 'Claude API': 'anthropic',
  'Hugging Face': 'huggingface', Vercel: 'vercel', Docker: 'docker', Git: 'git',
  GitHub: 'github', 'GitHub Actions': 'githubactions', 'Jupyter Notebook': 'jupyter',
  'VS Code': 'vscode'
};

const symbols: Record<string, LucideIcon> = {
  CNN: ScanLine, LSTM: Activity, 'ResNet-9': Layers3, 'Computer Vision': Eye,
  'Model Evaluation': BarChart3, 'ECG Signal Processing': Activity, 'MIT-BIH': Database,
  'Data Preprocessing': SlidersHorizontal, 'Confusion Matrices': BarChart3,
  'ERP Workflows': BriefcaseBusiness, 'Quality Management (QMS)': ShieldCheck,
  'PMS Workflows': Workflow, 'Employee & Operator Portals': Users,
  'Business Automation': Settings2, 'REST APIs': Network, SQL: Database,
  RAG: Database, 'Agentic AI': Bot, 'Prompt Engineering': MessageSquare,
  'Tool Calling': Code2
};

export default function SkillBadge({ name }: { name: string }) {
  const logo = logos[name];
  const Symbol = symbols[name] ?? BrainCircuit;

  return (
    <li className="skill-badge">
      <span className={`skill-badge-icon ${logo ? 'skill-brand-icon' : ''}`} aria-hidden="true">
        {logo ? <Image src={`/skills/${logo}.svg`} alt="" width={20} height={20} /> : <Symbol size={19} strokeWidth={1.7} />}
      </span>
      <span>{name}</span>
    </li>
  );
}
