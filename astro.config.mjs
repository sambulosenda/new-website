import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://sambulosenda.com',
  output: 'hybrid',
  redirects: {
    // /writing and / rendered identical content; / is canonical (sidebar nav points here).
    '/writing': '/',
  },
  adapter: node({
    mode: 'standalone',
  }),
  server: {
    host: true,
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  integrations: [tailwind(), mdx(), sitemap()],
});
