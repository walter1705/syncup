# 🎶 SyncUp — Frontend (Next.js)

[![Build](https://img.shields.io/github/actions/workflow/status/mi-usuario/syncup-frontend/ci.yml?branch=main&logo=github)](https://github.com/mi-usuario/syncup-frontend/actions)  
[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=syncup-frontend)](https://syncup-frontend.vercel.app)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)  
[![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js)](https://nextjs.org/)  
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Frontend de la aplicación SyncUp — catálogo y búsqueda de música.**  
Interfaz construida con Next.js y desplegada en Vercel. Este repositorio contiene la UI orientada a lectura: navegar catálogo, buscar canciones y reproducir audio vía presigned URLs.  
👉 **MVP:** Sólo lectura — no permite crear playlists ni modificar datos.

---

## ✅ Resumen rápido

- **Stack:** Next.js + React, Tailwind CSS, SWR, HTML5 Audio API
- **Deploy:** Vercel (Previews por PR, producción en dominio configurado)
- **Tests:** Jest + React Testing Library, Playwright E2E, axe-core accessibility checks
- **Objetivo:** MVP funcional para visualizar y buscar catálogo de canciones, reproducir streaming y exponer un front sólido y accesible para la integración con el backend.

---

## 📋 Checklist de avance

> Marca manualmente las casillas en tu README cuando completes cada item.

### Setup & Infra

- [ ] Inicializar repo (Next.js + TypeScript)
- [ ] Configurar Tailwind CSS y PostCSS
- [ ] Configurar ESLint + Prettier + Husky
- [ ] Vercel Project y variables de entorno

### Sprint 1 — Base del proyecto

- [ ] Layout global (Header, Footer)
- [ ] Sistema de tokens/tema (Tailwind config)
- [ ] Componentes base: `Button`, `Card`, `Container`, `Icon`, `Avatar`
- [ ] Rutas: `/`, `/catalog`, `/songs/[id]`, `/search`

### Sprint 2 — Catálogo & detalle

- [ ] Página `/catalog` con SSR/ISR y paginación/infinite scroll
- [ ] Página `/songs/[id]` con metadata y botón reproducir
- [ ] `AudioPlayer` básico con streaming via presigned URL
- [ ] Skeletons y estados de error

### Sprint 3 — Búsqueda & Autocompletado

- [ ] `SearchBox` con debounce y suggestions (keyboard navigation)
- [ ] Página `/search` con filtros (genre, artist, year) + AND/OR
- [ ] Guardado de búsquedas recientes (localStorage)

### Sprint 4 — UX & accesibilidad

- [ ] Player persistente (bottom bar) entre rutas
- [ ] Responsive (mobile/tablet) y pruebas en dispositivos
- [ ] Auditoría y correcciones de accesibilidad (`axe`)

### Sprint 5 — Integración & resiliencia

- [ ] Error Boundary global y banner estado API
- [ ] Integración con Sentry
- [ ] Service Worker para cache read-only (opcional)

### Sprint 6 — Handoff & docs

- [ ] Storybook o documentación de componentes (MDX)
- [ ] Checklist de contratos API para backend
- [ ] Deploy de release candidate y demo lista

---

## 🚀 Cómo ejecutar en desarrollo

```bash
# Clonar repo
git clone https://github.com/mi-usuario/syncup.git
cd syncup-frontend

# Instalar dependencias
npm install

# Correr en modo dev
npm run dev
```

## 🔧 Configuración de variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:

```bash
# API Backend
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1

# Configuración de feature flags
NEXT_PUBLIC_ENABLE_ANALYTICS=true
NEXT_PUBLIC_ENABLE_SERVICE_WORKER=false

# Sentry (opcional para desarrollo)
NEXT_PUBLIC_SENTRY_DSN=
```

## 🧪 Testing

```bash
# Ejecutar tests unitarios
npm run test

# Ejecutar tests con watch mode
npm run test:watch

# Ejecutar tests e2e con Playwright
npm run test:e2e

# Verificar accesibilidad
npm run test:a11y
```

## 📦 Build y despliegue

```bash
# Construir para producción
npm run build

# Iniciar versión de producción localmente
npm run start
```

## 📁 Estructura del proyecto

```
├── app/                # App router de Next.js 13+
│   ├── api/            # API routes
│   ├── catalog/        # Páginas del catálogo
│   ├── search/         # Funcionalidad de búsqueda
│   ├── songs/          # Detalle de canciones
│   └── layout.tsx      # Layout principal
├── components/         # Componentes React reutilizables
│   ├── common/         # Componentes base (Button, Card, etc)
│   ├── audio/          # Reproductor y controles de audio
│   ├── layout/         # Header, Footer, etc
│   └── search/         # Componentes de búsqueda
├── hooks/              # Custom hooks
├── lib/                # Utilidades y servicios
├── public/             # Archivos estáticos
├── styles/             # CSS global y utilidades
└── types/              # TypeScript definitions
```

## 👥 Contribución

1. Crea un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

Seguimos [Conventional Commits](https://www.conventionalcommits.org/) para mensajes de commit.

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.
