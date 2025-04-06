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

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const playerChoice = button.textContent.toLowerCase();
        playRound(playerChoice, getComputerChoice());
    });
});
