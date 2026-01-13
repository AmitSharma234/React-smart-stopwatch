# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see  (https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ⏱ React Smart Stopwatch

A future-ready stopwatch application built with **React + Vite**, showcasing modern React hooks, clean interval management, and a polished UI.  
This project is suitable for **learning hooks**, **interview preparation**, and **portfolio demonstration**.

---

## 🚀 Features

- ⏱ Real-time stopwatch functionality
- ▶️ Start, ⏸ Pause, 🔄 Reset controls
- 🧠 Proper use of `useState`, `useRef`, and `useEffect`
- 🛡 Prevents multiple intervals & memory leaks
- 🎨 Modern, dark-themed UI
- ⚡ Fast development with Vite + HMR

---

## 🛠 Tech Stack

- **React** (Functional Components & Hooks)
- **Vite** (Fast Build Tool)
- **JavaScript (ES6+)**
- **Inline Styling / Modern UI patterns**

---

## 🧩 Core React Concepts Used

- `useState` – for UI state updates  
- `useRef` – for storing interval IDs without re-rendering  
- `useEffect` – for cleanup and lifecycle safety  
- Functional state updates (`prev => prev + 1`)

---

## Project Structure

react-todo-app/
├─ src/
│  ├─ components/
│  │  ├─ TodoInput.jsx
│  │  ├─ TodoList.jsx
│  │  └─ TodoItem.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ public/
├─ package.json
└─ README.md

---
