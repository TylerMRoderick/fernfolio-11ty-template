const darkMode = () => {
  const toggle_link = document.getElementById('switch-theme');

  const setInitialTheme = () => {
    if(toggle_link === null) { return }

    if(document.body.dataset.useSystemTheme === 'true') {
      // If we should use the system preference, check if its present and use it ...
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
      }
    } else {
      // ... otherwise use the stored preference
      localStorage.theme === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark');
    }
  }

  const clickHandler = (event) => {
    const in_dark_mode = document.body.classList.contains('dark');

    if (in_dark_mode) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  setInitialTheme()
  if (toggle_link) { toggle_link.addEventListener('click', clickHandler, false) }
}

module.exports = darkMode;