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


rBtn = document.createElement("button");
rBtn.innerText = "Rock";
document.body.appendChild(rBtn);

rBtn.addEventListener("click",function(){
    playRound(rBtn.innerText,computerPlay());
});

pBtn = document.createElement("button");
pBtn.innerText = "Paper";
document.body.appendChild(pBtn);

pBtn.addEventListener("click",function(){
    playRound(pBtn.innerText,computerPlay());
});

sBtn = document.createElement("button");
sBtn.innerText = "Scissors";
document.body.appendChild(sBtn);

sBtn.addEventListener("click",function(){
    playRound(sBtn.innerText,computerPlay());
});



