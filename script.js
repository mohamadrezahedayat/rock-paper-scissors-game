// second: import required functions from external js file
import {startConfetti, stopConfetti, removeConfetti} from './confetti.js';

const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const reset = document.getElementById("reset");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";

// Reset all Selected Icons
function resetSelected() {
  allGameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
  stopConfetti();
  removeConfetti();
}
// Rset Score & player/computer choices
function resetAll(){
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  playerChoiceEl.textContent = '';
  computerChoiceEl.textContent = '';
  resultText.textContent = 'Start Again!';
  resetSelected();
}
// Random computer choice
function computerRandomChoice() {
  const computerChoiceNumber = Math.ceil(Math.random() * 5);
  switch (computerChoiceNumber) {
    case 1:
      computerChoice = "rock";
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " ---Rock";
      break;
    case 2:
      computerChoice = "paper";
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " ---Paper";
      break;
    case 3:
      computerChoice = "scissors";
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " ---Scissors";
      break;
    case 4:
      computerChoice = "lizard";
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " ---Lizard";
      break;
    case 5:
      computerChoice = "spock";
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " ---Spock";
      break;

    default:
      break;
  }
}
// check reuslts, increase scores, update results texts
function updateScore(playerChoice) {
  stopConfetti();
  const choice = choices[playerChoice];
  let playerWon = choice.defeats.includes(computerChoice);
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie";
  } else if (playerWon) {
    startConfetti();
    resultText.textContent = "You Won!";
    playerScoreNumber++;
    playerScoreEl.textContent = playerScoreNumber;
  } else {
    resultText.textContent = "You Lost!";
    computerScoreNumber++;
    computerScoreEl.textContent = computerScoreNumber;
  }
}

// Call functions to process turn
function checkResult(playerChoice) {
  resetSelected();
  computerRandomChoice();
  updateScore(playerChoice);
}
// Passing player selection value and styling icons
function select(e) {
  const playerChoice = e.srcElement.title.toLowerCase();
  checkResult(playerChoice);
  // Add 'selected' styling & playerchoice
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " ---Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " ---Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " ---Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " ---Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " ---Spock";
      break;

    default:
      break;
  }
}


// add event handlers

allGameIcons.forEach((icon) => {
  icon.addEventListener('click',select)
})

reset.addEventListener('click',resetAll);


