import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response(JSON.stringify({ status: 'ok', app: 'arxentra-demo-astro' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
