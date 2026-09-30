document.documentElement.classList.remove('no-js');

document.addEventListener('click', (event) => {
  const open = event.target.closest('[data-menu-open]');
  const close = event.target.closest('[data-menu-close]');
  if (open) document.querySelector('#MobileMenu')?.showModal();
  if (close) document.querySelector('#MobileMenu')?.close();
});

document.addEventListener('shopify:section:load', () => {
  document.dispatchEvent(new CustomEvent('theme:refresh'));
});
