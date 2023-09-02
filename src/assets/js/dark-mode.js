const darkMode = () => {
  // Selectors
  const selectors = {
    toggleButton: '[data-theme-switch]',
  }

  // Toggle theme
  const toggleTheme = () => {
    const themeSettings = document.documentElement.dataset;
    const newTheme = themeSettings.theme === 'dark' ? 'light' : 'dark';

    themeSettings.theme = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  // Handle click event
  const handleClick = (event) => {
    const shouldToggle = event.target.closest(selectors.toggleButton);

    if (shouldToggle) {
      toggleTheme();
    }
  };

  // Event Listeners
  document.addEventListener('click', handleClick);
}

module.exports = darkMode;