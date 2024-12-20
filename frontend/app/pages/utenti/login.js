import { navigateTo } from './../../js/router.js';

export function loadLoginPage() {
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
          <h1 class="h3 mb-3 fw-normal text-white">`+text.p10+`</h1>
          <div class="form-floating mb-3">
            <input type="email" class="form-control text-black" id="floatingInput" placeholder="Email">
            <label class="text-black" for="floatingInput">Email</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control text-black" id="floatingPassword" placeholder="Password">
            <label class="text-black" for="floatingPassword">Password</label>
          </div>
          <button class="btn btn-primary w-100 py-2" id="loggin">`+text.p11+`</button>
          <p class="mt-5 mb-3">
            <a data-link href="/registrati" class="h4 px-2 link-secondary text-white">`+text.p12+`</a>
          </p>
        </main>
      </div>
    `;
    document.getElementById('loggin').addEventListener('click', () => {
      sessionStorage.setItem('tempjwt', 'tempjwt');
      navigateTo('/2fa');
    });
  })
}
