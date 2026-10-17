// Step - 02

function getComputerChoice() {
  let random = Math.trunc(Math.random() * 3) + 1;
  let computerChoice;

  if (random === 1) {
    computerChoice = "rock";
  } else if (random === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  return computerChoice;
}

// Step - 03

function getHumanChoice() {
  let humanChoice = prompt("Please enter your choice:").toLowerCase();

  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return humanChoice;
  } else {
    return "Not a valid choice!";
  }
}

// Step - 04

let humanScore = 0;
let computerScore = 0;

// Step - 05

// let computerChoice = getComputerChoice();
// let humanChoice = getHumanChoice();

function playRound(computerChoice, humanChoice) {
  console.log(computerChoice, humanChoice);

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else {
    console.log("It's a tie!");
  }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();

playRound(computerSelection, humanSelection);
