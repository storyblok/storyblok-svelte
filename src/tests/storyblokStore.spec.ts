import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getComponent, getStoryblokApi, storyblokInit } from '../lib/storyblokStore';
import type { SbSvelteSDKOptions } from '../lib/types';

// Mock @storyblok/js
vi.mock('@storyblok/js', () => ({
  storyblokInit: vi.fn(() => ({
    storyblokApi: { test: 'api' },
  })),
}));

describe('storyblokStore', () => {
  // Mock console.error to prevent noise in tests
  const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

  beforeEach(() => {
    // Clear console.error mock calls between tests
    consoleError.mockClear();
  });

  describe('storyblokInit', () => {
    it('should initialize with components', () => {
      const TestComponent = class {};
      const options: SbSvelteSDKOptions = {
        accessToken: 'test-token',
        components: {
          'test-component': TestComponent,
        },
      };

      storyblokInit(options);

      // Verify component is registered by trying to retrieve it
      const component = getComponent('test-component');
      expect(component).toBe(TestComponent);
    });

    it('should initialize with function components', () => {
      const TestComponent = class {};
      const options: SbSvelteSDKOptions = {
        accessToken: 'test-token',
        components: () => ({
          'test-component': TestComponent,
        }),
      };

      storyblokInit(options);

      // Verify component is registered by trying to retrieve it
      const component = getComponent('test-component');
      expect(component).toBe(TestComponent);
    });

    it('should initialize without components', () => {
      const options: SbSvelteSDKOptions = {
        accessToken: 'test-token',
      };

      storyblokInit(options);

      // Trying to get a non-existent component should trigger error
      getComponent('non-existent');
      expect(consoleError).toHaveBeenCalled();
    });
  });

  describe('getComponent', () => {
    it('should return registered component', () => {
      const TestComponent = class {};
      storyblokInit({
        accessToken: 'test-token',
        components: {
          'test-component': TestComponent,
        },
      });

      const component = getComponent('test-component');
      expect(component).toBe(TestComponent);
    });

    it('should return undefined and log error for non-existent component', () => {
      const component = getComponent('non-existent');

      expect(component).toBeUndefined();
      expect(consoleError).toHaveBeenCalledWith(
        expect.stringContaining('Component "non-existent" not found'),
      );
    });
  });

  describe('getStoryblokApi', () => {
    it('should return initialized API', () => {
      storyblokInit({
        accessToken: 'test-token',
      });

      // API is initialized
      const api = getStoryblokApi();
      expect(api).toEqual({ test: 'api' });
    });
  });
});
