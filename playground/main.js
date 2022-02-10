import App from "./App.svelte";
import { storyblokInit, apiPlugin } from "@storyblok/svelte";
import Teaser from "./Teaser.svelte";

storyblokInit({
  accessToken: "pKHHk3IqorP1mrfe8fACOwtt",
  use: [apiPlugin],
  components: {
    teaser: Teaser,
  },
});

const app = new App({
  target: document.getElementById("app"),
});

export default app;
