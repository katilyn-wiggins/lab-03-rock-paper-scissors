// import functions and grab DOM elements
import { doesUserWin } from './utils.js';
import { getRandomThrow } from './get-random-throw.js';

const playButton = document.getElementById('play-button');
const computerDisplay = document.getElementById('computer-throw-message');
const messageDisplay = document.getElementById('result-message');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawDisplay = document.getElementById('draws');
const totalDisplay = document.getElementById('total');
const restartButton = document.getElementById('restart');
const restartCounter = document.getElementById('restart-counter');

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
    const computerSelection = getRandomThrow(numberGenerator);

    // user
    const radioButtonSelection = document.querySelector('input[type="radio"]:checked');
    const userSelection = radioButtonSelection.value;

    computerDisplay.textContent = `The results are in... it's ${userSelection} vs ${computerSelection}!`;

    //win 
    if (doesUserWin(userSelection, computerSelection) === 'player wins') {
        wins++;
        messageDisplay.textContent = 'You win! Best 2 out of 3?';

    }

    //lose
    if (doesUserWin(userSelection, computerSelection) === 'player loses') {
        losses++;
        messageDisplay.textContent = 'You lose! Try Again!';

    }

    // draw
    if (doesUserWin(userSelection, computerSelection) === 'draw') {
        draws++;
        messageDisplay.textContent = 'You two cowboys picked the same item, try again.';


    }
    updateDisplays();

});

function updateDisplays() {
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
    drawDisplay.textContent = draws;
    totalDisplay.textContent = total;
}



restartButton.addEventListener('click', () => {
    reset++;
    winsDisplay.textContent = '';
    lossesDisplay.textContent = '';
    drawDisplay.textContent = '';
    totalDisplay.textContent = '';
    messageDisplay.textContent = '';
    computerDisplay.textContent = '';

    updateReset();
});

function updateReset() {
    restartCounter.textContent = reset;
}

