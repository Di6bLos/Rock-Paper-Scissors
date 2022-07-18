"use strict"

// Creating a funtion Where the computer will pick a random number between 0-2. 
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

console.log(getComputerChoice());