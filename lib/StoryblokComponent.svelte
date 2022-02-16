<script>
  import { getComponent } from "./index";
  export let blok;
  let resolvedComponent;

  if (blok) {
    const component = getComponent(blok.component);
    if (component) {
      const loadComponent = async () => {
        const { default: loadedComponent } = await component();
        resolvedComponent = loadedComponent;
      };

      const isSvelteComponent = component.name.startsWith("Proxy");
      if (isSvelteComponent) resolvedComponent = component;
      else loadComponent();
    }
  } else {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
  }
</script>

<svelte:component this={resolvedComponent} {blok} {...$$restProps} />
