package com.oblivion.portfolio.controller;

import com.oblivion.portfolio.data.PortfolioData;
import com.oblivion.portfolio.model.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    private final PortfolioData data;

    public PortfolioController(PortfolioData data) {
        this.data = data;
    }

    @GetMapping("/profile")
    public Profile getProfile() {
        return data.getProfile();
    }

    @GetMapping("/education")
    public Education getEducation() {
        return data.getEducation();
    }

    @GetMapping("/experience")
    public List<Experience> getExperience() {
        return data.getExperience();
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return data.getProjects();
    }

    @GetMapping("/skills")
    public List<SkillGroup> getSkills() {
        return data.getSkills();
    }

    @GetMapping("/stats")
    public List<Stat> getStats() {
        return data.getStats();
    }
}
