import { updateNavbar } from '../js/assets.js';
import { navigateTo } from '../js/router.js';

export function loadRegistraPage() {
  const content = document.getElementById('main-content');
  if (!content) {return;}
  content.innerHTML = `
    <div class="d-flex justify-content-center align-items-center">
      <main class="form-signin m-auto mioform">
        <h1 class="h3 mb-3 fw-normal text-white">Immagina un Form migliore e Registrati</h1>
        <div class="form-floating">
          <input type="email" class="form-control text-black" id="floatingInput" placeholder="Email">
          <label class="text-black" for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input type="name" class="form-control text-black" id="floatingInput" placeholder="Nome">
          <label class="text-black" for="floatingInput">Nome</label>
        </div>
        <br>
        <div class="form-floating">
          <input type="password" class="form-control text-black" id="floatingPassword" placeholder="Password">
          <label class="text-black" for="floatingPassword">Password</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control text-black" id="floatingPassword2" placeholder="Conferma Password">
          <label class="text-black" for="floatingPassword2">Conferma Password</label>
        </div>
        <button class="btn btn-primary w-100 py-2" id="registra">Registrati</button>
        <p class="mt-5 mb-3">
          <a data-link href="/login" class="h4 px-2 link-secondary text-white">Hai un account? Accedi qui</a>
        </p>
      </main>
    </main>
  `;
  document.getElementById('registra').addEventListener('click', () => {
    localStorage.setItem('imguser', './../img/user/_default.png');
    localStorage.setItem('jwtToken', 'log');
    localStorage.setItem('email', 'nome');
    navigateTo('/');
    updateNavbar();
  });
}
