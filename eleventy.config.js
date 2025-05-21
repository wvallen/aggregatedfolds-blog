module.exports = function (eleventyConfig) {
  // Copy static assets like CSS
  eleventyConfig.addPassthroughCopy("css");

  // Register your blog collection
  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByGlob("content/blog/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: "_site"
    }
  };
};