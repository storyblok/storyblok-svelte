import { defineConfig, type Plugin } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true, exclude: '**/*.spec.ts' }), sveltekit()] as Plugin[],

  test: {
    environment: 'jsdom',
    include: ['./src/tests/**/*', './src/**/*.spec.ts'],
  },
});
