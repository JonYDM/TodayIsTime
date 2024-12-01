import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';


import netlify from '@astrojs/netlify';

import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  publicDir: './public',
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
});