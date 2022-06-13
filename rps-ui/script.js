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

// function on getting user's input
function userPlay(e) {
    if(e.target.classList.contains('rock')) {
        return 'ROCK';
    } else if(e.target.classList.contains('paper')) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

// function on simulating a single play round
function playRound(e) {
    console.log(e);
    console.log(e.target.classList)

    const m1 = document.querySelector('h3');
    const m2 = document.querySelector('.m');
    const cChoicePic = document.querySelector('.choice.c');
    const pChoicePic = document.querySelector('.choice.p');

    const rockPic = document.createElement('img');
    rockPic.setAttribute('src', './img/rock.png');
    rockPic.setAttribute('style', 'width: 130px;');
    const paperPic = document.createElement('img');
    paperPic.setAttribute('src', './img/paper.png');
    paperPic.setAttribute('style', 'width: 130px;');
    const scissorsPic = document.createElement('img');
    scissorsPic.setAttribute('src', './img/scissors.png');
    scissorsPic.setAttribute('style', 'width: 130px;');
    
    let computerSelection = computerPlay();
    console.log(computerSelection); 

    let playerSelection = userPlay(e);

    pChoicePic.textContent = "";
    cChoicePic.textContent = "";

    // check if computer wins
    if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        m1.textContent = 'You lose!';
        m2.textContent = `${computerSelection} beats ${playerSelection}`;      
        cChoicePic.appendChild(rockPic);
        pChoicePic.appendChild(scissorsPic);
        let roundResult = "computer";
        return roundResult;
    } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        m1.textContent = 'You lose!';
        m2.textContent = `${computerSelection} beats ${playerSelection}`;
        cChoicePic.appendChild(paperPic);
        pChoicePic.appendChild(rockPic);
        let roundResult = "computer";
        return roundResult;
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") { 
        m1.textContent = 'You lose!';
        m2.textContent = `${computerSelection} beats ${playerSelection}`;
        cChoicePic.appendChild(scissorsPic);
        pChoicePic.appendChild(paperPic);
        let roundResult = "computer";
        return roundResult;
    } 
    // check if user wins
    else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
        m1.textContent = 'You win!';
        m2.textContent = `${playerSelection} beats ${computerSelection}`;
        cChoicePic.appendChild(rockPic);
        pChoicePic.appendChild(paperPic);
        let roundResult = "user";
        return roundResult;
    } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
        m1.textContent = 'You win!';
        m2.textContent = `${playerSelection} beats ${computerSelection}`;
        cChoicePic.appendChild(paperPic);
        pChoicePic.appendChild(scissorsPic);
        let roundResult = "user";
        return roundResult;   
    } else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        m1.textContent = 'You win!';
        m2.textContent = `${playerSelection} beats ${computerSelection}`;
        cChoicePic.appendChild(scissorsPic);
        pChoicePic.appendChild(rockPic);
        let roundResult = "user";
        return roundResult;
    }
    // check if it's a tie
    else {
        m1.textContent = 'It\'s a tie!';
        m2.textContent = `${playerSelection} ties with ${computerSelection}`;
        let roundResult = "tie";
        if (computerSelection == "ROCK" && playerSelection == "ROCK") {
            cChoicePic.appendChild(rockPic);
            pChoicePic.appendChild(rockPic.cloneNode(true));         
        } else if (computerSelection == "PAPER" && playerSelection == "PAPER") {
            cChoicePic.appendChild(paperPic);
            pChoicePic.appendChild(paperPic.cloneNode(true));
        } else {
            cChoicePic.appendChild(scissorsPic);
            pChoicePic.appendChild(scissorsPic.cloneNode(true));
        }
        return roundResult;
    }
}

function buttonAnimation(e) {
    console.log(e.target.classList);
    e.target.classList.add('animated');
}

function removeAnimation(e) {
    console.log(e.target.classList);
    e.target.classList.remove('animated');
}

//add event listeners to each button and call playround
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', playRound));
buttons.forEach(button => button.addEventListener('mouseover', buttonAnimation));
buttons.forEach(button => button.addEventListener('mouseout', removeAnimation));

function game () {

    const cs = document.querySelector('.cs');
    const ps = document.querySelector('.ps');
    
    // setting counters of both user's and computer's wins
    let computerCounter = 0;
    let userCounter = 0;
    
    // running rounds of a game
    let roundResult = playRound(); 

        if(roundResult == "user") {
            userCounter += 1;   
        } else if (roundResult == "computer") {  
            computerCounter += 1;
        } 

        cs.textContent = computerCounter;
        ps.textContent = userCounter;

    // checking who is the winner of the game
    if (userCounter == 5) {
        console.log("You won this game!");
    } else if (computerCounter == 5) {
        console.log("You lost this game!");
    } else return;

}

