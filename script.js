//ComputerPlay generates random value for play
const computerOptions = ["rock", "paper", "scissors"];
let computerSelection;

//Sets base scores and tracks in HTML
let playerScore = 0;
let computerScore = 0;

const score = document.querySelector(".score");
score.textContent = `Your Score: ${playerScore} | Enemy's Score: ${computerScore}`;

const resultText = document.querySelector(".result-text");
resultText.textContent = " ";

const round = document.querySelector(".round");
let roundCount = 1;

const button = document.querySelectorAll("button");
button.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.classList.value;
    computerSelection =
      computerOptions[Math.floor(Math.random() * computerOptions.length)];
    playRound(playerSelection, computerSelection);
    score.textContent = `Your Score: ${playerScore} | Enemy's Score: ${computerScore}`;
    winner(playerScore, computerScore);
    roundUpdate(roundCount);
  });
});

function playRound() {
  if (playerSelection == computerSelection) {
    resultText.textContent = "It's a tie!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    resultText.textContent = "You win! Paper beats rock.";
    playerScore++;
    roundCount++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    resultText.textContent = "You win! Rock beats scissors.";
    playerScore++;
    roundCount++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    resultText.textContent = "You win! Scissors beats paper.";
    playerScore++;
    roundCount++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    resultText.textContent = "You lose! Paper beats rock.";
    computerScore++;
    roundCount++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    resultText.textContent = "You lose! Rock beats scissors.";
    computerScore++;
    roundCount++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    resultText.textContent = "You win! Paper beats scissors.";
    computerScore++;
    roundCount++;
  } else {
  }
}

function winner() {
  if (playerScore == 5 && computerScore < 5) {
    resultText.textContent = "You win!";
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    score.textContent = `Your Score: ${playerScore} | Enemy's Score: ${computerScore}`;
  } else if (computerScore == 5 && playerScore < 5) {
    resultText.textContent = "You lose!";
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    score.textContent = `Your Score: ${playerScore} | Enemy's Score: ${computerScore}`;
  } else {
  }
}

function roundUpdate() {
  round.textContent = `Round: ${roundCount}`;
}
