import {
  storyblokEditable as sbEdit,
  storyblokInit as sbInit,
} from "@storyblok/js";
export { useStoryblokBridge, apiPlugin } from "@storyblok/js";

export const storyblokEditable = (node, value) => {
  const updateDom = (value) => {
    const options = sbEdit(value);
    if (options["data-blok-c"]) {
      node.setAttribute("data-blok-c", options["data-blok-c"]);
      node.setAttribute("data-blok-uid", options["data-blok-uid"]);
      node.classList.add("storyblok__outline");
    }
  };

  updateDom(value); // when is mounted

  return {
    update(newValue) {
      // when value changes
      updateDom(newValue);
    },
  };
};

let storyblokApiInstance = null;
export const useStoryblokApi = () => {
  if (!storyblokApiInstance) {
    console.log(
      `You can't use useStoryblokApi if you're not loading apiPlugin.`
    );
  }
  return storyblokApiInstance;
};

let componentsMap = null;
export const storyblokInit = (options) => {
  const { storyblokApi } = sbInit(options);
  storyblokApiInstance = storyblokApi;
  componentsMap = options.components || {};
};

export const getComponent = (componentName) => {
  const component = componentsMap[componentName];
  if (!component) {
    console.error(`You didn't load the ${componentName} component. Please load it in storyblokInit. For example:
storyblokInit({
    accessToken: "<your-token>",
    components: {
      "teaser": Teaser
    }
})
`);
  }
  return component;
};
