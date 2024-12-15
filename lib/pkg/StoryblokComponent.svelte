<script>
  import { getComponent } from "./index";

  let component = $state();
  let { blok, ...rest } = $props();

  if (blok) {
    component = getComponent(blok.component);
  } else {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
  }
  const SvelteComponent = $derived(component);
</script>
{#if component}
  <SvelteComponent {blok} {...rest} />
{/if}

