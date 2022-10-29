import Feature from "../components/Feature.svelte";
import Grid from "../components/Grid.svelte";
import Page from "../components/Page.svelte";
import Teaser from "../components/Teaser.svelte";
import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";

let callbackComponents = () => {
  return {
    feature: Feature,
    grid: Grid,
    page: Page,
    teaser: Teaser,
  };
};
/** @type {import('./$types').LayoutLoad} */
export async function load() {
  storyblokInit({
    accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
    use: [apiPlugin],
    callbackComponents: callbackComponents,
  });
  let storyblokApi = await useStoryblokApi();

  return {
    storyblokApi: storyblokApi,
  };
}
