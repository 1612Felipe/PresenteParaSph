```javascript
// ============================================
// TESTE
// LIBERA HOJE: 08/08/2026 ÀS 21:40
// HORÁRIO DE BRASÍLIA (UTC-3)
// ============================================

const targetDate = new Date(
    "2026-08-08T21:40:00-03:00"
).getTime();


// ============================================
// CONTADOR
// ============================================

function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;


    // Chegou a hora
    if (difference <= 0) {

        unlockSite();

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}


// ============================================
// DESBLOQUEIO
// ============================================

function unlockSite() {

    document.body.innerHTML = `

        <div class="unlocked">

            <div class="big-heart">
                ❤️
            </div>

            <p class="birthday-small">
                AGORA VOCÊ PODE ABRIR
            </p>

            <h1>
                Oi, Sophia! ❤️
            </h1>

            <p class="birthday-message">

                Finalmente chegou a hora.

                Eu preparei tudo isso pensando
                em você.

            </p>

            <button onclick="openStory()">
                Abrir minha surpresa ❤️
            </button>

        </div>

    `;

    document.body.classList.add("birthday-mode");
}


// ============================================
// HISTÓRIA
// ============================================

function openStory() {

    document.body.innerHTML = `

        <div class="story">

            <div class="story-heart">
                ❤️
            </div>

            <p class="story-label">
                NOSSA HISTÓRIA
            </p>

            <h1>
                Tudo começou há muito tempo...
            </h1>

            <p>

                Antes de tudo isso existir,
                antes mesmo de imaginarmos onde
                a vida iria nos levar...

            </p>

            <button onclick="nextPart()">
                Continuar ❤️
            </button>

        </div>

    `;
}


// ============================================
// CRECHE
// ============================================

function nextPart() {

    document.body.innerHTML = `

        <div class="story">

            <div class="story-heart">
                🌱
            </div>

            <p class="story-label">
                PARTE 1
            </p>

            <h1>
                A creche
            </h1>

            <p>

                Foi lá que a gente se conheceu.

                Duas crianças que nem imaginavam
                que, muitos anos depois, ainda
                teriam uma história para contar.

                E naquela época a gente já namorava,
                mesmo sendo tão pequenos.

            </p>

            <button onclick="nextPartTwo()">
                Continuar ❤️
            </button>

        </div>

    `;
}


// ============================================
// PRIMEIRO ANO
// ============================================

function nextPartTwo() {

    document.body.innerHTML = `

        <div class="story">

            <div class="story-heart">
                ⏳
            </div>

            <p class="story-label">
                PARTE 2
            </p>

            <h1>
                O tempo passou
            </h1>

            <p>

                No primeiro ano eu mudei de escola.

                A partir dali, nossos caminhos
                acabaram se separando.

                Os anos passaram e parecia que
                aquela história tinha ficado para trás.

            </p>

            <button onclick="nextPartThree()">
                Continuar ❤️
            </button>

        </div>

    `;
}


// ============================================
// INSTAGRAM
// ============================================

function nextPartThree() {

    document.body.innerHTML = `

        <div class="story">

            <div class="story-heart">
                📱
            </div>

            <p class="story-label">
                PARTE 3
            </p>

            <h1>
                Até que aconteceu...
            </h1>

            <p>

                Já no 7º ano, depois de tantos anos,
                você encontrou meu Instagram.

                A gente começou a conversar
                novamente.

                E foi aí que tudo começou de novo.

            </p>

            <button onclick="nextPartFour()">
                Continuar ❤️
            </button>

        </div>

    `;
}


// ============================================
// AMIZADE
// ============================================

function nextPartFour() {

    document.body.innerHTML = `

        <div class="story">

            <div class="story-heart">
                💬
            </div>

            <p class="story-label">
                PARTE 4
            </p>

            <h1>
                Era para ser só amizade...
            </h1>

            <p>

                No começo, nós dois queríamos
                ser apenas amigos.

                Conversar, rir e colocar o papo
                em dia depois de tantos anos.

                Só que o coração tinha outros planos.

            </p>

            <button onclick="nextPartFive()">
                Continuar ❤️
            </button>

        </div>

    `;
}


// ============================================
// O AMOR
// ============================================

function nextPartFive() {

    document.body.innerHTML = `

        <div class="story">

            <div class="story-heart">
                ❤️
            </div>

            <p class="story-label">
                PARTE 5
            </p>

            <h1>
                A gente não conseguiu
            </h1>

            <p>

                O sentimento era grande demais.

                A gente tentou deixar tudo
                apenas como amizade...

                mas não aguentamos.

                O amor que existia entre nós
                falou mais alto.

            </p>

            <button onclick="nextPartSix()">
                Continuar ❤️
            </button>

        </div>

    `;
}


// ============================================
// FINAL
// ============================================

function nextPartSix() {

    document.body.innerHTML = `

        <div class="story final-story">

            <div class="story-heart">
                💖
            </div>

            <p class="story-label">
                07 DE AGOSTO DE 2026 • 18:30
            </p>

            <h1>
                E aqui estamos nós.
            </h1>

            <p>

                Depois de tantos anos,
                a gente se encontrou novamente.

                E dessa vez não foi para ser
                apenas amigos.

                Dessa vez, a gente escolheu
                ficar juntos.

            </p>

            <p class="final-line">

                De todas as histórias que poderiam
                ter acontecido...

                eu gosto mais da nossa. ❤️

            </p>

            <h2>
                Feliz aniversário, minha princesa. 🎂❤️
            </h2>

        </div>

    `;
}


// ============================================
// INICIAR
// ============================================

updateCountdown();

setInterval(updateCountdown, 1000);
```
