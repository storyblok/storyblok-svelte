import {
  storyblokEditable as sbEdit,
  storyblokInit as sbInit,
  useStoryblokBridge,
} from "@storyblok/js";
import type {
  StoryblokBridgeConfigV2,
  StoryblokComponentType,
  StoryData,
} from "@storyblok/js";

import { writable } from "svelte/store";

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

export const getStoryblokBridge = <
  T extends StoryblokComponentType<string> = any
>(
  id: number,
  initialValue: StoryData<T>,
  options: StoryblokBridgeConfigV2
) => {
  const { subscribe } = writable<StoryData<T>>(initialValue, (set) => {
    // Use the useStoryblokBridge function to set the store value on change
    const unsubscribe = useStoryblokBridge<T>(
      id,
      (newStory) => {
        set(newStory);
      },
      options
    );

    return unsubscribe;
  });

  // Return only the subscribe method, so it can't be written to
  return { subscribe };
};

export * from "./types";
export { default as StoryblokComponent } from "./StoryblokComponent.svelte";
