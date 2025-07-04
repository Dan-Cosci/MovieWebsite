# 🎬 Movie Explorer App

A simple React-based movie browsing application built using the [TMDB API](https://www.themoviedb.org/documentation/api). This project helps practice React fundamentals, working with APIs, and frontend UI development.

---

## 📚 About

This project was created while following a tutorial by [Tech with Tim on YouTube](https://www.youtube.com/@TechWithTim), with some added personal customizations and improvements. The main goal is to strengthen frontend development skills and API integration using React.

---

## 🧠 Learning Objectives

- ✅ Practice working with React components and hooks (`useState`, `useEffect`)
- ✅ Understand how to fetch and display data from external APIs (TMDB)
- ✅ Improve frontend UI layout and state management
- ✅ Structure code and components in a scalable way
- ✅ Gain experience building real-world, user-facing interfaces

---

## 🚀 Features

- Browse popular movies from TMDB
- Search for movies by title
- Responsive design using CSS
- Favorite button UI (can be extended to interact with a database or user account)
- Error handling and loading states

---

## 🔧 Tech Stack

- **Frontend**: React, JSX, CSS
- **API**: [The Movie Database (TMDB) API](https://developers.themoviedb.org/3)

---

## 📁 Project Structure

src/
├── assets/ # Static files like images, logos, icons
├── components/ # Reusable UI components (e.g. MovieCard)
├── css/ # CSS stylesheets
├── pages/ # Page-level components (e.g. Home.jsx)
└── services/ # API logic (e.g. mostPopular, searchMovie)

---

## ⚙️ Features

- 🔍 Search for movies via TMDB API
- 🎞️ Display most popular movies on initial load
- 🧩 Modular component-based structure
- 💅 Basic CSS styling and layout
- 🌐 Environment variable usage via `.env` for secure API key storage

---

## 🧪 Tech Stack

- **React** (Vite)
- **TMDB API**
- **CSS** for styling
- **.env** environment variables

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/react-movie-explorer.git
cd react-movie-explorer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a .env file in the root directory:

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

### 4. Run the App

```bash
npm run dev
```
