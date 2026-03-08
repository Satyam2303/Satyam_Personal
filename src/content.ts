import { SiteContent } from "./types";

export const siteContent: SiteContent = {
  hero: {
    name: "Satyam Munot",
    title: "Software engineer",
    impactStatement:
      "Software Engineer experienced in scaling 0-to-1 builds and high-performance systems. Committed to high-velocity execution and delivering technically sound, AI-native features that drive measurable commercial growth and product innovation.",
    location: "New York, NY"
  },
  experience: [
    {
      company: "Linguid",
      role: "Software Engineer Intern",
      period: "June 2025 - Aug 2025",
      location: "San Diego, CA",
      highlights: [
        "Optimized video feed to 60 FPS using React virtualization, reducing DOM nodes by 90% for smooth scrolling.",
        "Built a multi-stage recommender for a language-learning platform using transformer models for speech recognition, semantic embeddings, classification, and visual feature extraction.",
        "Designed a retrieval-to-ranking stack with two-tower dual-encoder retrieval, Faiss ANN search, ranking, and transformer-based sequence modeling, optimizing for difficulty and personalization (Recall: 0.82).",
        "Built an AI-powered chatbot with a smart model switcher, reducing API delays and improving response speed."
      ],
      technologies: [
        "React",
        "React Virtualization",
        "Transformers",
        "Faiss",
        "Recommender Systems",
        "LLM Chatbot"
      ]
    },
    {
      company: "PICT Deep Learning Lab",
      role: "Deep Learning Researcher",
      period: "Oct 2023 - Mar 2024",
      location: "India",
      highlights: [
        "Built two GAN pipelines: one for deepfake video generation and one for deepfake detection, where the detector was trained with generated samples.",
        "Implemented adversarial training to address limited training data and achieved 85% accuracy."
      ],
      technologies: ["Python", "GANs", "Adversarial Training", "Deep Learning"]
    },
    {
      company: "Euphelity Private Limited",
      role: "Software Engineer Intern",
      period: "Jul 2023 - Oct 2023",
      location: "India",
      highlights: [
        "Reduced navigation time by 25% for motor-impaired students by architecting an accessible Android app with Java and Firebase.",
        "Enabled learning for blind users by engineering a voice-controlled navigation system with Android Speech APIs."
      ],
      technologies: ["Java", "Android", "Firebase", "Android Speech APIs", "Accessibility"]
    },
    {
      company: "Huf Group",
      role: "Web Developer Intern",
      period: "Oct 2022 - Mar 2023",
      location: "India",
      highlights: [
        "Reduced QA time by 25% by building a React dashboard and REST APIs for automated defect analysis and tracking.",
        "Enabled real-time monitoring for 20+ machines by building Node.js WebSocket streams for low-latency incident debugging."
      ],
      technologies: ["React", "REST APIs", "Node.js", "WebSockets"]
    },
    {
      company: "Interview Mocha",
      role: "Problem Setter Intern",
      period: "Sep 2022 - Feb 2023",
      location: "Pune, India",
      highlights: [
        "Authored 30+ DSA problems with benchmark C++ reference solutions and clear explanations.",
        "Followed clean coding practices for maintainability and review readiness."
      ],
      technologies: ["C++", "Data Structures", "Algorithms", "Technical Writing"]
    },
    {
      company: "Organization not provided",
      role: "Web Developer Intern",
      period: "Date not provided",
      location: "Pune, India",
      highlights: [
        "Developed an interactive platform using React.js and Python, leveraging Docker to solve advanced mathematical problems.",
        "Enabled step-by-step explanations and graphical insights to improve comprehension of complex concepts.",
        "Facilitated calculus understanding for 800+ students through a dynamic, interactive, visually enriched platform."
      ],
      technologies: ["React.js", "Python", "Docker"]
    }
  ],
  projects: [
    {
      name: "AI-native Employee Management (FINOS Labs)",
      period: "Feb 2026",
      summary:
        "Built an AI manager for resume parsing, skill extraction, chronological experience analysis, and project-team formation with effort/fit prediction.",
      highlights: [
        "Built an AI manager that parses resumes, extracts skills and chronological experiences, and creates teams for new projects.",
        "Trained a recommender system on past project and employee profile data to predict project effort, duration, and fit.",
        "Developed with React, FastAPI, PostgreSQL, and AWS (EC2, S3, Bedrock) for ingestion, recommendation, and allocation."
      ],
      tags: ["AWS", "Docker", "Python", "JavaScript", "React", "FastAPI", "PostgreSQL"],
      repository: "https://github.com/finos-labs/dtcch-2026-akmkb-algovengers"
    },
    {
      name: "Virtual Teacher (Open Source)",
      period: "Jan 2026 - Present",
      summary:
        "React application for PDF chat and summarization with 3D avatars and real-time speech synthesis.",
      highlights: [
        "Developing a React application to chat with and summarize PDFs using 3D avatars and real-time speech synthesis.",
        "Achieved 95% word-hit accuracy using binary-search mapping and automated DOM range coordinate calculations."
      ],
      tags: ["React", "Python", "FastAPI", "Gemini API", "RAG"],
      link: "https://satyam2303.github.io/3D_Avatar_Virtual_Teacher/"
    },
    {
      name: "ClipChord Microservices",
      period: "Oct 2025",
      summary:
        "Media-processing microservices platform using asynchronous conversion pipelines and Kubernetes orchestration.",
      highlights: [
        "Scaled media processing 4x by using RabbitMQ to decouple MP4 uploads from four asynchronous converter microservices.",
        "Orchestrated 10+ pod replicas via Kubernetes (AWS EKS) and Helm, integrating PostgreSQL and MongoDB for polyglot storage."
      ],
      tags: [
        "Python",
        "AWS",
        "RabbitMQ",
        "NoSQL",
        "Kubernetes",
        "Helm",
        "PostgreSQL",
        "MongoDB"
      ],
      repository: "https://github.com/Satyam2303/Microservices_Mp423"
    }
  ],
  education: [
    {
      institution: "Stevens Institute of Technology, Hoboken, NJ",
      credential: "M.S. in Computer Science",
      period: "Sept 2024 - May 2026",
      notes:
        "GPA: 3.85 / 4.0 | Courses: Algorithms, Machine Learning, Database Management Systems, Data Visualization, Cybersecurity, Agile Methods"
    },
    {
      institution: "Pune Institute of Computer Technology, Pune, India",
      credential: "B.E in Electronics and Telecommunications",
      period: "June 2020 - June 2024",
      notes:
        "GPA: 8.5 / 10.0 | Courses: Deep Learning, Mobile/Web, Operating Systems, System Design, Data Structures, AWS Graduate"
    }
  ],
  publications: [
    {
      title: "A comprehensive survey of detecting deepfakes techniques",
      publicationVenue: "AIP Conference Proceedings 3156, 030012",
      year: "2024",
      link: "https://pubs.aip.org/aip/acp/article-abstract/3156/1/030012/3316299/A-comprehensive-survey-of-detecting-deepfakes?redirectedFrom=fulltext"
    },
    {
      title: "Hub based LAN simulation using QualNet",
      publicationVenue:
        "Procedia Computer Science, Volume 230, Pages 890-902, ISSN 1877-0509",
      year: "2023",
      doi: "10.1016/j.procs.2023.12.043",
      link: "https://www.sciencedirect.com/science/article/pii/S1877050923020331"
    },
    {
      title: "Wi-Fi Inter-Network Simulation and Performance Analysis Using QualNet",
      publicationVenue:
        "Smart Trends in Computing and Communications (Springer Nature Singapore), Pages 187-198",
      year: "2024",
      doi: "10.1007/978-981-97-1329-5_15",
      link: "https://link.springer.com/chapter/10.1007/978-981-97-1329-5_15#citeas"
    }
  ],
  contact: {
    email: "smunot1@stevens.edu",
    phone: "+1 2015899058",
    github: "https://github.com/Satyam2303",
    linkedin: "https://www.linkedin.com/in/satyammunot/",
    website: ""
  },
  beliefs: {
    headline: "Things I Believe In",
    intro: "This is an initial draft and will be refined over time.",
    principles: [
      "Never drink alcohol.",
      "Never do drugs.",
      "Never kill something unless utmost necessary."
    ]
  }
};
