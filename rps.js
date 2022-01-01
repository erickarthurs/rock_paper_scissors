//write a function computerPlay that randomly select one of the game items
// create a variable with game items; rock, paper, scissors

const computerPlay = function () {
    const gameitems = ['rock', 'paper', 'scissors'];
    const randItem = gameitems[Math.floor(Math.random() * gameitems.length)].toLowerCase();

    return randItem;
}

//write a function for the user. Should prompt the user to in put a game item, return the game item
const humanPlay = function () {
    const playerSelect = prompt("To start playing, please choose one item: rock, scissors, paper:")
    return playerSelect.toLowerCase();
}

//write a function that plays a single round of Rock, Paper, Scissors
// function takes two parameters, computerSelection and playerSelection
//function returns a string that declares a winner


function playRound(computerSeletion, playerSelection) {
    if (computerSeletion === playerSelection) {
        return "Draw!";

    } else if (computerSeletion === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        return "You lose, Computer wins!";

    } else if (computerSeletion === 'scissors' && playerSelection === 'rock') {
        userScore++;
        return "You win";

    } else if (computerSeletion === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        return "You lose, Computer wins!";

    } else if (computerSeletion === 'paper' && playerSelection === 'scissors') {
        userScore++;
        return "You win";

    } else if (computerSeletion === 'paper' && playerSelection === 'rock') {
        computerScore++;
        return "You lose, Computer wins!";

    } else if (computerSeletion === 'rock' && playerSelection === 'paper') {
        userScore++;
        return "You win";

    } else {
        return "Invalide play, please try again!"
    }

}
// const computerSeletion = computerPlay();
// const playerSelection = humanPlay();

// console.log(computerSeletion);
// console.log(playerSelection);

//write a function game() that plays 5 rounds of rock, paper, scissors
// game() keeps tab of winners
//reports winner at the end of the rounds

let computerScore = parseInt(0);
let userScore = parseInt(0);

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = humanPlay();
        const computerSeletion = computerPlay();
        const winner = computerScore > userScore ? "Computer Wins" : computerScore < userScore ? "You Win" : "It's a draw";
        console.log(playRound(computerSeletion, playerSelection));
        console.log("You score = " + userScore);
        console.log("Computer Scores = " + computerScore);
        console.log(winner);
    }
}

game();
