<script>
  import {
    storyblokEditable,
    StoryblokComponent,
    renderRichText,
  } from "@storyblok/svelte";

  let { blok } = $props();
  let resolvedRichText = $derived(renderRichText(blok.richText));
</script>

{#key blok}
  <div use:storyblokEditable={blok} class="px-6">
    {#each blok.body as bodyBlok}
      <StoryblokComponent blok={bodyBlok} />
    {/each}
    <div class="prose">{@html resolvedRichText}</div>
  </div>
{/key}
