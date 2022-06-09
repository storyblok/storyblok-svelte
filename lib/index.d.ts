/// <reference types="svelte/types/runtime/ambient" />
import type { SbBlokData, SbSDKOptions, StoryblokClient } from "@storyblok/js";
import type { SvelteComponent, SvelteComponentTyped } from "svelte";

export declare const storyblokEditable: (node: HTMLElement, value: SbBlokData) => {
    update(newValue: SbBlokData): void;
};
export declare const useStoryblokApi: () => StoryblokClient;
export { useStoryblokApi as getStoryblokApi };
export declare const storyblokInit: (options: SbSvelteSDKOptions) => void;
export declare const getComponent: (componentName: string) => SbSvelteComponent;


export declare type SbSvelteComponent = typeof SvelteComponent;
export interface SbSvelteComponentsMap {
    [name: string]: SbSvelteComponent;
}
export interface SbSvelteSDKOptions extends SbSDKOptions {
    components: SbSvelteComponentsMap;
}

interface StoryblokComponentProps {
    blok: SbBlokData;
}

export declare class StoryblokComponent extends SvelteComponentTyped<StoryblokComponentProps> {
}
export type { AlternateObject, Richtext, RichtextInstance, SbBlokData, SbBlokKeyDataTypes, SbSDKOptions, Stories, StoriesParams, Story, StoryData, StoryParams, StoryblokBridgeConfigV2, StoryblokBridgeV2, StoryblokCache, StoryblokCacheProvider, StoryblokClient, StoryblokConfig, StoryblokManagmentApiResult, StoryblokResult } from "@storyblok/js";
export { apiPlugin, useStoryblokBridge} from "@storyblok/js"