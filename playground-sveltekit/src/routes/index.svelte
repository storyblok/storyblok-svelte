<script context="module">
  import { getStoryblokApi } from "@storyblok/svelte";

  export async function load() {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/svelte", {
      version: "draft",
    });

    return {
      props: { story: data.story },
    };
  }
</script>

<script>
  import { onMount } from "svelte";
  import { useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte";

  export let story;

  onMount(() => {
    useStoryblokBridge(story.id, (newStory) => (story = newStory));
  });
</script>

<div>
  {#if story}
    <StoryblokComponent blok={story.content} />
  {/if}
</div>
