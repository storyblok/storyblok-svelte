<div align="center">
	<a href="https://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte"  align="center">
		<img src="https://a.storyblok.com/f/88751/1776x360/783760dfac/storybloksvelte.png"  alt="Storyblok Logo">
	</a>
	<h1 align="center"><strong>@storyblok/svelte</strong></h1>
  <p align="center">
    The Svelte SDK you need to interact with <a href="http://www.storyblok.com?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte" target="_blank">Storyblok API</a> and enable the <a href="https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte" target="_blank">Real-time Visual Editing Experience</a>.
  </p>
  <br />
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/@storyblok/svelte">
    <img src="https://img.shields.io/npm/v/@storyblok/svelte/latest.svg?style=flat-square" alt="npm package" />
  </a>
</p>

<p align="center">
  <a href="https://discord.gg/jKrbAMz">
   <img src="https://img.shields.io/discord/700316478792138842?label=Join%20Our%20Discord%20Community&style=appveyor&logo=discord&color=09b3af">
   </a>
  <a href="https://twitter.com/intent/follow?screen_name=storyblok">
    <img src="https://img.shields.io/badge/Follow-%40storyblok-09b3af?style=appveyor&logo=twitter" alt="Follow @Storyblok" />
  </a>
</p>
<p align="center">
  <a href="https://app.storyblok.com/#!/signup?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte">
    <img src="https://img.shields.io/badge/Try%20Storyblok-Free-09b3af?style=appveyor&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABGdBTUEAALGPC/xhBQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAHqADAAQAAAABAAAAHgAAAADpiRU/AAACRElEQVRIDWNgGGmAEd3D3Js3LPrP8D8WXZwSPiMjw6qvPoHhyGYwIXNAbGpbCjbzP0MYuj0YFqMroBV/wCxmIeSju64eDNzMBJUxvP/9i2Hnq5cM1devMnz984eQsQwETeRhYWHgIcJiXqC6VHlFBjUeXgav40cIWkz1oLYXFmGwFBImaDFBHyObcOzdW4aSq5eRhRiE2dgYlpuYoYSKJi8vw3GgWnyAJIs/AuPu4scPGObd/fqVQZ+PHy7+6udPOBsXgySLDfn5GRYYmaKYJcXBgWLpsx8/GPa8foWiBhuHJIsl2DkYQqWksZkDFgP5PObcKYYff//iVAOTIDlx/QPqRMb/YSYBaWlOToZIaVkGZmAZSQiQ5OPtwHwacuo4iplMQEu6tXUZMhSUGDiYmBjylFQYvv/7x9B04xqKOnQOyT5GN+Df//8M59ASXKyMHLoyDD5JPtbj42OYrm+EYgg70JfuYuIoYmLs7AwMjIzA+uY/zjAnyWJpDk6GOFnCvrn86SOwmsNtKciVFAc1ileBHFDC67lzG10Yg0+SjzF0ownsf/OaofvOLYaDQJoQIGix94ljv1gIZI8Pv38zPvj2lQWYf3HGKbpDCFp85v07NnRN1OBTPY6JdRSGxcCw2k6sZuLVMZ5AV4s1TozPnGGFKbz+/PE7IJsHmC//MDMyhXBw8e6FyRFLv3Z0/IKuFqvFyIqAzd1PwBzJw8jAGPfVx38JshwlbIygxmYY43/GQmpais0ODDHuzevLMARHBcgIAQAbOJHZW0/EyQAAAABJRU5ErkJggg==" alt="Try @Storyblok" />
  </a>
</p>

## Kickstart a new project
Are you eager to dive into coding? **[Follow these steps to kickstart a new project with Storyblok and Svelte](https://www.storyblok.com/technologies#sveltekit?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte)**, and get started in just a few minutes!

## Ultimate Tutorial
Are you looking for a hands-on, step-by-step tutorial? The **[SvelteKit Ultimate Tutorial](https://www.storyblok.com/tp/the-storyblok-sveltekit-ultimate-tutorial?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte)** has you covered! It provides comprehensive instructions on building a complete, multilingual website using Storyblok and SvelteKit from start to finish.

## Compatibility

| Version to install                                                                                                                      | Support                                              |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| Latest (from v3) `@storyblok/svelte`                                                                                                    | Modern browsers + Node 18+                           |
| Latest (from v3) `@storyblok/svelte` <br> + Fetch polyfill like [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) | Browsers and Node versions with no Fetch API support |
| [Version 2](https://github.com/storyblok/@storyblok/svelte/tree/v2.5.0) `@storyblok/svelte@2`                                           | Internet Explorer support                            |

## Usage

`@storyblok/svelte` helps you connect your Svelte project to Storyblok by:

- Providing the `getStoryblokApi` function to interact with the Storyblok APIs, using the [storyblok-js-client](https://github.com/storyblok/storyblok-js-client);
- Enabling real-time editing through the [Storyblok Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte);
- Providing the `StoryblokComponent`, which allows you to connect your components to the [Storyblok Visual Editor](https://www.storyblok.com/docs/editor-guides/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte).

### Installation

Install `@storyblok/svelte`

```bash
npm install @storyblok/svelte
```

Please note that you have to use `npm` - unfortunately, we are currently not supporting `yarn` or `pnpm` for this SDK.

Initialize the library in your application by adding the `apiPlugin` and the [access token](https://www.storyblok.com/docs/api/content-delivery/v2?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte) of your Storyblok space:

```js
import App from "./App.svelte";
import { storyblokInit, apiPlugin } from "@storyblok/svelte";

storyblokInit({
  accessToken: "<your-token>",
  // bridge: false,
  use: [apiPlugin],

  components: {
    teaser: Teaser,
  },
});
```

The best place to initialize the Storyblok library is in the `main.ts.` or `main.js` file if you are using `svelte` or in the `load()` function in the `src/routes/+layout.js` file if you are using `SvelteKit`.

List all your components to the components object in the storyblokInit function. You can load all of them by adding them to the list.

#### Region parameter

Possible values:

- `eu` (default): For spaces created in the EU
- `us`: For spaces created in the US
- `ap`: For spaces created in Australia
- `ca`: For spaces created in Canada
- `cn`: For spaces created in China

Full example for a space created in the US:

```js
  {
    accessToken: "<your-access-token>",
    apiOptions: {
      region: "us"
    }
  }
```

> **Note**
> For spaces created in the United States or China, the `region` parameter **must** be specified.

## Getting started

### 1. Fetching Content

Use the `getStoryblokApi`()` to get your stories from the Storyblok CDN API:

```html
<script>
  import { onMount } from "svelte";
  import { getStoryblokApi } from "@storyblok/svelte";
  onMount(async () => {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/home", {
      version: "draft",
    });
  });
</script>
```

> **Note**
> You can skip using `storyblokApi` if you prefer your own method or function to fetch your data.

### 2. Listen to Storyblok Visual Editor events

Use `useStoryBridge` to get the updated story every time a change event is triggered from the Visual Editor. You need to pass the story id as the first param, and a callback function as the second param to update the new story:

```html
<script>
  import { onMount } from "svelte";
  import { getStoryblokApi, useStoryblokBridge } from "@storyblok/svelte";
  let story = null;
  onMount(async () => {
    const storyblokApi = getStoryblokApi();
    const { data } = await storyblokApi.get("cdn/stories/home", {
      version: "draft",
    });
    story = data.story;
    useStoryblokBridge(story.id, (newStory) => (story = newStory));
  });
</script>
```

You can pass [Bridge options](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte) as a third parameter as well:

```js
useStoryblokBridge(story.id, (newStory) => (story = newStory), {
  resolveRelations: ["Article.author"],
  resolveLinks: "url",
});
```

### 3. Link your components to Storyblok Visual Editor

To link the Storyblok components, you have to

- Load them in components when calling `storyblokInit`

- Use the `storyblokEditable` action on the root element of each component

```html
<div use:storyblokEditable={blok} / >
```

- Use the `StoryblokComponent` to load them by passing the `blok` property

```html
<StoryblokComponent {blok} />
```

> The `blok` is the actual blok data coming from [Storyblok's Content Delivery API](https://www.storyblok.com/docs/api/content-delivery/v2?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte).

### Features and API

You can **choose the features to use** when you initialize the plugin. In that way, you can improve web performance by optimizing your page load and saving some bytes.

#### Storyblok API

You can use an `apiOptions` object. This is passed down to the [storyblok-js-client config object](https://github.com/storyblok/storyblok-js-client#class-storyblok):

```js
storyblokInit({
  accessToken: "<your-token>",
  apiOptions: {
    //storyblok-js-client config object
    cache: { type: "memory" },
  },
  use: [apiPlugin],
});
```

If you prefer to use your own fetch method, just remove the `apiPlugin` and `storyblok-js-client` won't be added to your application. You can find out more about our [Content Delivery API](https://www.storyblok.com/docs/api/content-delivery?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte) in the documentation.

#### Storyblok Bridge

You can conditionally load it by using the `bridge` option. Very useful if you want to disable it in production:

```js
storyblokInit({
  bridge: process.env.NODE_ENV !== "production",
});
```

Keep in mind you have still access to the raw `window.StoryblokBridge`:

```js
const sbBridge = new window.StoryblokBridge(options);
sbBridge.on(["input", "published", "change"], (event) => {
  // ...
});
```

For background information on the [Storyblok JS Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte), please check out the documentation.

### Rendering Rich Text

You can easily render rich text by using the `renderRichText` function that comes with `@storyblok/svelte` and Svelte `{@html htmlstring}` directive.

```html
<script>
  import { renderRichText } from "@storyblok/svelte";
  export let blok;
  $: articleHTML = renderRichText(blok.article);
</script>

<div class="prose">{@html articleHTML}</div>
```

If you are allowing the content editors to add Blok (components like teaser, hero etc) into the rich text editor, you can also implement a specific logic for rendering correctly the components added to the rich text editor.
To achieve this, you have to obtain the schema definition from the RichTextSchema via cloning object. For cloning schema you can use the clone-deep library for example:

```
npm i clone-deep
```

You can set a **custom Schema and component resolver globally** at init time by using the `richText` init option:

```js
import { RichTextSchema, storyblokInit } from "@storyblok/svelte";
import cloneDeep from "clone-deep";
const mySchema = cloneDeep(RichTextSchema); // you can make a copy of the default RichTextSchema
// ... and edit the nodes and marks, or add your own.
// Check the base RichTextSchema source here https://github.com/storyblok/storyblok-js-client/blob/master/source/schema.js
storyblokInit({
  accessToken: "<your-token>",
  richText: {
    schema: mySchema,
    resolver: (component, blok) => {
      switch (component) {
        case "my-custom-component":
          return `<div class="my-component-class">${blok.text}</div>`;
        default:
          return "Resolver not defined";
      }
    },
  },
});
```

You can also set a **custom Schema and component resolver only once** by passing the options as the second parameter to `renderRichText` function:

```js
<script>
  import {
    RichTextSchema,
    storyblokEditable,
    StoryblokComponent,
    renderRichText,
  } from "@storyblok/svelte";
  import cloneDeep from "clone-deep";
  const mySchema = cloneDeep(RichTextSchema);
  export let blok;
  $: resolvedRichText = renderRichText(blok.richText, {
  schema: mySchema,
  resolver: (component, blok) => {
    switch (component) {
      case "teaser":
        console.log(blok); // for learning purpose
        return `<div class="my-component-class">${blok.headline}</div>`;
        break;
      default:
        return `Component ${component} not found`;
    }
  },
});
</script>
```

### Enabling SSL

For security reasons the Storyblok UI loads and embeds the frontend project that you are building with Svelte, via HTTPS protocol into Storyblok Visual Editor.

To enable the HTTPS protocol when you run `npm run dev`, you can install the `basicSsl` Vite plugin.

```
npm i @vitejs/plugin-basic-ssl
```

and, in the `vite.config.js` file be sure to load correctly the plugin, importing the plugin:

```
import basicSsl from '@vitejs/plugin-basic-ssl'
```

and then, activating the plugin in `plugins` configuration array:

```
    plugins: [sveltekit(), basicSsl()],
```

### Compatibility

This plugin is for Svelte. Thus, it supports the [same browsers as Svelte 3](https://github.com/sveltejs/svelte/issues/558). In short: all modern browsers and IE10+.

## Troubleshooting

### Working with a Component Library

When working with a component library, create an alias pointing '@storyblok/svelte' to './node_modules/@storyblok/svelte'. This will ensure the imported module will use the local version of Storyblok SDK. In your `vite.config.js`, include:

```js
import { sveltekit } from "@sveltejs/kit/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), basicSsl()],
  server: {
    https: true,
  },
  resolve: {
    alias: {
      "@storyblok/svelte": path.resolve(
        __dirname,
        "./node_modules/@storyblok/svelte"
      ),
    },
  },
};

export default config;
```

Another option might also be using npm / yarn workspaces.

## A note about Fetch API

⚠️ This SDK uses the Fetch API under the hood. If your environment doesn't support it, you need to install a polyfill like [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch). More info on [storyblok-js-client docs](https://github.com/storyblok/storyblok-js-client#fetch-use-polyfill-if-needed---version-5).

## The Storyblok JavaScript SDK Ecosystem

![A visual representation of the Storyblok JavaScript SDK Ecosystem](https://a.storyblok.com/f/88751/2400x1350/be4a4a4180/sdk-ecosystem.png/m/1200x0)

## Further Resources

- [Quick Start](https://www.storyblok.com/technologies?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte)
- [API Documentation](https://www.storyblok.com/docs/api?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte)
- [Developer Tutorials](https://www.storyblok.com/tutorials?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte)
- [Developer Guides](https://www.storyblok.com/docs/guide/introduction?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte)
- [FAQs](https://www.storyblok.com/faqs?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte)

## Support

- Bugs or Feature Requests? [Submit an issue](/../../issues/new).
- Do you have questions about Storyblok or do you need help? [Join our Discord Community](https://discord.gg/jKrbAMz).

## Contributing

Please see our [contributing guidelines](https://github.com/storyblok/.github/blob/master/contributing.md) and our [code of conduct](https://www.storyblok.com/trust-center#code-of-conduct?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte).
This project uses [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generating new versions by using commit messages and we use the [Angular Convention](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#) to name the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.
