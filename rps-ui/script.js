// function on getting computer's input
function computerPlay() {
    let random = Math.floor(Math.random() * 3) + 1;

    if (random == 1) {
        return "ROCK"; 
    } else if (random == 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
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

//playRound();

