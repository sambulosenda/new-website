import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://sambulosenda.com',
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [tailwind(), mdx(), sitemap()],
});