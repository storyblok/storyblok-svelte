<script>
  import { getComponent } from "./index";
  import { onMount } from "svelte";

  let component;
  export let blok;

  onMount(() => {
    if (blok) {
      component = getComponent(blok.component);
    } else {
      console.error(
        "Please provide a 'blok' property to the StoryblokComponent"
      );
    }
  });
</script>

<!-- svelte-ignore missing-declaration -->
{#if component}
  <svelte:component this={component} {blok} {...$$restProps} />
{/if}
