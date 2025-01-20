<script lang="ts">
  import { storyblokEditable } from '@storyblok/svelte';

  let { blok } = $props();
</script>

<article use:storyblokEditable={blok}>
  {blok.name}
</article>
