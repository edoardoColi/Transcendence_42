import { navigateTo } from '../js/router.js';

/* ========== LOGOUT ========== */
function logout() {
  sessionStorage.setItem('jwtToken', '');
  navigateTo("/");
  updateNavbar();
}

/* ========== NAVBAR ========== */
export function updateNavbar() {
  if (sessionStorage.getItem('jwtToken')==null) {
    document.getElementById('navbar-content').innerHTML = `
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a data-link href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <img class="bi me-2" width="40" height="32" src="./img/favicon.png" />
          </a>
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a data-link href="/" class="nav-link px-2 link-secondary text-white">Home</a></li>
            <li><a data-link href="/giochi" class="nav-link px-2 link-secondary text-white">Gioca</a></li>
            <li><a data-link href="/login" class="nav-link px-2 link-secondary text-white">Accedi</a></li>
          </ul>
        </div>
      </div>
    `;
  } else {
    document.getElementById('navbar-content').innerHTML = `
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a data-link href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <img class="bi me-2" width="40" height="32" src="./img/favicon.png" />
          </a>
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a data-link href="/" class="nav-link px-2 link-secondary text-white">Home</a></li>
            <li><a data-link href="/giochi" class="nav-link px-2 link-secondary text-white">Gioca</a></li>
          </ul>
          <div class="dropdown text-end">
            <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="`+sessionStorage.getItem('imguser')+`" id="imguser" alt="mdo" width="32" height="32" class="rounded-circle">
            </a>
            <ul class="dropdown-menu text-small" style="">
              <li><a class="dropdown-item" data-link href="/profilo">Profile</a></li>
              <li><a class="dropdown-item" data-link href="/stats">Statistiche</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" data-link href="/" onclick="logout()">Esci</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}