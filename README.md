# Evolution Career Institute – Official Website

Official modern, responsive single-page website for **Evolution Career Institute**, Lucknow.

An initiative of IIT-JEE qualified mentors offering structured preparation for NEET, IIT-JEE, CUET, NDA, Sainik School, RMS, RIMS, and School Board Examinations (Classes 9th to 12th).

---

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment Target**: [Cloudflare Pages](https://pages.cloudflare.com/) (Static HTML Export)

---

## 🛠️ Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

3. Build static export for production:
   ```bash
   npm run build
   ```
   The static production files will be generated in the `out/` directory.

---

## ☁️ Deploying to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Go to your **[Cloudflare Dashboard](https://dash.cloudflare.com/)** -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
2. Select repository: `aaryavtechnologies-tech/EVOLUTION-CAREER-INSTITUTE`.
3. In **Build settings**, configure:
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
4. In **Environment variables**, optionally set:
   - `NODE_VERSION`: `20` (or `22`)
5. Click **Save and Deploy**.

### Option 2: Wrangler CLI

1. Install Wrangler and log in:
   ```bash
   npx wrangler login
   ```

2. Build and deploy:
   ```bash
   npm run build
   npx wrangler pages deploy out --project-name=evolution-career-institute
   ```

---

## 📞 Institute Details

- **Address**: Neelkanth Complex, Near Sainik Bhojnalaya, Sadar Cantt, Lucknow.
- **Helplines**: [+91 6390247880](tel:6390247880) | [+91 7390092459](tel:7390092459)
- **Target Classes**: Class 9th to Class 12th

---

## 👨‍💻 Development Credit

Designed & Developed by [Aaryav Tech](https://aaryavtech.online/).

