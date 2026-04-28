---
name: finance-component-generator
description: Generate React components for finance use cases (summary cards, transaction tables, charts, dashboard sections). Trigger when user asks to create finance UI components, charts, data tables, or dashboard sections. Make sure to use this skill whenever the user mentions finance components, portfolio displays, balance summaries, transaction lists, or any financial data visualization, even if they don't explicitly ask for a "component".
---

# Finance Component Generator

Generate React components tailored for financial applications using Next.js App Router patterns.

## Component Types

### Summary Cards
Use for displaying key metrics: balances, income, expenses, profits.
- Green (`text-green-600`) for positive values (gains, income)
- Red (`text-red-600`) for negative values (losses, expenses)
- Include trend indicators when applicable

```tsx
export function BalanceCard({ title, amount, trend }: { title: string; amount: number; trend?: number }) {
  return (
    <div className="rounded-lg border p-6 bg-white shadow-sm">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className={`text-2xl font-bold ${amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        ${Math.abs(amount).toFixed(2)}
      </p>
      {trend !== undefined && (
        <span className={trend >= 0 ? 'text-green-600' : 'text-red-600'}>
          {trend >= 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </span>
      )}
    </div>
  );
}
```

### Transaction Tables
Display lists of financial transactions with proper formatting.
- Date formatting with `toLocaleDateString()`
- Currency formatting with `toFixed(2)`
- Alternating row colors for readability

### Charts
Use inline SVG or recommend charting library (Recharts preferred for Next.js).
- Line charts for balance history
- Bar charts for income/expense comparison
- Pie charts for portfolio allocation

## Best Practices
- Default to Server Components unless interactivity required
- Use TypeScript interfaces for all props
- Place in `src/components/finance/` directory
- Export as named exports
- Use Tailwind CSS for all styling
