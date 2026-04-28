# Skills System - MBS Finanzas

Este directorio (`.skills/`) es el núcleo de inteligencia del proyecto. Contiene skills que definen flujos de trabajo especializados para el desarrollo de aplicaciones financieras con Next.js.

## Qué es una Skill

Una skill es un conjunto de instrucciones y recursos que guían a la IA para realizar tareas específicas de manera consistente. Cada skill vive en su propia carpeta y sigue el formato definido por [anthropics/skills](https://github.com/anthropics/skills).

## Estructura de una Skill

```
skill-name/
├── SKILL.md          # Required: YAML frontmatter + instrucciones en markdown
├── scripts/          # Opcional: Código ejecutable para tareas deterministas
├── references/       # Opcional: Documentación de referencia cargada según necesidad
└── assets/          # Opcional: Archivos usados en la salida (templates, iconos, fuentes)
```

## Cómo añadir una Skill

1. **Crear la carpeta**: Crea un nuevo directorio en `.skills/` con el nombre de la skill (ej. `mi-nueva-skill/`).

2. **Crear SKILL.md**: Crea el archivo `SKILL.md` con el siguiente formato:
   ```markdown
   ---
   name: mi-nueva-skill
   description: Descripción clara de qué hace la skill y cuándo debe activarse.
   ---

   # Mi Nueva Skill

   Instrucciones detalladas para la IA...
   ```

3. **Añadir recursos**: Si la skill requiere referencias o scripts, añádelos en las carpetas correspondientes.

4. **Actualizar AGENTS.md**: Añade una entrada en la sección "Available Skills" del `AGENTS.md` raíz.

## Cómo mejorar una Skill

1. **Probar la skill**: Usa la skill con prompt reales para identificar puntos de mejora.

2. **Añadir ejemplos probados**: Si hay fragmentos de código que funcionan bien, añádelos a `references/` para que la IA pueda consultarlos.

3. **Refinar el description**: El campo `description` en el YAML frontmatter es clave para que la skill se active en el momento correcto. Asegúrate de que sea específico y mencione casos de uso.

4. **Iterar**: Las skills son documentos vivos. Actualízalas conforme el proyecto evoluciona.

## Skills Disponibles

- `skill-creator` - Herramienta para crear y mejorar skills
- `finance-component-generator` - Genera componentes React financieros
- `next-finance-api` - Crea API routes y server actions financieras
- `tailwind-finance-theme` - Aplica estilos financieros con Tailwind
- `finance-data-types` - Genera interfaces TypeScript y esquemas Zod
- `next-auth-finance` - Configura autenticación con roles financieros
