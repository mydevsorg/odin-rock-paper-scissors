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
  } else if (
    humanChoice !== "rock" ||
    humanChoice !== "paper" ||
    humanChoice !== "scissors"
  ) {
    alert("Not a valid choice! Try one of these: rock, paper, scissors");
    humanChoice = prompt("Please enter your choice:").toLowerCase();
    return humanChoice;
  }
}

// Step - 04

// let humanScore = 0;
// let computerScore = 0;

// Step - 05

// function playRound(computerChoice, humanChoice) {
//   if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "scissors" && computerChoice === "paper") ||
//     (humanChoice === "paper" && computerChoice === "rock")
//   ) {
//     console.log(`You win! ${humanChoice} beats ${computerChoice}`);
//     humanScore++;
//   } else if (
//     (computerChoice === "rock" && humanChoice === "scissors") ||
//     (computerChoice === "scissors" && humanChoice === "paper") ||
//     (computerChoice === "paper" && humanChoice === "rock")
//   ) {
//     console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
//     computerScore++;
//   } else {
//     console.log("It's a tie!");
//   }
// }

// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoice();

// playRound(computerSelection, humanSelection);

// Step - 06

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(computerChoice, humanChoice) {
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

  for (let i = 1; i <= 5; i++) {
    playRound(getComputerChoice(), getHumanChoice());
  }

  if (computerScore > humanScore) {
    console.log(`Computer player wins! (${computerScore} vs ${humanScore})`);
  } else if (humanScore > computerScore) {
    console.log(`Human player wins! (${humanScore} vs ${computerScore})`);
  } else {
    console.log(`It's a tie! (${computerScore} vs ${humanScore})`);
  }
}

playGame();
