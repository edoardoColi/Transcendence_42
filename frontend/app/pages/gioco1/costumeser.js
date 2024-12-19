import { navigateTo } from './../../js/router.js';

function update() {
    document.getElementById('tempotext').innerHTML="Tempo della partita: "+document.getElementById('Tempo').value+" minuti";
    document.getElementById('velmovtext').innerHTML="Velocita di movimento: "+document.getElementById('velmov').value;
}

export function loadCustumeserPage() {
    const content = document.getElementById('main-content');
    content.innerHTML = `
        <div class="d-flex justify-content-center align-items-center">
            <main class="form-signin m-auto mioform">
                <h1 class="h3 mb-3 fw-normal text-white">Persolalizza il gioco</h1>
                <label for="Tempo" id="tempotext" class="form-label text-white"></label>
                <input type="range" class="form-range" value="1" min="1" max="5" step="1" id="Tempo">
                <label for="velmov" id="velmovtext" class="form-label text-white">Velocita di movimento: </label>
                <input type="range" class="form-range" value="5" min="1" max="7" step="0.1" id="velmov">
                <h3 class="h3 mb-3 fw-normal text-white">Modalita</h3>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="classc" checked>
                    <label class="form-check-label text-white" for="classc">Classico</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="caos">
                    <label class="form-check-label text-white" for="caos">Caos</label>
                </div>
                <button class="btn btn-primary w-100 py-2" id="iniza">Inizia</button>
                <p class="mt-5 mb-3">
                    <a data-link href="/giochi" class="h4 px-2 link-secondary text-white">Torna indietro</a>
                </p>
            </main>
        </div>
    `;

    if(sessionStorage.getItem('tempog1')!=null)
        document.getElementById('Tempo').value=sessionStorage.getItem('tempog1');
    if(sessionStorage.getItem('velmovg1')!=null)
        document.getElementById('velmov').value=sessionStorage.getItem('velmovg1');
    if (sessionStorage.getItem('caosg1') != null) {
        const caosg1 = JSON.parse(sessionStorage.getItem('caosg1'));
        document.getElementById('classc').checked = caosg1;
        document.getElementById('caos').checked = !caosg1;
    }

    document.getElementById('Tempo').addEventListener('input', update);
    document.getElementById('velmov').addEventListener('input', update);
    update();

    document.getElementById('iniza').addEventListener('click', () => {
        sessionStorage.setItem('tempog1', document.getElementById('Tempo').value);
        sessionStorage.setItem('velmovg1', document.getElementById('velmov').value);
        if(document.getElementById('classc').checked)
            sessionStorage.setItem('caosg1', 'false');
        else
            sessionStorage.setItem('caosg1', 'true');
        navigateTo('/gioco1/locale_gioco');
    });
}
