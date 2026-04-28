# Tailwind CSS 4 - Guía de Clases para Estados Financieros

Esta guía lista las clases de Tailwind CSS 4 que debemos usar para representar diferentes estados financieros en el proyecto MBS Finanzas.

## Colores Semánticos

### Ganancias / Valores Positivos (Green)
- `text-green-600` - Texto principal para ganancias
- `text-green-500` - Texto alternativo
- `text-green-700` - Texto más oscuro para énfasis
- `bg-green-50` - Fondo claro para tarjetas de ganancia
- `bg-green-100` - Fondo para badges o etiquetas
- `border-green-200` - Bordes sutiles
- `border-green-500` - Bordes más prominentes

### Pérdidas / Valores Negativos (Red)
- `text-red-600` - Texto principal para pérdidas
- `text-red-500` - Texto alternativo
- `text-red-700` - Texto más oscuro para énfasis
- `bg-red-50` - Fondo claro para tarjetas de pérdida
- `bg-red-100` - Fondo para badges o etiquetas
- `border-red-200` - Bordes sutiles
- `border-red-500` - Bordes más prominentes

### Acciones Primarias (Blue)
- `bg-blue-600` - Fondo de botones primarios
- `hover:bg-blue-700` - Hover state para botones
- `text-white` - Texto sobre fondos azules
- `text-blue-600` - Texto azul para enlaces o acentos

### Texto Muted / Secundario (Gray)
- `text-gray-500` - Texto muted para etiquetas, subtítulos
- `text-gray-600` - Texto secundario
- `text-gray-900` - Texto principal en modo claro
- `text-gray-400` - Texto deshabilitado o placeholder

## Ejemplos de Uso

### Tarjeta de Balance Positivo
```tsx
<div className="rounded-lg border border-green-200 bg-green-50 p-6 shadow-sm">
  <p className="text-sm font-medium text-gray-500">Total Balance</p>
  <p className="mt-2 text-3xl font-bold text-green-600">$12,450.00</p>
</div>
```

### Tarjeta de Gasto
```tsx
<div className="rounded-lg border border-red-200 bg-red-50 p-6 shadow-sm">
  <p className="text-sm font-medium text-gray-500">Monthly Expenses</p>
  <p className="mt-2 text-3xl font-bold text-red-600">$4,200.50</p>
</div>
```

### Elemento de Transacción
```tsx
<div className="flex items-center justify-between border-b border-gray-200 py-4">
  <div>
    <p className="font-medium text-gray-900">Grocery Store</p>
    <p className="text-sm text-gray-500">Food & Dining</p>
  </div>
  <span className="text-red-600 font-semibold">-$85.50</span>
</div>
```

### Botón de Acción Primaria
```tsx
<button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
  Add Transaction
</button>
```

## Indicadores de Tendencia

### Flechas con Colores
- `↑ 12%` con `text-green-600` - Tendencia al alza
- `↓ 8%` con `text-red-600` - Tendencia a la baja

```tsx
<p className="text-sm text-green-600">↑ 12% from last month</p>
<p className="text-sm text-red-600">↓ 8% from last month</p>
```
