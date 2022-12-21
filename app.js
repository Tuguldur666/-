let GameOver;
let activePlayer;
let points;
let turnPoints;
let diceDom = document.querySelector(".dice");


newGame();
function newGame() {

  GameOver = false ;
  activePlayer = 0;
  points = [0, 0];
  turnPoints = 0;


  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Тоглогч 1";
  document.getElementById("name-1").textContent = "Тоглогч 2";
  document.querySelector(".player-0").classList.remove("winner");
  document.querySelector(".player-1").classList.remove("winner");
  document.querySelector(".player-0").classList.remove("active");
  document.querySelector(".player-1").classList.remove("active");
  document.querySelector(".player-0").classList.add("active");
  diceDom.style.display = "none";
}


document.querySelector(".btn-roll").addEventListener("click", function() 
{
  if(GameOver !== true)
  {
    let diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block";


  diceDom.src = "dice-" + diceNumber + ".png";


  if (diceNumber !== 1) {
    turnPoints = turnPoints + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = turnPoints;
  } else {

    switchPlayer();
  }
  }else {
            alert("Тоглоом дууссан !!!");
            newGame(); 
}
  
});


document.querySelector(".btn-hold").addEventListener("click", function() {

  points[activePlayer] = points[activePlayer] + turnPoints;

  document.getElementById("score-" + activePlayer).textContent =
    points[activePlayer];


  if (points[activePlayer] >= 30 ) {
    GameOver = true ;
    document.getElementById("name-" + activePlayer).textContent = "Ялагч !!!";
    document
      .querySelector(".player-" + activePlayer )
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer )
      .classList.remove("active");
  } else {

    switchPlayer();
  }
});


function switchPlayer() {
  turnPoints = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  
 if(activePlayer === 0)
 {
    (activePlayer = 1);

  }else{
    (activePlayer = 0)
  } 

  
  document.querySelector(".player-0").classList.toggle("active");
  document.querySelector(".player-1").classList.toggle("active");

  
  diceDom.style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", newGame);
