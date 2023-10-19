let playerScore = 0;
let compScore = 0;
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const outcomeDiv = document.querySelector(".outcome");
const playerScoreSpan = document.querySelector(".player-score");
const computerScoreSpan = document.querySelector(".computer-score");

const computerPlay = () => {
  const arrOfChoice = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * arrOfChoice.length);
  return arrOfChoice[randomNum];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    const p = document.createElement("p");
    p.innerText = "It's a Tie";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lost Rock crushes scissors ";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You Won Scissors cut paper";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lost paper covers rock";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You won rock crushes scissors";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    const p = document.createElement("p");
    p.innerText = "You lost Scissors cut Paper";
    outcomeDiv.appendChild(p);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    const p = document.createElement("p");
    p.innerText = "You won Paper covers Rock";
    outcomeDiv.appendChild(p);
  }
};

const checkForWinner = (playerScore, compScore) => {
  const h3 = document.createElement("h3");
  if (playerScore === 5) {
    h3.innerText = `You won ${playerScore} to ${compScore} great job beating the computer`;
    outcomeDiv.append(h3);
  }
  if (compScore === 5) {
    const h3 = document.createElement("h3");
    h3.innerText = `You lost ${playerScore} to ${compScore}`;
    outcomeDiv.append(h3);
  }
};
const updateScore = (computerScore, playerScore) => {
  playerScoreSpan.innerText = `Player Score:  ${playerScore}`;
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`;
};
rockButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  updateScore (playerScore, compScore)
  checkForWinner(playerScore, compScore);
});

paperButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  updateScore (playerScore, compScore)
  checkForWinner(playerScore, compScore);
});

scissorsButton.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  updateScore (playerScore, compScore)
  checkForWinner(playerScore, compScore);
});
