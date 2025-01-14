import { defineConfig, type Plugin } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true }), sveltekit()] as Plugin[],

  test: {
    include: ['./src/__tests__/**/*', './src/**/*.spec.ts'],
  },
});
