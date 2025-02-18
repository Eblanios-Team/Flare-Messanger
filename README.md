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
- **Redux Toolkit / React Query** — State management.
- **Framer Motion** — Animations and smooth transitions.
- **WebSockets (Socket.io)** — Real-time messaging.

### 🔹 Backend:

- **Python (FastAPI)** / **Go (Golang)** — API processing and business logic.
- **PostgreSQL** — Database for storing users, chats, and messages.
- **Redis** — Caching and task queue processing.
- **Firebase Storage / S3** — Storage for multimedia files.
- **WebSockets** — Real-time message handling.
- **Cron Jobs** — Automated reminders and event processing.

---

## Installation & Setup

Since the frontend and backend are in separate repositories, you need to configure and run them separately.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/flare-frontend.git
cd flare-frontend
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
=======
```
