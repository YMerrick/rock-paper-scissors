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

function declareRoundWiner (winner,humanChoice,computerChoice) {
    switch (winner) {
        case 'human':
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            break;

        case 'computer':
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
            break;
    
        default:
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

function playGame() {
    let humanChoice;
    let computerChoice;
    let humanScore = 0;
    let computerScore = 0;
    let roundWinner;

    computerChoice = getComputerChoice();

    const playerChoice = document.querySelector(".selection-container");
    playerChoice.addEventListener('click', (event) => {
        let choice = event.target;

        switch (choice.id) {
            case 'rock':
                roundWinner = playRound(choice.id,computerChoice);
                break;
            case 'paper':
                roundWinner = playRound(choice.id,computerChoice);
                break;
            case 'scissors':
                roundWinner = playRound(choice.id,computerChoice);
                break;
        }
    });
    
    declareRoundWiner(roundWinner);
    if (roundWinner === 'human') humanScore++;
    if (roundWinner === 'computer') computerScore++;

    declareWinner(humanScore,computerScore);
    
}

playGame();