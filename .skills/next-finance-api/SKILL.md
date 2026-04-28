---
name: next-finance-api
description: Create Next.js App Router API routes or server actions for finance data operations (CRUD for transactions, balance calculations, financial reports). Trigger when user mentions API routes, server actions, finance data endpoints, or backend logic for finance features. Make sure to use this skill whenever the user discusses financial data operations, transaction management, balance calculations, or report generation, even if they don't explicitly mention "API".
---

# Next.js Finance API

Create API routes and server actions for financial data operations in Next.js App Router.

## API Route Structure

Place API routes in `src/app/api/finance/` directory.

### Transaction Endpoints
```
src/app/api/finance/transactions/
├── route.ts          # GET all, POST new
├── [id]/route.ts     # GET, PUT, DELETE by id
```

### Example API Route
```typescript
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get('page') || '1';
  
  // Fetch transactions logic here
  
  return NextResponse.json({ transactions, page, total });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // Validate with Zod schema
  
  // Create transaction logic here
  
  return NextResponse.json({ success: true, transaction }, { status: 201 });
}
```

## Server Actions

Use for form mutations and data updates.

```typescript
'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const TransactionSchema = z.object({
  amount: z.number().min(0),
  type: z.enum(['income', 'expense']),
  description: z.string().min(1),
  date: z.string().date(),
});

export async function createTransaction(formData: FormData) {
  const validated = TransactionSchema.parse({
    amount: parseFloat(formData.get('amount') as string),
    type: formData.get('type'),
    description: formData.get('description'),
    date: formData.get('date'),
  });
  
  // Create logic here
  
  revalidatePath('/transactions');
  return { success: true };
}
```

## Validation
- Use Zod for request validation
- Return proper error responses with status codes
- Type requests/responses with TypeScript interfaces

## Error Handling
```typescript
return NextResponse.json(
  { error: 'Transaction not found' },
  { status: 404 }
);
```
