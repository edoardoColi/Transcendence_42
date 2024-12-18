export function loadGiochiHomePage() {
    const content = document.getElementById('main-content');
    content.innerHTML = `
      <div class="d-flex flex-column justify-content-center align-items-center">
        <h1 class="text-white text-center">Immagina una fighissima raccolta giochi</h1>
        <br>
        <a data-link href="/gioco1/locale_home" class="btn btn-primary h4 px-2 link-secondary text-white mt-3">Pong Locale</a>
      </div>
    `;
}