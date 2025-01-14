<script>
  import { getComponent } from './index';

  /**
   * @type {any}
   */
  let component;
  // eslint-disable-next-line import/no-mutable-exports
  export let blok;

  if (blok) {
    component = getComponent(blok.component);
  }
  else {
    console.error('Please provide a \'blok\' property to the StoryblokComponent');
  }
</script>

<svelte:component this={component} {blok} {...$$restProps} />
