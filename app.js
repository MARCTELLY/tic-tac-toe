import { Player } from "./players.js";

// debut
let startBtn = document.querySelector(".start-game-btn");
let pseudo1 = document.getElementById("pseudo-1");
let pseudo2 = document.getElementById("pseudo-2");
let markElement = document.getElementsByName("radio-mark");
let playerDiv = document.querySelector(".player");
let bordGame = document.querySelector(".bord");

const cicleBtn = document.querySelector(".cs-circle");
const xBtn = document.querySelector(".cs-x");

let playerMarkChoiceCircle = document.querySelector(".type-circle");
let playerMarkChoiceX = document.querySelector(".type-x");

// creation des joueurs
let firstPlayer = new Player("Player1", "o");
let secondPlayer = new Player("Player2", "x");

cicleBtn.addEventListener("click", () => {
  playerMarkChoiceCircle.textContent = "Player 1";
  playerMarkChoiceCircle.style.display = "inline-block";
  playerMarkChoiceX.textContent = "Player 2";
  playerMarkChoiceX.style.display = "inline-block";
});

xBtn.addEventListener("click", () => {
  playerMarkChoiceCircle.textContent = "Player 2";
  playerMarkChoiceCircle.style.display = "inline-block";
  playerMarkChoiceX.textContent = "Player 1";
  playerMarkChoiceX.style.display = "inline-block";
});

startBtn.addEventListener("click", launchGame);

function launchGame() {
  //recupeer les pseudo et les choix
  // creer un objet player
  let mark1;
  let mark2;
  if (pseudo1.value == "" && pseudo2.value == "") {
    alert("no name");
  } else {
    markElement.forEach((m) => {
      if (m.checked) {
        mark1 = m.value;
        mark1 == "o" ? (mark2 = "x") : (mark2 = "o");
      }
    });
    playerDiv.className += " shut";
    bordGame.className = "bord";

    firstPlayer = new Player(pseudo1.value, mark1);
    secondPlayer = new Player(pseudo2.value, mark2);
  }
}

// diferent classe
const X_CLASS = "x";
const O_CLASS = "circle";

// selection des cellules
const cellElements = document.querySelectorAll("[data-cell]");

// gestion des évenement de click sur les cellules
cellElements.forEach((cell) => {
  cell.addEventListener("click", handelClick, { once: true });
});

function handelClick(e) {
  const cell = e.target;
  // placer les marque
  // verifier win
  // verifier draw
  //changer de tourn
}
