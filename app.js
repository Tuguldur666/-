// Player turn saving variable
var activeP = 0; 
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
// turn point
if(diceNumber !== 1)
{
    turnPoint = turnPoint + diceNumber ;
    document.getElementById('current-' + activeP).textContent = turnPoint ;
}else
{       
        turnPoint = 0 ;
        document.getElementById('current-' + activeP).textContent = 0 ;
        if(activeP === 0)
        {
            activeP = 1 ;
        }else 
        {
            activeP = 0 ;
        }
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        document.querySelector(".dice").style.display = "none";
        
}
    }
    );


