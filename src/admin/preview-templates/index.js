import Home from '/admin/preview-templates/home.js';
import Post from '/admin/preview-templates/post.js';
import Page from '/admin/preview-templates/page.js';

// Register preview templates
CMS.registerPreviewTemplate('home', Home);
CMS.registerPreviewTemplate('blog', Post);
CMS.registerPreviewTemplate('pages', Page);

// Register CSS
fetch('/')
  .then((response) => response.text())
  .then((html) => {
    const f = document.createElement('html');
    f.innerHTML = html;
    Array.from(f.getElementsByTagName('link')).forEach((tag) => {
      if (tag.rel == 'stylesheet' && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
