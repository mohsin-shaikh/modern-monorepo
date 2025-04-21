# modern-monorepo

## About Zuupee

A modern monorepo featuring a Next.js dashboard with Supabase authentication and a local Supabase development environment.

## Features

**Team Management**: Create and manage multiple teams with role-based access control, invitation system, and customizable team settings for enhanced collaboration.<br/>
**Authentication**: Robust security with Supabase-powered authentication, including MFA, email verification, and protected routes for secure access.<br/>
**Modern Stack**: Built with Next.js, TypeScript, tRPC, and Supabase, featuring Shadcn UI components and Tailwind CSS for a modern development experience.<br/>
**Infrastructure**: Powered by Vercel deployment, Supabase backend, Trigger.dev for background jobs, and Resend for transactional emails.<br/>

## Get started

We are working on the documentation to get started with Zuupee for local development: https://docs.zuupee.com

## App Architecture

- Monorepo
- Pnpm
- React
- TypeScript
- Nextjs
- Supabase
- Shadcn
<!-- - ToDesktop -->
<!-- - Expo -->
- TailwindCSS
- tRPC

### Hosting

- Supabase (database, storage, realtime, auth)
- Vercel (Website, edge-config, and metrics)
<!-- - Upstash (redis) -->

### Services

- Trigger.dev (background jobs)
- Resend (Transactional & Marketing)
<!-- - Novu (notifications) -->
- Github Actions (CI/CD)
<!-- - OpenPanel (Events and Analytics) -->
<!-- - Dub (Short URLs) -->
<!-- - Polar (Payment processing) -->
<!-- - Typesense (Search) -->


## Project Structure

### Apps
- **Dashboard**: Next.js application with Supabase authentication
- **API**: Local Supabase instance for development

### Packages
- **ui**: Shared UI components using shadcn/ui
- **supabase**: Supabase client and utilities
- **logger**: Shared logging utilities
- **eslint-config**: Shared ESLint configuration
- **typescript-config**: Shared TypeScript configuration

## Getting Started

### Prerequisites
- Node.js
- pnpm
- Docker (for local Supabase)

### Initial Setup

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
```bash
# Required environment variables for auth
NEXT_PUBLIC_SUPABASE_URL=<SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<SUPABASE_ANON_KEY>
```

## Development

### Dashboard App

The dashboard app includes a complete authentication system powered by Supabase Auth with the following features:

- Sign In
- Sign Up
- Password Reset
- Email Verification
- Protected Routes
- Session Management

### Local Supabase Development

The API app provides a local Supabase instance for development, allowing you to:
- Run Supabase services locally
- Develop and test database migrations
- Test authentication flows
- Develop and test database functions
- Work with real-time subscriptions
- Test storage functionality

To start the local Supabase instance:
```bash
cd apps/api
pnpm dev
```

This will start all Supabase services locally, including:
- PostgreSQL database
- Supabase Auth
- Storage
- Edge Functions
- Real-time subscriptions

## UI Components

### Adding Components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

### Using Components

To use the components in your app, import them from the `ui` package:

```tsx
import { Button } from "@pkg/ui/components/button"
```

### Tailwind Configuration

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Shared Packages

### Supabase Package

The `supabase` package provides shared Supabase client configuration and utilities for both the dashboard and API applications.

### Logger Package

The `logger` package offers consistent logging utilities across all applications in the monorepo.

### ESLint and TypeScript Config

Shared configurations for ESLint and TypeScript ensure consistent code style and type checking across all packages and applications.

## License

This project is licensed under the **[AGPL-3.0](https://opensource.org/licenses/AGPL-3.0)** for non-commercial use.

### Commercial Use
For commercial use or deployments requiring a setup fee, please contact us for a commercial license at [engineer@zuupee.com](mailto:engineer@zuupee.com).

By using this software, you agree to the terms of the license.
