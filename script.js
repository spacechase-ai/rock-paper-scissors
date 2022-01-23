// Game script for Rock Paper Scissors

//ComputerPlay generates random value for play
const computerOptions = ["rock", "paper", "scissors"];
const computerSelection =
	computerOptions[Math.floor(Math.random() * computerOptions.length)];

//Validates input and makes case insensitive
function checkNull() {
	if (playerSelection == null || playerSelection == "") {
		alert("Please enter your choice!");
	} else {
	}
}

function validateInput() {
	if (
		playerSelection != "rock" &&
		playerSelection != "paper" &&
		playerSelection != "scissors"
	) {
		alert("Use a valid choice!");
	} else {
	}
}

//playRound compares values and sets base scores to 0
let playerScore = 0;
let computerScore = 0;

function playRound() {
	if (playerSelection == computerSelection) {
		alert("It's a tie!");
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		alert("You win! Paper beats rock.");
		playerScore++;
	} else if (playerSelection == "rock" && computerSelection == "scissors") {
		alert("You win! Rock beats scissors.");
		playerScore++;
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		alert("You win! Scissors beats paper.");
		playerScore++;
	} else if (playerSelection == "rock" && computerSelection == "paper") {
		alert("You lose! Paper beats rock.");
		computerScore++;
	} else if (playerSelection == "scissors" && computerSelection == "rock") {
		alert("You lose! Rock beats scissors.");
		computerScore++;
	} else if (playerSelection == "paper" && computerSelection == "scissors") {
		alert("You win! Paper beats scissors.");
		computerScore++;
	} else {
	}
}

//Loop will execute a 5 round game
for (let i = 1; i < 5; i++) {
	playerSelection = prompt("Please choose your fate... Rock, Paper, Scissors!");
	checkNull(playerSelection);
	playerSelection = playerSelection.toLowerCase();
	validateInput(playerSelection);
	computerOptions[Math.floor(Math.random() * computerOptions.length)];
	playRound(playerSelection, computerSelection);
}

function winner() {
	if (playerScore > computerScore) {
		alert(
			"You win the game! \n Player: " +
				playerScore +
				" Computer: " +
				computerScore
		);
	} else if (playerScore < computerScore) {
		alert(
			"You lose the game! \n Player: " +
				playerScore +
				" Computer: " +
				computerScore
		);
	} else {
		alert(
			"Tie game! \n Player: " + playerScore + " Computer: " + computerScore
		);
	}
}

winner(playerScore, computerScore);
