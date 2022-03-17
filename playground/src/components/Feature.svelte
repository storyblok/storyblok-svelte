<script>
  import { storyblokEditable } from "@storyblok/svelte";

  export let blok;
</script>

<div use:storyblokEditable={blok} class="py-2">
  <h1 class="text-lg">{blok.name}</h1>
</div>
