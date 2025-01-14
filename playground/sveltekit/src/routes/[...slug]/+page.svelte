<script lang="ts">
  import { StoryblokComponent, useStoryblokBridge } from '@storyblok/svelte';
  import type { PageData } from './$types';
  import { onMount } from 'svelte';

  let { data }: { data: PageData } = $props();
  let story = $state(data.story);
  let loaded = $state(false);

  onMount(() => {
    loaded = true;
    if (story) {
      useStoryblokBridge(
        data.story.id,
        (newStory) => story = newStory,
        {
          preventClicks: true,
          resolveLinks: 'url',
        }
      );
    }
  });
</script>

<main>
  {#key story}
    <h1>Welcome to StoryblokKit</h1>

    {#if loaded && story && story.content}
      {#each story.content.body as blok}
        <div>
          <StoryblokComponent blok={blok} />
        </div>
      {/each}
    {/if}
  {/key}
</main>
