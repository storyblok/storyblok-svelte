/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    vite: {
      optimizeDeps: {
        include: ["axios"],
      },
    },
  },
};

export default config;
