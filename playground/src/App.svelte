<script>
  import { onMount } from "svelte";
  import {
    useStoryblokApi,
    useStoryblokBridge,
    StoryblokComponent,
  } from "@storyblok/svelte";

  let story = null;

  onMount(async () => {
    const { data } = await useStoryblokApi().get("cdn/stories/svelte", {
      version: "draft",
    });
    story = data.story;

    useStoryblokBridge(data.story.id, (newStory) => (story = newStory));
  });
</script>

<div>
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
