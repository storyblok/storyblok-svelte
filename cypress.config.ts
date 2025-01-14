import { defineConfig } from 'cypress';
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
  },

  component: {
    devServer: {
      framework: 'svelte',
      bundler: 'vite',
      viteConfig: () => {
        return {
          plugins: [svelte()]
        }
      },
    },
  },
});
