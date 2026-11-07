# Oblivion — Project Reference

Portfolio architecture reference: structure, stack, data schema, design tokens, and automation flows.

---

## 1. Overview

Oblivion is Anurag Kumar's portfolio site: a pure frontend React 18 SPA built with Vite. All content lives as plain structured data in `src/data/portfolioData.js`. No backend, server, or database needed. Zero cold-start latency, full offline compatibility, and instant deployment.

```
Browser  ──►  React (Vite, :5173)  ──►  src/data/portfolioData.js (in-memory)
```

---

## 2. Tech Stack

| Layer | Choice | Version |
|---|---|---|
| Frontend framework | React | 18.3.1 |
| Frontend build tool | Vite | 5.4.x |
| Frontend styling | Plain CSS with custom properties & glassmorphism (no bulky framework) | — |
| Dynamic Background | Canvas particles + interactive cursor spotlight & ambient mesh | — |
| Contact & Automation | Client-side validation + official WhatsApp Click-to-Chat (`wa.me`) | — |
| Hosting | Static hosting ready (Vercel, Netlify, Cloudflare Pages, GitHub Pages) | — |

---

## 3. Project Structure

```
oblivion/
├── README.md                  Quickstart & configuration instructions
├── PROJECT_NOTES.md           This architecture reference
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    ├── .env.example           Optional VITE_WHATSAPP_NUMBER
    ├── public/
    └── src/
        ├── main.jsx           React entrypoint
        ├── App.jsx            Root composition & section layout
        ├── index.css          Design tokens, HelpShift-inspired ambient background, and styles
        ├── components/
        │   ├── DynamicBackground.jsx  Interactive spotlight, ambient mesh, and particle constellation
        │   ├── Navbar.jsx             Sticky navigation & resume trigger
        │   ├── Hero.jsx               Status badge, headline, and signature constellation map
        │   ├── NodeMap.jsx            Interactive career nodes SVG
        │   ├── About.jsx              Bio, achievements list, education, and resume button
        │   ├── Experience.jsx         Work history timeline (Planview & Sciforma)
        │   ├── Stats.jsx              Key metrics telemetry strip
        │   ├── Skills.jsx             Grouped technical skill chips
        │   ├── Projects.jsx           Project cards with repository & live demo links
        │   ├── Contact.jsx            Get in touch form with live validation & WhatsApp automation
        │   └── Footer.jsx
        ├── config/
        │   └── contact.js             WhatsApp recipient number & URL generators
        └── data/
            └── portfolioData.js       Single source of truth for all portfolio content
```

---

## 4. WhatsApp Automation Flow

When a visitor fills out the contact form and clicks "Send Enquiry via WhatsApp":
1. Client-side validator checks Name (min 2 chars), Email (regex pattern), Phone (optional digits check), and Message (min 10 chars).
2. `buildWhatsAppUrl` constructs an official `https://wa.me/<recipient>?text=<encoded_message>` URI.
3. Form data is preserved, and a dedicated confirmation screen guides the user that WhatsApp has launched in a new tab to confirm sending.
4. Fallback actions include re-opening WhatsApp, copying message text to clipboard, and sending via email (`mailto:`).
