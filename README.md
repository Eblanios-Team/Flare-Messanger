# Flare Messanger 🔸

Flare is a modern messenger with advanced messaging capabilities, multimedia file sharing, and group chat functionality. This repository contains the frontend of the application, built with modern technologies, as well as information about the backend.

## Key Features

- 📩 **Messaging** — Send text messages, photos, videos, and audio files.
- 👥 **Group Chats** — Manage participants and access rights.
- 🎥 **Multimedia Messages** — Share photos, videos, documents, voice, and video messages.
- 🔔 **Notifications & Reminders** — Receive event reminders and new message notifications.
- 🔒 **Privacy & Security** — Two-factor authentication and privacy settings.
- 📂 **Shared Access** — Create collective albums and share content.

---

## Technology Stack

### 🔹 Frontend:

- **React** — For rendering pages and client-side logic.
- **TypeScript** — For strict typing and better development experience.
- **Redux Toolkit** — State management.
- **Tailwind CSS** — For utility-first CSS styling, making responsive design and customization faster and easier.
- **Framer Motion** — Animations and smooth transitions.
- **WebSockets (Socket.io)** — Real-time messaging.
- **ESLint / Prettier** — For maintaining code quality and consistency.
- **Vercel / Netlify** — For deployment and CI/CD.

### 🔹 Backend:

- **Python (FastAPI)** / **Go (Golang)** — API processing and business logic.
- **PostgreSQL** — Database for storing users, chats, and messages.
- **Redis** — Caching and task queue processing.
- **Firebase Storage / S3** — Storage for multimedia files.
- **WebSockets** — Real-time message handling.
- **Docker** — For containerization, simplifying deployment, and ensuring consistency across environments.
- **Echo (Go)** — For building high-performance, scalable web applications in Go (especially backend APIs).
- **Slog** — Structured logging library for Go, providing better logging and debugging capabilities.
- **JWT (JSON Web Token)** — For handling secure authentication and authorization in both frontend and backend

---

## Installation & Setup

Since the frontend and backend are in separate repositories, you need to configure and run them separately.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Eblanios-Team/Flare-Messanger.git
cd Flare-Messanger
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configuration

Create a `.env.local` file in the root directory of the project and add the following environment variables:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SOCKET_URL=http://localhost:5000
```

### 4️⃣ Run the Project

```bash
npm run dev
```
