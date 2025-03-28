import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type PluginOption } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import { resolve } from 'pathe';

export default defineConfig({
  plugins: [sveltekit(), basicSsl()] as PluginOption[],
	resolve: {
		alias: {
		  '@storyblok/svelte': resolve(__dirname, '../../src/lib/index.ts'),
		},
	},
});
