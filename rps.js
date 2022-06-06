const today = new Date();
const thisYear = today.getFullYear()
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `<span> &copy; erickarthurs ${thisYear}</span> `;
footer.appendChild(copyright);

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let computerScore = parseInt(0);
let userScore = parseInt(0);

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');

const scoreBoard_div = document.querySelector('.scoreBoard');
const result_p = document.querySelector('.results > p');
const winner_p = document.querySelector('.winner > p');
//write a function computerPlay that randomly select one of the game items
// create a variable with game items; rock, paper, scissors


 function computerPlay () {
    const gameItems = ['rock', 'paper', 'scissors'];
    const randItem = gameItems[Math.floor(Math.random() * gameItems.length)];
    // console.log(randItem);
    return randItem;
};

function winner(){
    if(userScore >= 5 && userScore > computerScore){
        winner_p.innerHTML = `Congratulations, You are the champ 🥇🏆!`;
    }else if(computerScore >=5 && computerScore > userScore){
        winner_p.innerHTML =`Sorry, You lost to the machine 😞Try again!`;
    }
}


function userLose(computerSelection, playerSelection){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${computerSelection} beats ${playerSelection}. Computer Wins!🙃"`;
    document.getElementById(playerSelection).classList.add('red-glow');
    setTimeout(() => document.getElementById(playerSelection).classList.remove('red-glow'), 300);

    winner();

}

function userWins(computerSelection, playerSelection){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${playerSelection} beats ${computerSelection}. You Win!🎈"`;
    document.getElementById(playerSelection).classList.add('green-glow');
    setTimeout(() => document.getElementById(playerSelection).classList.remove('green-glow'), 300);

    winner();
}

function drawGame(computerSelection, playerSelection){
    result_p.innerHTML = `${computerSelection} and ${playerSelection}. It's a draw!🙂"`;
    document.getElementById(playerSelection).classList.add('orange-glow');
    setTimeout(()=> document.getElementById(playerSelection).classList.remove('orange-glow'), 300);
}


function humanPlay(playerSelection){
    const computerSelection = computerPlay();
    switch(`${computerSelection} ${playerSelection}`){
        case "rock scissors":
        case "scissors paper":
        case "paper rock":
            // console.log(userScore, computerScore, "You lose, Computer wins!");
            userLose(computerSelection, playerSelection);
            break;

        case "scissors rock":
        case "paper scissors":
        case "rock paper":
          
            // console.log(userScore, computerScore,"You win!");
            userWins(computerSelection, playerSelection);
            break;

        case "rock rock":
        case "scissors scissors":
        case "paper paper":
            // console.log(userScore, computerScore, "It's a draw!");
            drawGame(computerSelection, playerSelection);
            break;
        default:
            "Please try again!"
    }
};

    function playRound(){

    rock.addEventListener('click', (e) => {
         humanPlay('rock');
        // console.log('rock');
        return 'rock';
    })
    paper.addEventListener('click', (e) => {
        humanPlay('paper');
        // console.log('paper');
        return 'paper';
    })
    scissors.addEventListener('click', (e) => {
        humanPlay('scissors');
        // console.log('scissors');
        return'scissors';
    })
 };
 
 playRound();