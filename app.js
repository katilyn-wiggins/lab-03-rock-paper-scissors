// import functions and grab DOM elements
import { generateComputerChoice, doesUserWin } from './utils.js';

const playButton = document.getElementById('play-button');
const messageDisplay = document.getElementById('message');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawDisplay = document.getElementById('draws');
const totalDisplay = document.getElementById('total');
const restartButton = document.getElementById('restart');
const restartCounter = document.getElementById('restart-counter')

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;
let total = 0;
let reset = 0;
// set event listeners to update state and DOM

playButton.addEventListener('click', () => {
    total++;

    // computer
    const numberGenerator = Math.round(Math.random() * 2);
    const computerSelection = generateComputerChoice(numberGenerator);

    // user
    const radioButtonSelection = document.querySelector('input[type="radio"]:checked');
    const userSelection = radioButtonSelection.value;

    //win 
    if (doesUserWin(userSelection, computerSelection) === 'player wins') {
        wins++;
        total++;
        messageDisplay.textContent = 'You win! Best 2 out of 3?';

    }

    //lose
    if (doesUserWin(userSelection, computerSelection) === 'player loses') {
        losses++;
        total++;
        messageDisplay.textContent = 'You lose! Try Again!';

    }

    // draw
    if (doesUserWin(userSelection, computerSelection) === 'draw') {
        draws++;
        total++;
        messageDisplay.textContent = 'You two cowboys picked the same item, you\'ve got a draw!';

    }

});

function updateDisplays() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawDisplay.textContent = draws;
    totalDisplay.textContent = total;
}



// restartButton.addEventListener('click', () => {

// });