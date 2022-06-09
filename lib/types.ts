import type { SbBlokData, SbSDKOptions } from "@storyblok/js";
import type { SvelteComponent, SvelteComponentTyped } from "svelte";

export type SbSvelteComponent = typeof SvelteComponent;

export interface SbSvelteComponentsMap {
  [name: string]: SbSvelteComponent;
}

export interface SbSvelteSDKOptions extends SbSDKOptions {
  components: SbSvelteComponentsMap;
}

interface StoryblokComponentProps {
  blok: SbBlokData
}

export interface StoryblokComponentType extends SvelteComponentTyped<StoryblokComponentProps> {}


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
  StoryblokConfig,
  StoryblokManagmentApiResult,
  StoryblokResult,
  apiPlugin,
  useStoryblokBridge,
} from "@storyblok/js";
