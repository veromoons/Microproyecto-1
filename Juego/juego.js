let successCount = 0;
let order = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let intervalId;
let noise = true;
let on = false;

const topLeft = document.querySelector("#topleft");
const bottomLeft = document.querySelector("#bottomleft");
const topRight = document.querySelector("#topright");
const bottomRight = document.querySelector("#bottomright");

//function play() {
//  flash = 0;
//  intervalId = 0;
//  turn = 1;
//  turnCounter.innerHTML = 1;
//  good = true;
//  for (var i = 0; i < 20; i++) {
//    order.push(Math.floor(Math.random() * 4) + 1);
//  }
//  compTurn = true;
//
//  intervalId = setInterval(gameTurn, 800);
//}

//Repetir para los demás botones
function button_one_color() {
  if (noise) {
    let audio = document.getElementById("sound1");
    audio.play();
  }
  noise = true;
  //topLeft.style.backgroundColor = "lightgreen";
}


function finishGame() {
    alert('Perdiste!');
  
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  
    isPlaying = false;
  
    const previousPlayers = localStorage.getItem('scores');
  
    let previousPlayersArray = [];
  
    if (previousPlayers !== null) {
      previousPlayersArray = JSON.parse(previousPlayers);
    }
  
    localStorage.setItem(
      'scores',
      JSON.stringify([
        ...previousPlayersArray,
        {
          name: playerName,
          count: hitCount,
        },
      ])
    );
  
    alert(localStorage.getItem('scores'));
  }
  
  function resetGame() {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  
    hitCount = 0;
    updateHitCount(0);
  
    const grid = document.querySelector('#grid');
  
    grid.innerHTML = '';
  
    prepareGame();
  
    isPlaying = false;
  }