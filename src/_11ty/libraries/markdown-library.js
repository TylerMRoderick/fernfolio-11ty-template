let markdownIt = require('markdown-it');
let anchor = require('markdown-it-anchor');
const Image = require('@11ty/eleventy-img');

// Customize Markdown library and settings
let markdown = markdownIt({
  html: true,
  breaks: true,
  linkify: true
}).use(anchor, {
  permalink: anchor.permalink.linkInsideHeader({
    symbol: '#',
    placement: 'before'
  })
});


// Add responsive image suppport to markdown files
// borrowed from: https://tomichen.com/blog/posts/20220416-responsive-images-in-markdown-with-eleventy-image
markdown.renderer.rules.image = function (tokens, idx) {
  const token = tokens[idx];
  let imgSrc = `.${token.attrGet('src')}`;
  const imgAlt = token.content;
  const imgTitle = token.attrGet('title');
  const htmlOpts = { alt: imgAlt, loading: 'lazy', decoding: 'async' };
  const parsed = (imgTitle || '').match(
    /^(?<skip>@skip(?:\[(?<width>\d+)x(?<height>\d+)\])? ?)?(?:\?\[(?<sizes>.*?)\] ?)?(?<caption>.*)/
  ).groups;

  // handle skipped and remote images
  if (parsed.skip || imgSrc.startsWith('http')) {
    const options = { ...htmlOpts };
    const metadata = { jpeg: [{ url: imgSrc }] };

    if (parsed.sizes) {
      options.sizes = parsed.sizes;
    }

    if (parsed.width && parsed.height) {
      metadata.jpeg[0].width = parsed.width
      metadata.jpeg[0].height = parsed.height
    }

    return Image.generateHTML(metadata, options);
  }

  const widths = [250, 316, 426, 460, 580, 768];
  const imgOpts = {
    widths: widths
      .concat(widths.map((w) => w * 2)) // generate 2x sizes
      .filter((v, i, s) => s.indexOf(v) === i), // dedupe
    formats: ['webp', 'jpeg'],
    urlPath: '/assets/img/',
    outputDir: './_site/assets/img/',
  };

  Image(imgSrc, imgOpts);

  const metadata = Image.statsSync(imgSrc, imgOpts);

  return Image.generateHTML(metadata, {
    sizes: parsed.sizes || '(max-width: 768px) 100vw, 768px',
    ...htmlOpts
  });
}

module.exports = markdown;