# WHITE KICKS — E-commerce de Sneakers

Frontend de e-commerce especializado en tenis blancos, construido con **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4** y **Zustand**.

## Stack

| Tecnología      | Versión   |
|-----------------|-----------|
| Next.js         | 16.2.9    |
| React           | 19.2.4    |
| TypeScript      | ^5        |
| Tailwind CSS    | ^4        |
| Zustand         | ^5.0.14   |
| Lucide React    | ^1.21.0   |
| Jest            | ^30.4.2   |
| Docker          | 29.5.3    |

## Scripts

```bash
pnpm dev        # Inicia servidor de desarrollo (Turbopack)
pnpm build      # Build de producción
pnpm start      # Inicia servidor de producción
pnpm lint       # Ejecuta ESLint
pnpm test       # Ejecuta tests con Jest
pnpm test:watch # Ejecuta tests en modo watch
```

## Estructura

```
src/
├── app/               # Páginas (App Router)
│   ├── cart/
│   ├── checkout/
│   ├── products/
│   └── page.tsx       # Home
├── components/
│   ├── cart/
│   ├── layout/        # Header, Footer
│   ├── product/       # ProductCard, Gallery, etc.
│   └── ui/            # Button, Badge, Input, Skeleton
├── lib/
│   ├── constants.ts   # Productos, categorías, config
│   ├── types.ts       # Interfaces TypeScript
│   └── utils.ts       # formatPrice, cn
├── store/
│   └── cart.ts        # Estado del carrito (Zustand + persist)
└── __tests__/         # Tests unitarios
```

## Rutas

| Ruta              | Descripción              |
|-------------------|--------------------------|
| `/`               | Home                     |
| `/products`       | Listado de productos     |
| `/products/[id]`  | Detalle de producto      |
| `/cart`           | Carrito de compras       |
| `/checkout`       | Checkout                 |
| `/checkout/success` | Confirmación de compra |

## Estado global

El carrito usa **Zustand** con persistencia en localStorage (`cart-storage`).

## Imágenes

Las imágenes de productos son de [Unsplash](https://unsplash.com), configuradas en `next.config.ts` bajo `remotePatterns`.

## Docker

El proyecto incluye un `Dockerfile` multi-stage para producción con `node:22-alpine` y el modo `output: "standalone"` de Next.js.

### Requisitos

- Docker instalado (v24+ recomendada)

### Build y ejecución

```bash
# Construir imagen
docker build -t white-kicks .

# Ejecutar contenedor en puerto 3000
docker run -p 3000:3000 white-kicks
```

### Comandos útiles

```bash
# Listar contenedores activos
docker ps

# Detener contenedor
docker stop <container-id>

# Ver logs
docker logs <container-id>

# Eliminar contenedor
docker rm <container-id>

# Eliminar imagen
docker rmi white-kicks
```

### `.dockerignore`

El archivo `.dockerignore` excluye `node_modules`, `.next`, `.env`, `*.md`, `coverage` y otros archivos innecesarios del contexto de build para mantener la imagen ligera.

## CI/CD

### Integración Continua (GitHub Actions)

Cada push a `main` o PR ejecuta automáticamente:
1. `pnpm lint` — ESLint
2. `pnpm test` — Jest (44 tests)
3. `pnpm build` — Build de Next.js
4. `docker build` — Build de imagen Docker con caché

Workflow: `.github/workflows/ci.yml`

### Deploy Continuo (Netlify)

Netlify está conectado al repo. Cada push a `main` dispara un deploy automático.

- **URL**: https://white-kicks.netlify.app
- **Config**: `netlify.toml` en la raíz

### Flujo DevOps

```
git add . → git commit -m "mensaje" → git push
  ├─ GitHub Actions: lint + test + build + Docker build
  └─ Netlify: deploy automático
```
