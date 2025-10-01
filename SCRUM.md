# 📅 SCRUM Frontend (Next.js + Vercel) — 6 semanas

---

## 🚀 Sprint 1 — Base del proyecto + Diseño de UI, Setup Vercel (Semana 1)

**Objetivo:** Inicializar proyecto Next.js, diseño base, componentes globales, setup deploy en Vercel y CI (preview deployments).

### Historias / Backlog

- [X] **F1-1:** Init repo + Next.js + Tailwind + TypeScript. (3)
- [ ] **F1-2:** Configurar Vercel: project, variables de entorno, previews. (2)
- [ ] **F1-3:** Diseño UI básico (paleta, tipografía, spacing) + Layout principal (Header, Footer). (5)
- [ ] **F1-4:** Crear sistema de componentes base: `Button`, `Card`, `Container`, `Avatar`, `Icon`. (5)
- [ ] **F1-5:** Configurar linting / formatting (ESLint, Prettier) y Git hooks (husky). (2)
- [ ] **F1-6:** Definir rutas principales y placeholders (Home, Catalog, Song Detail, Search, About). (3)

### Tareas

- [ ] Init Next app, instalar Tailwind y configurar PostCSS.
- [ ] Añadir TypeScript y generar `tsconfig.json`.
- [ ] Crear Vercel project, enlazar repo, crear variables ENV (`NEXT_PUBLIC_API_BASE`).
- [ ] Crear paleta y token CSS con Tailwind config.
- [ ] Implementar `Layout` con header (logo + barra de búsqueda), footer.
- [ ] Crear sistema de íconos (lucide / heroicons).
- [ ] Añadir ESLint + Prettier + husky pre-commit.
- [ ] Crear páginas vacías y rutas principales.

### Criterios de aceptación

- `npm run dev` arranca Next.js y muestra layout global.
- Vercel preview creado en cada PR.
- Lint y format automáticos en pre-commit.

### DoD

- Código en `develop` o `main` protegido.
- Vercel preview disponible.
- Base de UI reproducible.

### Entregables

- Repo inicial en GitHub.
- Despliegue en Vercel configurado.
- Layout + componentes básicos.

---

## 🎶 Sprint 2 — Catálogo (listado, SSR, detalle canción) (Semana 2)

**Objetivo:** Implementar catálogo con listados y detalle de canción usando SSR/ISR, con carga desde API.

### Historias

- [ ] **F2-1:** Página `/catalog` con listado paginado o infinite scroll (SSR/ISR). (8)
- [ ] **F2-2:** Página `/songs/[id]` con metadata + botón reproducir (SSR/ISR). (5)
- [ ] **F2-3:** Implementar cliente HTTP (`lib/api.ts`) y hooks SWR globales. (3)
- [ ] **F2-4:** Skeletons, loading states + manejo de errores. (4)

### Tareas

- [ ] Diseñar `CatalogCard` (thumbnail, título, artista, año).
- [ ] Implementar API fetcher genérico con `fetcher(url)`.
- [ ] Configurar `getStaticProps`/`getServerSideProps` o ISR (revalidate 60s).
- [ ] Implementar paginación (query param `?page=`) o infinite scroll.
- [ ] Página detalle: metadata, duración, cover art, fetch presigned URL solo al reproducir.
- [ ] Crear `AudioPlayer` básico con HTML5 Audio API (play, pause, volumen, progress).
- [ ] Añadir skeletons y UI de error.

### Criterios de aceptación

- El catálogo se carga desde API.
- Paginación funciona y es rápida.
- Detalle de canción muestra metadata y reproduce audio vía presigned URL.

### DoD

- Tests unitarios de `CatalogCard` y `SongDetail`.
- SSR pages configuradas.
- Preview en Vercel funcional.

### Riesgos/Dependencias

- Depende de endpoints de catálogo y presigned URLs (usar mocks si backend no está listo).

---

## 🔍 Sprint 3 — Búsqueda & Autocompletado (Semana 3)

**Objetivo:** Implementar búsqueda global con autocompletado y resultados con filtros.

### Historias

- [ ] **F3-1:** Barra de búsqueda con autocompletado (`/api/search/suggest`). (5)
- [ ] **F3-2:** Página `/search?q=` con filtros (genre, artist, year) + lógica AND/OR. (8)
- [ ] **F3-3:** UX: navegación por teclado en sugerencias + roles aria. (3)
- [ ] **F3-4:** Debounce y optimización contra condiciones de carrera. (3)

### Tareas

- [ ] Crear `SearchBox` con debounce (300ms) y dropdown de sugerencias.
- [ ] Integrar SWR con `fallbackData` y `dedupingInterval`.
- [ ] Navegación teclado (up/down/enter) con aria roles (`listbox`).
- [ ] Página de resultados con filtros y multi-select.
- [ ] UI para alternar entre lógica AND/OR.
- [ ] Guardar búsquedas recientes en localStorage.
- [ ] Tests unitarios para `SearchBox` y navegación teclado.
- [ ] Añadir métricas de latencia en consola o Sentry.

### Criterios de aceptación

- Suggestions aparecen mientras escribes (<300ms).
- Enter abre página de resultados.
- Filtros aplicados vía query string (compartible).
- Navegación por teclado accesible y probada.

### DoD

- Tests unitarios y e2e básicos (Playwright: escribir query → sugerencias → abrir resultados).

---

## 🎧 Sprint 4 — UX polish, audio UX, responsive & accesibilidad (Semana 4)

**Objetivo:** Mejorar audio playback, mobile-first y accesibilidad.

### Historias

- [ ] **F4-1:** Mejorar audio player (seek, progress, buffering). (5)
- [ ] **F4-2:** Responsive mobile/tablet (header sticky, bottom player). (5)
- [ ] **F4-3:** Accesibilidad: aria, contraste, tab order, skip links. (5)
- [ ] **F4-4:** Performance: imágenes optimizadas, lazy load, code-splitting. (3)

### Tareas

- [ ] `AudioPlayer` persistente en bottom bar (sobrevive route changes).
- [ ] Usar `next/image` para covers optimizados.
- [ ] Audit con `axe-core` y corrección top 10 issues.
- [ ] Implementar estados focus visibles + skip-to-content.
- [ ] Imports dinámicos para componentes pesados.
- [ ] Añadir Lighthouse script (objetivo LCP < 2.5s).

### Criterios de aceptación

- Player funciona entre rutas y dispositivos.
- Páginas clave con score de accesibilidad >= 90.
- Imágenes optimizadas y Lighthouse mejorado.

### DoD

- Tests Playwright mobile.
- Checks de accesibilidad integrados en CI.

---

## 🛠 Sprint 5 — Integración, manejo de errores, Offline & Analytics (Semana 5)

**Objetivo:** Manejo de errores, fallback UI, analytics y soporte offline básico.

### Historias

- [ ] **F5-1:** Manejo global de errores + banner estado API. (3)
- [ ] **F5-2:** Integrar Sentry + Vercel Analytics / GA. (2)
- [ ] **F5-3:** Service Worker básico (cache estáticos + páginas visitadas). (5)
- [ ] **F5-4:** E2E tests y QA checklist. (5)

### Tareas

- [ ] Implementar `ErrorBoundary` global + banner API status.
- [ ] Configurar Sentry SDK con release/env.
- [ ] Añadir Vercel Analytics o GA.
- [ ] Implementar SW para cache de assets y páginas visitadas.
- [ ] Playwright tests de flujos críticos.
- [ ] Integrar axe + Lighthouse checks en CI.

### Criterios de aceptación

- Errores capturados en Sentry.
- Catálogo visitado accesible offline.
- Tests E2E verdes en CI.

### DoD

- CI incluye Playwright + Axe.
- Alertas en Sentry habilitadas.

---

## 📦 Sprint 6 — Hardening, Docs, Deploy & Handoff (Semana 6)

**Objetivo:** Entrega final lista para producción, con documentación y demo.

### Historias

- [ ] **F6-1:** Documentación y Storybook de componentes. (3)
- [ ] **F6-2:** Release candidate + dominio configurado en Vercel. (3)
- [ ] **F6-3:** Checklist integración backend (env vars, CORS, contratos). (5)
- [ ] **F6-4:** QA final, bugfixes, accesibilidad y demo. (5)

### Tareas

- [ ] Documentar componentes (Storybook/MDX).
- [ ] Configurar dominio + prod env vars en Vercel.
- [ ] Checklist endpoints consumidos + ejemplos de request.
- [ ] Auditoría final de performance y accesibilidad.
- [ ] Preparar demo + README de entrega.

### Criterios de aceptación

- App en producción con dominio Vercel.
- Storybook disponible o docs en `/docs`.
- Contrato API entregado al backend.
- QA firmado y demo lista.

### DoD

- Deploy final en Vercel.
- Documentación entregada.
- Tests E2E completos.

---

## 🌐 APIs y páginas clave

- `/` — Landing / Hero / Search quick
- `/catalog` — Listado paginado (SSR/ISR)
- `/songs/[id]` — Detalle canción + player
- `/search?q=` — Resultados + filtros
- `/about` — Información del proyecto

**Componentes clave:** `SearchBox`, `CatalogCard`, `SongDetailCard`, `AudioPlayer`, `FilterPanel`, `Pagination`, `Skeletons`

---

## 🧪 Testing Strategy

- **Unit:** Jest + React Testing Library
- **Integration:** hooks de data fetching con `msw`
- **E2E:** Playwright (browse catalog, search, play song)
- **Accessibility:** `axe-core` en tests Playwright
- **Performance:** Lighthouse CI o GH Action en staging

---

## ⚙️ CI/CD (Vercel)

- Vercel conectado al repo → preview deploy por PR
- Variables en dashboard:
  - `NEXT_PUBLIC_API_BASE` (backend dev/staging/prod)
  - `NEXT_PUBLIC_SENTRY_DSN` (opcional)
- Build: `npm run build`
- Checks en PR: `npm test` + smoke tests Playwright

---

## 📊 Observabilidad & Monitoreo

- Sentry (errores)
- Vercel Analytics / GA (uso)
- Health-check API (Vercel Cron o Pingdom)

---

## ♿ Accesibilidad & Legal

- Cumplir WCAG 2.1 AA en vistas clave
- Aviso cookies/analytics opt-out
- Tokens sensibles → cookies httpOnly (si aplica auth)

---

## 📌 Backlog (post-MVP ideas)

- [ ] Dark mode + theme switcher
- [ ] Visualizador avanzado de audio (wavesurfer)
- [ ] Letra de canciones (si backend soporta)
- [ ] Funcionalidades sociales (follow/unfollow UI)
- [ ] PWA completa con offline first
