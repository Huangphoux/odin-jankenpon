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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //   console.log(`Human: ${humanChoice}`);
    //   console.log(`Computer: ${computerChoice}`);

    // Rock and paper
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock.");
        computerScore++;
        return;
    }
    if (computerChoice == "rock" && humanChoice == "paper") {
        console.log("You win! Paper beats Rock.");
        humanScore++;
        return;
    }

    // Rock and scissors
    if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissors.");
        humanScore++;
        return;
    }
    if (computerChoice == "rock" && humanChoice == "scissors") {
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
        return;
    }

    // Paper and scissors
    if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats Paper.");
        humanScore++;
        return;
    }

    if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
        return;
    }

    console.log("Wow! Ties! I guess no one wins then!");
}

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
humanChoiceItem.appendChild(humanChoiceSpan);

const computerChoiceSpan = document.createElement("span");
const computerChoiceItem = document.querySelector(".computer-choice");
computerChoiceItem.appendChild(computerChoiceSpan);

const showResult = document.createElement("h2");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerChoice = button.textContent.toLowerCase();
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);

        humanChoiceSpan.textContent = playerChoice;
        computerChoiceSpan.textContent = computerChoice;

        humanSpan.textContent = humanScore;
        computerSpan.textContent = computerScore;
    });
});
