const htmlmin = require('html-minifier');

// Minify HTML output
module.exports = (content, outputPath) => {
  if (outputPath && outputPath.indexOf('.html') > -1) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    });
    return minified;
  }
  return content;
}
