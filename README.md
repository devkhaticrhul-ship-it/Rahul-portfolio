# Rahul Kumar — Premium Professional Developer Portfolio

A modern, high-performance personal developer portfolio built for **Rahul Kumar** (Aspiring Software Engineer, B.Tech in Computer Science and Engineering, 2nd Year at Pacific School of Engineering, Gujarat).

Designed with exceptional attention to typography, spacing, subtle micro-interactions, dark/light theme switching, and strict engineering authenticity (no fake proficiency percentages or fabricated credentials).

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) + Custom Vector SVGs
- **Theme:** Dark / Light mode toggle with local storage persistence
- **Responsive:** Mobile-first, tablet, and desktop optimized

---

## 📂 Project Structure

```text
portfolio/
├── public/                 # Static assets & favicon
│   └── favicon.svg
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── globals.css     # Global theme & typography styles
│   │   ├── layout.tsx      # Metadata, SEO, and Root Theme Provider
│   │   ├── page.tsx        # Homepage composing all sections
│   │   ├── not-found.tsx   # Custom 404 page
│   │   └── icon.svg        # Modern vector favicon
│   ├── components/         # Reusable modular components
│   │   ├── Navbar.tsx      # Sticky navigation, theme toggle, mobile menu
│   │   ├── Hero.tsx        # Headline, CTA buttons, interactive code card
│   │   ├── About.tsx       # Authentic journey, pillars, academic snapshot
│   │   ├── Skills.tsx      # Categorized skill badges (no fake bars)
│   │   ├── Projects.tsx    # Showcase featuring Carverse & project slots
│   │   ├── ProjectModal.tsx# Detailed project dialog view
│   │   ├── Education.tsx   # B.Tech timeline at Pacific School of Eng.
│   │   ├── Certifications.tsx# Discreet pending/credential showcase
│   │   ├── Contact.tsx     # Validated form + mail client fallback
│   │   ├── ResumeModal.tsx # Printable / PDF-ready resume preview
│   │   ├── Footer.tsx      # Social links, dynamic year & quick nav
│   │   ├── BackToTop.tsx   # Smooth scroll-to-top floating button
│   │   ├── ThemeContext.tsx# Dark/Light mode state management
│   │   └── Icons.tsx       # Clean SVG brand icons
│   ├── data/
│   │   └── portfolioData.ts# ⭐️ SINGLE CONFIG FILE FOR ALL CONTENT & LINKS
│   └── types/
│       └── index.ts        # TypeScript data contracts & models
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🛠️ How to Run Locally

1. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Production Build & Verification:**
   ```bash
   npm run build
   npm run start
   ```

---

## ✏️ How to Customize Your Content & Placeholders

All your personal details, project links, social handles, and skills are organized in **one single file**:

👉 `src/data/portfolioData.ts`

### 1. Update Contact & Social Profiles
Replace the placeholders in `PERSONAL_INFO.contact`:
- `email`: Your real email (e.g. `yourname@gmail.com`)
- `linkedin`: Your LinkedIn URL (`https://linkedin.com/in/rahulkumar`)
- `github`: Your GitHub URL (`https://github.com/rahulkumar`)

### 2. Update Carverse Repository & Demo
In `FEATURED_PROJECTS`:
- Set `githubUrl`: Your repository URL
- Set `liveUrl`: Your deployed Vercel demo URL
- Change `githubUrlPlaceholder: false` and `liveUrlPlaceholder: false` once active.

### 3. Add Verified Skills
In `SKILL_CATEGORIES`:
- Add languages (e.g., Python, Java) or frameworks you learn to their respective categories.

### 4. Enable Certifications
When you earn verified certifications, set `ACHIEVEMENTS_CONFIG.enabled = true` and add your credential details in `ACHIEVEMENTS_CONFIG.items`.

---

## 🌐 Deploy to Vercel (Recommended)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Rahul Kumar Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and import your `portfolio` repository.
3. Click **Deploy**. Vercel will automatically build and deploy your site with SSL!

