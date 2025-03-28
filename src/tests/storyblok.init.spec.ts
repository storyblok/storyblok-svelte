import { describe, expect, it, vi } from 'vitest';
import { getStoryblokApi } from '../lib/storyblok-store';

// We simulate an uninitialized API by returning null
vi.mock('@storyblok/js', () => ({
  storyblokInit: vi.fn(() => ({
    storyblokApi: null,
  })),
}));

describe('storyblok-store initialization', () => {
  const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

  it('should log error if API is not initialized', () => {
    // API is not initialized
    getStoryblokApi();
    expect(consoleError).toHaveBeenCalledWith(
      'Storyblok API not initialized. Make sure to load apiPlugin.',
    );
  });
});
