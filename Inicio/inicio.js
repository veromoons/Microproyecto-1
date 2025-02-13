let isPlaying = false;
let playerName = null;

function getName() {
    console.log(document.querySelector('#name-input').value)
    return document.querySelector('#name-input').value;
  }

function startGame(){
    console.log("Juego iniciado");

    const name = getName();
    if (!name) {
        alert("Ingresa tu nombre");
        return
    }
    playerName = name;

    isPlaying = true;
    window.location.href = '../Juego/juego.html';
}

document.querySelector('#play-button').addEventListener('click', startGame);

