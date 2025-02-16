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
    localStorage.setItem("nombre-jugador", playerName);
    window.location.href = "juego.html";  
    window.location.href = '../Juego/juego.html';
}

document.querySelector('#play-button').addEventListener('click', startGame);

function activateModal(finalPuntajes){
    var modal = document.getElementById("modalpopup");
      modal.style.display = "block";

      finalPuntajes.sort((a, b) => b.score - a.score);
      
      let tableHTML = `
          <table>
              <tr>
                  <th>NOMBRE</th>
                  <th>PUNTAJE</th>
              </tr>
              ${finalPuntajes.map(p => `<tr><td>${p.name}</td><td>${p.score}</td></tr>`).join("")}
          </table>
      `;
  
      document.getElementById("scoresText").innerHTML = tableHTML;
  
      document.querySelector(".close").addEventListener("click", function() {
        document.getElementById("modalpopup").style.display = "none";
    });
  }

  
  function openModal(){
    var modal = document.getElementById("modalpopup");
    modal.style.display = "block";
    const puntajes = localStorage.getItem("puntaje");
    let parsedPuntajes = JSON.parse(puntajes)
    if (parsedPuntajes && parsedPuntajes.length > 0){
      parsedPuntajes = [...parsedPuntajes]
    }else{
      parsedPuntajes = []
    }
    activateModal(parsedPuntajes)  
  }

  document.getElementById("myBtn").addEventListener("click", openModal);
