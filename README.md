# monorepo starter template

This starter template is for creating a monorepo with shadcn/ui, featuring a web dashboard and API application.

## Project Structure

### Apps
- **Dashboard**: Next.js application with Supabase authentication
- **API**: Express.js backend API service

### Packages
- **ui**: Shared UI components using shadcn/ui
- **supabase**: Supabase client and utilities
- **logger**: Shared logging utilities
- **eslint-config**: Shared ESLint configuration
- **typescript-config**: Shared TypeScript configuration

## Usage

```bash
pnpm dlx shadcn@latest init
```

## Adding components

To add components to your app, run the following command at the root of your `web` app:

```bash
pnpm dlx shadcn@latest add button -c apps/web
```

This will place the ui components in the `packages/ui/src/components` directory.

## Tailwind

Your `tailwind.config.ts` and `globals.css` are already set up to use the components from the `ui` package.

## Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from "@pkg/ui/components/button"
```

## Dashboard App

The dashboard app includes a complete authentication system powered by Supabase Auth with the following features:

- Sign In
- Sign Up
- Password Reset
- Email Verification
- Protected Routes
- Session Management

To use the authentication features, make sure you have set up your environment variables in the dashboard app's `.env` file.

```bash
# Required environment variables for auth
NEXT_PUBLIC_SUPABASE_URL=<SUPABASE_URL>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<SUPABASE_ANON_KEY>
```

The authentication system is built using Supabase Auth and provides a secure, scalable solution for user management with built-in features like social login, magic links, and more.

## API App

The API app is built with Express.js and provides backend services for the dashboard application. It includes:

- RESTful API endpoints
- Supabase integration
- Shared logging utilities
- TypeScript support
- ESLint configuration

To run the API app, navigate to the API directory and start the development server:

```bash
cd apps/api
pnpm dev
```

## Shared Packages

### Supabase Package
The `supabase` package provides shared Supabase client configuration and utilities for both the dashboard and API applications.

### Logger Package
The `logger` package offers consistent logging utilities across all applications in the monorepo.

### ESLint and TypeScript Config
Shared configurations for ESLint and TypeScript ensure consistent code style and type checking across all packages and applications.
