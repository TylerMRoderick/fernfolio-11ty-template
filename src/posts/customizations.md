---
title: Theme customizations
date: 2020-10-15T12:23:39.598Z
author: Jane Doe
summary: Modify Fernfolio to meet your needs
tags:
  - environment
  - sport
---

**How do I change colors and fonts?**
These can be changed in the `variables.css` file.

**What about the page content?**
Page content is powered by markdown files and can be modified using Netlify CMS (or edited directly and pushed to github).

**But how do I use the CMS?**
Once your site is deployed and configured, add `/admin` to the end of the url (not using localhost). From there, you should be able to login and see all your pages ready for editing. You can also add a new page there. These updates immediately get pushed to the github repo where the appropriate markdown files are updated. In other words, all content is stored in git. The CMS is just an abstraction for editing those files without needing to manually commit changes.