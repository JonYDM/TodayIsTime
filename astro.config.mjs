import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  publicDir: './public',
  integrations: [tailwind()],
});