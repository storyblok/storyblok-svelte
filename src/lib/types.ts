import type { SbSDKOptions } from '@storyblok/js';
import type { Component } from 'svelte';

export interface SbSvelteComponentsMap {
  [name: string]: Component;
}

export interface SbSvelteSDKOptions extends SbSDKOptions {
  components?: SbSvelteComponentsMap | CallableFunction;
}

export type {
  BlockTypes,
  ISbAlternateObject,
  ISbCache,
  ISbConfig,
  ISbManagmentApiResult,
  ISbResult,
  ISbStories,
  ISbStoriesParams,
  ISbStory,
  ISbStoryData,
  ISbStoryParams,
  MarkTypes,
  SbBlokData,
  SbBlokKeyDataTypes,
  SbSDKOptions,
  StoryblokBridgeConfigV2,
  StoryblokBridgeV2,
  StoryblokClient,
  StoryblokComponentType,
  StoryblokRichTextDocumentNode,
  StoryblokRichTextImageOptimizationOptions,
  StoryblokRichTextNode,
  StoryblokRichTextNodeResolver,
  StoryblokRichTextNodeTypes,
  StoryblokRichTextOptions,
  StoryblokRichTextResolvers,
  TextTypes,
  useStoryblokBridge,
} from '@storyblok/js';
