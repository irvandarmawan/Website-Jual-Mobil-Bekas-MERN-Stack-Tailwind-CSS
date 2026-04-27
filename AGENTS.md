# AGENTS.md

## Project
Ini adalah website jual mobil bekas (MERN Stack + Tailwind CSS).

## Tech Stack
- Frontend: React 18, Tailwind CSS v3, React Router v6
- Backend: Node.js, Express.js, MongoDB + Mongoose
- Auth: JWT, bcryptjs
- Upload: Cloudinary

## Code Style
- Gunakan functional component + hooks (React)
- Named exports, bukan default exports untuk utilities
- Async/await, bukan .then().catch()
- Error handling dengan try-catch di semua controller

## Testing
- Jest + Supertest untuk backend
- React Testing Library untuk frontend
- Mock semua external calls (Cloudinary, MongoDB)

## Do NOT
- Jangan install dependency baru tanpa disebutkan di prompt
- Jangan ubah file di /config/ kecuali diminta
- Jangan hapus existing test
