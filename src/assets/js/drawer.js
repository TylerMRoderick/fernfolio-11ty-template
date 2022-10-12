/*
* Drawer
*/
const drawer = () => {
  // Settings
  const settings = {
    speedOpen: 50,
    speedClose: 350,
    activeClass: 'is-active',
    visibleClass: 'is-visible',
    selectorTarget: '[data-drawer-target]',
    selectorTrigger: '[data-drawer-trigger]',
    selectorClose: '[data-drawer-close]',
  };

  /**
  * Element.closest() polyfill
  * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
  */
  if (!Element.prototype.closest) {
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }
    Element.prototype.closest = (s) => {
      const el = this;
      let ancestor = this;
      if (!document.documentElement.contains(el)) return null;
      do {
        if (ancestor.matches(s)) return ancestor;
        ancestor = ancestor.parentElement;
      } while (ancestor !== null);
      return null;
    };
  }

  /**
  * Trap Focus
  * https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
  */
  const trapFocus = (element) => {
    const focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    element.addEventListener('keydown', (e) => {
      const isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);

      if (!isTabPressed) {
        return;
      }

      if ( e.shiftKey ) /* shift + tab */ {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
            e.preventDefault();
          }
        } else /* tab */ {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
            e.preventDefault();
          }
        }
    });
  }

  // Toggle accessibility
  const toggleAccessibility = (event) => {
    if (event.getAttribute('aria-expanded') === 'true') {
      event.setAttribute('aria-expanded', false);
    } else {
      event.setAttribute('aria-expanded', true);
    }
  };

  // Remove body overflow
  const removeOverlay = () => {
    document.documentElement.style.overflow = '';
  };

  // Open Drawer
  const openDrawer = (trigger) => {
    const target = document.getElementById(trigger.getAttribute('aria-controls'));

    target.classList.add(settings.activeClass);
    document.documentElement.style.overflow = 'hidden';
    toggleAccessibility(trigger);

    setTimeout(() => {
      target.classList.add(settings.visibleClass);
      trapFocus(target);
    }, settings.speedOpen);
  };

  // Close Drawer
  const closeDrawer = (event) => {
    const closestParent = event.closest(settings.selectorTarget);
    const childrenTrigger = document.querySelector('[aria-controls="' + closestParent.id + '"');

    closestParent.classList.remove(settings.visibleClass);
    removeOverlay();
    toggleAccessibility(childrenTrigger);

    setTimeout(function () {
      closestParent.classList.remove(settings.activeClass);
    }, settings.speedClose);
  };

  // Click Handler
  const clickHandler = (event) => {
    const toggle = event.target;
    const open = toggle.closest(settings.selectorTrigger);
    const close = toggle.closest(settings.selectorClose);

    if (open) {
      openDrawer(open);
    }

    if (close) {
      closeDrawer(close);
    }

    if (open || close) {
      event.preventDefault();
    }
  };

  // Keydown Handler, handle Escape button
  const keydownHandler = (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
      const drawers = document.querySelectorAll(settings.selectorTarget);

      // Find active drawers and close them when escape is clicked
      for (let i = 0; i < drawers.length; ++i) {
        if (drawers[i].classList.contains(settings.activeClass)) {
          closeDrawer(drawers[i]);
        }
      }
    }
  };

  // Inits & Event Listeners
  document.addEventListener('click', clickHandler, false);
  document.addEventListener('keydown', keydownHandler, false);
  document.addEventListener('turbolinks:click', removeOverlay, false);
};

module.exports = drawer;
