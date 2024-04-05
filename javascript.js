const message = document.querySelector("#message");
const yourScoreElement = document.querySelector("#yourScore");
const computerScoreElement = document.querySelector("#computerScore");
let gameOver = false;
let yourScoreValue = 0;
let computerScoreValue = 0;
let outcome;

const selection = document.querySelector(".selection");
selection.addEventListener("click", function(event) {
    if (gameOver) {
        message.textContent = "Game Over. Refresh the page to play again!";
    }
    else {
        const selected = event.target.id;
        outcome = playRound(selected);
        switch (outcome) {
            case "win":
                yourScoreValue += 1;
                yourScoreElement.textContent = yourScoreValue;
                break;
            case "lose":
                computerScoreValue += 1;
                computerScoreElement.textContent = computerScoreValue;
                break;
        }
        if (yourScoreValue === 5 || computerScoreValue === 5) {
            gameOver = true;
            if (yourScoreValue === 5) {
                message.textContent += " You Won The Game!";
            }
            else {
                message.textContent += " You Lost The Game!";
            }
             
        }
    }
})

function getComputerChoice() {
    // Create computerChoice variable
    let computerChoice;

    // Generate random number from 0 - 2
    let randNum = Math.floor((Math.random() * 3));
    
    // Return a choice based on random number
    switch(randNum) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors"
            break;
    }
    return computerChoice;
}

function playRound(playerSelection) {
    // Get computer selection
    let computerSelection = getComputerChoice();
    
    // Format playerSelection string
    playerSelection = playerSelection.toLowerCase();
    let capitalize = playerSelection.charAt(0);
    capitalize = capitalize.toUpperCase();
    playerSelection = playerSelection.slice(1);
    playerSelection = capitalize + playerSelection;

    // Determine game outcome and return verdict
    switch(playerSelection) {
        case "Rock":
            if (computerSelection === "Paper") {
                message.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
                return "lose";
            }
            else if (computerSelection === "Scissors") {        
                message.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
                return "win";
            }
            else if (computerSelection === "Rock") {
                message.textContent = "It's a tie!";
                return "tie";
            }
        case "Paper":
            if (computerSelection === "Scissors") {
                message.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
                return "lose";
            }
            else if (computerSelection === "Rock") {        
                message.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
                return "win";
            }
            else if (computerSelection === "Paper") {
                message.textContent = "It's a tie!";
                return "tie";
            }
        case "Scissors":
            if (computerSelection === "Rock") {
                message.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
                return "lose";
            }
            else if (computerSelection === "Paper") {        
                message.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
                return "win";
            }
            else if (computerSelection === "Scissors") {
                message.textContent = "It's a tie!";
                return "tie";
            }
    }
  }