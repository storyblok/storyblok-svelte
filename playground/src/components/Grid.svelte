<script>
  import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

  export let blok;
</script>

<div use:storyblokEditable={blok} class="flex py-8 mb-6">
  {#each blok.columns as blok}
    <div class="flex-auto px-6">
      <StoryblokComponent {blok} />
    </div>
  {/each}
</div>
