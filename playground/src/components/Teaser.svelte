<script>
  import { storyblokEditable } from "@storyblok/svelte";

  export let blok;
</script>

<div
  use:storyblokEditable={blok}
  data-test="teaser"
  class="py-8 mb-6 text-5xl font-bold text-center"
>
  {blok.headline}
</div>
