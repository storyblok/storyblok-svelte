<script>
  import {storyblokEditable} from '@storyblok/svelte';

  let blok = {
  _editable: `<!--#storyblok#{ "id": 12345, "uid": "fc34-uad1"}-->`,
};

</script>

<main>
  <h1 use:storyblokEditable={blok}><slot></slot></h1>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

</style>
