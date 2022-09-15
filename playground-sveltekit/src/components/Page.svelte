<script>
  import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

  export let blok;
</script>

{#key blok}
  <div use:storyblokEditable={blok} class="px-6">
    {#each blok.body as blok}
      <StoryblokComponent {blok} />
    {/each}
  </div>
{/key}
