<script>
  import { getComponent } from "./index";

  let component;
  export let blok;

  if (blok) {
    component = getComponent(blok.component);
  } else {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
  }
</script>

<!-- svelte-ignore missing-declaration -->
<svelte:component this={component} {blok} {...$$restProps} />
