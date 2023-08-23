<script>
  import FallbackComponent from "../FallbackComponent.svelte";
  import CustomFallbackComponent from "../CustomFallbackComponent.svelte";
  import { getComponent } from "./index";

  let component;
  export let blok;
  export let options;

  if (blok) {
    component = getComponent(blok.component);
  } else {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
  }
</script>

{#if component}
  <svelte:component this={component} {blok} {...$$restProps} />
  {#if CustomFallbackComponent}
    <CustomFallbackComponent {blok} />;
  {/if}
{:else if options.enableFallbackComponent}
  <FallbackComponent {blok} />
{:else if !options.enableFallbackComponent}
  console.error("Component could not be found for blok "${blok.component}"! Is
  it defined in +layout.js?")
{/if}
