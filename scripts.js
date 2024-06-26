const gameChoice = new Map();

gameChoice.set(1,'rock');
gameChoice.set(2,'paper');
gameChoice.set(3,'scissors');

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return gameChoice.get(choice);
}

function getHumanChoice() {
    const choices = ["rock",'paper','scissors'];
    let chosen;
    do {
        chosen = prompt("Please type rock, paper or scissors.",null).toLowerCase();
    } while (!choices.includes(chosen));
    return chosen;
}

function playRound(humanChoice, computerChoice) {
    let outcome;
    switch(humanChoice) {
        case 'rock':
            switch(computerChoice) {
                case 'rock':
                    outcome = `tie`;
                    break;
                case 'paper':
                    outcome = `computer`;
                    break;
                case 'scissors':
                    outcome = `human`;
                    break;
            }
            break;
        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    outcome = `human`;
                    break;
                case 'paper':
                    outcome = `tie`;
                    break;
                case 'scissors':
                    outcome = `computer`;
                    break;
            }
            break;
        case 'scissors':
            switch(computerChoice) {
                case 'rock':
                    outcome = `computer`;
                    break;
                case 'paper':
                    outcome = `human`;
                    break;
                case 'scissors':
                    outcome = `tie`;
                    break;
            }
            break;
    }

    return outcome;
}

function playGame() {
    let humanChoice;
    let computerChoice;
    let humanScore = 0;
    let compueterScore = 0;
    let roundWinner;

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        roundWinner = playRound(humanChoice, computerChoice);
        switch (roundWinner) {
            case 'human':
                console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
                break;

            case 'computer':
                console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
                compueterScore++;
                break;
        
            default:
                console.log(`You Tie! ${humanChoice} ties to ${computerChoice}`);
                break;
        }

    }

    if (humanScore > compueterScore) {
        console.log(`Humans have won! With a score of ${humanScore} to ${compueterScore}`);
        prompt(`Humans have won! With a score of ${humanScore} to ${compueterScore}`)
    }
    if (compueterScore > humanScore) {
        console.log(`Computers have won! With a score of ${compueterScore} to ${humanScore}`);
        prompt(`Computers have won! With a score of ${compueterScore} to ${humanScore}`)
    } 
    if (compueterScore === humanScore) {
        console.log(`Humans and Computers have Tied! The score of was ${humanScore} - ${compueterScore}`);
        prompt(`Humans and Computers have Tied! The score of was ${humanScore} - ${compueterScore}`)
    }
}

playGame();