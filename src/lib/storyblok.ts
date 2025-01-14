import {
  storyblokEditable as sbEdit,
} from '@storyblok/js';

import type {
  SbBlokData,
} from './types';

/**
 * Creates options object for Storyblok editable elements
 */
const createEditableOptions = (value: SbBlokData) => {
  const options = sbEdit(value);
  return options['data-blok-c']
    ? {
        'data-blok-c': options['data-blok-c'],
        'data-blok-uid': options['data-blok-uid'],
        'className': 'storyblok__outline',
      }
    : null;
};

/**
 * Applies Storyblok editable attributes to a DOM node
 */
const applyEditableOptions = (node: HTMLElement, options: ReturnType<typeof createEditableOptions>) => {
  if (!options) {
    return;
  }

  node.setAttribute('data-blok-c', options['data-blok-c']);
  node.setAttribute('data-blok-uid', options['data-blok-uid']);
  node.classList.add(options.className);
};

/**
 * Svelte action to make a component editable in Storyblok
 */
export const storyblokEditable = (node: HTMLElement, value: SbBlokData) => {
  const updateDom = (value: SbBlokData) => {
    const options = createEditableOptions(value);
    if (options) {
      applyEditableOptions(node, options);
    }
  };

  updateDom(value);

  return {
    update: updateDom,
  };
};

export {
  getComponent,
  getStoryblokApi,
  storyblokInit,
} from './storyblokStore';

/**
 * @deprecated Use getStoryblokApi() instead. This will be removed in a next major version.
 */
export { getStoryblokApi as useStoryblokApi } from './storyblokStore';
