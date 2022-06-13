<script lang="ts">
  import { getComponent } from "./index";
  import type { SbBlokData } from "./types";

  let component;
  export let blok: SbBlokData;

  if (blok) {
    component = getComponent(blok.component);
  } else {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
  }
</script>

<!-- svelte-ignore missing-declaration -->
<svelte:component this={component} {blok} {...$$restProps} />
