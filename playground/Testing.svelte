<script>
  import { onMount } from "svelte";
  import {
    storyblokInit,
    apiPlugin,
    useStoryblokApi,
    useStoryblokBridge,
    StoryblokComponent,
  } from "@storyblok/svelte";
  import Teaser from "./Teaser.svelte";

  storyblokInit({
    accessToken: "randomToken",
    use: [apiPlugin],
    components: {
      teaser: Teaser,
    },
  });

  const blok = {
    component: "teaser",
    headline: "Hello Svelte",
    _editable: `<!--#storyblok#{ "id": 12345, "uid": "fc34-uad1"}-->`,
  };

  const storyblokApi = useStoryblokApi();
  const apiExists = !!(storyblokApi && typeof storyblokApi.get === "function");

  onMount(() => useStoryblokBridge(43423, (newStory) => console.log(newStory)));
</script>

<div>
  <h2>Svelte Testing Component</h2>
  <div data-test="editable">
    <StoryblokComponent {blok} />
  </div>

  <h3>
    <code>storyblokApi.get:</code>
    <span data-test="api">{apiExists}</span>
  </h3>
</div>
