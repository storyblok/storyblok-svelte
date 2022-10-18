<script>
  import Feature from "../components/Feature.svelte";
  import Grid from "../components/Grid.svelte";
  import Page from "../components/Page.svelte";
  import Teaser from "../components/Teaser.svelte";
  import { apiPlugin, storyblokInit } from "@storyblok/svelte";

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
</script>

<main class="prose prose-xl">
  <slot />
</main>
