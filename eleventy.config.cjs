module.exports = function (eleventyConfig) {
  // Copy static assets like CSS
  eleventyConfig.addPassthroughCopy("css");

  // Register your blog collection
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/*.md");
  });
eleventyConfig.setTemplateFormats(["md", "njk"]);
  eleventyConfig.addGlobalData("layout", "base.njk");
  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    }
  };
};