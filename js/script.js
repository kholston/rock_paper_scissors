//Gets random choice for computer
function computerPlay()
{
    let choices = ["Rock", "Paper", "Scissors"]

    return choices[Math.floor(Math.random() * choices.length)]
}


function playRound(playerSelection, computerSelection)
{
    
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
                result = "You Tied."
            break;

            case "Paper":
                result = "You lose! Paper beats Rock."
            break;

            case "Scissors":
                result = "You win! Rock beats Scissors"
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
                result = "You Win. Paper beats Rock"
            break;

            case "Paper":
                result = "You Tied"
            break;

            case "Scissors":
                result = "You Lose! Scissors beats Paper"
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
                result = "You Lose! Rock beats Paper."
            break;

            case "Paper":
                result = "You Win! Scissors beats Paper."
            break;

            case "Scissors":
                result = "You Tied"
            break;

            default:
                result = "Something has gone wrong"
        } 
    }

 
    console.log(result);
    return result;
}


//Connects buttons to variables
rBtn = document.getElementById("rock");
pBtn = document.getElementById("paper");
pBtn = document.getElementById("paper");

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




