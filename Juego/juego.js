let successCount = 0;
let secuenceOrder = [];
let playerOrder = [];
let flash;
let turn;
let good;
let compTurn;
let interval;
let noise = true;
let on = false;

const topLeft = document.querySelector("#button-top-left");
const bottomLeft = document.querySelector("#button-bottom-left");
const topRight = document.querySelector("#button-top-right");
const bottomRight = document.querySelector("#button-bottom-right");

function play() {
  flash = 0;
  interval = 0;
  document.querySelector("#puntaje-acum").innerHTML = 1;
  good = true;
  for (var i = 0; i < 20; i++) {
    let random_color = Math.floor(Math.random() * 4) + 1
    secuenceOrder.push(random_color);
  }
  compTurn = true;

  interval = setInterval(gameTurn, 800);
}

function gameTurn() {
  on = false;

  if (flash == turn) {
    clearInterval(interval);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) top_left_effects();
      if (order[flash] == 2) bottom_left_effects();
      if (order[flash] == 3) top_right_effects();
      if (order[flash] == 4) bottom_right_effects();
      flash++;
    }, 200);
  }
}

function top_left_effects() {
  if (noise) {
    let audio = document.querySelector("sound1");
    audio.play();
  }
  noise = true;
  topLeft.style.backgroundColor = "lightblue";
}
function bottom_left_effects() {
  if (noise) {
    let audio = document.querySelector("sound2");
    audio.play();
  }
  noise = true;
  bottomLeft.style.backgroundColor = "lightyellow";
}
function top_right_effects() {
  if (noise) {
    let audio = document.querySelector("sound3");
    audio.play();
  }
  noise = true;
  topRight.style.backgroundColor = "lightred";
}
function bottom_right_effects() {
  if (noise) {
    let audio = document.querySelector("sound4");
    audio.play();
  }
  noise = true;
  bottomRight.style.backgroundColor = "lightgreen";
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