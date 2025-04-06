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
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    //   console.log(`Human: ${humanChoice}`);
    //   console.log(`Computer: ${computerChoice}`);

    // Rock and paper
    if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return "Computer wins!";
    }
    if (computerChoice == "rock" && humanChoice == "paper") {
        humanScore++;
        return "You wins!";
    }

    // Rock and scissors
    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return "You wins!";
    }
    if (computerChoice == "rock" && humanChoice == "scissors") {
        computerScore++;
        return "Computer wins!";
    }

    // Paper and scissors
    if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return "You wins!";
    }

    if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
        return "Computer wins!";
    }

    return "Ties";
}

let humanScore = 0;
let computerScore = 0;

const humanSpan = document.createElement("span");
humanSpan.textContent = humanScore;
const humanItem = document.querySelector(".human");
humanItem.appendChild(humanSpan);

const computerSpan = document.createElement("span");
computerSpan.textContent = computerScore;
const computerItem = document.querySelector(".computer");
computerItem.appendChild(computerSpan);

const humanChoiceSpan = document.createElement("span");
const humanChoiceItem = document.querySelector(".human-choice");
humanChoiceSpan.textContent = "None";
humanChoiceItem.appendChild(humanChoiceSpan);

const computerChoiceSpan = document.createElement("span");
const computerChoiceItem = document.querySelector(".computer-choice");
computerChoiceSpan.textContent = "None";
computerChoiceItem.appendChild(computerChoiceSpan);

const whoWin = document.createElement("h1");

const body = document.querySelector("body");
body.appendChild(whoWin);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();

        whoWin.textContent = playRound(playerChoice, computerChoice);

        humanChoiceSpan.textContent = playerChoice;
        computerChoiceSpan.textContent = computerChoice;

        humanSpan.textContent = humanScore;
        computerSpan.textContent = computerScore;

        if (humanScore == 5 || computerScore == 5) {
            buttons.forEach((button) => {
                button.disabled = true;
            });

            const winner = humanScore === 5 ? "Human" : "Computer";
            whoWin.textContent = `Finish! ${winner} wins!`;
        }
    });
});
