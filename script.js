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