import { updateNavbar } from './../../js/assets.js';
import { navigateTo } from './../../js/router.js';

export function load2faPage() {
  const content = document.getElementById('main-content');
  if (!content) {return;}
  content.innerHTML = `
    <div class="d-flex justify-content-center align-items-center">
      <main class="form-signin m-auto mioform">
        <h1 class="h3 mb-3 fw-normal text-white">Immagina un Form migliore e Inserisci il codice inviato nella mail</h1>
        <div class="form-floating mb-3">
          <input type="text" class="form-control text-black" id="floatingInput" placeholder="Codice">
          <label class="text-black" for="floatingInput">Codice</label>
        </div>
        <button class="btn btn-primary w-100 py-2" id="valid">Conferma</button>
      </main>
    </div>
  `;
  document.getElementById('valid').addEventListener('click', () => {
    sessionStorage.setItem('imguser', './../img/_default.png');
    sessionStorage.setItem('jwtToken', 'log');
    sessionStorage.setItem('p1', 'angly');
    sessionStorage.removeItem('tempjwt');
    navigateTo('/');
    updateNavbar();
  });
}
