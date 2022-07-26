import {
  storyblokEditable as sbEdit,
  storyblokInit as sbInit,
} from "@storyblok/js";
export { useStoryblokBridge, apiPlugin, renderRichText } from "@storyblok/js";

import type {
  SbSvelteSDKOptions,
  SbSvelteComponentsMap,
  StoryblokClient,
  SbBlokData,
} from "./types";

export const storyblokEditable = (node: HTMLElement, value: SbBlokData) => {
  const updateDom = (value: SbBlokData) => {
    const options = sbEdit(value);
    if (options["data-blok-c"]) {
      node.setAttribute("data-blok-c", options["data-blok-c"]);
      node.setAttribute("data-blok-uid", options["data-blok-uid"]);
      node.classList.add("storyblok__outline");
    }
  };

  updateDom(value); // when is mounted

  return {
    update(newValue: SbBlokData) {
      // when value changes
      updateDom(newValue);
    },
  };
};

let storyblokApiInstance: StoryblokClient = null;
export const useStoryblokApi = (): StoryblokClient => {
  if (!storyblokApiInstance) {
    console.log(
      `You can't use getStoryblokApi if you're not loading apiPlugin.`
    );
  }
  return storyblokApiInstance;
};

export { useStoryblokApi as getStoryblokApi };

let componentsMap: SbSvelteComponentsMap = null;

export const storyblokInit = (options: SbSvelteSDKOptions) => {
  const { storyblokApi } = sbInit(options);
  storyblokApiInstance = storyblokApi;
  componentsMap = options.components || {};
};

export const getComponent = (componentName: string) => {
  const component = componentsMap[componentName];

  if (!component) {
    console.error(`You didn't load the ${componentName} component. Please load it in storyblokInit. For example:
storyblokInit({
    accessToken: "<your-token>",
    components: {
      "teaser": Teaser
    }
})
`);
  }

  return component;
};

export * from "./types";
export { default as StoryblokComponent } from "./StoryblokComponent.svelte";
