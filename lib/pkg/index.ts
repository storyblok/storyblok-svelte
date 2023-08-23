import {
  storyblokEditable as sbEdit,
  storyblokInit as sbInit,
} from "@storyblok/js";
export {
  useStoryblokBridge,
  apiPlugin,
  renderRichText,
  RichTextSchema,
} from "@storyblok/js";

import type {
  SbSvelteSDKOptions,
  SbSvelteComponentsMap,
  StoryblokClient,
  SbBlokData,
} from "./types";
import type { SvelteComponent } from "svelte";

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

let componentsMap: SbSvelteComponentsMap | CallableFunction = null;
let fallbackComponent: boolean = false;
let customFallbackComponent: SvelteComponent<any> = null;

export const storyblokInit = (options: SbSvelteSDKOptions) => {
  const { storyblokApi } = sbInit(options);
  storyblokApiInstance = storyblokApi;
  componentsMap = options.components || {};
  fallbackComponent = options.fallbackComponent;
  customFallbackComponent = options.customFallbackComponent;
};

export const getComponent = (componentName: string) => {
  let component = null;
  component =
    typeof componentsMap === "function"
      ? componentsMap()[componentName]
      : componentsMap[componentName];

  return component;
};

export const getFallbackComponent = () => {
  return fallbackComponent;
};

export const getCustomFallbackComponent = () => {
  return customFallbackComponent;
};

export * from "./types";
export { default as StoryblokComponent } from "./StoryblokComponent.svelte";
