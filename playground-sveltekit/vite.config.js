import { sveltekit } from "@sveltejs/kit/vite";
import mkcert from "vite-plugin-mkcert";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), mkcert()],
  server: {
    https: true,
  },
};

export default config;
