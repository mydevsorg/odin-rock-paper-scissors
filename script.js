const btnRockEl = document.querySelector("#rock");
const btnPaperEl = document.querySelector("#paper");
const btnScissorsEl = document.querySelector("#scissors");
const resultsEl = document.querySelector("#results");
const resultsParaEl = document.querySelector("#results-para");
const scoresEl = document.querySelector("#scores");
const humanScoreEl = document.querySelector("#humanScore");
const computerScoreEl = document.querySelector("#computerScore");

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

let humanScore = 0;
let computerScore = 0;

resultsParaEl.textContent = "Click any button to start the game!";

function playRound(playerSelection) {
  let humanChoice = playerSelection;
  let computerChoice = getComputerChoice();

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    resultsParaEl.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    resultsParaEl.textContent = `You lose! ${humanChoice} lose to ${computerChoice}`;
    computerScore++;
  } else {
    resultsParaEl.textContent = "It's a tie!";
  }

  humanScoreEl.textContent = `Human Score: ${humanScore}`;
  computerScoreEl.textContent = `Computer Score: ${computerScore}`;

  if (humanScore == 5 && computerScore < 5) {
    resultsParaEl.textContent = `Human player wins!`;
    humanScore = 0;
    computerScore = 0;
    humanScoreEl.textContent = `Human Score: ${humanScore}`;
    computerScoreEl.textContent = `Computer Score: ${computerScore}`;
  } else if (computerScore == 5 && humanScore < 5) {
    resultsParaEl.textContent = `Computer player wins!`;
    humanScore = 0;
    computerScore = 0;
    humanScoreEl.textContent = `Human Score: ${humanScore}`;
    computerScoreEl.textContent = `Computer Score: ${computerScore}`;
  } else if (humanScore == 5 && computerScore == 5) {
    resultsParaEl.textContent = `Nobody wins. It's a tie!`;
    humanScore = 0;
    computerScore = 0;
    humanScoreEl.textContent = `Human Score: ${humanScore}`;
    computerScoreEl.textContent = `Computer Score: ${computerScore}`;
  }
}

btnRockEl.addEventListener("click", () => playRound("rock"));
btnPaperEl.addEventListener("click", () => playRound("paper"));
btnScissorsEl.addEventListener("click", () => playRound("scissors"));
