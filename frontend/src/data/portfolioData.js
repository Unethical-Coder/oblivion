/**
 * Oblivion Portfolio Data
 * Pure client-side single source of truth.
 * No backend or database required.
 */

export const profile = {
  name: "Anurag Kumar",
  title: "Software Engineer | Cloud-Native Distributed Systems | Java | GenAI",
  location: "Bengaluru, Karnataka, India",
  tagline: "Systems that hold, when everything tends toward oblivion.",
  bio: "Software Engineer with 2.1 years of experience building and operating enterprise backend services with Java, Spring Boot, REST APIs, PostgreSQL, AWS, Docker, and microservices. Hands-on expertise across cloud-native distributed systems, Kafka, Redis, dynamic RBAC frameworks, and distributed cache invalidation, alongside GenAI & agentic systems integration. Strong track record in production troubleshooting, performance tuning, and cross-functional delivery.",
  email: "anurag.tradersfbd@gmail.com",
  phone: "+91-9319808968",
  github: "https://github.com/Unethical-Coder",
  linkedin: "https://www.linkedin.com/in/anurag-kumar04/",
  resumeUrl: "https://drive.google.com/file/d/1I_rzKzBbE0ebiNrbjQgpZ6W9eAEzrbmO/view?usp=drive_link",
  status: "open to opportunities",
}

export const education = {
  institution: "Lovely Professional University",
  degree: "B.Tech, Computer Science & Engineering",
  duration: "2021 - 2025",
  detail: "Phagwara, Punjab | CGPA: 7.53/10. Full-time backend engineering alongside degree at Sciforma / Planview.",
}

export const achievements = [
  {
    title: "Planview Hackathon 2025 Winner",
    description: "Built and integrated a Customer Success chatbot (Falcon AI) to automate enterprise issue resolution and customer workflows.",
    detail: "Planview Global Internal Hackathon",
  },
  {
    title: "LeetCode 1000+ Solved & 940+ Day Streak",
    description: "Solved 1000+ Data Structures & Algorithms problems primarily in Java; maintained a 940+ day continuous problem-solving streak.",
    detail: "551+ Medium | 167+ Hard",
  },
  {
    title: "Industry Certifications",
    description: "Data Structures (Coursera) | Advanced React (Meta).",
    detail: "Verified Technical Certifications",
  },
]

export const experience = [
  {
    company: "Planview",
    role: "Software Engineer I",
    start: "Aug 2025",
    end: "Sep 2026",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Designed and maintained Core Java backend services, Spring Boot microservices, and REST APIs for an enterprise SaaS PPM platform, supporting scalable and reliable web/application functionality.",
      "Built backend services for the Project Advantage AI integration / Falcon AI Success Center chatbot, supporting automated customer issue resolution and customer-facing workflows.",
      "Designed a dynamic RBAC framework across 50+ enterprise modules, reducing manual authorization customizations by 80% and improving consistency of access control.",
      "Implemented a distributed cache invalidation strategy between backend APIs and frontend clients, reducing client-facing UI rendering defects by 95%.",
      "Resolved 120+ production issues through root-cause analysis, structural fixes, validation, and release support; optimized PostgreSQL execution plans and service logic to improve API performance by 35%.",
      "Worked across QA, Product, Professional Services, and global stakeholders in Scrum delivery, contributing to requirements review, code reviews, technical documentation, deployment, and production support.",
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "Microservices",
      "PostgreSQL",
      "REST APIs",
      "Distributed Caching",
      "RBAC",
      "AI Chatbot",
      "JUnit/Mockito",
      "Scrum/Agile",
    ],
  },
  {
    company: "Sciforma (now Planview)",
    role: "Software Engineering Intern",
    start: "Sep 2024",
    end: "Jul 2025",
    location: "Bengaluru, Karnataka",
    highlights: [
      "Delivered backend and web application features across 15+ enterprise modules using Java, JDBC, and Google Web Toolkit (GWT).",
      "Investigated and resolved 40+ customer-reported production issues across legacy systems using debugging, root-cause analysis, and maintainable fixes.",
      "Designed Activity Logs telemetry across 8 enterprise modules to strengthen auditability and compliance traceability.",
      "Refactored 200+ JUnit integration tests and supported deployments on Apache Tomcat/PostgreSQL with Docker-based development and testing.",
    ],
    stack: [
      "Java",
      "JDBC",
      "PostgreSQL",
      "GWT",
      "Docker",
      "Apache Tomcat",
      "JUnit",
      "Telemetry",
    ],
  },
]

export const projects = [
  {
    name: "AeroFlow",
    tagline: "Distributed Telemetry Ingestion & Analytics Engine",
    description: "High-throughput distributed event streaming platform built to ingest, validate, and process massive volumes of telemetry payloads (10,000+ JSON events/sec). Employs Redis as a rate-limiting Shield Layer, a Spring Boot API Gateway performing strict Jakarta validations, Confluent Kafka (KRaft mode) for event buffering, and a decoupled Analytics Consumer persisting flattened data to PostgreSQL with Prometheus/Grafana observability.",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "Apache Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Prometheus",
      "Grafana",
    ],
    repoUrl: "https://github.com/Unethical-Coder/aeroflow",
    liveUrl: null,
  },
  {
    name: "PulseFlow",
    tagline: "Autonomous Agentic AI & n8n Operations Hub",
    description: "Mission-control operations hub for autonomous AI agents, n8n orchestration clusters, and multi-CRM pipeline synchronization. Features three coordinated agents (Scout, Reasoning, Action) with sub-second loop execution, live streaming telemetry, interactive SVG DAG workflow canvas, and simulated HubSpot/GoHighLevel Kanban synchronization.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "Agentic AI",
      "n8n",
    ],
    repoUrl: "https://github.com/HelpShiftLabs/pulseflow-operations-hub",
    liveUrl: "https://pulseflow-operations-hub.netlify.app",
  },
  {
    name: "Sourcing Loop",
    tagline: "AI-Powered Recruiter Sourcing & Refinement Engine",
    description: "Intelligent candidate sourcing and refinement engine built with Spring Boot and server-side Groq LLMs. Translates natural-language hiring prompts into structured objective filters and subjective fit rubrics, performs local multi-candidate scoring and ranking, and supports interactive conversational refinement before locking shortlists.",
    stack: [
      "Java 21",
      "Spring Boot 3",
      "Groq LLM",
      "React",
      "Vite",
      "Tailwind CSS",
      "REST APIs",
    ],
    repoUrl: "https://github.com/Unethical-Coder/sourcing-loop",
    liveUrl: null,
  },
  {
    name: "ExpenseIQ",
    tagline: "AI-Powered Personal Finance & Transaction Insights System",
    description: "Full-stack financial analytics application featuring a Java Spring Boot backend and React frontend for scalable transaction processing. Designed secure REST APIs with JWT authentication for real-time and bulk ingestion, backed by PostgreSQL and containerized with Docker.",
    stack: [
      "Spring Boot",
      "React.js",
      "PostgreSQL",
      "Docker",
      "JWT",
      "REST APIs",
    ],
    repoUrl: "https://github.com/Unethical-Coder",
    liveUrl: null,
  },
  {
    name: "Oblivion",
    tagline: "Cloud-Native Portfolio Architecture",
    description: "High-performance frontend application delivering structured career telemetry, styled with custom cyberpunk design tokens, dynamic ambient lighting, and zero external framework bloat.",
    stack: [
      "React 18",
      "Vite",
      "Client-Side Architecture",
      "CSS Custom Properties",
    ],
    repoUrl: "https://github.com/Unethical-Coder/oblivion",
    liveUrl: "https://oblivion-jade-nine.vercel.app/",
  },
]

export const skills = [
  {
    category: "Languages",
    items: ["Java 17/21", "Python", "C++", "SQL", "JavaScript"],
  },
  {
    category: "Backend & Distributed Systems",
    items: [
      "Spring Boot",
      "Spring MVC",
      "Microservices",
      "REST APIs",
      "gRPC",
      "Protobuf",
      "Kafka",
      "Event-Driven Systems",
      "Spring Data JPA",
      "Hibernate",
      "JDBC",
      "GraphQL",
    ],
  },
  {
    category: "Cloud, Containers & Infrastructure",
    items: [
      "AWS (EC2, S3, RDS, EKS)",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Git",
      "GitHub",
    ],
  },
  {
    category: "Databases & Reliability",
    items: [
      "PostgreSQL",
      "MySQL",
      "Oracle SQL",
      "DynamoDB / Cassandra",
      "Redis",
      "Cache Invalidation",
      "Circuit Breakers",
    ],
  },
  {
    category: "Observability & Performance",
    items: [
      "Prometheus",
      "Grafana",
      "ELK",
      "OpenTelemetry",
      "Performance Tuning",
      "Root Cause Analysis",
      "Production Reliability",
    ],
  },
  {
    category: "Generative AI & Agentic Systems",
    items: [
      "Autonomous Agentic AI",
      "LLM Orchestration (Groq, Gemini)",
      "RAG Architectures",
      "Falcon AI / Chatbots",
      "Claude Code",
      "GitHub Copilot",
    ],
  },
  {
    category: "Quality Engineering & Practices",
    items: [
      "JUnit",
      "Mockito",
      "Testcontainers",
      "JMeter",
      "Automated Testing",
      "RBAC",
      "System Design",
      "Scrum/Agile",
      "Code Reviews",
    ],
  },
  {
    category: "Frontend Engineering",
    items: [
      "React.js",
      "Google Web Toolkit (GWT)",
      "HTML5 / CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
]

export const stats = [
  {
    value: "2.1+ yrs",
    label: "Production Experience",
    detail: "Planview / Sciforma SaaS PPM",
  },
  {
    value: "1000+",
    label: "LeetCode Solved",
    detail: "940+ day streak | Java DSA",
  },
  {
    value: "10k+ /s",
    label: "Ingestion Throughput",
    detail: "AeroFlow Kafka distributed engine",
  },
  {
    value: "Winner",
    label: "Planview Hackathon 2025",
    detail: "Falcon AI Customer Success Chatbot",
  },
]
