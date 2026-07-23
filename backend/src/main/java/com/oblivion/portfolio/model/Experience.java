package com.oblivion.portfolio.model;

import java.util.List;

public record Experience(
        String company,
        String role,
        String start,
        String end,
        String location,
        List<String> highlights,
        List<String> stack
) {}
