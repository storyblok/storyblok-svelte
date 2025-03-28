import { describe, expect, it, vi } from 'vitest';
import { storyblokEditable } from '../lib/storyblok';
import type { SbBlokData } from '../lib/types';

// Mock @storyblok/js
vi.mock('@storyblok/js', () => ({
  storyblokEditable: (blok: SbBlokData) => {
    if (blok._editable) {
      return {
        'data-blok-c': '1234',
        'data-blok-uid': '123-456',
        'class': 'storyblok__outline',
      };
    }
    return {};
  },
}));

describe('storyblok utilities', () => {
  describe('storyblokEditable', () => {
    it('should apply editable attributes to DOM node', () => {
      // Create a test DOM node
      const node = document.createElement('div');

      // Mock Storyblok blok data
      const mockBlok: SbBlokData = {
        _uid: '123-456',
        component: 'test-component',
        _editable: '<!--#storyblok#{"name":"test-component"}-->',
      };

      // Apply storyblokEditable action
      storyblokEditable(node, mockBlok);

      // Assert that the correct attributes were applied
      expect(node.hasAttribute('data-blok-c')).toBe(true);
      expect(node.hasAttribute('data-blok-uid')).toBe(true);
      expect(node.classList.contains('storyblok__outline')).toBe(true);
    });

    it('should not apply attributes when _editable is not present', () => {
      // Create a test DOM node
      const node = document.createElement('div');

      // Mock Storyblok blok data without _editable
      const mockBlok: SbBlokData = {
        _uid: '123-456',
        component: 'test-component',
      };

      // Apply storyblokEditable action
      storyblokEditable(node, mockBlok);

      // Assert that no attributes were applied
      expect(node.getAttribute('data-blok-c')).toBe(null);
      expect(node.getAttribute('data-blok-uid')).toBe(null);
      expect(node.classList.contains('storyblok__outline')).toBe(false);
    });
  });
});
