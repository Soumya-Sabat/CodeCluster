# CodeCluster

A collaborative DSA learning platform where developers can create clusters, solve problems together, discuss solutions in real time, compete through leaderboards, and track their progress through gamification.

Built with a modern monorepo architecture using Next.js, Golang, PostgreSQL, MongoDB, Redis, WebSockets, OTP Authentication, and End-to-End Encryption.

---

# 🚀 Features

## Authentication & Security

* Passwordless Authentication
* Email OTP Login
* Phone OTP Login
* JWT-Based Sessions
* Redis Session Management
* AES-256 Encryption
* Encrypted User Data
* Rate Limiting
* Session Expiration Handling

## Cluster Management

* Create Clusters
* Join / Leave Clusters
* Member Management
* Cluster Dashboards
* Cluster Leaderboards

## Problem Management

* Problem Repository
* Problem Discussions
* Solution Submission
* Solved Status Tracking
* Multi-Platform Problem Import

## Real-Time Collaboration

* Cluster Chat
* Notifications
* Live Problem Updates
* Message Reactions
* WebSocket Communication

## Gamification

* XP System
* Levels
* Streak Tracking
* Badges
* Rankings

---

# 🏗 Architecture

```text
Client (Next.js)
        │
        ▼
API Gateway / Routes
        │
        ▼
Service Layer (Go)
        │
 ┌──────┼────────┐
 ▼      ▼        ▼
Postgres MongoDB Redis
        │
        ▼
 WebSocket Hub
```

---

# 🛠 Tech Stack

## Frontend

* Next.js 15+
* TypeScript
* Tailwind CSS
* Zustand / Redux
* Monaco Editor
* WebSockets
* Web Crypto API

## Backend

* Golang
* PostgreSQL
* MongoDB
* Redis
* JWT
* WebSockets

## Security

* OTP Authentication
* AES-256 Encryption
* Redis Session Store
* Rate Limiting
* Request Validation

---

# 📂 Project Structure

```text
codecluster/
│
├── public/
│
├── src/
│   ├── client/
│   ├── server/
│   ├── shared/
│   └── scripts/
│
├── config/
├── docs/
│
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

# 🖥 Client Structure

```text
src/client/
│
├── app/
│   ├── (auth)/
│   ├── (cluster)/
│   ├── (problem)/
│   ├── (profile)/
│   ├── (notifications)/
│   └── api/
│
├── components/
│   ├── auth/
│   ├── cluster/
│   ├── problem/
│   ├── chat/
│   ├── leaderboard/
│   ├── gamification/
│   ├── common/
│   └── layout/
│
├── lib/
│   ├── api/
│   ├── encryption/
│   ├── hooks/
│   └── utils/
│
├── providers/
├── styles/
└── types/
```

---

# ⚙ Server Structure

```text
src/server/
│
├── cmd/
│
├── internal/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── repositories/
│   ├── services/
│   ├── security/
│   ├── middleware/
│   ├── routes/
│   └── websocket/
│
├── pkg/
│   ├── scraper/
│   ├── socket/
│   └── utils/
│
├── go.mod
└── go.sum
```

---

# 🔄 Shared Layer

The shared layer contains code used by both client and server.

```text
src/shared/
│
├── types/
│   ├── api.ts
│   ├── db.ts
│   ├── websocket.ts
│   └── constants.ts
│
├── utils/
│   ├── validation/
│   ├── encryption/
│   └── helpers/
│
└── config/
```

---

# 🔐 Authentication Flow

```text
User
 │
 ▼
Enter Email / Phone
 │
 ▼
Generate OTP
 │
 ▼
Send OTP
 │
 ▼
Verify OTP
 │
 ▼
Issue JWT
 │
 ▼
Create Session
 │
 ▼
Access Platform
```

---

# 🔒 Encryption Strategy

## Protected Data

* User Emails
* User Phone Numbers
* Chat Messages
* Private Notes
* Sensitive Metadata

## Encryption Layers

### Transport Layer

```text
Client
  │
 HTTPS/TLS
  │
Server
```

### Data Layer

```text
AES-256 Encryption
        │
        ▼
Database Storage
```

---

# 🗄 Database Architecture

## PostgreSQL

Stores:

* Users
* Clusters
* Memberships
* Problems
* Solutions
* XP Records

## MongoDB

Stores:

* Chat Messages
* Notifications
* Activity Logs

## Redis

Stores:

* OTP Codes
* Sessions
* Leaderboards
* Cache

---

# 🌐 API Modules

## Authentication

```http
POST /auth/send-otp
POST /auth/verify-otp
POST /auth/logout
```

## Clusters

```http
POST /clusters
GET /clusters
GET /clusters/:id
POST /clusters/:id/join
POST /clusters/:id/leave
```

## Problems

```http
GET /problems
GET /problems/:id
POST /problems
PATCH /problems/:id/status
```

## Solutions

```http
POST /solutions
GET /solutions/:problemId
POST /solutions/:id/upvote
```

## Chat

```http
GET /chat/:clusterId
POST /chat/message
```

## Leaderboards

```http
GET /leaderboard/global
GET /leaderboard/cluster/:id
```

---

# ⚡ WebSocket Events

## Chat Event

```json
{
  "type": "chat_message",
  "clusterId": "123",
  "message": "Hello Team"
}
```

## Notification Event

```json
{
  "type": "notification",
  "userId": "456",
  "message": "New problem added"
}
```

## Problem Event

```json
{
  "type": "problem_update",
  "problemId": "789",
  "status": "solved"
}
```

---

# 📚 Documentation

Additional documentation is available inside the `/docs` directory.

```text
docs/
├── API.md
├── DATABASE.md
├── AUTH_FLOW.md
└── DEPLOYMENT.md
```

---

# 🚀 Getting Started

## Install Dependencies

```bash
npm install
```

## Run Frontend

```bash
npm run dev
```

## Run Backend

```bash
cd src/server

go mod tidy

go run cmd/main.go
```

---

# 🎯 Future Roadmap

* AI Code Review
* Pair Programming Sessions
* Voice Channels
* Contest Mode
* Team Battles
* GitHub Integration
* LeetCode Synchronization
* Personalized Learning Paths
* AI Mentor

---

# 📜 License

Copyright (c) 2026 Soumya.

All Rights Reserved.

Unauthorized copying, distribution, modification, sublicensing, or commercial use of this software is prohibited without explicit written permission from the author.
