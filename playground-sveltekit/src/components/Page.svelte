<script>
  import {
    storyblokEditable,
    StoryblokComponent,
    renderRichText,
  } from "@storyblok/svelte";
  export let blok;
  $: resolvedRichText = renderRichText(blok.richText);
</script>

{#key blok}
  <div use:storyblokEditable={blok} class="px-6">
    {#each blok.body as blok}
      <StoryblokComponent {blok} />
    {/each}
    <div class="prose">{@html resolvedRichText}</div>
  </div>
{/key}
