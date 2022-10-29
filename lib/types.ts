import type { SbSDKOptions } from "@storyblok/js";
import type { SvelteComponent } from "svelte";

export interface SbSvelteComponentsMap {
  [name: string]: typeof SvelteComponent;
}

export interface SbSvelteSDKOptions extends SbSDKOptions {
  components?: SbSvelteComponentsMap;
  callbackComponents?: CallableFunction;
}

export type {
  AlternateObject,
  Richtext,
  RichtextInstance,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbSDKOptions,
  Stories,
  StoriesParams,
  Story,
  StoryData,
  StoryParams,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokCache,
  StoryblokCacheProvider,
  StoryblokClient,
  StoryblokComponentType,
  StoryblokConfig,
  StoryblokManagmentApiResult,
  StoryblokResult,
  apiPlugin,
  useStoryblokBridge,
} from "@storyblok/js";
