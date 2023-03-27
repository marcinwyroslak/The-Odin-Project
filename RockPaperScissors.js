const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "Player";
    } else {
        return "Computer";
    }

}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);

    if (result == "Tie") {
        return "It's a Tie!"
    } else if (result == "Player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}


function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if (choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput == true;
            return choiceInLower;
        }
    }
}

function game() {
    let playerScore = 0
    let computerScore = 0
    console.log("Welcome to my game!")
    for (let i = 0; i < 100; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (checkWinner(playerSelection,computerSelection) == "Player") {
            playerScore +=1;
        } else if (checkWinner(playerSelection,computerSelection) == "Computer") {
            computerScore +=1;
        }
        if (playerScore == 5) {
            console.log("Game over! You have won!");
            break;
        } else if (computerScore == 5) {
            console.log("Game over! You've lost it!")
            break;
        }
    }
}

game()
