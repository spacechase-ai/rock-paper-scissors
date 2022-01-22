// Game script for Rock Paper Scissors

//ComputerPlay generates random value for play
const computerOptions = ["rock", "paper", "scissors"];
const computerSelection =
	computerOptions[Math.floor(Math.random() * computerOptions.length)];

let playerSelection = prompt(
	"Please choose your fate... Rock, Paper, Scissors!"
);

//Validates input and makes case insensitive
function validateForm() {
	if (playerSelection == null || playerSelection == "") {
		alert("Please enter your choice!");
	} else {
	}
}
validateForm(playerSelection);
playerSelection = playerSelection.toLowerCase();

//playRound compares values
function playRound() {
	if (playerSelection == computerSelection) {
		alert("It's a tie!");
	} else if (playerSelection == "paper" && computerSelection == "rock") {
		alert("You win! Paper beats rock.");
	} else if (playerSelection == "rock" && computerSelection == "scissors") {
		alert("You win! Rock beats scissors.");
	} else if (playerSelection == "scissors" && computerSelection == "paper") {
		alert("You win! Scissors beats paper.");
	} else if (playerSelection == "rock" && computerSelection == "paper") {
		alert("You lose! Paper beats rock.");
	} else if (playerSelection == "scissors" && computerSelection == "rock") {
		alert("You lose! Rock beats scissors.");
	} else if (playerSelection == "paper" && computerSelection == "scissors") {
		alert("You win! Paper beats scissors.");
	} else {
	}
}

playRound(playerSelection, computerSelection);

confirm ("Play again?") {
    if (true) {
        playerSelection
    }
}

//sunction playRount will take playerSelection and computerSelection to see who wins
//Return string declaring player win or lose
