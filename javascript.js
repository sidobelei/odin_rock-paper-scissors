function getComputerChoice() {
    let computerChoice;
    let randNum = Math.floor((Math.random() * 3));
    switch(randNum) {
        case 0:
            computerChoice = "Rock";
            break
        case 1:
            computerChoice = "Paper";
            break
        case 2:
            computerChoice = "Scissors"
            break
    }
    return computerChoice;
}