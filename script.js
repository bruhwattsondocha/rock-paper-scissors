'use strict'

function getComputerChoice() {
  let result = Math.floor((Math.random() * 3) + 1)
  switch (result) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
      break;
  }
}

function getHumanChoice() {
  // Get input from user
  // If its one of valid ones return it
  // Also make sure capitalization doesn't matter
  let choice = prompt('Rock, paper, scissors?').toLowerCase();
  switch (choice) {
    case 'rock':
    case 'paper':
    case 'scissors':
      return choice;
      break;
    default:
      alert('It is not rock, paper or scissors!');
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  // Compare choices of computer and human 
  // Print round winner
  // Increment winner score
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    printChoice(humanChoice, computerChoice);
    resultDiv.innerText = '  Round: You win! Rock beats Scissors!';
    humanScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    printChoice(humanChoice, computerChoice)
    resultDiv.innerText = '  Round: You lose! Paper beats Rock!';
    computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    printChoice(humanChoice, computerChoice)
    resultDiv.innerText = '  Round: You win! Paper beats Rock!';
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    printChoice(humanChoice, computerChoice)
    resultDiv.innerText = '  Round: You lose! Scissors beat paper!';
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    printChoice(humanChoice, computerChoice)
    resultDiv.innerText = '  Round: You win! Scissors beat Paper!';
    humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    printChoice(humanChoice, computerChoice)
    resultDiv.innerText = '  Round: You lose! Rock beats Scissors!';
    computerScore++
  } else if (humanChoice === computerChoice) {
    printChoice(humanChoice, computerChoice)
    resultDiv.innerText = "  Round: It's a tie!";
    humanScore++;
    computerScore++;
  }
  if (humanScore === 5) {
    winner.innerHTML = 'You won!</span>';
  } else if (computerScore === 5) {
    winner.innerHTML = 'Computer won!';
  }
}

const winner = document.querySelector('#winner');


// function playGame() {
//   humanScore = 0;
//   computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     playRound(humanSelection, computerSelection);
//   }
//   if (humanScore > computerScore) {
//     console.log('Game: Human wins!');
//   } else {
//     console.log('Game: Computer wins!');
//   }
// }

// Function to print Human choice and Computer choice

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');

rockBtn.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
  humanScoreCounter.textContent = `You: ${humanScore}`;
  computerScoreCounter.textContent = `Computer: ${computerScore}`;
});
paperBtn.addEventListener('click', () => {
  playRound('paper', getComputerChoice())
  humanScoreCounter.textContent = `You: ${humanScore}`;
  computerScoreCounter.textContent = `Computer: ${computerScore}`;
});
scissorsBtn.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
  humanScoreCounter.textContent = `You: ${humanScore}`;
  computerScoreCounter.textContent = `Computer: ${computerScore}`;
});

const resultDiv = document.querySelector('#result');
let humanSelectionOnPage = document.querySelector('#human');
let computerSelectionOnPage = document.querySelector('#computer');

function printChoice(humanChoice, computerChoice) {
  humanSelectionOnPage.innerHTML = `You have picked: <span>${humanChoice}</span>.`;
  computerSelectionOnPage.innerHTML = `Computer have picked: <span>${computerChoice}</span>.`;
  document.querySelectorAll('span').forEach(span => span.style.textDecoration = 'underline');
}

let humanScoreCounter = document.querySelector('#humanScore');
let computerScoreCounter = document.querySelector('#computerScore');

function restart() {
  humanScore = 0;
  computerScore = 0;
  humanScoreCounter.innerText = '';
  computerScoreCounter.innerText = '';
  resultDiv.innerText = '';
  humanSelectionOnPage.innerHTML = '';
  computerSelectionOnPage.innerHTML = '';
}