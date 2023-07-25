const Turbolinks = require('turbolinks');
const drawer = require('./drawer');
const darkMode = require('./dark_mode');

// Initialize Turbolinks
Turbolinks.start();

// Initialize mobile nav drawer
drawer();

// Toggle dark mode
darkMode();
document.addEventListener("turbolinks:load", darkMode);

// Handle Netlify Identity Login
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', (user) => {
    if (!user) {
      window.netlifyIdentity.on('login', () => {
        document.location.href = '/admin/';
      });
    }
  });
}