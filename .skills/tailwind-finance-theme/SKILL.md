---
name: tailwind-finance-theme
description: Apply consistent finance-themed Tailwind styles (green for gains, red for losses, blue for primary actions, typography/spacing conventions). Trigger when user asks to style finance components, apply theme, or fix inconsistent finance UI styling. Make sure to use this skill whenever the user mentions finance styling, color schemes for financial data, or wants to apply consistent theming to financial dashboards, even if they don't explicitly say "theme".
---

# Tailwind Finance Theme

Apply consistent financial application styling using Tailwind CSS.

## Color Palette

### Semantic Colors
- **Gains/Positive**: `text-green-600`, `bg-green-50`, `border-green-200`
- **Losses/Negative**: `text-red-600`, `bg-red-50`, `border-red-200`
- **Primary Actions**: `bg-blue-600`, `hover:bg-blue-700`, `text-white`
- **Neutral/Text**: `text-gray-900` (headings), `text-gray-600` (body), `text-gray-500` (muted)

### Background Patterns
- **Cards**: `bg-white` with `border` and `shadow-sm`
- **Dashboard**: `bg-gray-50` for page backgrounds
- **Tables**: `bg-white` with `divide-y divide-gray-200`

## Typography

### Financial Figures
```tsx
// Large amounts
<p className="text-3xl font-bold text-gray-900">$12,450.00</p>

// Medium summaries
<p className="text-xl font-semibold text-gray-700">$1,230.50</p>

// Small inline amounts
<span className="text-sm font-medium text-green-600">+$450.00</span>
```

### Labels
```tsx
<p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Total Revenue</p>
```

## Component Patterns

### Summary Card
```tsx
<div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <p className="text-sm font-medium text-gray-500">Balance</p>
  <p className="mt-2 text-3xl font-bold text-gray-900">$10,450.00</p>
  <p className="mt-1 text-sm text-green-600">↑ 12% from last month</p>
</div>
```

### Transaction Row
```tsx
<div className="flex items-center justify-between border-b border-gray-200 py-4">
  <div>
    <p className="font-medium text-gray-900">Grocery Store</p>
    <p className="text-sm text-gray-500">Food & Dining</p>
  </div>
  <span className="text-red-600 font-semibold">-$85.50</span>
</div>
```

## Spacing Convention
- **Page padding**: `p-6` or `px-6 py-8`
- **Card padding**: `p-6`
- **Between sections**: `space-y-6` or `gap-6`
- **Inside components**: `p-4` for smaller elements
