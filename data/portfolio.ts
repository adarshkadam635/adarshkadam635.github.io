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
    tech: ['Python', 'PyTorch', 'ResNet-9', 'Gradio'],
    features: ['Deep learning classification', 'ResNet-9 architecture', 'Real-time inference', 'Gradio deployment'],
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
    tech: ['CNN + LSTM', 'MIT-BIH', 'ECG', 'Vercel'],
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
