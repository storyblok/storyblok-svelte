<script>
  import FallbackComponent from "../FallbackComponent.svelte";
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
{#if component}
  <svelte:component this={component} {blok} {...$$restProps} />
{:else}
  <FallbackComponent {blok} />
{/if}
