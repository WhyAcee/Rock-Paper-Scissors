//Randomly generate a number to find the computers choice
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
    let getPlayerPrompt = playerInput;

    /* while( !(getPlayerPrompt == "rock" || 
            getPlayerPrompt == "paper" ||
            getPlayerPrompt == "scissors"))
    {
        getPlayerPrompt = prompt("Error! pick one again").toLowerCase();

    }  */
    playerSelection = getPlayerPrompt 
    computerSelection = getComputerChoice();
    
 
    if (playerSelection == computerSelection) {
        return results.textContent = `Draw! Your opponent chose ${computerSelection}`
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        pWins++
        return results.textContent =`You win! Your opponent chose ${computerSelection}`
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        pWins++
        return results.textContent = `You win! Your opponent chose ${computerSelection}`
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        pWins++
        return results.textContent = `You win! Your opponent chose ${computerSelection}`
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        cWins++
        return results.textContent = `You lost! Your opponent chose ${computerSelection}`
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        cWins++
        return results.textContent = `You lost! Your opponent chose ${computerSelection}`
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        cWins++
        return results.textContent = `You lost! Your opponent chose ${computerSelection}`
    } 
 
}

function GetResults() {
    if(pWins >= winCondition)
    {
        gameActive = false
        return results.textContent = `Game Ended! Player Wins! Click New Game To Play Again!`,
        pScore.textContent = `Player Score: ${pWins}`, cScore.textContent = `Computer Score: ${cWins}`
    }
    else if (cWins >= winCondition)
    {
        gameActive = false
        return results.textContent = `Game Ended! Computer Wins! Click New Game To Play Again!`,
        pScore.textContent = `Player Score: ${pWins}`, cScore.textContent = `Computer Score: ${cWins}`
    }
    return pScore.textContent = `Player Score: ${pWins}`, cScore.textContent = `Computer Score: ${cWins}`
}
    
let pWins = 0
let cWins = 0
let winCondition = 5
let gameActive = false
let playerInput = "";
let computerSelection = getComputerChoice();

const newBtn = document.querySelector('.new')
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')
let results = document.querySelector(".results")
let pScore = document.querySelector(".pScore")
let cScore = document.querySelector(".cScore")

//New Game button to Set Game Parameters

newBtn.addEventListener('click',function (e) {
    if(!gameActive)
    {
        gameActive = true
        pWins = 0, cWins = 0, winCondition = 5
        results.textContent = `Click one of the Above Options to Play!`
        pScore.textContent = `Player Score: ${pWins}`, cScore.textContent = `Computer Score: ${cWins}`
    }
});

// Buttons to get player input and plays round
rockBtn.addEventListener('click', function (e) {
    if(gameActive)
    {
        playerInput = "rock";
        playRound(playerInput, computerSelection);
        GetResults() 
    }
});

paperBtn.addEventListener('click', function (e) {
    if(gameActive)
    {
        playerInput = "paper";
        playRound(playerInput, computerSelection);
        GetResults()
    }
});

scissorsBtn.addEventListener('click', function (e) {
    if(gameActive)
    {
        playerInput = "scissors";
        playRound(playerInput, computerSelection);
        GetResults()  
    }
});




/* function game() {

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

game() */