# Portfolio Nx Workspace

A modern full-stack portfolio application built with Nx monorepo architecture.

## 🏗️ Project Structure

```
├── apps/
│   ├── portfolio-frontend/     # Next.js frontend application
│   └── portfolio-backend/      # Node.js/Express backend API
├── libs/
│   ├── portfolio-frontend-libs/
│   │   ├── ui/                 # React UI components (shadcn/ui)
│   │   ├── utils/              # Frontend utility functions
│   │   └── hooks/              # React hooks
│   └── portfolio-backend-libs/
│       ├── api/                # API routes and controllers
│       ├── auth/               # Authentication middleware
│       └── database/           # Database models and services
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Yarn 4.x

### Installation
```bash
yarn install
```

### Development

#### Frontend Development
```bash
yarn dev
# Runs Next.js dev server on http://localhost:3000
```

#### Backend Development
```bash
yarn dev:backend
# Runs Express server on http://localhost:3001
```

#### Build
```bash
# Build frontend
yarn build

# Build backend
yarn build:backend
```

#### Linting
```bash
# Lint frontend
yarn lint

# Lint backend
yarn lint:backend
```

## 📦 Libraries

### Frontend Libraries

#### `@portfolio/frontend/ui`
- React UI components built with shadcn/ui
- Includes: Button, Card, Input, Navbar, ThemeProvider, etc.
- Usage: `import { Button } from "@portfolio/frontend/ui"`

#### `@portfolio/frontend/utils`
- Utility functions for frontend
- Includes: cn (className utility), form validation, etc.
- Usage: `import { cn } from "@portfolio/frontend/utils"`

#### `@portfolio/frontend/hooks`
- Custom React hooks
- Includes: useToast, useMobile, etc.
- Usage: `import { useToast } from "@portfolio/frontend/hooks"`

### Backend Libraries

#### `@portfolio/backend/api`
- API routes, controllers, and middleware
- Express route handlers and business logic
- Usage: `import { PortfolioController } from "@portfolio/backend/api"`

#### `@portfolio/backend/auth`
- Authentication and authorization middleware
- JWT token validation, role-based access
- Usage: `import { authenticateToken } from "@portfolio/backend/auth"`

#### `@portfolio/backend/database`
- Database models and services
- Data access layer and business entities
- Usage: `import { DatabaseService } from "@portfolio/backend/database"`

## 🛠️ Technologies

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern React component library
- **next-themes** - Theme management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe JavaScript
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware

### Development
- **Nx** - Monorepo build system
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start frontend development server |
| `yarn dev:backend` | Start backend development server |
| `yarn build` | Build frontend for production |
| `yarn build:backend` | Build backend for production |
| `yarn lint` | Lint frontend code |
| `yarn lint:backend` | Lint backend code |
| `yarn start` | Start frontend production server |

## 📁 Key Features

- **Monorepo Architecture**: Organized codebase with shared libraries
- **Type Safety**: Full TypeScript support across frontend and backend
- **Modern UI**: Beautiful, responsive design with dark/light theme
- **Scalable Structure**: Easy to add new apps and libraries
- **Developer Experience**: Hot reload, linting, and build optimization

## 🚀 Deployment

### Frontend (Cloudflare Pages)
```bash
yarn build
yarn deploy
```

### Backend (Node.js hosting)
```bash
yarn build:backend
# Deploy dist/apps/portfolio-backend to your hosting provider
```

## 📝 License

This project is licensed under the MIT License.