<script lang="ts">
  import { onMount } from "svelte";
  import {
    getStoryblokApi,
    useStoryblokBridge,
    StoryblokComponent,
  } from "@storyblok/svelte";

  let story = $state(null);

  onMount(async () => {
    const sbApi = getStoryblokApi();
    const { data } = await sbApi.get("cdn/stories/svelte", {
      version: "draft",
    });
    story = data.story;

    useStoryblokBridge(data.story.id, (newStory) => (story = newStory));
  });
</script>

<div>
  <h1>Hey</h1>
  {#if story}
    <StoryblokComponent blok={story.content} />
  {/if}
</div>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
