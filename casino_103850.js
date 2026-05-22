
// please install prompt-sync and node 
// node.org
// ! npm install prompt-sync
const prompt = require('prompt-sync')({ sigint: true, });


// start with a figure in the account, giving away a certain figure for every three trials 
// and getting a certain figure for every gain 

// generate random outputs of letters and win when similar letters align


let accountBal = 5;
const DEDUCTION = 2;
const MULTIPLIER = 5;

// points for letters 
const POINTS = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
    F: 0
}

let possibleOutput = [];
const COMPLEXITY = 5; // max = 5, min = 1

function generatePossibleOutputs() {
    for (let i in POINTS) {
        for (let j = 0; j < (6 - POINTS[i]) * 4 * (6 - COMPLEXITY); j++) {
            possibleOutput.push(i)
        }
    }
    let randomisedpossibleOutput = [];
    while (possibleOutput.length != 0) {
        let randomIndex = Math.floor(Math.random() * possibleOutput.length);
        randomisedpossibleOutput.push(possibleOutput[randomIndex]);
        possibleOutput.splice(randomIndex, 1);
    }
    possibleOutput = randomisedpossibleOutput;
    // console.log(possibleOutput);
}



function generateGame() {
    generatePossibleOutputs();
    let game = [];
    let tempPossibleOutput = possibleOutput;

    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            let randomIndex = Math.floor(Math.random() * tempPossibleOutput.length);
            row.push(tempPossibleOutput[randomIndex]);
            tempPossibleOutput.splice(randomIndex, 1);

            // console.log(randomIndex);
            // console.log(tempPossibleOutput.length);
        }
        game.push(row);
        console.log(row);
    }

    return game;
}

// generateGame();

function checkForWins(game) {
    let win = 0;
    let winningLetters = [];

    if (game[0][0] === game[0][1] && game[0][1] === game[0][2]) {
        win++; winningLetters.push(game[0][0]);
    }
    if (game[1][0] === game[1][1] && game[1][1] === game[1][2]) {
        win++; winningLetters.push(game[1][0]);
    }
    if (game[2][0] === game[2][1] && game[2][1] === game[2][2]) {
        win++; winningLetters.push(game[2][0]);
    }

    if (game[0][0] === game[1][0] && game[1][0] === game[2][0]) {
        win++; winningLetters.push(game[0][0]);
    }
    if (game[0][1] === game[1][1] && game[1][1] === game[2][1]) {
        win++; winningLetters.push(game[0][1]);
    }
    if (game[0][2] === game[1][2] && game[1][2] === game[2][2]) {
        win++; winningLetters.push(game[0][2]);
    }

    console.log(`Wins: ${win}`);
    return winningLetters;

}



function gameLogic() {
    prompt('Welcome! Press Enter to play. ');
    console.log(`\nA game of three trials costs \$${DEDUCTION} and you have \$${accountBal}.\nNote that A has ${POINTS['A']} points, B has ${POINTS['B']} points, C has ${POINTS['C']} points,\nD has ${POINTS['D']} points, E has ${POINTS['E']} points, and F has ${POINTS['F']} points. \nMoreover, each point has a multiplier of ${MULTIPLIER}.`);

    while (true) {
        if (accountBal - DEDUCTION >= 0) {
            console.log();
            let input = prompt('Press enter to play or "exit" to leave game. ').trim().toLowerCase();
            if (input == 'exit') { console.log('Bye!'); return; }
            accountBal -= DEDUCTION;
            console.log(`Account Balance: ${accountBal}.\n`)

            let totalWins = 0;
            let totalPoints = 0;
            for (let i = 0; i < 3; i++) {
                let wins = checkForWins(generateGame());
                if (wins.length != 0) {
                    console.log(wins);
                    for (let i of wins) {
                        accountBal += POINTS[i] * MULTIPLIER;
                        totalPoints += POINTS[i] * MULTIPLIER;
                        totalWins += wins.length;
                    }
                }
                console.log();
            }
            console.log('\nTotal wins: ' + totalWins);
            console.log(`You gained \$${totalPoints}.`);
            console.log(`New Account Balance: ${accountBal}.\n`)
        } else { console.log('Sorry, you\'ve exhausted your balance.'); break; }
    }

}

gameLogic();