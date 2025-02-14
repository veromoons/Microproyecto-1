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
const startButton = document.querySelector("#start");
const scoreDisplay = document.querySelector("#puntaje-acum");

startButton.addEventListener('click', (event) => {
  on=true;
  play();
});

function play() {
  flash = 0;
  // interval = 0;
  turn=1;
  scoreDisplay.innerHTML = 0;
  // document.querySelector("#puntaje-acum").innerHTML = 1;
  good = true
  secuenceOrder = [];
  playerOrder = [];
  for (let i = 0; i < 100; i++) {
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
    return;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      let color = secuenceOrder[flash];
      if (color == 1) top_left_effects();
      if (color == 2) bottom_left_effects();
      if (color == 3) top_right_effects();
      if (color == 4) bottom_right_effects();
      flash++;
    }, 200);
  }
}

function top_left_effects() {
  if (noise) {
    let audio = document.querySelector("#sound1");
    audio.play();
  }
  noise = true
  topLeft.style.backgroundColor = "lightblue";
}
function bottom_left_effects() {
  if (noise) {
    let audio = document.querySelector("#sound2");
    audio.play();
  }
  noise = true;
  bottomLeft.style.backgroundColor = "lightyellow";
}
function top_right_effects() {
  if (noise) {
    let audio = document.querySelector("#sound3");
    audio.play();
  }
  noise = true;
  topRight.style.backgroundColor = "lightorange";
}
function bottom_right_effects() {
  if (noise) {
    let audio = document.querySelector("#sound4");
    audio.play();
  }
  noise = true;
  bottomRight.style.backgroundColor = "lightgreen";
}

function clearColor() {
  topLeft.style.backgroundColor = "blue";
  topRight.style.backgroundColor = "orange";
  bottomLeft.style.backgroundColor = "yellow";
  bottomRight.style.backgroundColor = "green";
}

function flashColor() {
  topLeft.style.backgroundColor = "lightblue";
  topRight.style.backgroundColor = "lightorange";
  bottomLeft.style.backgroundColor = "lightyellow";
  bottomRight.style.backgroundColor = "lightgreen";
}

topLeft.addEventListener('click', () => playerAction(1, top_left_effects));
topRight.addEventListener('click', () => playerAction(3, top_right_effects));
bottomLeft.addEventListener('click', () => playerAction(2, bottom_left_effects));
bottomRight.addEventListener('click', () => playerAction(4, bottom_right_effects));


// topLeft.addEventListener('click', (event) => {
//   if (on) {
//     playerOrder.push(1);
//     check();
//     top_left_effects();
//     setTimeout(() => {
//         clearColor();
//       }, 300);
//   }
// })

// topRight.addEventListener('click', (event) => {
//   if (on) {
//     playerOrder.push(2);
//     check();
//     bottom_left_effects();
//     setTimeout(() => {
//       clearColor();
//     }, 300);
//   }
// })

// bottomLeft.addEventListener('click', (event) => {
//   if (on) {
//     playerOrder.push(3);
//     check();
//     top_right_effects();
//     setTimeout(() => {
//       clearColor();
//     }, 300);
//   }
// })

// bottomRight.addEventListener('click', (event) => {
//   if (on) {
//     playerOrder.push(4);
//     check();
//     bottom_right_effects();
//     setTimeout(() => {
//       clearColor();
//     }, 300);
//     }
//   })

function check() {
  if (playerOrder[playerOrder.length - 1] !== secuenceOrder[playerOrder.length - 1]){
    flashColor();
    setTimeout(() => {
      clearColor();
      successCount = 0; // Reset success count
      turn = 1; // Reset turn
      scoreDisplay.innerHTML = turn; // Update score display
      play();
    }, 1000);
    noise = false;
    return;
  }

  if (turn == playerOrder.length && good) {
    turn++;
    playerOrder = [];
    scoreDisplay.innerHTML = turn-1;
    compTurn = true;
    flash = 0;
    interval = setInterval(gameTurn, 800);
  }

}

function playerAction(color, effectFunction) {
  if (on && !compTurn) {
    playerOrder.push(color);
    effectFunction();
    setTimeout(clearColor, 300);
    check();
  }
}






// function finishGame() {
//     alert('Perdiste!');
  
//     if (intervalId !== null) {
//       clearInterval(intervalId);
//     }
  
//     isPlaying = false;
  
//     const previousPlayers = localStorage.getItem('scores');
  
//     let previousPlayersArray = [];
  
//     if (previousPlayers !== null) {
//       previousPlayersArray = JSON.parse(previousPlayers);
//     }
  
//     localStorage.setItem(
//       'scores',
//       JSON.stringify([
//         ...previousPlayersArray,
//         {
//           name: playerName,
//           count: hitCount,
//         },
//       ])
//     );
  
//     alert(localStorage.getItem('scores'));
//   }
  
//   function resetGame() {
//     if (intervalId !== null) {
//       clearInterval(intervalId);
//     }
  
//     hitCount = 0;
//     updateHitCount(0);   //FALTA!!!
  
//     const grid = document.querySelector('#grid');
  
//     grid.innerHTML = '';
  
//     prepareGame(); //FALTA!!!
  
//     isPlaying = false;
//   }