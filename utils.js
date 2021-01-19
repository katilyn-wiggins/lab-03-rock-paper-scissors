

export function doesUserWin(player, computer) {
    //wins
    if (player === 'paper' && computer === 'rock') {
        return 'player wins';
    }
    if (player === 'rock' && computer === 'scissors') {
        return 'player wins';
    }
    if (player === 'scissors' && computer === 'paper') {
        return 'player wins';
    }
    //losses
    if (player === 'paper' && computer === 'scissors') {
        return 'player loses';
    }
    if (player === 'scissors' && computer === 'rock') {
        return 'player loses';
    }
    if (player === 'rock' && computer === 'paper') {
        return 'player loses';
    }

    //draws
    if (player === computer) {
        return 'draw';
    }

}



