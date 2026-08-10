// ==========================================
// TESTE — 10/08/2026 às 16:40 em BRASÍLIA
// ==========================================

// 16:40 de Brasília (UTC-3) = 19:40 UTC
const targetDate = Date.UTC(2026, 7, 10, 14, 40, 0);


// ==========================================
// CONTADOR
// ==========================================

function updateCountdown() {

    const now = Date.now();
    const difference = targetDate - now;

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


// ==========================================
// DESBLOQUEAR
// ==========================================

function unlockSite() {

    document.body.innerHTML = `
        <main class="container">

            <div class="heart">❤️</div>

            <p class="small-text">
                AGORA VOCÊ PODE ABRIR
            </p>

            <h1>
                Oi, Sophia ❤️
            </h1>

            <p class="message">
                Finalmente chegou a hora.
                Eu preparei tudo isso pensando em você.
            </p>

            <button onclick="openStory()">
                Abrir minha surpresa ❤️
            </button>

        </main>
    `;
}


// ==========================================
// HISTÓRIA
// ==========================================

function openStory() {

    document.body.innerHTML = `
        <main class="container">

            <div class="heart">💖</div>

            <p class="small-text">
                NOSSA HISTÓRIA
            </p>

            <h1>
                Tudo começou há muito tempo...
            </h1>

            <p class="message">
                Antes de tudo isso existir,
                antes mesmo de imaginarmos onde
                a vida iria nos levar...
            </p>

            <button onclick="nextPart()">
                Continuar ❤️
            </button>

        </main>
    `;
}


function nextPart() {

    document.body.innerHTML = `
        <main class="container">

            <div class="heart">🌱</div>

            <p class="small-text">
                PARTE 1
            </p>

            <h1>
                A creche
            </h1>

            <p class="message">
                Foi lá que a gente se conheceu.
                Duas crianças que nem imaginavam
                que muitos anos depois ainda
                teriam uma história para contar.
            </p>

            <button onclick="nextPartTwo()">
                Continuar ❤️
            </button>

        </main>
    `;
}


function nextPartTwo() {

    document.body.innerHTML = `
        <main class="container">

            <div class="heart">⏳</div>

            <p class="small-text">
                PARTE 2
            </p>

            <h1>
                O tempo passou
            </h1>

            <p class="message">
                No primeiro ano eu mudei de escola.
                Nossos caminhos se separaram e
                os anos passaram.
            </p>

            <button onclick="nextPartThree()">
                Continuar ❤️
            </button>

        </main>
    `;
}


function nextPartThree() {

    document.body.innerHTML = `
        <main class="container">

            <div class="heart">📱</div>

            <p class="small-text">
                PARTE 3
            </p>

            <h1>
                Até que você me encontrou
            </h1>

            <p class="message">
                Já no 7º ano, você encontrou meu
                Instagram. A gente começou a
                conversar novamente.
            </p>

            <button onclick="nextPartFour()">
                Continuar ❤️
            </button>

        </main>
    `;
}


function nextPartFour() {

    document.body.innerHTML = `
        <main class="container">

            <div class="heart">💬</div>

            <p class="small-text">
                PARTE 4
            </p>

            <h1>
                Era para ser só amizade...
            </h1>

            <p class="message">
                Nós dois queríamos ser apenas amigos.
                Só conversar, rir e matar a saudade.
                Mas o coração tinha outros planos.
            </p>

            <button onclick="nextPartFive()">
                Continuar ❤️
            </button>

        </main>
    `;
}


function nextPartFive() {

    document.body.innerHTML = `
        <main class="container">

            <div class="heart">❤️</div>

            <p class="small-text">
                PARTE 5
            </p>

            <h1>
                O amor falou mais alto
            </h1>

            <p class="message">
                A gente tentou ser só amigo e amiga,
                mas o sentimento era grande demais.
                A gente simplesmente não aguentou.
            </p>

            <button onclick="nextPartSix()">
                Continuar ❤️
            </button>

        </main>
    `;
}


function nextPartSix() {

    document.body.innerHTML = `
        <main class="container">

            <div class="heart">💖</div>

            <p class="small-text">
                07 DE AGOSTO DE 2026 • 18:30
            </p>

            <h1>
                E aqui estamos nós.
            </h1>

            <p class="message">
                Depois de tantos anos, a gente se
                encontrou novamente.

                E dessa vez não foi para ser
                apenas amigos.

                Dessa vez, a gente escolheu ficar juntos.
            </p>

            <p class="wait">
                De todas as histórias que poderiam
                ter acontecido...

                eu gosto mais da nossa. ❤️
            </p>

            <h2>
                Feliz aniversário, minha princesa. 🎂❤️
            </h2>

        </main>
    `;
}


// ==========================================
// INICIAR
// ==========================================

updateCountdown();

setInterval(updateCountdown, 1000);
