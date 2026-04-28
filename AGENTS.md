# AGENTS.md - MBS Finanzas

## Project Overview
- **Name**: MBS Finanzas
- **Stack**: Next.js 16+, TypeScript, Tailwind CSS 4, App Router
- **Domain**: Financial management platform
- **Directory Structure**: Uses `src/` directory for all application code

## Development Commands
| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run typecheck` | Run TypeScript type checks |

## Code Conventions
- Use `src/` directory for all application code
- Default to Server Components; use Client Components only when interactivity required
- Tailwind CSS for all styling (avoid custom CSS unless necessary)
- TypeScript strict mode enabled
- Finance-specific naming: `Transaction`, `Balance`, `Portfolio`, `Report`
- Use `app/` directory structure (App Router) for all pages and API routes

## Skills System

The `.skills/` directory is the intelligence core of this project. Read `.skills/README.md` for detailed documentation on how to add or improve skills.

All skills follow the [anthropics/skills](https://github.com/anthropics/skills) format, stored in `.skills/<name>/` with `SKILL.md` (YAML frontmatter + instructions), optional `scripts/`, `references/`, `assets/`.

### skill-creator
- **Location**: `.skills/skill-creator/`
- **Purpose**: Create new skills, modify and improve existing skills, and measure skill performance
- **Trigger**: User wants to create a skill from scratch, edit, optimize, run evals, or benchmark skill performance

### finance-component-generator
- **Location**: `.skills/finance-component-generator/`
- **Purpose**: Generate React components for finance use cases (summary cards, transaction tables, charts, dashboard sections)
- **Trigger**: User asks to create finance UI components, charts, data tables, or dashboard sections
- **References**: `.skills/finance-component-generator/references/tailwind-guide.md` - Tailwind CSS 4 classes for financial states

### next-finance-api
- **Location**: `.skills/next-finance-api/`
- **Purpose**: Create Next.js App Router API routes or server actions for finance data operations
- **Trigger**: User mentions API routes, server actions, finance data endpoints, or backend logic for finance features

### tailwind-finance-theme
- **Location**: `.skills/tailwind-finance-theme/`
- **Purpose**: Apply consistent finance-themed Tailwind styles (green for gains, red for losses, blue for primary actions)
- **Trigger**: User asks to style finance components, apply theme, or fix inconsistent finance UI styling

### finance-data-types
- **Location**: `.skills/finance-data-types/`
- **Purpose**: Generate TypeScript interfaces and Zod validation schemas for finance data
- **Trigger**: User mentions finance data types, interfaces, validation, or data structure definitions
- **References**: `.skills/finance-data-types/references/example-data.json` - Example JSON with transactions and balances

### next-auth-finance
- **Location**: `.skills/next-auth-finance/`
- **Purpose**: Set up NextAuth.js authentication with role-based access for finance features
- **Trigger**: User mentions auth, login, roles, permissions, or finance route protection
