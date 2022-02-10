import { defineConfig } from "vite";
import path from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const name = "storyblok-svelte";

export default defineConfig(() => {
  return {
    plugins: [svelte()],
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.js"),
        name: "storyblokSvelte",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
    },
  };
});
