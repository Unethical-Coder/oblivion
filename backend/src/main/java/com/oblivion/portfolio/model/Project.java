package com.oblivion.portfolio.model;

import java.util.List;

public record Project(
        String name,
        String tagline,
        String description,
        List<String> stack,
        String repoUrl,
        String liveUrl
) {}
