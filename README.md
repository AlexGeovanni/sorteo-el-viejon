# Sorteos El Viejon

Aplicacion web para mostrar sorteos, seleccionar boletos y guiar al usuario en el proceso de pago.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion

## Estructura base

- `src/app` rutas principales (`/` y `/:slug`)
- `src/components` componentes reutilizables de UI y secciones
- `src/services` consumo de servicios externos
- `src/data` datos estaticos (boletos, ubicaciones)
- `src/utils` utilidades y helpers

## Requisitos

- Node.js 20+
- pnpm (recomendado)

## Instalacion

```bash
pnpm install
```

## Desarrollo local

```bash
pnpm dev
```

La app queda disponible en [http://localhost:3000](http://localhost:3000).

## Scripts

- `pnpm dev` inicia entorno de desarrollo
- `pnpm build` genera build de produccion
- `pnpm start` levanta la build en produccion
- `pnpm lint` ejecuta ESLint

## SEO y Accesibilidad (baseline)

El proyecto incluye una base inicial con:

- Metadatos globales (`title`, `description`, OpenGraph, canonical)
- Soporte de navegacion por teclado con `focus-visible`
- Enlace "Saltar al contenido principal"
- Etiquetas accesibles en botones, links e inputs clave

## Pendientes sugeridos

- Redactar las politicas, terminos y legales
- Integrar datos reales de sorteos desde API (actualmente hay contenido de ejemplo)