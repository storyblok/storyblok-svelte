<script lang="ts">
  import { onMount } from "svelte";
  import { useStoryblokBridge, StoryblokComponent } from "@storyblok/svelte";

  let { data = $bindable() } = $props();

  onMount(() => {
    if (data.story) {
      useStoryblokBridge(data.story.id, (newStory) => (data.story = newStory));
    }
  });
</script>

<div>
  {#if data.story}
    <StoryblokComponent blok={data.story.content} />
  {/if}
</div>
