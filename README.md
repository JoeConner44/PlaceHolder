# PLACEHOLDER DMS

**AI-powered Dealer Management System for independent Georgia auto dealers.**

---

## What this is

A fully functional frontend for a car dealer management system including:

- **Dashboard** — KPIs, activity feed, inventory age, sales mix
- **Inventory** — full vehicle table, status filtering, VIN search, add vehicle modal with mock VIN decode
- **Deal desk** — live deal calculator (finance, cash, BHPH, lease), real-time payment and gross profit
- **CRM / Leads** — Kanban pipeline with 5 stages and AI lead scoring
- **F&I** — credit application, lender responses, backend product menu
- **BHPH Collections** — account status, overdue tracking, payment recording
- **Georgia ETR** — electronic title & registration submission tracker
- **Reports** — monthly gross chart, sales by rep, lead sources
- **AI assistant** — live Claude API integration with quick prompts
- **Settings** — dealership profile, integrations, notifications, user management

---

## Setup

### Run locally
```bash
# Just open index.html in any browser — no build step required
open index.html
```

### Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial PLACEHOLDER DMS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/placeholder-dms.git
git push -u origin main
```

Then in GitHub:
1. Go to your repo → Settings → Pages
2. Source: Deploy from a branch → main → / (root)
3. Save — your site will be live at `https://YOUR_USERNAME.github.io/placeholder-dms`

---

## AI Assistant Setup

The AI assistant is pre-wired to the Anthropic Claude API. To enable live responses:

1. The API call is in `js/app.js` in the `aiSend()` function
2. In production you'll need a **backend proxy** that holds your API key securely
3. For demo purposes, the app includes pre-built responses for common dealer questions that work without an API key

**Never expose your Anthropic API key in frontend code.** Use a backend proxy (Node.js, Python, etc.) to relay requests.

---

## File structure

```
placeholder-dms/
├── index.html          ← Full app (login + all 10 modules)
├── css/
│   └── style.css       ← Complete design system
├── js/
│   ├── app-data.js     ← Seed data, state, AI responses
│   └── app.js          ← Navigation, deal calc, AI, rendering
├── assets/
│   └── favicon.svg     ← App icon
└── README.md
```

---

## Tech stack

- Pure HTML / CSS / JavaScript — zero dependencies, zero build step
- Google Fonts: DM Sans + DM Mono
- Anthropic Claude API (claude-sonnet-4-20250514) for AI assistant

---

## Roadmap (backend needed for production)

| Feature | What's needed |
|---|---|
| Real authentication | Node.js/Python backend + JWT |
| Data persistence | PostgreSQL database |
| Georgia ETR | CVR certified integration + state approval |
| Lender submissions | DealerTrack / RouteOne API agreements |
| VIN decoding | Chrome Data or NHTSA API key |
| Twilio SMS | Twilio account + phone number |
| QuickBooks sync | QuickBooks Online OAuth app |
| Payment processing | Stripe or Square merchant account |
| AI (production) | Backend proxy holding Anthropic API key |

---

## Customization

Edit `js/app-data.js` to change:
- `AppState.currentUser` — logged-in user name/role
- `AppState.dealership` — dealership name, address, phone
- `InventoryData` — seed vehicles
- `BHPHData` — BHPH accounts
- `ETRData` — ETR submission history

Edit `css/style.css` to change:
- `--blue` / `--navy` — primary brand colors
- `--font` — typeface

---

## License

Built by Conner Marketing Solutions for PLACEHOLDER DMS client.
All rights reserved.
