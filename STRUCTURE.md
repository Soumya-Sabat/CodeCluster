```text
codecluster/
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── assets/
│       ├── logo.svg
│       ├── logo-dark.svg
│       └── icons/
│           ├── leetcode.svg
│           ├── hackerrank.svg
│           └── ...
│
├── src/
│   │
│   ├── client/
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── verify/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── signup/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── (cluster)/
│   │   │   │   ├── [clusterId]/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── problems/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── members/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── leaderboard/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── (problem)/
│   │   │   │   ├── [problemId]/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── solutions/
│   │   │   │   │       └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── (profile)/
│   │   │   │   └── [userId]/
│   │   │   │       └── page.tsx
│   │   │   │
│   │   │   ├── (notifications)/
│   │   │   │   └── page.tsx
│   │   │   │
│   │   │   ├── api/
│   │   │   │   └── socket/
│   │   │   │       └── route.ts
│   │   │   │
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── auth/
│   │   │   ├── cluster/
│   │   │   ├── problem/
│   │   │   ├── chat/
│   │   │   ├── leaderboard/
│   │   │   ├── gamification/
│   │   │   └── layout/
│   │   │
│   │   ├── lib/
│   │   │   ├── api/
│   │   │   ├── encryption/
│   │   │   ├── hooks/
│   │   │   └── utils/
│   │   │
│   │   ├── providers/
│   │   │   ├── AuthProvider.tsx
│   │   │   ├── SocketProvider.tsx
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── ClusterProvider.tsx
│   │   │
│   │   ├── styles/
│   │   └── types/
│   │
│   ├── server/
│   │   ├── cmd/
│   │   │   └── main.go
│   │   │
│   │   ├── internal/
│   │   │   ├── config/
│   │   │   │   ├── config.go
│   │   │   │   └── db.go
│   │   │   │
│   │   │   ├── controllers/
│   │   │   │   ├── auth/
│   │   │   │   ├── cluster/
│   │   │   │   ├── problem/
│   │   │   │   ├── solution/
│   │   │   │   ├── chat/
│   │   │   │   └── leaderboard/
│   │   │   │
│   │   │   ├── models/
│   │   │   │   ├── user.go
│   │   │   │   ├── cluster.go
│   │   │   │   ├── problem.go
│   │   │   │   ├── solution.go
│   │   │   │   ├── chat.go
│   │   │   │   └── notification.go
│   │   │   │
│   │   │   ├── repositories/
│   │   │   │   ├── postgres/
│   │   │   │   │   ├── user_repo.go
│   │   │   │   │   ├── cluster_repo.go
│   │   │   │   │   ├── problem_repo.go
│   │   │   │   │   └── solution_repo.go
│   │   │   │   │
│   │   │   │   ├── mongodb/
│   │   │   │   │   ├── chat_repo.go
│   │   │   │   │   └── notification_repo.go
│   │   │   │   │
│   │   │   │   └── redis/
│   │   │   │       └── leaderboard_repo.go
│   │   │   │
│   │   │   ├── services/
│   │   │   │   ├── auth/
│   │   │   │   │   └── service.go
│   │   │   │   │
│   │   │   │   ├── cluster/
│   │   │   │   │   └── service.go
│   │   │   │   │
│   │   │   │   ├── problem/
│   │   │   │   │   └── service.go
│   │   │   │   │
│   │   │   │   ├── solution/
│   │   │   │   │   └── service.go
│   │   │   │   │
│   │   │   │   ├── chat/
│   │   │   │   │   └── service.go
│   │   │   │   │
│   │   │   │   └── leaderboard/
│   │   │   │       └── service.go
│   │   │   │
│   │   │   ├── security/
│   │   │   │   ├── encryption/
│   │   │   │   │   ├── crypto.go
│   │   │   │   │   └── keys.go
│   │   │   │   │
│   │   │   │   ├── otp/
│   │   │   │   │   ├── generator.go
│   │   │   │   │   ├── sender.go
│   │   │   │   │   └── validator.go
│   │   │   │   │
│   │   │   │   └── middleware/
│   │   │   │       └── auth.go
│   │   │   │
│   │   │   ├── middleware/
│   │   │   │   ├── auth.go
│   │   │   │   ├── logging.go
│   │   │   │   ├── cors.go
│   │   │   │   └── rate_limiter.go
│   │   │   │
│   │   │   ├── routes/
│   │   │   │   ├── auth_routes.go
│   │   │   │   ├── cluster_routes.go
│   │   │   │   ├── problem_routes.go
│   │   │   │   ├── solution_routes.go
│   │   │   │   ├── chat_routes.go
│   │   │   │   └── leaderboard_routes.go
│   │   │   │
│   │   │   └── websocket/
│   │   │       ├── hub.go
│   │   │       ├── chat_handler.go
│   │   │       ├── notification_handler.go
│   │   │       └── problem_handler.go
│   │   │
│   │   ├── pkg/
│   │   │   ├── scraper/
│   │   │   │   ├── leetcode.go
│   │   │   │   ├── hackerrank.go
│   │   │   │   ├── codeforces.go
│   │   │   │   └── utils.go
│   │   │   │
│   │   │   ├── utils/
│   │   │   │   ├── logger/
│   │   │   │   │   ├── logger.go
│   │   │   │   │   └── handlers.go
│   │   │   │   ├── validator.go
│   │   │   │   ├── errors.go
│   │   │   │   ├── http_helpers.go
│   │   │   │   └── time_helpers.go
│   │   │   │
│   │   │   └── socket/
│   │   │       └── client.go
│   │   │
│   │   ├── go.mod
│   │   └── go.sum
│   │
│   ├── shared/
│   │   ├── types/
│   │   │   ├── api.ts
│   │   │   ├── db.ts
│   │   │   ├── websocket.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── validation/
│   │   │   │   ├── auth.ts
│   │   │   │   └── problem.ts
│   │   │   │
│   │   │   ├── encryption/
│   │   │   │   └── shared_keys.ts
│   │   │   │
│   │   │   └── helpers/
│   │   │       ├── date.ts
│   │   │       └── string.ts
│   │   │
│   │   └── config/
│   │       └── env.ts
│   │
│   └── scripts/
│       ├── setup_db.go
│       ├── seed_data.go
│       └── cleanup.go
│
├── config/
│   ├── tailwind.config.js
│   ├── next.config.js
│   ├── tsconfig.json
│   └── .eslintrc.json
│
├── docs/
│   ├── API.md
│   ├── DATABASE.md
│   ├── AUTH_FLOW.md
│   └── DEPLOYMENT.md
│
├── .env.example
├── .gitignore
├── package.json
└── README.md

```