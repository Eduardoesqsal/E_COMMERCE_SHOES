# Instrucciones para el Agente de IA

## Stack del proyecto

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 (PostCSS, clases generadas con `scripts/generate-css.mjs`)
- Zustand para estado global
- Jest + ts-jest + @testing-library/react para tests
- Lucide React para iconos
- pnpm como package manager

## Comandos esenciales

```bash
pnpm dev        # Desarrollo (Turbopack)
pnpm build      # Build produccion
pnpm start      # Servidor produccion
pnpm lint       # ESLint
pnpm test       # Tests (Jest)
pnpm test:watch # Tests en watch mode
```

## Convenciones de código

- NO agregar comentarios a menos que se solicite
- NO usar emojis a menos que el usuario lo pida
- Usar `"use client"` solo cuando sea necesario (hooks, estado, eventos)
- Las importaciones usan el alias `@/` (ej: `@/lib/types`, `@/components/ui/button`)
- Los archivos de página van en `src/app/` con `page.tsx`
- Los componentes reutilizables van en `src/components/`
- Los estilos usan Tailwind CSS v4 con variables CSS personalizadas

## Tailwind CSS v4 particularidades

- No hay `tailwind.config.ts` — la config está en `globals.src.css`
- `globals.css` es GENERADO por `scripts/generate-css.mjs` a partir de `globals.src.css`
- Las clases custom (`bg-card`, `text-foreground`, `border-card-border`, etc.) se definen como variables CSS en `:root` y `.dark`
- Los queries responsivos usan la sintaxis de TW v4: `max-width: 40rem` = `sm:`, `48rem` = `md:`, `64rem` = `lg:`, `80rem` = `xl:`

## Imágenes

- Usar `next/image` con `remotePatterns` configurado en `next.config.ts`
- Las imágenes de productos están en `src/lib/constants.ts` con URLs de Unsplash
- Usar `fill` + `object-cover` dentro de un contenedor `relative` con `aspect-*`

## Estado global (Zustand)

- Store en `src/store/cart.ts`
- Usa `persist` middleware con clave `cart-storage`
- El store es `"use client"`

## Tests

- Tests unitarios en `src/__tests__/` y `src/**/__tests__/`
- Usar `@jest/globals` (describe, it, expect)
- Para tests de componentes: `@testing-library/react`
- Ejecutar con `pnpm test`

## GITHUB
…or create a new repository on the command line
echo "# E_COMMERCE_SHOES" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Eduardoesqsal/E_COMMERCE_SHOES.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/Eduardoesqsal/E_COMMERCE_SHOES.git
git branch -M main
git push -u origin main


