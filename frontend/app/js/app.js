import { navigateTo,router } from './router.js';
import { updateNavbar } from './assets.js';

localStorage.setItem('jwtToken', '');

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    const target = e.target;
    if (target.matches('[data-link]') || target.closest('[data-link]')) {
      e.preventDefault();
      const link = target.closest('[data-link]').getAttribute('href');
      navigateTo(link);
      updateNavbar();
    }
  });
  updateNavbar();
  router();
});