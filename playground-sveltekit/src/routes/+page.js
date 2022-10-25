import { getStoryblokApi } from "@storyblok/svelte";
import { storyblokInit, apiPlugin } from "@storyblok/svelte";

export async function load() {
  let storyblokApi = getStoryblokApi();
  if (!storyblokApi) {
    storyblokInit({
      accessToken: "OurklwV5XsDJTIE1NJaD2wtt",
      use: [apiPlugin],
    });
    storyblokApi = await getStoryblokApi();
  }
  const { data } = await storyblokApi.get("cdn/stories/svelte/", {
    version: "draft",
  });

  return {
    story: data.story,
  };
}
