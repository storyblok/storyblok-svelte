import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import basicSsl from "@vitejs/plugin-basic-ssl";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [svelte(), basicSsl()],
  resolve: {
    alias: {
      "@storyblok/svelte": path.resolve(
        __dirname,
        "../node_modules/@storyblok/svelte"
      ),
    },
  },
});
