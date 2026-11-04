package com.oblivion.portfolio.data;

import com.oblivion.portfolio.model.*;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Everything shown on the site lives here as structured data.
 * Updated to reflect latest professional experience, engineering focus,
 * skills, achievements, and GitHub projects.
 */
@Component
public class PortfolioData {

    public Profile getProfile() {
        return new Profile(
                "Anurag Kumar",
                "Software Engineer | Cloud-Native Distributed Systems | Java | GenAI",
                "Bengaluru, Karnataka, India",
                "Systems that hold, when everything tends toward oblivion.",
                "Software Engineer with 2.1 years of experience building and operating enterprise backend "
                        + "services with Java, Spring Boot, REST APIs, PostgreSQL, AWS, Docker, and microservices. "
                        + "Hands-on expertise across cloud-native distributed systems, Kafka, Redis, dynamic RBAC "
                        + "frameworks, and distributed cache invalidation, alongside GenAI & agentic systems integration. "
                        + "Strong track record in production troubleshooting, performance tuning, and cross-functional delivery.",
                "anurag.tradersfbd@gmail.com",
                "https://github.com/Unethical-Coder",
                "https://www.linkedin.com/in/anurag-kumar04/",
                "https://drive.google.com/file/d/1I_rzKzBbE0ebiNrbjQgpZ6W9eAEzrbmO/view?usp=drive_link",
                "open to opportunities"
        );
    }

    public Education getEducation() {
        return new Education(
                "Lovely Professional University",
                "B.Tech, Computer Science & Engineering",
                "2021 - 2025",
                "Phagwara, Punjab | CGPA: 7.53/10. Full-time backend engineering alongside degree at Sciforma / Planview."
        );
    }

    public List<Achievement> getAchievements() {
        return List.of(
                new Achievement(
                        "Planview Hackathon 2025 Winner",
                        "Built and integrated a Customer Success chatbot (Falcon AI) to automate enterprise issue resolution and customer workflows.",
                        "Planview Global Internal Hackathon"
                ),
                new Achievement(
                        "LeetCode 1000+ Solved & 940+ Day Streak",
                        "Solved 1000+ Data Structures & Algorithms problems primarily in Java; maintained a 940+ day continuous problem-solving streak.",
                        "551+ Medium | 167+ Hard"
                ),
                new Achievement(
                        "Industry Certifications",
                        "Data Structures (Coursera) | Advanced React (Meta).",
                        "Verified Technical Certifications"
                )
        );
    }

    public List<Experience> getExperience() {
        return List.of(
                new Experience(
                        "Planview",
                        "Software Engineer I",
                        "Aug 2025",
                        "Sep 2026",
                        "Bengaluru, Karnataka",
                        List.of(
                                "Designed and maintained Core Java backend services, Spring Boot microservices, and REST APIs for an enterprise SaaS PPM platform, supporting scalable and reliable web/application functionality.",
                                "Built backend services for the Project Advantage AI integration / Falcon AI Success Center chatbot, supporting automated customer issue resolution and customer-facing workflows.",
                                "Designed a dynamic RBAC framework across 50+ enterprise modules, reducing manual authorization customizations by 80% and improving consistency of access control.",
                                "Implemented a distributed cache invalidation strategy between backend APIs and frontend clients, reducing client-facing UI rendering defects by 95%.",
                                "Resolved 120+ production issues through root-cause analysis, structural fixes, validation, and release support; optimized PostgreSQL execution plans and service logic to improve API performance by 35%.",
                                "Worked across QA, Product, Professional Services, and global stakeholders in Scrum delivery, contributing to requirements review, code reviews, technical documentation, deployment, and production support."
                        ),
                        List.of("Java 21", "Spring Boot", "Microservices", "PostgreSQL", "REST APIs", "Distributed Caching", "RBAC", "AI Chatbot", "JUnit/Mockito", "Scrum/Agile")
                ),
                new Experience(
                        "Sciforma (now Planview)",
                        "Software Engineering Intern",
                        "Sep 2024",
                        "Jul 2025",
                        "Bengaluru, Karnataka",
                        List.of(
                                "Delivered backend and web application features across 15+ enterprise modules using Java, JDBC, and Google Web Toolkit (GWT).",
                                "Investigated and resolved 40+ customer-reported production issues across legacy systems using debugging, root-cause analysis, and maintainable fixes.",
                                "Designed Activity Logs telemetry across 8 enterprise modules to strengthen auditability and compliance traceability.",
                                "Refactored 200+ JUnit integration tests and supported deployments on Apache Tomcat/PostgreSQL with Docker-based development and testing."
                        ),
                        List.of("Java", "JDBC", "PostgreSQL", "GWT", "Docker", "Apache Tomcat", "JUnit", "Telemetry")
                )
        );
    }

    public List<Project> getProjects() {
        return List.of(
                new Project(
                        "AeroFlow",
                        "Distributed Telemetry Ingestion & Analytics Engine",
                        "High-throughput distributed event streaming platform built to ingest, validate, and process massive volumes of telemetry payloads (10,000+ JSON events/sec). Employs Redis as a rate-limiting Shield Layer, a Spring Boot API Gateway performing strict Jakarta validations, Confluent Kafka (KRaft mode) for event buffering, and a decoupled Analytics Consumer persisting flattened data to PostgreSQL with Prometheus/Grafana observability.",
                        List.of("Java 21", "Spring Boot 3", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "Kubernetes", "Prometheus", "Grafana"),
                        "https://github.com/Unethical-Coder/aeroflow",
                        null
                ),
                new Project(
                        "PulseFlow",
                        "Autonomous Agentic AI & n8n Operations Hub",
                        "Mission-control operations hub for autonomous AI agents, n8n orchestration clusters, and multi-CRM pipeline synchronization. Features three coordinated agents (Scout, Reasoning, Action) with sub-second loop execution, live streaming telemetry, interactive SVG DAG workflow canvas, and simulated HubSpot/GoHighLevel Kanban synchronization.",
                        List.of("Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand", "Agentic AI", "n8n"),
                        "https://github.com/HelpShiftLabs/pulseflow-operations-hub",
                        "https://pulseflow-operations-hub.netlify.app"
                ),
                new Project(
                        "Sourcing Loop",
                        "AI-Powered Recruiter Sourcing & Refinement Engine",
                        "Intelligent candidate sourcing and refinement engine built with Spring Boot and server-side Groq LLMs. Translates natural-language hiring prompts into structured objective filters and subjective fit rubrics, performs local multi-candidate scoring and ranking, and supports interactive conversational refinement before locking shortlists.",
                        List.of("Java 21", "Spring Boot 3", "Groq LLM", "React", "Vite", "Tailwind CSS", "REST APIs"),
                        "https://github.com/Unethical-Coder/sourcing-loop",
                        null
                ),
                new Project(
                        "ExpenseIQ",
                        "AI-Powered Personal Finance & Transaction Insights System",
                        "Full-stack financial analytics application featuring a Java Spring Boot backend and React frontend for scalable transaction processing. Designed secure REST APIs with JWT authentication for real-time and bulk ingestion, backed by PostgreSQL and containerized with Docker.",
                        List.of("Spring Boot", "React.js", "PostgreSQL", "Docker", "JWT", "REST APIs"),
                        "https://github.com/Unethical-Coder",
                        null
                ),
                new Project(
                        "Oblivion",
                        "Cloud-Native Portfolio Architecture",
                        "Decoupled full-stack portfolio system: a Java 21 Spring Boot REST service delivering structured career telemetry to a high-performance React SPA, styled with custom cyberpunk design tokens and zero external CSS bloat.",
                        List.of("Java 21", "Spring Boot 3", "React 18", "Vite", "REST API"),
                        "https://github.com/Unethical-Coder/oblivion",
                        "https://oblivion-jade-nine.vercel.app/"
                )
        );
    }

    public List<SkillGroup> getSkills() {
        return List.of(
                new SkillGroup("Languages", List.of(
                        "Java 17/21", "Python", "C++", "SQL", "JavaScript"
                )),
                new SkillGroup("Backend & Distributed Systems", List.of(
                        "Spring Boot", "Spring MVC", "Microservices", "REST APIs", "gRPC", "Protobuf",
                        "Kafka", "Event-Driven Systems", "Spring Data JPA", "Hibernate", "JDBC", "GraphQL"
                )),
                new SkillGroup("Cloud, Containers & Infrastructure", List.of(
                        "AWS (EC2, S3, RDS, EKS)", "Docker", "Docker Compose", "Kubernetes", "Terraform",
                        "GitHub Actions", "Git", "GitHub"
                )),
                new SkillGroup("Databases & Reliability", List.of(
                        "PostgreSQL", "MySQL", "Oracle SQL", "DynamoDB / Cassandra", "Redis",
                        "Cache Invalidation", "Circuit Breakers"
                )),
                new SkillGroup("Observability & Performance", List.of(
                        "Prometheus", "Grafana", "ELK", "OpenTelemetry", "Performance Tuning",
                        "Root Cause Analysis", "Production Reliability"
                )),
                new SkillGroup("Generative AI & Agentic Systems", List.of(
                        "Autonomous Agentic AI", "LLM Orchestration (Groq, Gemini)", "RAG Architectures",
                        "Falcon AI / Chatbots", "Claude Code", "GitHub Copilot"
                )),
                new SkillGroup("Quality Engineering & Practices", List.of(
                        "JUnit", "Mockito", "Testcontainers", "JMeter", "Automated Testing",
                        "RBAC", "System Design", "Scrum/Agile", "Code Reviews"
                )),
                new SkillGroup("Frontend Engineering", List.of(
                        "React.js", "Google Web Toolkit (GWT)", "HTML5 / CSS3", "Tailwind CSS", "Framer Motion"
                ))
        );
    }

    public List<Stat> getStats() {
        return List.of(
                new Stat("2.1+ yrs", "Production Experience", "Planview / Sciforma SaaS PPM"),
                new Stat("1000+", "LeetCode Solved", "940+ day streak | Java DSA"),
                new Stat("10k+ /s", "Ingestion Throughput", "AeroFlow Kafka distributed engine"),
                new Stat("Winner", "Planview Hackathon 2025", "Falcon AI Customer Success Chatbot")
        );
    }
}
