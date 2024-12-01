import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';


import netlify from '@astrojs/netlify';

export default defineConfig({
  publicDir: './public',
  integrations: [tailwind()],
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
});