import { sveltekit } from "@sveltejs/kit/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), basicSsl()],
  server: {
    https: true,
  },
};

export default config;
