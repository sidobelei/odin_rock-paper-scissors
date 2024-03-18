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
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
            else if (computerSelection === "Scissors") {        
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            else if (computerSelection === "Rock") {
                return "It's a tie";
            }
        case "Paper":
            if (computerSelection === "Scissors") {
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
            else if (computerSelection === "Rock") {        
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            else if (computerSelection === "Paper") {
                return "It's a tie!";
            }
        case "Scissors":
            if (computerSelection === "Rock") {
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }
            else if (computerSelection === "Paper") {        
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }
            else if (computerSelection === "Scissors") {
                return "It's a tie!"
            }
    }
  }
  
  