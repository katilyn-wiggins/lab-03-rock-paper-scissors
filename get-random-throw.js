export function getRandomThrow(numberChoice) {
    if (numberChoice === 0) {
        return 'rock';
    } if (numberChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}