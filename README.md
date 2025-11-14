# 🎬 Mororo — Movie Website

**Mororo** is a modern **Next.js** movie discovery website with GitHub login, favorites management, and dynamic rendering strategies.

---

## 🌟 Features

- 🔐 **GitHub Authentication** (NextAuth)
- ⭐ Add / Remove Favorites
- 🖥️ Rendering: SSR | CSR | SSG | ISR
- 🎨 TailwindCSS UI with responsive design
- ✨ Smooth animations using Framer Motion
- 📦 API routes for movies & favorites


---

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)  
- **Auth:** NextAuth (GitHub provider)  
- **Styling:** TailwindCSS  
- **Database:** Prisma + PostgreSQL / MySQL / SQLite  
- **Animations:** Framer Motion  
- **Deployment:** Vercel  

---

## 🚀 Installation

```bash
git clone <repo-url>
cd mororo
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## ⚙ Environment Variables

Create a `.env.local` file:

```
NEXTAUTH_URL=http://localhost:3000
GITHUB_ID=your_github_oauth_client_id
GITHUB_SECRET=your_github_oauth_client_secret
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname
TMDB_API_KEY=your_tmdb_api_key
```

---

## 📊 Rendering Strategy

| Page Type        | Render Method | Purpose                               |
|-----------------|---------------|---------------------------------------|
| Movie List       | **SSG / ISR**  | Fast & periodically updated           |
| Movie Details    | **SSR**        | Up-to-date info for all users         |
| Favorites        | **SSR / CSR**  | Personalized content                  |
| Interactive UI   | **CSR**        | Instant feedback (buttons, toggles)  |

---

## 🗂 API Routes

| Endpoint                | Method | Description                    |
|-------------------------|--------|--------------------------------|
| `/api/movies`           | GET    | Fetch movies list              |
| `/api/movies/:id`       | GET    | Get movie details              |
| `/api/favorites`        | GET/POST | View or add favorites        |
| `/api/favorites/:id`    | DELETE | Remove a favorite             |
| `/api/auth/*`           | ALL    | Authentication endpoints       |

---

## 🎨 UI & Design

- TailwindCSS styling  
- Clean, responsive layout  
- Smooth micro-interactions and animations with **Framer Motion**  
- Accessible buttons and alt text for images  

---

## 📦 Project Structure

```
app/
  api/
  components/
  styles/
  ui/
  page.js
  layout.js

prisma/
  schema.prisma

public/
```

---

## 📡 Deployment

1. Push to GitHub  
2. Connect to Vercel  
3. Add env vars in Vercel dashboard  
4. Deploy — done ✅  

---

## 🤝 Contributing

Contributions welcome. Follow repo conventions and clear commit messages.

---

## 🖼 Screenshots

Add screenshots in `/public/screenshots` and include them here.

---

## 📄 License

MIT (or specify your license)
