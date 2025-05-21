// @ts-nocheck
/** @param {Parameters<import('./$types').PageLoad>[0]} event */
export async function load({ parent }) {
  const { storyblokApi } = await parent();

  const dataStory = await storyblokApi.get("cdn/stories/svelte/", {
    version: "draft",
  });

  return {
    story: dataStory.data.story,
  };
}
