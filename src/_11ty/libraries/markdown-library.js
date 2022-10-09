let markdownIt = require('markdown-it');
let markdownItAnchor = require('markdown-it-anchor');

// Customize Markdown library and settings
let markdownLibrary = markdownIt({
  html: true,
  breaks: true,
  linkify: true
}).use(markdownItAnchor,  {
  permalink: false,
});

module.exports = markdownLibrary;