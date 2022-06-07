// getting user's input

// getting computer's input

function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) {
        let computer_input = "ROCK";
        return computer_input;
    } else if (random == 2) {
        let computer_input = "PAPER";
        return computer_input;
    } else {
        let computer_input = "SCISSORS";
        return computer_input;
    }    

};

let computerSelection = computerPlay();
console.log(computerSelection);

// getting user's input

const playerSelection = "PApER";

// single play round - compare user's and computer's input
// for computer selection 1 = rock, 2 = paper, 3 = scissors 

function playRound(playerSelection, computerSelection) {
    // computer wins
    if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "SCISSORS") {
        let message = "You lose! Rock beats scissors";
        return message;
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "ROCK") {
        let message = "You lose! Paper beats rock";
        return message;
    } else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "PAPER") { 
        let message = "You lose! Scissors beats paper";
        return message;
    } 
    // user wins
    else if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "PAPER") {
        let message = "You win! Paper beats rock";
        return message;
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "SCISSORS") {
        let message = "You win! Scissors beats paper"; 
        return message;     
    } else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "ROCK") {
        let message = "You win! Rock beats scissors"; 
        return message;
    }
    // tie
    else {
        let message = "It's a tie!";
        return message;
    }
}

playRound(playerSelection, computerSelection);  
console.log(playRound(playerSelection, computerSelection));

