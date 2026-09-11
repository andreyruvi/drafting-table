/**
 * Accessible drawing viewer.
 *
 * Opens a sheet image full-screen so a plan can actually be read. Everything a
 * keyboard or screen-reader user needs is handled: the dialog takes focus, Tab
 * is trapped inside it, Escape closes, and focus returns to the thumbnail that
 * opened it. Without JavaScript the links still work — they just open the image
 * directly, which is a fine fallback.
 */
(function () {
  'use strict';

  var triggers = document.querySelectorAll('[data-lightbox]');
  if (!triggers.length) return;

  var opener = null;
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Drawing viewer');

  var image = document.createElement('img');
  image.className = 'lightbox-image';
  image.alt = '';

  var bar = document.createElement('div');
  bar.className = 'lightbox-bar';

  var caption = document.createElement('p');
  caption.className = 'lightbox-caption';

  var close = document.createElement('button');
  close.type = 'button';
  close.className = 'lightbox-close';
  close.textContent = 'Close (Esc)';

  bar.appendChild(caption);
  bar.appendChild(close);
  box.appendChild(image);
  box.appendChild(bar);
  document.body.appendChild(box);

  function open(trigger) {
    var thumb = trigger.querySelector('img');
    opener = trigger;
    image.src = trigger.getAttribute('href');
    image.alt = thumb ? thumb.alt : '';
    caption.textContent = trigger.getAttribute('data-caption') || '';
    box.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    close.focus();
  }

  function hide() {
    box.hidden = true;
    image.removeAttribute('src');
    document.documentElement.style.overflow = '';
    if (opener) opener.focus();
    opener = null;
  }

  Array.prototype.forEach.call(triggers, function (trigger) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      open(trigger);
    });
  });

  close.addEventListener('click', hide);

  box.addEventListener('click', function (event) {
    // Clicking the backdrop closes; clicking the image or the bar does not.
    if (event.target === box) hide();
  });

  document.addEventListener('keydown', function (event) {
    if (box.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      hide();
      return;
    }
    // Only one focusable control in the dialog, so keep focus on it.
    if (event.key === 'Tab') {
      event.preventDefault();
      close.focus();
    }
  });
})();
