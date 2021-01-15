// Player turn saving variable
var activeP = 0; 
// Player point saving variable
var points = [ 0 , 0];
// Player points in turns
var turnPoint = 0 ;
// Dice point random 1-6
var diceNumber = Math.floor( Math.random()* 6)+ 1;
document.getElementById('score-0').textContent = '0' ;
document.getElementById('score-1').textContent = '0' ;
document.getElementById('current-0').textContent = '0' ;
document.getElementById('current-1').textContent = '0';
document.querySelector(".dice").style.display = "none";
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
        switchP();
        
}
    }
    );
    // Saving turn point
        document.querySelector(".btn-hold").addEventListener("click", function()
        { 
        //  if(activeP === 0)
        //     {
        //         points[0] = points[0] + turnPoint ;
        //     }else
        //     {
        //         points[1] = points[1] + turnPoint ;
        //     }
            points[activeP] = points[activeP] + turnPoint ;
            document.getElementById('score-' + activeP).textContent = points[activeP] ;
            // win
            if(points[activeP] >= 20)
            {
                document.getElementById("name-" + activeP).textContent = "WINNER !!! ";
                document.querySelector(".player-" +activeP+ "-panel").classList.add('winner');
            }else
            {
                
                // switch turn
                switchP();
            }

        }
        );
        function switchP()
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

        };

