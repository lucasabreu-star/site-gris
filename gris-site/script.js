// MÚSICA GLOBAL
let music = new Audio("img/musica.mp3");
music.loop = true;
music.volume = 0.5;

// Verifica se a música já estava tocando
let playing = localStorage.getItem("musicPlaying") === "true";

if (playing) {
    music.play().catch(() => {});
}

// Procura o botão na página atual
const musicBtn = document.getElementById("musicBtn");

if (musicBtn) {

    musicBtn.innerText = playing
        ? "🔊 Música: ON"
        : "🔇 Música: OFF";

    musicBtn.addEventListener("click", () => {

        if (playing) {
            music.pause();
            localStorage.setItem("musicPlaying", "false");
            musicBtn.innerText = "🔇 Música: OFF";
        } else {
            music.play();
            localStorage.setItem("musicPlaying", "true");
            musicBtn.innerText = "🔊 Música: ON";
        }

        playing = !playing;
    });
}