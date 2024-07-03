const gameChoice = new Map();

gameChoice.set(1,'rock');
gameChoice.set(2,'paper');
gameChoice.set(3,'scissors');


let humanScore = 0;
let computerScore = 0;

const playerChoice = document.querySelector(".selection-container");

playerChoice.addEventListener('click', (event) => {
    let choice = event.target;

    switch (choice.id) {
        case 'rock':
            playRound(choice.id);
            break;
        case 'paper':
            playRound(choice.id);
            break;
        case 'scissors':
            playRound(choice.id);
            break;
    }
});


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

function resolveRoundWinner(humanChoice, computerChoice) {
    switch(humanChoice) {
        case 'rock':
            switch(computerChoice) {
                case 'rock':
                    return `tie`;
                case 'paper':
                    return `computer`;
                case 'scissors':
                    return `human`;
            }
            break;
        case 'paper':
            switch(computerChoice) {
                case 'rock':
                    return `human`;
                case 'paper':
                    return `tie`;
                case 'scissors':
                    return `computer`;
            }
            break;
        case 'scissors':
            switch(computerChoice) {
                case 'rock':
                    return `computer`;
                case 'paper':
                    return `human`;
                case 'scissors':
                    return `tie`;
            }
            break;
        default:
            return 'ERROR'
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let roundWinner = resolveRoundWinner(humanChoice,computerChoice);
    declareRoundWiner(roundWinner,humanChoice,computerChoice);
    updateScore(roundWinner);
}

function updateScore(roundWinner) {
    const humanTracker = document.getElementById("human-score")
    const computerTracker = document.getElementById("computer-score");
    if (roundWinner === 'human') humanScore++;
    if (roundWinner === 'computer') computerScore++;
    humanTracker.textContent = humanScore;
    computerTracker.textContent = `${computerScore}`;

    if (humanScore === 5 || computerScore === 5) declareWinner(humanScore,computerScore);
}

function declareRoundWiner (roundWinner,humanChoice,computerChoice) {
    const winner = document.querySelector(".winner-text")
    switch (roundWinner) {
        case 'human':
            winner.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            break;

        case 'computer':
            winner.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            break;
    
        default:
            winner.textContent = `You Tie! ${humanChoice} ties to ${computerChoice}`;
            console.log(`You Tie! ${humanChoice} ties to ${computerChoice}`);
            break;
    }
}

function declareWinner (humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log(`Humans have won! With a score of ${humanScore} to ${computerScore}`);
        alert(`Humans have won! With a score of ${humanScore} to ${computerScore}`)
    }
    if (computerScore > humanScore) {
        console.log(`Computers have won! With a score of ${computerScore} to ${humanScore}`);
        alert(`Computers have won! With a score of ${computerScore} to ${humanScore}`)
    } 
    if (computerScore === humanScore) {
        console.log(`Humans and Computers have Tied! The score of was ${humanScore} - ${computerScore}`);
        alert(`Humans and Computers have Tied! The score of was ${humanScore} - ${computerScore}`)
    }
}
