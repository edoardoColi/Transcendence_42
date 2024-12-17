import { loadHomePage } from '../pages/home.js';
import { loadLoginPage } from '../pages/login.js';
import { loadRegistraPage } from '../pages/registrati.js';
import { load2faPage } from '../pages/2fa.js';

export function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

export function router() {
  const routes = [
    { path: '/', view: loadHomePage },
    { path: '/login', view: loadLoginPage },
    { path: '/registrati', view: loadRegistraPage },
    { path: '/2fa', view: load2faPage },
  ];
  const potentialMatch = routes.find((route) => location.pathname === route.path);
  if (potentialMatch) {
    potentialMatch.view();
  } else {
    document.getElementById('main-content').innerHTML = '<div class="d-flex justify-content-center"><h2 class="text-white">Immagine una bellissima pagina: 404 Risorsa non trovata</h2></div>';
  }
}
window.addEventListener('popstate', router);