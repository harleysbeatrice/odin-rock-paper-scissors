function getComputerChoice() {
    let seed = Math.random();
    let intChoice = Math.round(seed * 2);
    return (intChoice === 0) ? "Rock" :
        (intChoice === 1) ? "Paper" : "Scissors";
}

let playerName = document.querySelector(".player.profile h2");
const nameInput = prompt("What is your name?");

playerName.textContent = (nameInput === "") ? "Stranger" : nameInput;

let computerScoreDisplay = document.querySelector(".score.computer h2");
let playerScoreDisplay = document.querySelector(".score.player h2");
const buttons = document.querySelectorAll("button");
const logList = document.querySelector(".log-list");

let humanScore = 0;
let compScore = 0;

function playGame(playerMove) {
    const human = playerMove;
    const comp = getComputerChoice();
    if(human === comp) {
        let log = document.createElement("li");
        log.textContent = "It's a Draw!";
        if (logList.childElementCount >= 5) {
            logList.lastElementChild.remove();
        }
        logList.insertBefore(log,logList.children[0]);
    } else if(
        (human === "Rock" && comp === "Scissors") ||
        (human === "Scissors" && comp === "Paper") ||
        (human === "Paper" && comp === "Rock")
    ) {
        humanScore += 1;
        let log = document.createElement("li");
        log.textContent = `You Win! ${human} beats ${comp}. \nYour Score: ${humanScore} \nComputer's Score: ${compScore}`
        if (logList.childElementCount >= 5) {
            logList.lastElementChild.remove();
        }
        logList.insertBefore(log,logList.children[0]);
    } else {
        compScore += 1;
        let log = document.createElement("li");
        log.textContent = `You Lose! ${human} beats ${comp}. \nYour Score: ${humanScore} \nComputer's Score: ${compScore}`
        if (logList.childElementCount >= 5) {
            logList.lastElementChild.remove();
        }
        logList.insertBefore(log,logList.children[0]);
    }
    computerScoreDisplay.textContent = compScore.toString();
    playerScoreDisplay.textContent = humanScore.toString();
    return;
}

buttons.forEach((button) => {
    const playerMove = button.textContent;
    button.addEventListener("click", () => {
        playGame(playerMove);
    })
})