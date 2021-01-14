// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { getRandomThrow } from '../get-random-throw.js';
import { doesUserWin } from '../utils.js';

const test = QUnit.test;

test('if passed 0, should return rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(0);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if passed 1, should return paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


test('if passed 2, should return scissors', (expect) => {

    const expected = 'scissors';

    const actual = getRandomThrow(2);

    expect.equal(actual, expected);
});


//doesUserWin

test('if passed paper and rock, player will win', (expect) => {

    const expected = 'player wins';

    const actual = doesUserWin('paper', 'rock');

    expect.equal(actual, expected);
});

test('if passed rock and scissors, player will win', (expect) => {

    const expected = 'player wins';

    const actual = doesUserWin('rock', 'scissors');

    expect.equal(actual, expected);
});

test('if passed scissors and paper, player will win', (expect) => {

    const expected = 'player wins';

    const actual = doesUserWin('scissors', 'paper');

    expect.equal(actual, expected);
});

test('if passed paper and scissors, player will lose', (expect) => {

    const expected = 'player loses';

    const actual = doesUserWin('paper', 'scissors');

    expect.equal(actual, expected);
});

test('if passed scissors and rock, player will lose', (expect) => {

    const expected = 'player loses';

    const actual = doesUserWin('scissors', 'rock');

    expect.equal(actual, expected);
});

test('if passed rock and paper, player will lose', (expect) => {

    const expected = 'player loses';

    const actual = doesUserWin('rock', 'paper');

    expect.equal(actual, expected);
});


test('if passed paper and paper, player will draw', (expect) => {

    const expected = 'draw';

    const actual = doesUserWin('paper', 'paper');

    expect.equal(actual, expected);
});

test('if passed rock and rock, player will draw', (expect) => {

    const expected = 'draw';

    const actual = doesUserWin('rock', 'rock');

    expect.equal(actual, expected);
});

test('if passed scissors and scissors, player will draw', (expect) => {

    const expected = 'draw';

    const actual = doesUserWin('scissors', 'scissors');

    expect.equal(actual, expected);
});




