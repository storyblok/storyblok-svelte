<script>
  import { getComponent } from "./index";
  export let blok;
  let resolvedComponent;

  const component = getComponent(blok.component);
  const loadComponent = async () => {
    const { default: loadedComponent } = await component();
    resolvedComponent = loadedComponent;
  };

  const isSvelteComponent = component.name.startsWith("Proxy");
  if (isSvelteComponent) resolvedComponent = component;
  else loadComponent();
</script>

<svelte:component this={resolvedComponent} {blok} {...$$restProps} />
