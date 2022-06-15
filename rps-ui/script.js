let computerCounter = 0;
let playerCounter = 0;
let roundResult = '';

// function on simulating a single play round
function playRound(playerSelection) {

    const computerSelection = computerPlay();

    if ((computerSelection === "ROCK" && playerSelection === "SCISSORS") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK")  ||
    (computerSelection === "SCISSORS" && playerSelection === "PAPER")
    ) {
        roundResult = "computer";
        computerCounter++;
    }
    else if ((computerSelection === "ROCK" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "ROCK")
    ) {
        roundResult = "player";
        playerCounter++;
    } else if (playerSelection === computerSelection) {
        roundResult = "tie";
    }
    updateChoice(computerSelection, playerSelection);
    getMessage(roundResult, computerSelection, playerSelection)

    if (gameOver()) {
        openEndgameModal()
        setFinalMessage()
      }
}

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

function updateChoice (computerSelection, playerSelection) {

    pChoicePic.textContent = "";
    cChoicePic.textContent = "";

    switch (computerSelection) {
        case "ROCK":
            cChoicePic.appendChild(rockPic);
            break;
        case "PAPER":
            cChoicePic.appendChild(paperPic);
            break;
        case "SCISSORS":
            cChoicePic.appendChild(scissorsPic);
            break;
    }

    switch (playerSelection) {
        case "ROCK":
            pChoicePic.appendChild(rockPic.cloneNode(true));
            break;
        case "PAPER":
            pChoicePic.appendChild(paperPic.cloneNode(true));
            break;
        case "SCISSORS":
            pChoicePic.appendChild(scissorsPic.cloneNode(true));
            break;
    }
}

function getMessage(roundResult, computerSelection, playerSelection) {
    if(roundResult === "computer") {
     scoreMessage1.textContent = 'You lose!';
     scoreMessage2.textContent = `${computerSelection} beats ${playerSelection}`;
    } else if (roundResult === "player") {
     scoreMessage1.textContent = 'You win!';
     scoreMessage2.textContent = `${playerSelection} beats ${computerSelection}`;
    } else if (roundResult === "tie") {
     scoreMessage1.textContent = 'It\'s a tie!';
     scoreMessage2.textContent = `${playerSelection} ties with ${computerSelection}`;
    }
 
    computerScore.textContent = computerCounter;
    playerScore.textContent = playerCounter;
 }

function gameOver() {
    return computerCounter === 5 || playerCounter === 5;
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const scoreMessage1 = document.querySelector('h3');
const scoreMessage2 = document.querySelector('.m');
const cChoicePic = document.querySelector('.choice.c');
const pChoicePic = document.querySelector('.choice.p');
const computerScore = document.querySelector('.cs');
const playerScore = document.querySelector('.ps');
const endgameModal = document.querySelector('.endgameModal');
const endgameMessage = document.querySelector('.endgameMessage');
const overlay = document.querySelector('.overlay');
const restartButton = document.querySelector('.restart');

const rockPic = document.createElement('img');
rockPic.setAttribute('src', './img/rock.png');
rockPic.setAttribute('style', 'width: 130px;');
const paperPic = document.createElement('img');
paperPic.setAttribute('src', './img/paper.png');
paperPic.setAttribute('style', 'width: 130px;');
const scissorsPic = document.createElement('img');
scissorsPic.setAttribute('src', './img/scissors.png');
scissorsPic.setAttribute('style', 'width: 130px;');

const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('mouseover', (e) => e.target.classList.add('animated')));
buttons.forEach(button => button.addEventListener('mouseout', (e) => e.target.classList.remove('animated')));

rockButton.addEventListener('click', () => playRound('ROCK'));
paperButton.addEventListener('click', () => playRound('PAPER'));
scissorsButton.addEventListener('click', () => playRound('SCISSORS'));

restartButton.addEventListener('click', restartGame)
overlay.addEventListener('click', () => {
    endgameModal.classList.remove('active')
    overlay.classList.remove('active')
});

function openEndgameModal() {
    endgameModal.classList.add('active')
    overlay.classList.add('active')
  }
  
  function setFinalMessage() {
    return playerCounter > computerCounter
      ? (endgameMessage.textContent = 'You won!')
      : (endgameMessage.textContent = 'You lost!')
  }
  
  function restartGame() {
    playerCounter = 0;
    computerCounter = 0;
    scoreMessage1.textContent = 'Choose your weapon'
    scoreMessage2.textContent = 'First to score 5 points wins the game'
    pChoicePic.textContent = "?";
    cChoicePic.textContent = "?";
    computerScore.textContent = "0";
    playerScore.textContent = "0";
    endgameModal.classList.remove('active');
    overlay.classList.remove('active');
  }
