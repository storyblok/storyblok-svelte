import { defineConfig } from "vite";
import path from "path";

const name = "storyblok-svelte";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, "index.js"),
        name: "storyblokSvelte",
        fileName: (format) => (format === "es" ? `${name}.mjs` : `${name}.js`),
      },
    },
  };
});
