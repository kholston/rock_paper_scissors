//Gets random choice for computer


let wins = 0;
let ties = 0;
let cpuWins = 0;
let round = 1;

//Connects buttons to variables
rBtn = document.getElementById("rock");
pBtn = document.getElementById("paper");
sBtn = document.getElementById("scissors");

pWinResult = document.getElementById("pWins");
cWinResult = document.getElementById("cWins");
tieResult = document.getElementById("ties");
roundNum = document.getElementById("roundNumber");


function computerPlay()
{
    let choices = ["Rock", "Paper", "Scissors"]

    return choices[Math.floor(Math.random() * choices.length)]
}

function resetResults()
{
    wins = 0;
    ties = 0;
    cpuWins = 0;
    round = 0;
}

function setResults()
{
    pWinResult.innerText = "Player Wins \n" + wins;
    cWinResult.innerText = "Computer Wins \n" + cpuWins;
    tieResult.innerText = "Ties \n" + ties;
    roundNum.innerText = "Round " + round;
}




function playRound(playerSelection, computerSelection)
{
    if(wins == 5 || cpuWins ==5)
    {
        resetResults();
    }
    setResults();
   
  let result;
  if(playerSelection == null)
  {
       return;
  }


    if(playerSelection.toUpperCase() == "ROCK")
    {
        switch(computerSelection)
        {
            case "Rock":
                result = "Computer chose Rock.\n You Tied."
                ties++;
            break;

            case "Paper":
                result = "Computer chose Paper.\n You lose! Paper beats Rock."
                cpuWins++;
            break;

            case "Scissors":
                result = "Computer chose Scissors.\nYou win! Rock beats Scissors"
                wins++;
            break;

            default:
                result = "Something has gone wrong"
        }
    }

    else if(playerSelection.toUpperCase() == "PAPER")
    {
        switch(computerSelection)
        {
            case "Rock":
                result = "Computer chose Rock.\n You Win. Paper beats Rock"
                wins++;
            break;

            case "Paper":
                result = "Computer chose Paper.\n You Tied"
                ties++;
            break;

            case "Scissors":
                result = "Computer chose Scissors.\n You Lose! Scissors beats Paper"
                cpuWins++;
            break;

            default:
                result = "Something has gone wrong"
        }
    }

    else if(playerSelection.toUpperCase() == "SCISSORS")
    {
        switch(computerSelection)
        {
            case "Rock":
                result = "Computer chose Rock.\n You Lose! Rock beats Paper."
                cpuWins++;
            break;

            case "Paper":
                result = "Computer chose Paper.\n You Win! Scissors beats Paper."
                wins++;
            break;

            case "Scissors":
                result = "Computer chose Scissors.\n You Tied"
                ties++;
            break;

            default:
                result = "Something has gone wrong"
        } 
    }

    
 
    console.log(result);
    statementBox = document.getElementById("resultStatement");
    statementBox.innerText = result;

    if(wins == 5)
    {
        statementBox.innerText = "You Win!\n Click a button to start a new game.\n First to 5 Wins"  
    }

    if(cpuWins == 5)
    {
        statementBox.innerText = "You Lose.\n Click a button to start a new game.\n First to 5 Wins" 
    }

    
    round++; 
    setResults();   
}




//Plays a round when the button is clicked
rBtn.addEventListener("click",function(){
    playRound(rBtn.innerText,computerPlay());
});

pBtn.addEventListener("click",function(){
    playRound(pBtn.innerText,computerPlay());
});

sBtn.addEventListener("click",function(){
    playRound(sBtn.innerText,computerPlay());
});




