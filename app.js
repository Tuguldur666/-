var isGameOver;
var activePlayer;

var points;

var turnPoints;
var diceDom = document.querySelector(".dice");


newGame();

function newGame() {

  isGameOver = false ;

  activePlayer = 0;

  points = [0, 0];

  turnPoints = 0;


  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}


document.querySelector(".btn-roll").addEventListener("click", function() {
  if(isGameOver !== true)
  {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";


  diceDom.src = "dice-" + diceNumber + ".png";


  if (diceNumber !== 1) {
    turnPoints = turnPoints + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = turnPoints;
  } else {

    switchToNextPlayer();
  }
  }else {alert(" Game  Over  Please click on NEW GAME");}
  
});


document.querySelector(".btn-hold").addEventListener("click", function() {

  points[activePlayer] = points[activePlayer] + turnPoints;

  document.getElementById("score-" + activePlayer).textContent =
    points[activePlayer];


  if (points[activePlayer] >= 100) {
    isGameOver = true ;
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {

    switchToNextPlayer();
  }
});


function switchToNextPlayer() {
  turnPoints = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  
  diceDom.style.display = "none";
}

// New Game 
document.querySelector(".btn-new").addEventListener("click", newGame);
