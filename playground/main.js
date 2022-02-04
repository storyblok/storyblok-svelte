import App from "./App.svelte";
import { storyblokInit, apiPlugin } from "@storyblok/svelte";

storyblokInit({
  accessToken: "wANpEQEsMYGOwLxwXQ76Ggtt",
  // bridge: false,
  // apiOptions: {  },
  use: [apiPlugin], // use it only if you need it})
});

const app = new App({
  target: document.getElementById("app"),
});

export default app;
