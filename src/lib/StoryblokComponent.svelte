<script>
  import { getComponent } from './index';

  const { blok, ...rest } = $props();

  if (!blok) {
    console.error('Please provide a \'blok\' property to the StoryblokComponent');
  }

  const component = $state(blok ? getComponent(blok.component) : null);
  const SvelteComponent = $derived(component);
</script>

{#if component}
  <SvelteComponent {blok} {...rest} />
{/if}
