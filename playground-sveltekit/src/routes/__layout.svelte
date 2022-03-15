<script>
  import { storyblokInit, apiPlugin } from "@storyblok/svelte";
  import Feature from "../components/Feature.svelte";
  import Grid from "../components/Grid.svelte";
  import Page from "../components/Page.svelte";
  import Teaser from "../components/Teaser.svelte";

  storyblokInit({
    accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
    use: [apiPlugin],
    components: {
      // teaser: () => import("./Teaser.svelte"), // Lazy load it on demand
      feature: Feature,
      grid: Grid,
      page: Page,
      teaser: Teaser,
    },
  });

  console.log("teaser", Teaser);
</script>

<main>
  <slot />
</main>
