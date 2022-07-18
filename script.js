"use strict"

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

// Function that retreives the players choice.

const getPlayerChoice = (input) => {
    input = input.toLowerCase();

    if (input === 'rock' || input === 'paper' || input === 'scissors') {
        return input;
    } else {
        return 'Sorry, not a valid option.'
    };
};

// Creating the game function.

const runGame = (getComputerChoice, getPlayerChoice) => {
    let cpuChoice = getComputerChoice;
    let userChoice = getPlayerChoice;

    if (cpuChoice === userChoice) {
        return 'Game Tied';
    } 
};



console.log(`The cpu chose, ${getComputerChoice()}.
You chose, ${getPlayerChoice('rock')}. `+ runGame());

