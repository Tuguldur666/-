// Player turn saving variable
var activeP = 1; 
// Player point saving variable
var points = [ 0 , 0];
// Player points in turns
var turnPoint = 0 ;
// Dice point random 1-6
var dice = Math.floor( Math.random()* 6)+ 1;
window.document.querySelector('#score-0').textContent = 0 ;
window.document.querySelector('#score-1').textContent = 0 ;
window.document.querySelector('#current-0').textContent = 0 ;
window.document.querySelector('#current-1').textContent = 0 ;
window.document.querySelector('.dice').style.display = "none";
