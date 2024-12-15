import type { SbSDKOptions } from "@storyblok/js";
import type { Component } from "svelte";

export interface SbSvelteComponentsMap {
  [name: string]: Component;
}

export interface SbSvelteSDKOptions extends SbSDKOptions {
  components?: SbSvelteComponentsMap | CallableFunction;
}

export { apiPlugin } from "@storyblok/js";

export type {
  ISbAlternateObject,
  ISbRichtext,
  RichTextResolver,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbSDKOptions,
  ISbStories,
  ISbStoriesParams,
  ISbStory,
  ISbStoryData,
  ISbStoryParams,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  ISbCache,
  StoryblokClient,
  StoryblokComponentType,
  ISbConfig,
  ISbManagmentApiResult,
  ISbResult,
  useStoryblokBridge,
} from "@storyblok/js";
