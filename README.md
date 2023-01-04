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

## 🚀 Usage

`@storyblok/svelte` helps you connect your Svelte project to Storyblok by:

- Providing the `getStoryblokApi` function to interact with the Storyblok APIs, using the [storyblok-js-client](https://github.com/storyblok/storyblok-js-client)
- Enabling real time editing through the [Storyblok Bridge](https://www.storyblok.com/docs/Guides/storyblok-latest-js?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte)
- Providing the `StoryblokComponent` which allows you to connect your components to the Storyblok Visual Editor

### Installation

Install `@storyblok/svelte`

```bash
npm install @storyblok/svelte
```

Please note that you have to use npm - unfortunately we are currently not supporting yarn or pnpm for this SDK.

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
  // if you are using a space located in US region
  // you have to use apiOptions.region:
  /*
    apiOptions: {
      region: "us" // region code here
    }
    */
});
```

Add all your components to the components object in the storyblokInit function. You can load all of them at the same time by adding them to the list.

⚠️ This SDK uses the Fetch API under the hood. If your environment doesn't support it, you need to install a polyfill like [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch). More info on [storyblok-js-client docs](https://github.com/storyblok/storyblok-js-client#fetch-use-polyfill-if-needed---version-5).

## ℹ️ More Resources

Please follow the step by step instructions available in [Ultimate Tutorial Series](https://www.storyblok.com/tp/the-storyblok-sveltekit-ultimate-tutorial). You can find all the different parts on this overview page and take it from here.
The parts are:

- Part 1: [Add a headless CMS to SvelteKit in 5 minutes](https://www.storyblok.com/tp/add-a-headless-cms-to-svelte-in-5-minutes) - [Source Code](https://github.com/storyblok/sveltekit-ultimate-tutorial-series/tree/part-1-sveltekit-ut)
- Part 2: [Render Storyblok Stories Dynamically in SvelteKit](https://www.storyblok.com/tp/render-storyblok-stories-dynamically-in-sveltekit) - [Source Code](https://github.com/storyblok/sveltekit-ultimate-tutorial-series/tree/part-2-sveltekit-ut)
- Part 3: [Create Dynamic Menus in Storyblok and SvelteKit](https://www.storyblok.com/tp/create-dynamic-menus-in-storyblok-and-sveltekit) - [Source Code](https://github.com/storyblok/sveltekit-ultimate-tutorial-series/tree/part-3-sveltekit-ut)
- Part 4: [Create Custom Components in Storyblok and SvelteKit](https://www.storyblok.com/tp/create-custom-components-in-storyblok-and-sveltekit) - [Source Code](https://github.com/storyblok/sveltekit-ultimate-tutorial-series/tree/part-4-sveltekit-ut)
- Part 5: [Create and Render Blog Articles in Storyblok and SvelteKit](https://www.storyblok.com/tp/create-and-render-blog-articles-in-storyblok-and-sveltekit) - [Source Code](https://github.com/storyblok/sveltekit-ultimate-tutorial-series/tree/part-5-sveltekit-ut)

### Support

- Bugs or Feature Requests? [Submit an issue](/../../issues/new).
- Do you have questions about Storyblok or you need help? [Join our Discord Community](https://discord.gg/jKrbAMz).

### Contributing

Please see our [contributing guidelines](https://github.com/storyblok/.github/blob/master/contributing.md) and our [code of conduct](https://www.storyblok.com/trust-center#code-of-conduct?utm_source=github.com&utm_medium=readme&utm_campaign=storyblok-svelte).
This project uses [semantic-release](https://semantic-release.gitbook.io/semantic-release/) for generate new versions by using commit messages and we use the [Angular Convention](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#) to naming the commits. Check [this question](https://semantic-release.gitbook.io/semantic-release/support/faq#how-can-i-change-the-type-of-commits-that-trigger-a-release) about it in semantic-release FAQ.
