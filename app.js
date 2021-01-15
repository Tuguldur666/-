// Player turn saving variable
var activeP = 1; 
// Player point saving variable
var points = [ 0 , 0];
// Player points in turns
var turnPoint = 0 ;
// Dice point random 1-6
var diceNumber = Math.floor( Math.random()* 6)+ 1;
window.document.getElementById('score-0').textContent = '0' ;
window.document.getElementById('score-1').textContent = '0' ;
window.document.getElementById('current-0').textContent = '0' ;
window.document.getElementById('current-1').textContent = '0';
window.document.querySelector(".dice").style.display = "none";
document.querySelector('.btn-roll').addEventListener("click" , function()
{
    var diceNumber = Math.floor( Math.random()* 6)+ 1;
    window.document.querySelector(".dice").style.display = "block";
window.document.querySelector(".dice").src = "dice-" + diceNumber + ".png";
}
);


