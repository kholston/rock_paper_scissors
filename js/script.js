function computerPlay()
{
    let choices = ["Rock", "Paper", "Scissors"]

    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerSelection, computerSelection)
{
  let result;
  
  if(typeof playerSelection != "string")
    playerSelection = prompt("Please enter valid choice");
  
  if(playerSelection == null)
  {
       return;
  }


    if(playerSelection.toUpperCase() == "ROCK")
    {
        switch(computerSelection)
        {
            case "Rock":
                return result = "You Tied."
            break;

            case "Paper":
                return result = "You lose! Paper beats Rock."
            break;

            case "Scissors":
                   return result = "You win! Rock beats Scissors"
            break;

            default:
            return result = "Something has gone wrong"
        }
    }

    else if(playerSelection.toUpperCase() == "PAPER")
    {
        switch(computerSelection)
        {
            case "Rock":
                return result = "You Win. Paper beats Rock"
            break;

            case "Paper":
                return result = "You Tied"
            break;

            case "Scissors":
                  return result = "You Lose! Scissors beats Paper"
            break;

            default:
            return result = "Something has gone wrong"
        }
    }

    else if(playerSelection.toUpperCase() == "SCISSORS")
    {
        switch(computerSelection)
        {
            case "Rock":
                return result = "You Lose! Rock beats Paper."
            break;

            case "Paper":
                return result = "You Win! Scissors beats Paper."
            break;

            case "Scissors":
                return result = "You Tied"
            break;

            default:
                return result = "Something has gone wrong"
        } 
    }

    else
    {
        playerSelection = prompt("Please enter a valid choice.")
        console.log(playerSelection);
        console.log(playRound(playerSelection,computerSelection));
        
    }

    return result;
}

function outputResult(result)
{
    console.log(result)
    alert(result)
}

function game()
{
    let result;

    alert("Welcome to Rock, Paper, Scissors. Click to continue . . .")

    playerinput = prompt("Round 1: Rock,Paper, Scissors")
    result = playRound(playerinput, computerPlay())
    outputResult(result)
    

    playerinput = prompt("Round 2: Rock,Paper, Scissors")
    result = playRound(playerinput, computerPlay())
    outputResult(result)

    playerinput = prompt("Round 3: Rock,Paper, Scissors")
    result = playRound(playerinput, computerPlay())
    outputResult(result)

    playerinput = prompt("Round 4: Rock,Paper, Scissors")
    result = playRound(playerinput, computerPlay())
    outputResult(result)

    playerinput = prompt("Round 5: Rock,Paper, Scissors")
    result = playRound(playerinput, computerPlay())
    outputResult(result)

    console.log("Game Over.")
    alert("Game Over")
}