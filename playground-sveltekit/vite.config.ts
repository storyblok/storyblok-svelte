import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

const config: UserConfig = {
  plugins: [sveltekit(), mkcert()],
  server: {
    https: true,
  },
};

export default config;
