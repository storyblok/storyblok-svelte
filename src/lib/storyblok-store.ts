import { storyblokInit as sbInit } from '@storyblok/js';
import type {
  SbSvelteComponentsMap,
  SbSvelteSDKOptions,
  StoryblokClient,
} from './types';

/**
 * Creates a singleton store for managing Storyblok state
 */
const createStoryblokStore = () => {
  let api: StoryblokClient | null = null;
  let components: SbSvelteComponentsMap | CallableFunction = {};

  /**
   * Retrieves the Storyblok API instance
   */
  const getApi = (): StoryblokClient => {
    if (!api) {
      console.error('Storyblok API not initialized. Make sure to load apiPlugin.');
    }
    return api!;
  };

  /**
   * Initializes the Storyblok SDK with provided options
   */
  const init = (options: SbSvelteSDKOptions) => {
    const { storyblokApi } = sbInit(options);
    api = storyblokApi ?? api;
    components = options.components ?? {};
  };

  /**
   * Retrieves a component from the registered components map
   */
  const getComponent = (componentName: string) => {
    const resolvedComponent = typeof components === 'function'
      ? components()[componentName]
      : components[componentName];

    if (!resolvedComponent) {
      console.error(
        `Component "${componentName}" not found. Please register it in storyblokInit:\n`
        + `storyblokInit({
          accessToken: "<your-token>",
          components: {
            "${componentName}": YourComponent
          }
        })`,
      );
    }

    return resolvedComponent;
  };

  return {
    init,
    getApi,
    getComponent,
  };
};

// Create singleton instance
const storyblokStore = createStoryblokStore();

// Export store methods
export const {
  init: storyblokInit,
  getApi: getStoryblokApi,
  getComponent,
} = storyblokStore;
