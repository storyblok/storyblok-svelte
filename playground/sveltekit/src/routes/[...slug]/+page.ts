import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params }) => {
  // Wait for the parent layout data
  const { storyblokApi } = await parent();
  let slug = params.slug && params.slug !== '' ? params.slug : 'home';

  const data = await storyblokApi.get(`cdn/stories/${slug}`, {
    version: 'draft',
  });

  return {
    story: data.data.story
  };
}
