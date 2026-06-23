# arxentra-demo-astro

Minimal Astro.js (SSR) demo app used by the Arxentra automated test suite to verify end-to-end app deployments.

- **Port**: 4321
- **Health**: `GET /api/health` → `{"status":"ok","app":"arxentra-demo-astro"}`
- **Build**: `npm run build`
- **Start**: `node dist/server/entry.mjs`
