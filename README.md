# Oblivion — Portfolio

Anurag Kumar's modern, cloud-native portfolio site. Engineered as a pure frontend React application featuring dynamic ambient background depth inspired by HelpShift Labs, client-side data management, and direct WhatsApp enquiry automation.

🌐 **[Live Demo](https://oblivion-jade-nine.vercel.app/)**

```
oblivion/
├── frontend/             React 18 + Vite (SPA)
│   ├── src/
│   │   ├── components/   UI Components (DynamicBackground, Hero, Contact, etc.)
│   │   ├── config/       Contact & WhatsApp configuration
│   │   ├── data/         Single source of truth (portfolioData.js)
│   │   ├── index.css     Custom design tokens & glassmorphic styling
│   │   └── App.jsx       Root composition
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- **Node.js**: `v18+` (tested on Node 24)
- **npm**: `v10+`

### Local Development

```bash
cd frontend
npm install
npm run dev
```

Launches locally at `http://localhost:5173`. Pure client-side — no backend, server, or database needed.

### Production Build

```bash
cd frontend
npm run build
```

Generates high-performance static assets in `frontend/dist`, ready to deploy to Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

---

## Configuration

### WhatsApp Automation

When visitors fill out the **Get in Touch** form, their message is validated client-side, formatted, and launched directly via WhatsApp Click-to-Chat (`wa.me`).

To configure your recipient WhatsApp number:

1. **Option A (Environment Variable)**:
   Create a `.env` file in `frontend/`:
   ```env
   VITE_WHATSAPP_NUMBER=919319808968
   ```
   *(Use the international format with country code and no plus sign or spaces).*

2. **Option B (Configuration File)**:
   Edit `frontend/src/config/contact.js`:
   ```javascript
   export const CONTACT_CONFIG = {
     whatsappNumber: '919319808968', // your WhatsApp number
     recipientEmail: 'anurag.tradersfbd@gmail.com',
     recipientName: 'Anurag Kumar',
   }
   ```

### Portfolio Data

All portfolio content (bio, work experience, technical skills, projects, achievements, stats) lives in `frontend/src/data/portfolioData.js`. Simply edit the values there to update your site content instantly.
