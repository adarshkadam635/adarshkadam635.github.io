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
    id: 'plant-disease',
    liveUrl: 'https://plant-disease-classification-peach.vercel.app/',
    previewImage: '/previews/plant-disease.jpg',
    title: 'Plant Disease Classification',
    category: 'Computer Vision',
    period: 'February 2025 – May 2025',
    description:
      'Custom ResNet-9 convolutional neural network for automated multi-class classification of agricultural plant diseases.',
    tech: ['Python', 'PyTorch', 'ResNet-9', 'Gradio'],
    features: ['Deep learning classification', 'ResNet-9 architecture', 'Real-time inference', 'Gradio deployment'],
    metrics: ['94.5% diagnostic accuracy'],
    flow: ['Plant Image', 'Preprocessing', 'ResNet-9', 'Classification', 'Disease Diagnosis']
  },
  {
    id: 'spo2-monitoring',
    title: 'SpO₂ Monitoring System',
    category: 'Healthcare / Signal Analysis',
    period: 'Live project',
    description:
      'Pulse Health Observatory: an ECG research workspace for exploring recorded signals, running beat classification, and reviewing model performance.',
    tech: ['ECG', 'MIT-BIH', 'Model Inference', 'Vercel'],
    features: ['Recorded ECG replay', 'Beat classification', 'ECG image and JSON upload', 'Model evaluation', 'Session analysis history'],
    metrics: [],
    flow: ['ECG Recording or Upload', 'Signal Window', 'Model Inference', 'Beat Classification', 'Session Analysis'],
    liveUrl: 'https://sp-o2-monitoring-system.vercel.app/',
    previewImage: '/previews/spo2-monitoring.jpg',
    note: 'Research workspace using recorded ECG data. Live SpO₂ readings require a connected sensor.'
  },
  {
    id: 'smartrag',
    title: 'SmartRAG',
    category: 'RAG / Healthcare',
    period: '2024',
    description:
      'Retrieval-Augmented Generation pipeline designed to analyze medical signals and clinical documentation for predictive cardiovascular insights.',
    tech: ['LlamaIndex', 'Pinecone', 'Claude API', 'Python'],
    features: ['Medical-signal processing', 'Clinical document retrieval', 'Low-latency semantic retrieval', 'Vector database integration'],
    metrics: [],
    flow: ['Medical Signals + Documents', 'Processing', 'Embeddings', 'Pinecone', 'Semantic Retrieval', 'Claude API', 'AI Insights'],
    note: 'Technical project only — not a medical diagnostic service.'
  }
];

export const skills = {
  'AI / LLM / NLP': ['RAG', 'Agentic AI', 'Autonomous Agents', 'Large Language Models', 'Prompt Engineering', 'Tool Calling', 'Fine-Tuning', 'OpenAI API', 'Claude API', 'Hugging Face', 'LangChain'],
  'Machine Learning & Deep Learning': ['PyTorch', 'TensorFlow', 'Scikit-learn', 'CNN', 'LSTM', 'GRU', 'ResNet', 'Transfer Learning', 'Data Augmentation', 'Multi-GPU Training', 'Model Optimization', 'Real-Time Inference'],
  Programming: ['Python', 'C++', 'Java', 'SQL'],
  'Backend & DevOps': ['FastAPI', 'REST APIs', 'Docker', 'AWS', 'Git', 'GitHub', 'GitHub Actions', 'Linux'],
  'Vector Databases & Data': ['ChromaDB', 'Pinecone', 'Pandas', 'NumPy', 'Tavily Search API', 'Semantic Search'],
  'Tools & Platforms': ['Jupyter Notebook', 'VS Code', 'Gradio', 'OpenCV']
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
