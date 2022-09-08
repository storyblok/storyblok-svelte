<script>
  import {
    storyblokInit,
    apiPlugin,
    getStoryblokApi,
    StoryblokComponent,
    getStoryblokBridge,
  } from "./index";

  export let accessToken;
  export let bridge;
  export let components;
  export let blok;

  storyblokInit({
    accessToken,
    bridge,
    use: accessToken ? [apiPlugin] : [],
    components,
    blok,
  });

  const storyblokApi = getStoryblokApi();
  const apiExists = !!(storyblokApi && typeof storyblokApi.get === "function");

  let story = getStoryblokBridge(43423, undefined);

  $: console.log($story);
</script>

<div>
  <h2>Svelte Testing Component</h2>
  <StoryblokComponent {blok} />
  <h3>
    <code>storyblokApi.get:</code>
    <span data-test="api">{apiExists}</span>
  </h3>
</div>
