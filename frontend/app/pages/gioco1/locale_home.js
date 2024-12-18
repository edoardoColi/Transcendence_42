import { navigateTo } from './../../js/router.js';

export function loadLocaleHomeGame1Page() {
    const content = document.getElementById('main-content');
    content.innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
            <main class="form-signin m-auto mioform">
                <h1 class="h3 mb-3 fw-normal text-white">Come si chiama il Gest?</h1>
                <div class="form-floating mb-3">
                    <input type="text" class="form-control text-black" id="floatingInput" placeholder="Nome Gest">
                    <label class="text-black" for="floatingInput">Nome Gest</label>
                </div>
                <h3 class="h3 mb-3 fw-normal text-white" id="texterror"></h3>
                <button class="btn btn-primary w-100 py-2" id="iniza">Inizia</button>
                <p class="mt-5 mb-3">
                    <a data-link href="/giochi" class="h4 px-2 link-secondary text-white">Torna indietro</a>
                </p>
            </main>
        </div>
    `;
    document.getElementById('iniza').addEventListener('click', () => {
        let p2=document.getElementById('floatingInput').value;
        if(p2==''){
            document.getElementById('texterror').innerHTML="Il nome non puo essere vuoto";
            return;
        }
        if(p2==sessionStorage.getItem('p1')){
            document.getElementById('texterror').innerHTML="I nomi dei giocatori devo essere diversi";
            return;
        }
        sessionStorage.setItem('p2', p2);
        navigateTo('/gioco1/locale_gioco');
    });
}