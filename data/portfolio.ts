export const profile = {
  name: 'Adarsh Kadam',
  title: 'AI Engineer | Machine Learning Engineer | Agentic AI & Generative AI Specialist',
  positioning: 'Building intelligent systems that think, retrieve, reason, and automate.',
  summary:
    'Results-driven AI Engineer and Machine Learning Engineer with hands-on experience building autonomous AI agents, production-grade Retrieval-Augmented Generation architectures, and deep learning systems.',
  summary2:
    'Proficient in Python, PyTorch, TensorFlow, LangChain, OpenAI API, and Claude API for Large Language Model application development.',
  summary3:
    'Experienced in designing end-to-end machine learning pipelines, fine-tuning LLMs, implementing NLP solutions, and deploying scalable FastAPI backends.',
  contact: {
    phone: '+91 8349910482',
    email: 'adarshkadam635@gmail.com',
    linkedin: 'https://linkedin.com/in/adarshkadam635',
    github: 'https://github.com/adarshkadam635'
  }
};

export const stats = [
  { value: '40%', label: 'Manual operational workload reduction' },
  { value: '94.5%', label: 'Plant disease classification accuracy' },
];

export const capabilities = [
  {
    number: '01',
    title: 'Agentic AI',
    text: 'Autonomous AI agents capable of reasoning, tool calling, multi-step workflows, and business automation.'
  },
  {
    number: '02',
    title: 'Generative AI',
    text: 'LLM-powered applications using OpenAI, Claude, Gemini, and Hugging Face ecosystems.'
  },
  {
    number: '03',
    title: 'RAG Systems',
    text: 'Production-grade knowledge retrieval systems using vector databases and semantic search.'
  },
  {
    number: '04',
    title: 'Machine Learning',
    text: 'End-to-end ML pipelines, model training, optimization, evaluation, and deployment.'
  },
  {
    number: '05',
    title: 'Computer Vision',
    text: 'Real-time computer vision and deep learning systems using CNNs, OpenCV, ResNet, LSTM, and GRU.'
  },
  {
    number: '06',
    title: 'AI Automation',
    text: 'Intelligent workflows connecting AI agents with CRMs, messaging platforms, APIs, and business systems.'
  }
];

export const experiences = [
  {
    role: 'AI Engineer',
    company: 'EndorseCC',
    location: 'India',
    period: 'June 2026 – Present',
    bullets: [
      'Engineered and integrated AI/ML solutions using OpenAI, Gemini, and Anthropic models.',
      'Developed LLM-powered applications and AI agents for business automation and intelligent workflows.',
      'Implemented Prompt Engineering, NLP pipelines, RAG systems, and knowledge-based AI solutions.',
      'Worked on dataset processing, model evaluation, optimization, and AI response quality improvement.',
      'Collaborated with engineering and business teams to integrate AI capabilities into real-world products.'
    ],
    tech: ['Python', 'LLMs', 'OpenAI', 'Gemini', 'Anthropic', 'RAG', 'NLP', 'Prompt Engineering', 'AI Agents', 'APIs', 'Git']
  },
  {
    role: 'AI Engineer — Agentic AI & Automation',
    company: 'Freelancer.com & Fiverr.com',
    location: 'Remote',
    period: 'December 2024 – Present',
    bullets: [
      'Designed and deployed autonomous AI agents using OpenAI and Claude APIs.',
      'Built lead-generation and automated customer-support agents.',
      'Reduced manual operational workload by 40%.',
      'Engineered production-ready RAG pipelines using LangChain and Pinecone.',
      'Built scalable FastAPI backends integrating AI agents with external platforms such as CRMs and Slack.',
      'Implemented tool calling and multi-step reasoning chains.',
      'Enabled agents to autonomously complete complex business workflows.'
    ],
    tech: ['OpenAI', 'Claude', 'LangChain', 'Pinecone', 'FastAPI', 'CRMs', 'Slack', 'Tool Calling', 'Multi-step Reasoning']
  }
];

export const projects = [
  {
    id: 'neural-metrics',
    title: 'Neural Metrics: Sentiment Analysis Lab',
    category: 'NLP / Model Evaluation',
    period: 'November 2026',
    description:
      'A reproducible NLP experiment comparing dense, CNN, and LSTM networks on negative, neutral, and positive English tweets. An interactive dashboard turns held-out evaluation into model comparisons, learning curves, and live browser-based sentiment predictions.',
    tech: ['TensorFlow', 'Python', 'JavaScript', 'Vercel', 'scikit-learn', 'NumPy', 'Matplotlib'],
    features: [
      'CNN: 59.14% test accuracy and 0.5705 macro F1; Dense: 56.94% and 0.5683; LSTM: 58.66% and 0.5804.',
      'TweetEval sentiment data: 45,582 cleaned training tweets, 2,000 validation tweets, and 12,284 held-out test tweets across three classes.',
      'CNN improves test accuracy by 10.81 percentage points over the 48.33% majority-class baseline; LSTM achieves the highest test macro F1.',
      'Dense is the default inference model because it leads on validation macro F1 (0.6477); test scores do not determine model selection.',
      'Interactive accuracy/loss curves, row-normalized confusion matrices, test ROC curves, per-class reports, sentiment distributions, and CSV export.',
      'Real dense-model inference runs entirely in the browser with learned weights and preprocessing; JavaScript outputs match TensorFlow reference predictions within 0.000002.',
      'Immutable dataset revision and SHA-256 verification, train-only vocabulary, duplicate/overlap cleaning, early stopping, saved models, and automated pipeline tests.'
    ],
    metrics: ['59.14% CNN test accuracy', '0.5804 LSTM test macro F1', '12,284 held-out test tweets'],
    flow: ['Pinned TweetEval Data', 'Split Cleaning', 'Train-only Tokenization', 'Dense / CNN / LSTM', 'Held-out Evaluation', 'Interactive Dashboard'],
    liveUrl: 'https://neural-metrics-lab.vercel.app/',
    sourceUrl: 'https://github.com/adarshkadam635/Evaluating_nueral_network_through_metrics_analysis',
    previewImage: '/previews/neural-metrics.svg',
    previewAlt: 'Neural Metrics evaluation summary: CNN 59.14%, LSTM 58.66%, and Dense 56.94% held-out test accuracy on TweetEval sentiment.',
    note: 'CPU training run: 6 November 2026, seed 42, TensorFlow 2.20. Metrics reflect a single run on historical English tweets; sarcasm and domain shift remain limitations. Softmax scores are not calibrated confidence estimates.'
  },
  {
    id: 'enterpriseone',
    title: 'EnterpriseOne',
    category: 'Enterprise Software / ERP',
    period: 'Live project',
    description:
      'An integrated Enterprise Resource Planning platform bringing ERP, QMS, and PMS together for connected business operations.',
    tech: ['ERP', 'QMS', 'PMS', 'Vercel'],
    features: ['Integrated ERP, QMS, and PMS workspace', 'Employee sign-in', 'Dedicated shop-floor operator login'],
    metrics: [],
    flow: ['Employee or Operator', 'Sign In', 'ERP / QMS / PMS Workspace', 'Connected Operations'],
    liveUrl: 'https://enterpriseone-erp-qms-pms.vercel.app/',
    previewImage: '/previews/enterpriseone.svg',
    previewAlt: 'EnterpriseOne branding: Enterprise Resource Planning + QMS + PMS',
    note: 'Sign-in required. Use an authorized employee or shop-floor operator account to access the workspace.'
  },
  {
    id: 'plant-disease',
    liveUrl: 'https://plant-disease-classification-peach.vercel.app/',
    previewImage: '/previews/plant-disease.jpg',
    title: 'Plant Disease Classification',
    category: 'Computer Vision',
    period: 'February 2025 – May 2025',
    description:
      'Custom ResNet-9 convolutional neural network for automated multi-class classification of agricultural plant diseases.',
    tech: ['Python', 'PyTorch', 'FastAPI', 'ONNX Runtime'],
    features: ['Deep learning classification', 'ResNet-9 architecture', 'ONNX Runtime inference', 'FastAPI deployment on Vercel'],
    metrics: ['94.5% diagnostic accuracy'],
    flow: ['Plant Image', 'Preprocessing', 'ResNet-9', 'Classification', 'Disease Diagnosis']
  },
  {
    id: 'ecg-monitoring',
    title: 'ECG Monitoring System',
    category: 'Healthcare / Signal Analysis',
    period: 'Live project',
    description:
      'Pulse Health Observatory: a CNN + LSTM ECG research workspace for replaying recorded signals, classifying normal and abnormal beats, and reviewing model performance.',
    tech: ['TensorFlow', 'Flask', 'NumPy', 'CNN + LSTM'],
    features: ['Recorded ECG replay', 'Beat classification', 'ECG image and JSON upload', 'Model evaluation', 'Session analysis history'],
    metrics: ['85.5% balanced accuracy', '79.2% abnormal F1', '90.4% abnormal recall'],
    evaluation: {
      metrics: ['83.9% test accuracy', '70.4% precision', '0.916 ROC AUC'],
      training: 'CNN + LSTM trained for 5 epochs. Reported training timestamp: 11/4/2026, 12:48:15 PM.',
      methodology: 'Held-out recordings with patient-separated partitions. No windows shared across splits.',
      splits: [
        { name: 'Train', windows: '16,800', records: '100, 101, 103, 105, 108, 109, 117, 118, 119, 122, 123, 124, 200, 201, 202, 203, 209, 210, 213, 214, 215, 219, 220, 222, 230, 232, 233, 234' },
        { name: 'Validation', windows: '4,200', records: '111, 113, 114, 115, 121, 205, 212' },
        { name: 'Test', windows: '5,400', records: '106, 112, 116, 207, 208, 221, 223, 228, 231' }
      ],
      confusionMatrix: [
        { actual: 'Normal', normal: 2874, abnormal: 695 },
        { actual: 'Abnormal', normal: 175, abnormal: 1656 }
      ]
    },
    flow: ['ECG Recording or Upload', 'Signal Window', 'Model Inference', 'Beat Classification', 'Session Analysis'],
    liveUrl: 'https://sp-o2-monitoring-system.vercel.app/',
    previewImage: '/previews/spo2-monitoring.jpg',
    note: 'Research demonstration using recorded ECG data and selected beat symbols only. Not clinically validated. ECG cannot measure SpO₂.'
  }
];

export const skills = {
  'Machine Learning & Deep Learning': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'ONNX Runtime', 'CNN', 'LSTM', 'ResNet-9', 'Computer Vision', 'Model Evaluation'],
  'Web & Backend Development': ['Python', 'FastAPI', 'Flask', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  'Data & Signal Processing': ['NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'ECG Signal Processing', 'MIT-BIH', 'Data Preprocessing', 'Confusion Matrices'],
  'Enterprise & Automation': ['ERP Workflows', 'Quality Management (QMS)', 'PMS Workflows', 'Employee & Operator Portals', 'Business Automation', 'REST APIs', 'SQL'],
  'AI / LLM / NLP': ['LangChain', 'OpenAI API', 'Claude API', 'Hugging Face', 'RAG', 'Agentic AI', 'Prompt Engineering', 'Tool Calling'],
  'Deployment & Developer Tools': ['Vercel', 'Docker', 'Git', 'GitHub', 'GitHub Actions', 'Jupyter Notebook', 'VS Code']
};

export const skillContexts: Record<keyof typeof skills, string> = {
  'Machine Learning & Deep Learning': 'Sentiment evaluation, plant classification & ECG beat analysis',
  'Web & Backend Development': 'Inference APIs, interactive dashboards & this portfolio',
  'Data & Signal Processing': 'Recorded ECG signals, image preprocessing & evaluation',
  'Enterprise & Automation': 'EnterpriseOne ERP, QMS & PMS',
  'AI / LLM / NLP': 'AI engineering & freelance automation experience',
  'Deployment & Developer Tools': 'Taking projects from experiments to live applications'
};

export const certifications = [
  'Fundamentals of AI Agents Using RAG and LangChain — Coursera',
  'Building Generative AI-Powered Applications with Python — Coursera',
  'Generative AI Engineering and Fine-Tuning Transformers — Coursera',
  'Generative AI Advanced Fine-Tuning for LLMs — Coursera',
  'Generative AI Foundational Models for NLP & Language Understanding — Coursera',
  'Generative AI and LLMs: Architecture and Data Preparation — Coursera'
];

export const education = {
  degree: 'Bachelor of Technology',
  field: 'Computer Science & Engineering',
  institution: 'Lovely Professional University',
  location: 'Punjab, India',
  period: 'August 2022 – June 2026',
  specialization: ['AI Engineering', 'Agentic Workflows', 'Production-Level Backend Systems'],
  coursework: ['Machine Learning', 'Deep Learning', 'Data Structures & Algorithms', 'Database Management Systems']
};
