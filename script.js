function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  switch (getRandomInt(3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

function getHumanChoice() {
  let choice = prompt("Your turn.\n0 - Rock, 1 - Paper, 2 - Scissor");

  switch (parseInt(choice)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

console.log(getHumanChoice());
