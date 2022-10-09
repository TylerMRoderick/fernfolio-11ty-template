const fs = require('fs');

// Custom config required to get Turbolinks to work in development mode
module.exports = {
  // show 404s in dev
  callbacks: {
    ready: function(_, browserSync) {
      //  This is keeps the exception from showing during the first local build
      const generated404Exists = fs.existsSync('_site/404.html');
      const content_404 = generated404Exists
        ? fs.readFileSync('_site/404.html')
        : '<h1>File Does Not Exist</h1>';

      browserSync.addMiddleware('*', (_, res) => {
        // Provides the 404 content without redirect.
        res.write(content_404);
        res.end();
      });
    }
  },
  // scripts in body conflict with Turbolinks
  snippetOptions: {
    rule: {
      match: /<\/head>/i,
      fn: function(snippet, match) {
        return snippet + match;
      }
    }
  }
};