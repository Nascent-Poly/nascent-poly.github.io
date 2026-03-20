# Demo App

A sample TypeScript project used for demonstrating **Launchpad** — the VS Code extension that lets you run any command by typing plain English.

## Setup

```bash
npm install
npm run build
npm test
```

## Project Structure

```
demo-workspace/
├── app.ts                  # Entry point
├── config.ts               # Configuration
├── services/
│   ├── userService.ts      # User CRUD operations
│   └── userService.test.ts # Unit tests
├── utils/
│   ├── logger.ts           # Logging utility
│   └── helpers.ts          # Helper functions
└── package.json
```

## API

| Endpoint       | Method | Description       |
|----------------|--------|-------------------|
| `/users`       | GET    | List all users    |
| `/users/:id`   | GET    | Get user by ID    |
| `/users`       | POST   | Create a user     |
| `/users/:id`   | DELETE | Delete a user     |

## License

MIT
