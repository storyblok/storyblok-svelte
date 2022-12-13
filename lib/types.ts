import type { SbSDKOptions } from "@storyblok/js";
import type { SvelteComponent } from "svelte";

export interface SbSvelteComponentsMap {
  [name: string]: typeof SvelteComponent;
}

export interface SbSvelteSDKOptions extends SbSDKOptions {
  components?: SbSvelteComponentsMap | CallableFunction;
}

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
  // StoryblokCacheProvider,
  StoryblokClient,
  StoryblokComponentType,
  ISbConfig,
  ISbManagmentApiResult,
  ISbResult,
  apiPlugin,
  useStoryblokBridge,
} from "@storyblok/js";
