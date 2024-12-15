<script>
  import { storyblokEditable, StoryblokComponent } from "@storyblok/svelte";

  let { blok } = $props();
</script>

<div
  use:storyblokEditable={blok}
  class="container mx-auto grid md:grid-cols-3 gap-16 place-items-center"
>
  {#each blok.columns as blok}
    <div class="flex-auto px-6">
      <StoryblokComponent {blok} />
    </div>
  {/each}
</div>
