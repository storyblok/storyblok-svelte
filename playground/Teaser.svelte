<script>
  import { storyblokEditable } from "@storyblok/svelte";
  export let blok;
</script>

<div use:storyblokEditable={blok} data-test="teaser">
  {blok.headline}
</div>
