let markdownIt = require('markdown-it');

module.exports = function (str) {
  return markdownIt().render(str);
};