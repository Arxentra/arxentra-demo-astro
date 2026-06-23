import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  server: {
    port: parseInt(process.env.PORT || '8000'),
    host: process.env.HOST || '0.0.0.0',
  },
});
