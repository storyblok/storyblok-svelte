<script>
  import { onMount } from "svelte";
  import {
    storyblokInit,
    apiPlugin,
    getStoryblokApi,
    useStoryblokBridge,
    StoryblokComponent,
  } from "./pkg";

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

  onMount(() => useStoryblokBridge(43423, (newStory) => console.log(newStory)));
</script>

<div>
  <h2>Svelte Testing Component</h2>
  <StoryblokComponent {blok} />
  <h3>
    <code>storyblokApi.get:</code>
    <span data-test="api">{apiExists}</span>
  </h3>
</div>
