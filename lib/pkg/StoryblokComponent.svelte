<script>
  import FallbackComponent from "../FallbackComponent.svelte";
  import CustomFallbackComponent from "../CustomFallbackComponent.svelte";
  import {
    getComponent,
    getFallbackComponent,
    getCustomFallbackComponent,
  } from "./index";

  let component;
  export let blok;

  if (blok) {
    component = getComponent(blok.component);
  } else {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
  }
</script>

{#if component}
  <svelte:component this={component} {blok} {...$$restProps} />
{:else if getFallbackComponent() && getCustomFallbackComponent()}
  <CustomFallbackComponent {blok} />
{:else if getFallbackComponent()}
  <FallbackComponent {blok} />
{:else}
  {console.error(
    `Component could not be found for blok "${blok.component}"! Is it defined in +layout.js?`
  )}
{/if}
