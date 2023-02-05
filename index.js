function getComputerChoice() {
    let computerChoice = Math.random();

    if (computerChoice <0.34){
        computerChoice = "rock";
    } else if (computerChoice <=0.67) {
        computerChoice = "paper";
    } else{
        computerChoice = "scissors";
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    console.log("ROCK!!! PAPER!!! SCISSORS!!!");
    let getPlayerPrompt = prompt("pick one").toLowerCase();

    /* switch(getPlayerPrompt){
        case "rock":
            if ((playerSelection == "rock") && (computerSelection == "scissors")) {
                pWins++
                return("You win! Your opponent chose " + computerSelection)
            }
            break;
        case "paper":

            break;
        case "scissors":

            break;

        case null:

        default:
            return("Invalid Answer")

    }*/

    
    while( !(getPlayerPrompt == "rock" || 
            getPlayerPrompt == "paper" ||
            getPlayerPrompt == "scissors"))
    {
        getPlayerPrompt = prompt("Error! pick one again").toLowerCase();

    } 
    playerSelection = getPlayerPrompt 
    computerSelection = getComputerChoice();
    
    /*
    if (getPlayerPrompt != null) {
        playerSelection = getPlayerPrompt
    }
    /*else
    {
        let getPlayerPrompt = prompt("Error! pick one again");
    }*/

   
    if (playerSelection == computerSelection) {
        return ("Draw! Your opponent chose " + computerSelection)
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        pWins++
        return("You win! Your opponent chose " + computerSelection)
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        pWins++
        return ("You win! Your opponent chose " + computerSelection)
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        pWins++
        return ("You win! Your opponent chose " + computerSelection)
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        cWins++
        return ("You lost! Your opponent chose " + computerSelection)
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        cWins++
        return ("You lost! Your opponent chose " + computerSelection)
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        cWins++
        return( "You lost! Your opponent chose " + computerSelection)
    } 
    
}
    
//let playerInput = 'test';
//const computerSelection = getComputerChoice();
//console.log(playRound(playerInput, computerSelection));

// count player or comp wins/loses if either reaches round condition.
// end the game completely

/*while(pWins || cWins <= 3)
{
    let playerInput = 'test';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerInput, computerSelection));
}

for(let roundCounter = 0; roundCounter < 5; roundCounter++)
{
    let playerInput = 'test';
    const computerSelection = getComputerChoice();
    console.log(playRound(playerInput, computerSelection));
}*/


//console.log(computerSelection)

let pWins = 0
let cWins = 0
let playerInput = "";
let computerSelection = getComputerChoice();

function game() {

    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerInput, computerSelection));
        console.log("player wins: " + pWins + "\ncomputer wins: " + cWins)
    }

    if( pWins > cWins)
    {
        console.log("You Win!")
    }
    else if (pWins < cWins)
    {
        console.log("You Lost!")
    }
    else
    {
        console.log("Draw")
    }
    
}

game()