import { loadHomePage } from '../pages/home.js';

import { loadLoginPage } from '../pages/utenti/login.js';
import { loadRegistraPage } from '../pages/utenti/registrati.js';
import { load2faPage } from '../pages/utenti/2fa.js';

import { loadGiochiHomePage } from '../pages/giochi.js';
import { loadLocaleHomeGame1Page } from '../pages/gioco1/locale_home.js';
import { loadLocaleGame1Page } from '../pages/gioco1/locale_gioco.js';
import { loadCustumeserPage } from '../pages/gioco1/costumeser.js';

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
    { path: '/locale_home', view: loadLocaleHomeGame1Page },
    { path: '/locale_gioco', view: loadLocaleGame1Page },
    { path: '/costumeser', view: loadCustumeserPage },
  ];
  const potentialMatch = routes.find((route) => location.pathname === route.path);
  if (potentialMatch) {
    if(potentialMatch.path!='/2fa')
      sessionStorage.removeItem('tempjwt');

    if((sessionStorage.getItem('jwtToken')==null && (potentialMatch.path=='/locale_gioco' || potentialMatch.path=='/locale_home')) || (sessionStorage.getItem('tempjwt')==null && potentialMatch.path=='/2fa')){
      navigateTo("/");
      return;
    }

    const navbar = document.getElementById('navbar-content');
    if (potentialMatch.path === '/locale_gioco')
      navbar.style.display = 'none';
    else
      navbar.style.display = 'block';
    
      potentialMatch.view();
  } else {
    if(sessionStorage.getItem('lingua')==null)
      sessionStorage.setItem('lingua', 'it');
    import(`./../../traduzioni/${sessionStorage.getItem('lingua')}.js`)
    .then((module) => {
      const text = module.text;
      document.getElementById('main-content').innerHTML = '<div class="d-flex justify-content-center"><h2 class="text-white">'+text.p30+'</h2></div>';
    })
  }
}
window.addEventListener('popstate', router);