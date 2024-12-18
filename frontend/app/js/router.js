import { loadHomePage } from '../pages/home.js';

import { loadLoginPage } from '../pages/utenti/login.js';
import { loadRegistraPage } from '../pages/utenti/registrati.js';
import { load2faPage } from '../pages/utenti/2fa.js';

import { loadGiochiHomePage } from '../pages/giochi.js';
import { loadLocaleHomeGame1Page } from '../pages/gioco1/locale_home.js';
import { loadLocaleGame1Page } from '../pages/gioco1/locale_gioco.js';

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

    { path: '/giochi', view: loadGiochiHomePage },
    { path: '/gioco1/locale_home', view: loadLocaleHomeGame1Page },
    { path: '/gioco1/locale_gioco', view: loadLocaleGame1Page },
  ];
  const potentialMatch = routes.find((route) => location.pathname === route.path);
  if (potentialMatch) {
    if(potentialMatch.path!='/2fa')
      sessionStorage.removeItem('tempjwt');

    if((sessionStorage.getItem('jwtToken')==null && (potentialMatch.path=='/gioco1/locale_gioco' || potentialMatch.path=='/gioco1/locale_home')) || (sessionStorage.getItem('tempjwt')==null && potentialMatch.path=='/2fa')){
      navigateTo("/");
      return;
    }

    const navbar = document.getElementById('navbar-content');
    if (potentialMatch.path === '/gioco1/locale_gioco')
      navbar.style.display = 'none';
    else
      navbar.style.display = 'block';
    
      potentialMatch.view();
  } else {
    document.getElementById('main-content').innerHTML = '<div class="d-flex justify-content-center"><h2 class="text-white">Immagine una bellissima pagina: 404 Risorsa non trovata</h2></div>';
  }
}
window.addEventListener('popstate', router);