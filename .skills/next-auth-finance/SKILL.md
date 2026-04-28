---
name: next-auth-finance
description: Set up NextAuth.js authentication with role-based access (admin, accountant, viewer) for finance features. Trigger when user mentions auth, login, roles, permissions, or finance route protection. Make sure to use this skill whenever the user discusses authentication for financial apps, role-based access control, protected routes for sensitive financial data, or user management, even if they don't explicitly say "auth".
---

# NextAuth Finance Authentication

Set up NextAuth.js with role-based access control for financial applications.

## Installation

```bash
npm install next-auth @auth/prisma-adapter prisma
npm install -D @types/next-auth
```

## Auth Configuration

### `src/auth.ts`
```typescript
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { prisma } from '@/lib/prisma';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Verify credentials against database
        // Return user object with role
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
});

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      role: 'admin' | 'accountant' | 'viewer';
    } & DefaultSession['user'];
  }
}
```

## Role Definitions

### Admin
- Full access to all features
- Manage users and roles
- View/export all reports
- Configure system settings

### Accountant
- Create/edit transactions
- Generate reports
- View all financial data
- Cannot manage users

### Viewer
- View balances and reports
- Cannot modify data
- Export reports (read-only)

## Middleware for Route Protection

### `middleware.ts`
```typescript
export { auth as middleware } from '@/auth';

export const config = {
  matcher: ['/dashboard/:path*', '/api/finance/:path*'],
};
```

## Server-Side Protection

```typescript
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const session = await auth();
  
  if (!session) {
    redirect('/login');
  }
  
  if (session.user.role === 'viewer') {
    // Read-only view
  }
  
  return <div>Dashboard</div>;
}
```

## API Route Protection

```typescript
import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await auth();
  
  if (!session || session.user.role === 'viewer') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  // Proceed with authorized request
}
```

## Login Page

Place in `src/app/login/page.tsx` with a form that calls `signIn('credentials', { email, password })`.
