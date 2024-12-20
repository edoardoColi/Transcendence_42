import { updateNavbar } from './../../js/assets.js';
import { navigateTo } from './../../js/router.js';

export function loadRegistraPage() {
  if(sessionStorage.getItem('lingua')==null)
    sessionStorage.setItem('lingua', 'it');
  import(`./../../traduzioni/${sessionStorage.getItem('lingua')}.js`)
  .then((module) => {
    const text = module.text;
    const content = document.getElementById('main-content');
    if (!content) {return;}
    content.innerHTML = `
      <div class="d-flex justify-content-center align-items-center">
        <main class="form-signin m-auto mioform">
          <h1 class="h3 mb-3 fw-normal text-white">`+text.p5+`</h1>
          <div class="form-floating">
            <input type="email" class="form-control text-black" id="email" placeholder="Email">
            <label class="text-black" for="email">Email</label>
          </div>
          <div class="form-floating">
            <input type="text" class="form-control text-black" id="nome" placeholder="`+text.p6+`">
            <label class="text-black" for="nome">`+text.p6+`</label>
          </div>
          <br>
          <div class="form-floating">
            <input type="password" class="form-control text-black" id="password" placeholder="Password">
            <label class="text-black" for="password">Password</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control text-black" id="conferpassword" placeholder="`+text.p6+`">
            <label class="text-black" for="conferpassword">`+text.p6+`</label>
          </div>
          <button class="btn btn-primary w-100 py-2" id="registra">`+text.p8+`</button>
          <p class="mt-5 mb-3">
            <a data-link href="/login" class="h4 px-2 link-secondary text-white">`+text.p9+`</a>
          </p>
        </main>
      </main>
    `;
    document.getElementById('registra').addEventListener('click', () => {
      sessionStorage.setItem('imguser', './../img/_default.png');
      sessionStorage.setItem('jwtToken', 'log');
      sessionStorage.setItem('p1', 'angly');
      navigateTo('/');
      updateNavbar();
    });
  })
}
