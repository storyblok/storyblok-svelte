import type { LayoutLoad } from './$types';
import { storyblokInit, apiPlugin, useStoryblokApi } from "@storyblok/svelte";
import Teaser from '$lib/Teaser.svelte';
import Page from '$lib/Page.svelte';
import Feature from '$lib/Feature.svelte';
import Grid from '$lib/Grid.svelte';

export const load: LayoutLoad = () => {
  storyblokInit({
    accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
    use: [apiPlugin],
    components: {
      teaser: Teaser,
      page: Page,
      feature: Feature,
      grid: Grid,
    },
    apiOptions: {
      https: true,
      cache: {
        clear: 'auto',
        type: 'none',
      },
      region: 'eu',
    },
  });

	return {
	  storyblokApi: useStoryblokApi()
	};
};
