<script>
  import { getComponent } from "./index";
  export let blok;
  let component;

  if (blok) {
    component = getComponent(blok.component);
  } else {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
  }
</script>

<svelte:component this={component} {blok} {...$$restProps} />
