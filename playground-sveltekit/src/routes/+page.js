import { useStoryblokApi } from "@storyblok/svelte";

export async function load() {
  const storyblokApi = useStoryblokApi();
  const { data } = await storyblokApi.get("cdn/stories/home", {
    version: "draft",
  });
  return {
    story: data.story,
  };
}
