# Avisum Landing

Landing page de **Avisum** (protección táctica para buses de Lima), migrada desde
React + TanStack Start a **Angular 18 (standalone) + TypeScript**, organizada con
estructura de carpetas **DDD (Domain-Driven Design)**.

## Requisitos

- Node.js 18.19+ o 20.9+
- npm 9+ (o pnpm/yarn si prefieres, ajustando los comandos)
- WebStorm 2024.1+ (detecta automáticamente el proyecto Angular vía `angular.json`)

## Instalación

```bash
npm install --legacy-peer-deps
```

> `@angular-devkit/build-angular` declara como peer dependency Tailwind v2/v3, pero el
> proyecto usa Tailwind v4 (vía `@tailwindcss/postcss`, igual que en el proyecto original
> de Lovable). El flag `--legacy-peer-deps` evita el conflicto de resolución; no afecta
> el funcionamiento del proyecto. En WebStorm, ejecútalo desde la terminal integrada.

## Ejecutar en desarrollo

```bash
npm start
```

Se abre en `http://localhost:4200`.

## Build de producción

```bash
npm run build:prod
```

Salida en `dist/avisum-landing`.

## Abrir en WebStorm

1. `File → Open` y selecciona la carpeta `avisum-landing`.
2. WebStorm detecta el `angular.json` y habilita el soporte de Angular Language Service
   automáticamente (verifica en `Settings → Languages & Frameworks → Angular` que el
   proyecto esté seleccionado).
3. Ejecuta `npm install` desde la terminal integrada.
4. Usa la configuración de ejecución "npm start" (o créala: `Run → Edit Configurations →
   + → npm`, script `start`).

## Estructura de carpetas (DDD)

```
src/app/
├── app.component.ts          Componente raíz (shell + router-outlet)
├── app.config.ts             Providers globales + binding de dominio ↔ infraestructura
├── app.routes.ts             Rutas de la aplicación
└── landing/                  Módulo/feature "landing"
    ├── domain/                    ← Reglas y modelos de negocio, sin dependencias externas
    │   ├── models/                Feature, Stat, ProcessStep, NavItem, MonitorMetric, LandingContent
    │   └── repositories/          Puerto LandingContentRepository (contrato abstracto)
    ├── application/               ← Casos de uso, orquestan el dominio
    │   └── services/               LandingContentService
    ├── infrastructure/            ← Implementaciones concretas de los puertos del dominio
    │   └── repositories/           InMemoryLandingContentRepository (datos actuales de Avisum)
    └── presentation/              ← UI: componentes y páginas Angular
        ├── components/             navbar, hero, stats-section, features-section,
        │                           how-it-works-section, final-cta-section, footer,
        │                           count-up, monitor-mockup, icon
        └── pages/
            └── landing-page/       Página que ensambla todas las secciones
```

**Regla de dependencia:** `presentation → application → domain ← infrastructure`.
El dominio no conoce ni Angular ni la infraestructura; la infraestructura implementa los
puertos que el dominio define. El binding concreto (`LandingContentRepository` →
`InMemoryLandingContentRepository`) se resuelve en `app.config.ts`, así que mañana puedes
reemplazar la fuente de datos (ej. una API real o un CMS) creando otra clase en
`infrastructure/repositories` sin tocar el dominio ni la presentación.

## Nota sobre el logo

El logo original (`avisum-logo.png`) estaba alojado en el CDN interno de Lovable y no fue
posible descargarlo automáticamente. Se dejó un placeholder en
`public/images/avisum-logo.svg`. Reemplázalo por tu logo real:

- Exporta el PNG/SVG original desde tu proyecto de Lovable.
- Cópialo a `public/images/avisum-logo.svg` (o `.png`, actualizando la extensión en
  `navbar.component.html` y `footer.component.html`).

## Stack

- Angular 18 (standalone components, control flow `@for`/`@switch`, signals)
- TypeScript 5.5
- Tailwind CSS v4 (mismo design system oklch que el proyecto original)
- Sin dependencias de UI externas: los íconos se reimplementaron como SVG propios
  (`presentation/components/icon`) para no depender de `lucide-react`.
