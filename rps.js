function getComputerChoice() {
    let seed = Math.random();
    let intChoice = Math.round(seed * 2);
    return (intChoice === 0) ? "Rock" :
        (intChoice === 1) ? "Paper" : "Scissors";
}

function capitalize (str) {
    str = str.toLowerCase()
    return str.slice(0,1).toUpperCase() + str.slice(1,);
}
function getHumanChoice() {
    let seed = prompt("Choose your weapon: Rock, Paper or Scissors?")
    return capitalize(seed);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        const human = getHumanChoice();
        const comp = getComputerChoice();
        if(human === comp) {
            humanScore += 1;
            computerScore += 1;
            console.log("Draw! Everyone gets a point.")
        }else if((human ==="Rock" && comp=== "Scissors") || (human === "Scissors" && comp === "Paper") ||
            (human === "Paper" && comp ==="Rock")) {
            humanScore += 1;
            console.log(`You Win! ${human} beats ${comp}. \nYour Score: ${humanScore} \nComputer's Score: ${computerScore}`)
        }else {
            computerScore += 1;
            console.log(`You Lose! ${human} beats ${comp}. \nYour Score: ${humanScore} \nComputer's Score: ${computerScore}`)
        }
    }
    if(humanScore > computerScore) {
        console.log(`FINAL SCORES\nYour Score: ${humanScore}\nComputer's Score: ${computerScore} \nYou Win!!!`)
    } else if(humanScore === computerScore) {
        console.log(`FINAL SCORES\nYour Score: ${humanScore}\nComputer's Score: ${computerScore} \nIt's a Draw :(`)
    }else {
        console.log(`FINAL SCORES\nYour Score: ${humanScore}\nComputer's Score: ${computerScore} \nYou Lose :(`)
    }
}

playGame()