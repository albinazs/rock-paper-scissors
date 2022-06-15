// function on getting computer's input
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

// function on simulating a single play round
function playRound() {

    // getting user's input
    let playerSelection = prompt("Rock, paper, or scissors?");
    console.log(playerSelection); 
    
    // getting computer's input
    let computerSelection = computerPlay();
    console.log(computerSelection); 

    // check if computer wins
    if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "SCISSORS") {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        let roundResult = "computer";
        return roundResult;
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "ROCK") {
        console.log( `You lose! ${computerSelection} beats ${playerSelection}`);
        let roundResult = "computer";
        return roundResult;
    } else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "PAPER") { 
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        let roundResult = "computer";
        return roundResult;
    } 
    // check if user wins
    else if (computerSelection == "ROCK" && playerSelection.toUpperCase() == "PAPER") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        let roundResult = "user";
        return roundResult;
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase() == "SCISSORS") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        let roundResult = "user";
        return roundResult;   
    } else if (computerSelection == "SCISSORS" && playerSelection.toUpperCase() == "ROCK") {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        let roundResult = "user";
        return roundResult;
    }
    // check if it's a tie
    else {
        console.log("It's a tie!");
        let roundResult = "tie";
        return roundResult;
    }
}

// function on simulating a game of 5 rounds
function game () {

    // setting counters of both user's and computer's wins
    let userCounter = 0;
    let computerCounter = 0;

    // running 5 rounds of a game
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound(); 

        if(roundResult == "user") {
            userCounter += 1;   
        } else if (roundResult == "computer") {  
            computerCounter += 1;
        } 
    }

    // checking who is the winner of the game
    if (userCounter > computerCounter) {
        console.log("You won this game!");
    } else if (userCounter < computerCounter) {
        console.log("You lost this game!");
    } else {
        console.log("It's a tie!");
    }

}

// simulating a game of 5 rounds
game();

