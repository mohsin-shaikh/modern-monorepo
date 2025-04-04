# monorepo starter template

This starter template is for creating a monorepo with shadcn/ui.

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

The dashboard app includes a complete authentication system with the following features:

- Sign In
- Sign Up
- Password Reset
- Email Verification
- Protected Routes
- Session Management

To use the authentication features, make sure you have set up your environment variables in the dashboard app's `.env` file.

```bash
# Required environment variables for auth
AUTH_SECRET=your-auth-secret
NEXTAUTH_URL=http://localhost:3000
```

The authentication system is built using NextAuth.js and provides a secure, scalable solution for user management.
