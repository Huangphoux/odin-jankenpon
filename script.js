function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChosie() {
  switch (getRandomInt(3)) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissor";
  }
}

for (let i = 0; i < 30; i++) {
  console.log(getComputerChosie());
}
