import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://usplayercheck.com',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
});
