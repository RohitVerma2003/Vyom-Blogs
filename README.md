# 📰 VyomBlogs — Full Stack Blog Platform
A modern, high-performance blog platform built using React + Vite (frontend), Strapi v5 (backend CMS), and PostgreSQL (database).
Supports dynamic blogs, markdown-rich articles, categories, search, author pages, and custom merged endpoints for advanced data handling.

## 🚀 Tech Stack

### Frontend
- ⚡ React + Vite
- 🎨 TailwindCSS
- 📝 React-Markdown + Remark-GFM (for rendering rich text)
- 🧭 React Router v6
- 🔍 Search with dynamic routing

### Backend
- 🟣 Strapi v5 (Headless CMS)
- 🐘 PostgreSQL
- 🔗 Custom controllers, routes & merged queries
- 💾 File Upload plugin (local provider)

  ## 📌 Features
  
  ### ✨ Backend (Strapi v5)
- Full CRUD for Articles, Categories, Authors
- Dynamic Zones for blog blocks:
    - Rich-text
    - Quote
    - Media
    - Slider
- Populate system for deeply nested components
- Custom "Merged Article" controller:
    - Fetch article by documentId
    - Fetch author by documentId
    - Merge article + author + avatar from files table
- Search support:
  - Search articles by title
  - Filter articles by author
  - Filter by categories
 
## ✨ Frontend (React)
- Dynamic Blog Page
- Markdown rendering with headings, lists, inline styles
- Author info + avatar
- Search page (/search/:query)
- Topic tags section
- Error-safe data fetching
- Form handling with React Hook patterns
- Production-ready UI structure

## 📷 Screenshots
<p align="center">
  <p>
    <img width="49%" alt="Screenshot 2025-11-18 225355" src="https://github.com/user-attachments/assets/f3028282-d6fd-44b0-8657-d3db4d9ba5e1" />
    <img width="49%" alt="Screenshot 2025-11-18 225225" src="https://github.com/user-attachments/assets/a851a7b5-6086-46ad-96ff-ff234b8e655a" />
  </p>
  <p>
    <img width="49%" alt="Screenshot 2025-11-18 225306" src="https://github.com/user-attachments/assets/2ea0de85-4232-4784-a059-cfe7b28d888f" />
    <img width="49%" alt="Screenshot 2025-11-18 225323" src="https://github.com/user-attachments/assets/66e39e4c-9e5f-4bd7-823e-5bb28f616419" />
  </p>
  <p align="center">
    <img width="49%" alt="Screenshot 2025-11-18 225244" src="https://github.com/user-attachments/assets/a90cc0bc-257b-4d0d-b768-ebb017e0d459" />
  </p>
</p>

## 📁 Project Structure

```markdown
VyomBlogs/
│
├── backend/          → Strapi v5 CMS
│   ├── src/api/
│   │   ├── article/
│   │   │   ├── controllers/
│   │   │   │   ├── article.js
│   │   │   │   ├── article-merged.js   ← custom merged controller
│   │   │   ├── routes/
│   │   │   │   ├── article.js
│   │   │   │   ├── article-merged.js   ← custom route
│   │   │   └── content-types/...
│   ├── config/...
│   └── ...
│
├── frontend/          → React + Vite App
│   ├── src/
│   │   ├── pages/
│   │   │   ├── BlogPage.tsx
│   │   │   ├── SearchPage.tsx
│   │   ├── services/
│   │   │   ├── articles.ts
│   │   └── components/
│   ├── index.html
│   └── ...
│
└── README.md

```

## ⚙️ Backend Setup (Strapi)

### 1️⃣ Install dependencies
```markdown
cd backend
npm install
```

### 2️⃣ Configure PostgreSQL in .env
```markdown
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=vyomblogs
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=yourpassword
```

### 3️⃣ Run Strapi
```markdown
npm run develop
```

## 🔧 Custom Article Merged Endpoint

- Custom controller: src/api/article/controllers/article-merged.js
- Function:
  - Fetch article by documentId
  - Fetch author by documentId
  - Fetch files table
  - Match author image from file name/email
  - Merge everything into one clean response

 ### Endpoint:
 ```markdown
GET /api/article-merged/:documentId
 ```

Example:
```markdown
http://localhost:1337/api/article-merged/ulrqgkignbm0rlxekc9uts66
```

## 🎨 Frontend Setup (React + Vite)

### 1️⃣ Install dependencies
```markdown
cd frontend
npm install
```

### 2️⃣ Start development server
```markdown
npm run dev
```

## 📝 Markdown Rendering

- Rich text blocks from Strapi are stored as Markdown.
- Rendered using:
```markdown
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
```

## 🔍 Search Functionality
- Search endpoint:
```markdown
/api/articles?filters[title][$containsi]=SEARCH_TERM&populate=*
```
- Frontend route:
```markdown
/search/:query
```

## 🧑‍💻 Author Filtering
```markdown
/api/articles?filters[author][documentId][$eq]=AUTHOR_DOC_ID
```

## 🧪 Environment Requirements
- Node.js 18+
- PostgreSQL 14+
- Strapi v5
- React 18 +
- Vite 4+

## 🚀 Future Enhancements
- Pagination and Load More
- Article comments
- Author pages with follower system
- JWT auth for admin publishing
- Global search inside blocks
- Image optimization with Cloudinary


