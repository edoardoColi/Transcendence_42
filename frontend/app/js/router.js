import { loadHomePage } from '../pages/home.js';
import { loadLoginPage } from '../pages/login.js';

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

export function router() {
  const routes = [
    { path: '/', view: loadHomePage },
    { path: '/login', view: loadLoginPage },
  ];
  const potentialMatch = routes.find((route) => location.pathname === route.path);
  if (potentialMatch) {
    potentialMatch.view();
  } else {
    document.getElementById('main-content').innerHTML = '<h2 class="text-white">Immagine una bellissima pagina: 404 Risorsa non trovata</h2>';
  }
}
window.addEventListener('popstate', router);
