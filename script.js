"use strict"
// Dom objects

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const weapons = document.querySelectorAll('.weapon-button');
const gameBoard = document.getElementById('gameBoard');
const playerBoard = document.getElementById('playerBoard');
const computerBoard = document.getElementById('computerBoard');

// Variables to control the display
let cScore = 0;
let pScore = 0;
let gameRound = gameBoard.innerText;

computerBoard.innerText = cScore;
playerBoard.innerText = pScore;




// Function where the computer will pick a random number between 0-2. 
// And then assign one of the playable choices to the number.

const getComputerChoice = () => {
    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else {
        return 'scissors';
    };
};

// Decides the winner of the round, and updates the score
            
 const playRound = (playerSelection, computerSelection) => {
    // When the game ties.
    if (playerSelection === computerSelection) {
        gameRound = 'Tied';
        return 'Game Tied';
    }   // When the player chooses the losing hand.
    else if (playerSelection === 'rock' && computerSelection === 'paper' ||
    playerSelection === 'paper' && computerSelection === 'scissors' ||
    playerSelection === 'scissors' && computerSelection === 'rock') {
        gameRound = 'Lost';
        cScore++;
        return 'Game Lost';
    }   // When the player chooses the winning hand.
    else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
    playerSelection === 'paper' && computerSelection === 'rock' ||
    playerSelection === 'scissors' && computerSelection === 'paper') {
        gameRound = 'Won';
        pScore++;
        return 'Game Won';
    } else {
        return 'Try Again';
    };
};

//Funtion that updates the score when called on through the even Listener
function updateScore() {
    gameBoard.innerText = gameRound;
    computerBoard.innerText = cScore;
    playerBoard.innerText = pScore;

};

// Deciding the winner
function checkWinner() {
    if (pScore == 5 || cScore == 5) {
        if (pScore == 5) {
            window.location.reload(true);
            alert('Congrats, you won! Keep Playing?');
        } else if (cScore == 5) {
            window.location.reload(true);
            alert('You Lost. Try Again?');

        }
    }
};

// Adding event Listeners to the input elements, that will iniciate each round
weapons.forEach((weapon)=> {
    weapon.addEventListener('click', (e)=> {
        const playerInput = e.target.id;
        const computerInput = getComputerChoice();
       playRound(playerInput, computerInput);
       checkWinner();
       updateScore();
    });
});









