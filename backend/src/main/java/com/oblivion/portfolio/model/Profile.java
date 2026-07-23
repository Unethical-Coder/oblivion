package com.oblivion.portfolio.model;

public record Profile(
        String name,
        String title,
        String location,
        String tagline,
        String bio,
        String email,
        String github,
        String linkedin,
        String resumeUrl,
        String status
) {}
