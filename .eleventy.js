const { DateTime } = require('luxon');
let markdownIt = require('markdown-it');
let markdownItAnchor = require('markdown-it-anchor');
const htmlmin = require('html-minifier');

// Eleventy Plugins
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/assets/scss/");

  // Eleventy Navigation https://www.11ty.dev/docs/plugins/navigation/
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Merge data instead of overriding https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true);

  // Date formatting (human readable)
  eleventyConfig.addFilter('readableDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('MMMM dd, yyyy');
  });

  // Date formatting (machine readable)
  eleventyConfig.addFilter('machineDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd');
  });

  // Minify HTML output
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath && outputPath.indexOf('.html') > -1) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Don't process folders with static assets e.g. images
  eleventyConfig.addPassthroughCopy('src/favicon.ico');
  eleventyConfig.addPassthroughCopy('src/admin');
  eleventyConfig.addPassthroughCopy('src/assets/img');

  // Customize Markdown library and settings
  let markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor,  {
    permalink: false,
  });

  eleventyConfig.setLibrary('md', markdownLibrary);

  // Add Markdown filter
  eleventyConfig.addFilter('markdown', (str) => {
    return markdownIt().render(str);
  });

  return {
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      layouts: "_layouts"
    },
  };
};
