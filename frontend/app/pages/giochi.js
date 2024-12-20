export function loadGiochiHomePage() {
  if(sessionStorage.getItem('lingua')==null)
    sessionStorage.setItem('lingua', 'it');
  import(`./../traduzioni/${sessionStorage.getItem('lingua')}.js`)
  .then((module) => {
    const text = module.text;
    const content = document.getElementById('main-content');
    content.innerHTML = `
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-white text-center">`+text.p3+`</h1>
        <br>
        <a data-link href="/locale_home" class="btn btn-primary h4 px-2 link-secondary text-white mt-3">`+text.p4+`</a>
      </div>
    `;
  })
}