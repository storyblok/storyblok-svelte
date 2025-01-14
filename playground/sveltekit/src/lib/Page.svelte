<script lang="ts">
  import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte';

  let { blok } = $props();
</script>

<div use:storyblokEditable={blok} class="container">
  {#each blok.body as item}
    <div>
      <StoryblokComponent blok={item} />
    </div>
  {/each}
</div>
