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
                "Java Backend Engineer",
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
                        "Planview (formerly Sciforma)",
                        "Java Backend Software Engineer",
                        "2024",
                        "Present",
                        "Bengaluru, India",
                        List.of(
                                "Built and maintained enterprise-scale distributed systems in production.",
                                "Worked across the stack, from API design down through caching and messaging layers.",
                                "Owned services on Java and Spring Boot, backed by PostgreSQL, Kafka and Redis, deployed with Docker."
                        ),
                        List.of("Java", "Spring Boot", "PostgreSQL", "Kafka", "Redis", "Docker")
                )
        );
    }

    public List<Project> getProjects() {
        return List.of(
                new Project(
                        "ExpenseIQ",
                        "AI-powered personal finance system",
                        "A personal finance platform that categorizes and reasons about spending "
                                + "in real time. Built as a learning vehicle for event-driven "
                                + "architecture: Kafka streams transactions, Redis caches hot reads, "
                                + "and a React frontend keeps the numbers legible.",
                        List.of("Spring Boot", "Kafka", "Redis", "React"),
                        "https://github.com/your-username/expenseiq", // TODO
                        null
                ),
                new Project(
                        "Oblivion",
                        "This portfolio",
                        "A small, deliberate system: a Spring Boot API serving a React frontend, "
                                + "built to be easy to extend as new projects and roles come in.",
                        List.of("React", "Spring Boot", "REST API"),
                        "https://github.com/your-username/oblivion", // TODO
                        null
                )
        );
    }

    public List<SkillGroup> getSkills() {
        return List.of(
                new SkillGroup("Languages", List.of("Java", "Python", "JavaScript", "SQL")),
                new SkillGroup("Backend", List.of("Spring Boot", "REST APIs", "Microservices")),
                new SkillGroup("Data & Messaging", List.of("PostgreSQL", "Kafka", "Redis")),
                new SkillGroup("Infra & Tooling", List.of("Docker", "Git", "GitHub Actions")),
                new SkillGroup("Frontend", List.of("React", "HTML/CSS")),
                new SkillGroup("Currently learning", List.of("System Design", "Python for ML", "RAG & Agents"))
        );
    }

    public List<Stat> getStats() {
        return List.of(
                new Stat("950+", "LeetCode solved", "528+ Medium · 153+ Hard"),
                new Stat("2 yrs", "Production experience", "Planview / Sciforma"),
                new Stat("6", "Core technologies", "Java · Spring · Kafka · Redis · Postgres · Docker")
        );
    }
}
