<script>
  import { useStoryblokApi, useStoryblokBridge, getComponent } from "@storyblok/svelte";

  const sbApi = useStoryblokApi();
  let story = null;

  async function fetchStory() {
    const { data } = await sbApi.get("cdn/stories/home", { version: "draft" });
    story = data.story;
    useStoryblokBridge(data.story.id, (newStory) => {
      story = newStory;
    });
  }

  fetchStory();
</script>

<main>
  {#if story}
    {#each story.content.body as blok}
      <svelte:component this={getComponent(blok.component)} {blok} />
    {/each}
  {/if}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
