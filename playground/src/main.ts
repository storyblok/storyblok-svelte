import App from "./App.svelte";
import { storyblokInit, apiPlugin } from "@storyblok/svelte";

import Feature from "./components/Feature.svelte";
import Grid from "./components/Grid.svelte";
import Page from "./components/Page.svelte";
import Teaser from "./components/Teaser.svelte";

storyblokInit({
  accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
  use: [apiPlugin],
  components: {
    feature: Feature,
    grid: Grid,
    page: Page,
    teaser: Teaser,
  },
});

const app = new App({
  target: document.getElementById("app"),
});

export default app;
