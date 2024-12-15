<script>
  import { storyblokEditable } from "@storyblok/svelte";

  let { blok } = $props();
</script>

<div
  use:storyblokEditable={blok}
  class="py-8 mb-6 text-5xl font-bold text-center"
>
  {blok.headline}
</div>
