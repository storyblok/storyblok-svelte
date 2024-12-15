<script>
  import { storyblokEditable } from "@storyblok/svelte";

  let { blok } = $props();
</script>

<div use:storyblokEditable={blok} class="py-2">
  <h1 class="text-lg">{blok.name}</h1>
</div>
