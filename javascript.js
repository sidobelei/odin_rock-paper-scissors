const selection = document.querySelector(".selection");
selection.addEventListener("click", function(event) {
    const selected = event.target.id;
    playRound(selected);
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
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                return "lose";
            }
            else if (computerSelection === "Scissors") {        
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                return "win";
            }
            else if (computerSelection === "Rock") {
                console.log("It's a tie!");
                return "tie";
            }
        case "Paper":
            if (computerSelection === "Scissors") {
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                return "lose";
            }
            else if (computerSelection === "Rock") {        
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                return "win";
            }
            else if (computerSelection === "Paper") {
                console.log("It's a tie!");
                return "tie";
            }
        case "Scissors":
            if (computerSelection === "Rock") {
                console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
                return "lose";
            }
            else if (computerSelection === "Paper") {        
                console.log(`You win! ${playerSelection} beats ${computerSelection}`);
                return "win";
            }
            else if (computerSelection === "Scissors") {
                console.log("It's a tie!");
                return "tie";
            }
    }
  }