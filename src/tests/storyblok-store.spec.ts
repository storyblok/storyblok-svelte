import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getComponent, getStoryblokApi, storyblokInit } from '../lib/storyblok-store';
import type { SbSvelteSDKOptions } from '../lib/types';
import type { Component } from 'svelte';

// Mock @storyblok/js
vi.mock('@storyblok/js', () => ({
  storyblokInit: vi.fn(() => ({
    storyblokApi: { test: 'api' },
  })),
}));

const MockComponent: Component = () => {
  return {
    // This is a mock implementation of a generic Svelte component
  };
};

describe('storyblok-store', () => {
  // Mock console.error to prevent noise in tests
  const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

  beforeEach(() => {
    // Clear console.error mock calls between tests
    consoleError.mockClear();
  });

  describe('storyblokInit', () => {
    it('should initialize with components', () => {
      const options: SbSvelteSDKOptions = {
        accessToken: 'test-token',
        components: {
          'test-component': MockComponent,
        },
      };

      storyblokInit(options);

      // Verify component is registered by trying to retrieve it
      const component = getComponent('test-component');
      expect(component).toBe(MockComponent);
    });

    it('should initialize with function components', () => {
      const options: SbSvelteSDKOptions = {
        accessToken: 'test-token',
        components: () => ({
          'test-component': MockComponent,
        }),
      };

      storyblokInit(options);

      // Verify component is registered by trying to retrieve it
      const component = getComponent('test-component');
      expect(component).toBe(MockComponent);
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
      storyblokInit({
        accessToken: 'test-token',
        components: {
          'test-component': MockComponent,
        },
      });

      const component = getComponent('test-component');
      expect(component).toBe(MockComponent);
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
