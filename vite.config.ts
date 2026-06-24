import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import sitemap from 'vite-plugin-sitemap';

const blogSlugs = [
  'future-digital-transformation-rwanda',
  'custom-software-benefits',
  'how-to-choose-web-developer-rwanda',
  'signs-your-business-needs-automation',
  'website-vs-whatsapp-for-smes-rwanda',
  'what-is-it-advisory-rwanda',
  'measure-website-roi-rwanda',
  'when-does-your-business-need-custom-web-app',
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://corecrest.tech',
      dynamicRoutes: blogSlugs.map(slug => `/blog/${slug}`),
      exclude: ['/404'],
      generateRobotsTxt: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});

