<script>
  import { onMount } from "svelte";
  import {
    useStoryblokApi,
    useStoryblokBridge,
    StoryblokComponent,
  } from "@storyblok/svelte";

  let story = null;

  onMount(async () => {
    const sbApi = useStoryblokApi();
    const { data } = await sbApi.get("cdn/stories/home", {
      version: "draft",
    });
    story = data.story;

    useStoryblokBridge(data.story.id, (newStory) => (story = newStory));
  });
</script>

<main>
  {#if story}
    {#each story.content.body as blok}
      <StoryblokComponent {blok} />
    {/each}
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
