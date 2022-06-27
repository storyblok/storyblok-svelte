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
  <a href="https://www.npmjs.com/package/@storyblok/svelte" rel="nofollow">
    <img src="https://img.shields.io/npm/v/@storyblok/svelte/latest.svg?style=flat-square" alt="download storyblok svelte">
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

<!-- ## 🔎 TL; DR

`@storyblok/svelte` helps you connect your Svelte project to Storyblok by:

- Providing the `getStoryblokApi` function to interact with the Storyblok APIs, using the [storyblok-js-client](https://github.com/storyblok/storyblok-js-client)
- Enabling real time editing through the [Storyblok Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte)
- Providing the `StoryblokComponent` which allows you to connect your components to the Storyblok Visual Editor -->

## 🚀 Usage

> If you are first-time user of the Storyblok, read the [Getting Started](https://www.storyblok.com/tp/add-a-headless-cms-to-svelte-in-5-minutes?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte) guide to get a project ready in less than 5 minutes.

### Installation

Install `@storyblok/svelte`

```bash
npm install @storyblok/svelte
# yarn add @storyblok/svelte
```

Initialize the library in your application (usually in `main.js`) by adding the `apiPlugin` and the [access token](https://www.storyblok.com/docs/api/content-delivery/v2?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte) of your Storyblok space:

```js
import App from "./App.svelte";
import { storyblokInit, apiPlugin } from "@storyblok/svelte";

storyblokInit({
  accessToken: "<your-token>",
  // bridge: false,
  // apiOptions: {  },
  use: [apiPlugin],
  components: {
    teaser: Teaser,
  },
});
```

> Add all your components to the components object in the storyblokInit function. You can load all of them at the same time by adding them to the list.

Now, all features are enabled for you: the _Api Client_ for interacting with [Storyblok CDN API](https://www.storyblok.com/docs/api/content-delivery/v2?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte), and _Storyblok Bridge_ for [real-time visual editing experience](https://www.storyblok.com/docs/guide/essentials/visual-editor?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte).

> You can enable/disable some of these features if you don't need them, so you save some KB. Please read the "Features and API" section

### From a CDN

Install the file from the CDN and access the methods via `window.storyblokSvelte`:

```html
<script src="https://unpkg.com/@storyblok/svelte"></script>
```

## Getting started

### 1. Fetching Content

Use the `getStoryblokApi()` gets your stories from the Storyblok CDN API:

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

> Note: you can skip using `storyblokApi` if you prefer your own method or function to fetch your data.

### 2. Listen to Storyblok Visual Editor events

Use `useStoryBridge` to get the updated story every time a change event is triggered from the Visual Editor. You need to pass the story id as first param, and a callback function as second param to update the new story:

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
});
```

### 3. Link your components to Storyblok Visual Editor

In order to link the storyblok components, you have to

- Load them in components when calling `storyblokInit`

- Use the `storyblokEditable` action on the root element of each component

```html
<div use:storyblokEditable={blok} / >
```

- Use the `StoryblokComponent` to load them by passing the blok property

```html
<StoryblokComponent {blok} />
```

> The `blok` is the actual blok data coming from [Storblok's Content Delivery API](https://www.storyblok.com/docs/api/content-delivery/v2?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte).

### Features and API

You can **choose the features to use** when you initialize the plugin. In that way, you can improve Web Performance by optimizing your page load and save some bytes.

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

For background information on the [Storyblok JS Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte), please check out documentation.

### Compatibility

This plugin is for Svelte. Thus, it supports the [same browsers as Svelte 3](https://github.com/sveltejs/svelte/issues/558). In short: all modern browsers and IE10+.

## Troubleshooting

### Working with a Component Library

When working with a component library, create an alias pointing '@storyblok/svelte' to './node_modules/@storyblok/svelte'. This will ensure the imported module will use the local version of storyblok. In your `svelte.config.js`, include:

```js
kit: {
		alias: {
			'@storyblok/svelte': './node_modules/@storyblok/svelte'
		},

```

Any module importing @storyblok/svelte will now get it from the aliased location. For more information and alternatives to this solution, please see [npm link, peerDependencies and webpack](https://penx.medium.com/managing-dependencies-in-a-node-package-so-that-they-are-compatible-with-npm-link-61befa5aaca7).

Another option might also be using npm / yarn workspaces.

## 🔗 Related Links

- **[Add a headless CMS to Svelte in 5 minutes](https://www.storyblok.com/tp/add-a-headless-cms-to-svelte-in-5-minutes?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte)**: Quick-start guide on getting up and running with Storyblok and Vue.
- **[Storyblok CLI](https://github.com/storyblok/storyblok)**: A simple CLI for scaffolding Storyblok projects and fieldtypes.
- [Svelte Documentation](https://svelte.dev/docs)

## ℹ️ More Resources

### Support

- Bugs or Feature Requests? [Submit an issue](/../../issues/new).
- Do you have questions about Storyblok or you need help? [Join our Discord Community](https://discord.gg/jKrbAMz).

### Contributing

Please see our [contributing guidelines](https://github.com/storyblok/.github/blob/master/contributing.md) and our [code of conduct](https://www.storyblok.com/trust-center#code-of-conduct?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte).
This project uses [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generate new versions by using commit messages and we use the [Angular Convention](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#) to naming the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.
