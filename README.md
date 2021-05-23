[![Netlify Status](https://api.netlify.com/api/v1/badges/bbf28a84-4bdb-407b-a2fa-32628d27fa3d/deploy-status)](https://app.netlify.com/sites/https://fernfolio.netlify.app/deploys)

# Fernfolio
The super simple portfolio template built with [Eleventy](https://www.11ty.io/) and [Netlify CMS](https://www.netlifycms.org/)

<img width="1280" alt="fernfolio screenshot" src="https://raw.githubusercontent.com/TylerMRoderick/fernfolio-11ty-template/master/fernfolio-preview.png">

### <pre>🖥  [Demo](https://fernfolio.netlify.app/)</pre>

## 🤔 What is this?
An [Eleventy](https://www.11ty.io/) theme designed to simplify the process of deploying a beautiful portfolio and blog. Launch your site in minutes!

Based on the [eleventy-netlify-boilerplate](https://github.com/danurbanowicz/eleventy-netlify-boilerplate), but modified to perfectly fit the needs of a modern technical porfolio.

## ✨ Features
* Built in support for [Netlify CMS](https://www.netlifycms.org/) with editor previews
* Customizable blog and project pages with tag support
* Working contact form powered by [Netlify Forms](https://www.netlify.com/products/forms/)
* Super fast page render and high lighthouse scores
* Uses Markdown for content files and Nunjucks for layouts
* 100% Javascript framework free
* Continuous Deployment workflow via [Netlify](https://www.netlify.com/)
* Base styles powered by [Sakura](https://github.com/oxalorg/sakura) classless css framework
* Vanilla css for custom styles (keep it simple)


## 🚀 Quick Start

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://https://github.com/TylerMRoderick/fernfolio-11ty-template&stack=cms)

### 1. Click the "Deploy to Netlify" button above
This will clone this repo to your github account and will deploy a copy of the demo website to your Netlify
account (you can create an account during this process if you don't have one)

### 2. Setup authentication

After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite. It is not necessary to accept this invite if you wish
to use an
[OAuth provider](https://www.netlify.com/docs/identity/#external-provider-login)
(e.g. Github) to manage authentication for your CMS.
It is recommended to use this method of authentication as it removes the need
for an email & password to log in to the CMS and is generally more secure. You
will need to add an OAuth provider in your Netlify app settings under
"Settings" > "Identity" > "External providers".

Once you've added an OAuth provider, navigate to `/admin` on your site, select your provider from the
list, and you should then be logged into your CMS. Cool huh?

Now you're all set, and you can start editing content! Any changes to your new repo will auto-deploy a new version to netflify


## 💻 Development Scripts

**`npm start`**

> Run 11ty with hot reload at localhost:8080

**`npm run build`**

> Generate minified production build

Use this as the "Publish command" if needed by hosting such as Netlify.


## 🎩 Common issues

If you change the repo that was created at deploy time from public to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

If you need any help with setting up Netlify CMS, you can reach out to the Netlify team in the [Netlify CMS Gitter](https://gitter.im/netlify/netlifycms).

## Bug reports, feature requests, etc

This is an ongoing project and I welcome contributions and suggestions! Feel free to submit a PR or issue.
