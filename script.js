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

  return `Computer's choice: "${computerChoice}"`;
}

// Step - 03

function getHumanChoice() {
  let humanChoice = prompt("Please enter your choice:");

  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    return `Human's choice: "${humanChoice}"`;
  } else {
    return "Human's choice: Not a valid choice!";
  }
}

console.log(getComputerChoice());
console.log(getHumanChoice());
