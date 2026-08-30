package com.oblivion.portfolio.data;

import com.oblivion.portfolio.model.*;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Everything shown on the site lives here as plain data. No database needed
 * for a portfolio this size - just edit the values below and restart.
 *
 * Search for "TODO" to find the placeholders you should fill in yourself
 * (contact links, exact employment dates, resume file, etc).
 */
@Component
public class PortfolioData {

    public Profile getProfile() {
        return new Profile(
                "Anurag Kumar",
                "Java focused Fullstack Engineer",
                "Bengaluru, Karnataka, India",
                "Systems that hold, when everything tends toward oblivion.",
                "I build enterprise-scale distributed systems - the kind that stay up when it "
                        + "matters. Two years deep in Java, Spring Boot, Kafka, Redis and PostgreSQL "
                        + "at Planview, with a habit of taking systems apart to understand why they "
                        + "hold together. Currently deep in system design, and looking for the next "
                        + "hard problem worth owning.",
                "anurag.tradersfbd@gmail.com", 
                "https://github.com/Unethical-Coder",
                "https://www.linkedin.com/in/anurag-kumar04/",
                "https://drive.google.com/file/d/1tHebrBrKKaS3wFlGV4m-otFa8BI-wPnv/view?usp=sharing",
                "open to opportunities"
        );
    }

    public Education getEducation() {
        return new Education(
                "Lovely Professional University",
                "B.Tech, Computer Science",
                "2021 – 2025",
                "CGPA 7.53. Started as an intern at Sciforma; stayed on as it became Planview."
        );
    }

    public List<Experience> getExperience() {
        return List.of(
                new Experience(
                        "Planview",
                        "Software Engineer I",
                        "August 2025",
                        "Present",
                        "Bengaluru, India",
                        List.of(
                                "Design and develop secure Java backend services and RESTful APIs (JAX-RS/Jersey, GraphQL) for an enterprise SaaS PPM platform across multithreaded, PostgreSQL-backed architectures.",
                                "Own backend reliability for 50+ modules and lead root-cause analysis and resolution of 120+ production issues, from investigation through deployment and release support.",
                                "Built a dynamic permission framework spanning 50+ modules, cutting authorization customizations by 80%, and optimized PostgreSQL queries to improve API performance by up to 35%.",
                                "Use enterprise AI-assisted development tools (GitHub Copilot, Claude Code) for code generation and refactoring, validating outputs through peer review and automated testing (JUnit, Mockito)."
                        ),
                        List.of("Java", "Spring Boot", "PostgreSQL", "REST APIs", "GraphQL", "JUnit/Mockito", "GitHub Copilot", "Claude Code")
                ),
                new Experience(
                        "Planview (formerly Sciforma)",
                        "Sofware Engineering Intern",
                        "Sept 2024",
                        "July 2025",
                        "Bengaluru, India",
                        List.of(
                                "Investigated, debugged, and resolved 40+ customer-reported production issues on large-scale legacy systems through root-cause analysis and code fixes.",
                                "Enhanced backend features and resolved defects across 15+ enterprise modules using Java, JDBC, and GWT.",
                                "Designed and implemented an Activity Logs feature to track user actions across 8 enterprise modules, improving auditability
and issue traceability..."
– Modernized the test suite by fixing 200+ outdated JUnit test cases, improving code reliability and reducing regression risk.
                        List.of("Java", "JDBC", "GWT", "Apache Tomcat", "PostgreSQL", "Docker")
        )
        );
    }

    public List<Project> getProjects() {
        return List.of(
                new Project(
                        "AeroFlow",
                        "Enterprise-grade distributed telemetry ingestion engine",
                        "A high-throughput distributed system built to ingest, validate, and process massive volumes of telemetry data. "
                                + "Features a Spring Boot API that performs strict Jakarta validation on nested JSON payloads "
                                + "and streams them asynchronously into Confluent Kafka (KRaft) for backend processing.",
                        List.of("Java 21", "Spring Boot 3", "Kafka", "PostgreSQL", "Docker"),
                        "https://github.com/Unethical-Coder/aeroflow",
                        null
                ),
                new Project(
                        "Oblivion",
                        "This portfolio",
                        "A small, deliberate system: a Spring Boot API serving a React frontend, "
                                + "built to be easy to extend as new projects and roles come in.",
                        List.of("React", "Spring Boot", "REST API"),
                        "https://github.com/Unethical-Coder/oblivion",
                        null
                )
        );
    }

    public List<SkillGroup> getSkills() {
    return List.of(
            new SkillGroup("Languages", List.of("Java", "Python", "SQL", "JavaScript")),
            new SkillGroup("Frameworks & Architecture", List.of("Spring Boot", "Microservices", "React.js", "REST APIs", "GraphQL", "Event-Driven Systems")),
            new SkillGroup("Databases & Caching", List.of("PostgreSQL", "MySQL", "Oracle SQL", "Redis")),
            new SkillGroup("Integration & DevOps", List.of("Kafka", "Docker", "Kubernetes", "AWS (S3)", "Git", "GitHub")),
            new SkillGroup("System Design & Practices", List.of("System Design", "Production Support & Reliability", "Root Cause Analysis", "Unit Testing (JUnit, Mockito)")),
            new SkillGroup("Currently learning", List.of("RAG & Agentic AI Systems", "Python for ML"))
        );
    }

    public List<Stat> getStats() {
        return List.of(
                new Stat("1000+", "LeetCode solved", "551+ Medium · 167+ Hard"),
                new Stat("2 yrs", "Production experience", "Planview / Sciforma"),
                new Stat("9", "Core technologies", "Java · Spring Boot · React.js · Kafka · Redis · PostgreSQL · Docker · Kubernetes · GraphQL")
        );
    }
}
