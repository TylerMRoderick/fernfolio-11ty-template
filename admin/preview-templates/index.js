import Post from "/admin/preview-templates/post.js";
import Page from "/admin/preview-templates/page.js";

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("blog", Post);
CMS.registerPreviewTemplate("pages", Page);

// Register any CSS file on the home page as a preview style
CMS.registerPreviewStyle("/_includes/assets/css/normalize.css");
CMS.registerPreviewStyle("/_includes/assets/css/base-styles.css");
CMS.registerPreviewStyle("/_includes/assets/css/variablesr.css");
CMS.registerPreviewStyle("/_includes/assets/css/utilites.css");
CMS.registerPreviewStyle("/_includes/assets/css/site-header.css");
CMS.registerPreviewStyle("/_includes/assets/css/site-footer.css");
CMS.registerPreviewStyle("/_includes/assets/css/home-page.css");
CMS.registerPreviewStyle("/_includes/assets/css/blog.css");
CMS.registerPreviewStyle("/_includes/assets/css/contact.css");

fetch("/")
  .then(response => response.text())
  .then(html => {
    const f = document.createElement("html");
    f.innerHTML = html;
    Array.from(f.getElementsByTagName("link")).forEach(tag => {
      if (tag.rel == "stylesheet" && !tag.media) {
        CMS.registerPreviewStyle(tag.href);
      }
    });
  });
