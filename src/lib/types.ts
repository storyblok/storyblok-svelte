import type { SbSDKOptions } from '@storyblok/js';
import type { Component } from 'svelte';

export interface SbSvelteComponentsMap {
  [name: string]: Component;
}

export interface SbSvelteSDKOptions extends SbSDKOptions {
  components?: SbSvelteComponentsMap | CallableFunction;
}

export type {
  ISbAlternateObject,
  ISbCache,
  ISbConfig,
  ISbManagmentApiResult,
  ISbResult,
  ISbRichtext,
  ISbStories,
  ISbStoriesParams,
  ISbStory,
  ISbStoryData,
  ISbStoryParams,
  RichTextResolver,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbSDKOptions,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokClient,
  StoryblokComponentType,
  useStoryblokBridge,
} from '@storyblok/js';
