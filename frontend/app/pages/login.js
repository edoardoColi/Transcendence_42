import { updateNavbar } from './../js/assets.js';
import { navigateTo } from './../js/router.js';

export function loadLoginPage() {
  const content = document.getElementById('main-content');
  if (!content) {
    console.error("Errore: 'main-content' non trovato nel DOM.");
    return;
  }
  content.innerHTML = `
    <h2 class="text-white">Immagina un stupendo login</h2>
    <button id="myButton">Loggati qui</button>
  `;

  document.getElementById('myButton').addEventListener('click', () => {
    localStorage.setItem('jwtToken', 'log');
    navigateTo('/');
    updateNavbar();
  });
}
