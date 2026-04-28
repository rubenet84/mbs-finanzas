---
name: finance-data-types
description: Generate TypeScript interfaces and Zod validation schemas for finance data (Transaction, Balance, Portfolio, Report). Trigger when user mentions finance data types, interfaces, validation, or data structure definitions. Make sure to use this skill whenever the user discusses financial data models, type definitions for transactions or portfolios, or needs validation schemas for finance forms, even if they don't explicitly say "types".
---

# Finance Data Types

Generate TypeScript interfaces and Zod validation schemas for financial data structures.

## Core Interfaces

### Transaction
```typescript
export interface Transaction {
  id: string;
  date: string; // ISO 8601 date
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: TransactionCategory;
  accountId: string;
  createdAt: string; // ISO 8601 datetime
}

export type TransactionCategory =
  | 'food'
  | 'transport'
  | 'housing'
  | 'entertainment'
  | 'salary'
  | 'investment'
  | 'other';

export interface CreateTransactionInput {
  date: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  category: TransactionCategory;
  accountId: string;
}
```

### Balance
```typescript
export interface Balance {
  total: number;
  available: number;
  pending: number;
  currency: string;
  lastUpdated: string;
}

export interface AccountBalance {
  accountId: string;
  accountName: string;
  balance: Balance;
}
```

### Portfolio
```typescript
export interface PortfolioItem {
  id: string;
  name: string;
  ticker?: string;
  shares: number;
  purchasePrice: number;
  currentPrice: number;
  category: 'stocks' | 'bonds' | 'crypto' | 'real_estate';
}

export interface Portfolio {
  items: PortfolioItem[];
  totalValue: number;
  totalGain: number;
  totalGainPercent: number;
}
```

### Report
```typescript
export interface ReportPeriod {
  start: string;
  end: string;
}

export interface Report {
  id: string;
  title: string;
  period: ReportPeriod;
  summary: {
    totalIncome: number;
    totalExpenses: number;
    netSavings: number;
    savingsRate: number;
  };
  transactions: Transaction[];
  generatedAt: string;
}
```

## Zod Validation Schemas

```typescript
import { z } from 'zod';

export const TransactionSchema = z.object({
  id: z.string().uuid(),
  date: z.string().date(),
  description: z.string().min(1).max(255),
  amount: z.number().positive(),
  type: z.enum(['income', 'expense']),
  category: z.enum(['food', 'transport', 'housing', 'entertainment', 'salary', 'investment', 'other']),
  accountId: z.string().uuid(),
  createdAt: z.string().datetime(),
});

export const CreateTransactionSchema = TransactionSchema.omit({
  id: true,
  createdAt: true,
});

export const BalanceSchema = z.object({
  total: z.number(),
  available: z.number(),
  pending: z.number(),
  currency: z.string().length(3),
  lastUpdated: z.string().datetime(),
});
```

## Type Guards
```typescript
export function isPositive(amount: number): boolean {
  return amount >= 0;
}

export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}
```

## File Organization
Place types in `src/types/finance.ts` and export from `src/types/index.ts`.
