let count = JSON.parse(localStorage.getItem("count")) || {
  Losses: 0,
  Wins: 0,
  Ties: 0,
};

updateScoreElement();

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${count.Wins}, Losses: ${count.Losses}, Ties: ${count.Ties}`;
}

function PicksComputerMove() {
  const randomNum = Math.random();

  let computerMove = "";

  if (randomNum > 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function playerMove(move) {
  const computerMove = PicksComputerMove();
  let result = "";
  if (move === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose.";
    } else if (computerMove === "paper") {
      result = "You Win.";
    } else if (computerMove === "scissors") {
      result = "Tie.";
    }
  } else if (move === "paper") {
    if (computerMove === "rock") {
      result = "You Win.";
    } else if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You Lose.";
    }
  } else if (move === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You Lose.";
    } else if (computerMove === "scissors") {
      result = "You Win.";
    }
  }

  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(".js-move").innerHTML = ` You 
      <img src="images/${move}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png" class="move-icon">
      Computer`;

  if (result === "You Win.") {
    count.Wins += 1;
  } else if (result === "You Lose.") {
    count.Losses += 1;
  } else if (result === "Tie.") {
    count.Ties += 1;
  }

  localStorage.setItem("count", JSON.stringify(count));

  updateScoreElement();
}
