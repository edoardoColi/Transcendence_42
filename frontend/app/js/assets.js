export function updateNavbar() {
  if (localStorage.getItem('jwtToken') == '') {
    document.getElementById('navbar-content').innerHTML = `
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a data-link href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
            <img class="bi me-2" width="40" height="32" src="./img/favicon.png" />
          </a>
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a data-link href="/" class="nav-link px-2 link-secondary text-white">Home</a></li>
            <li><a data-link href="/login" class="nav-link px-2 link-secondary text-white">Login</a></li>
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
          </ul>
          <div class="dropdown text-end">
            <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
            </a>
            <ul class="dropdown-menu text-small" style="">
              <li><a class="dropdown-item" data-link href="/profilo">Profile</a></li>
              <li><a class="dropdown-item" data-link href="/stats">Statistiche</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" data-link href="/esci">Esci</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}