let computerScore = 0;
let playerScore = 0;
function computerPlay() {
    let result = Math.floor(Math.random()*3);
    
    //Approach 1:
    // if (result == 0) {
    //     return "Rock"
    // } else if(result == 1) {
    //     return "Paper"
    // } else {
    //     return "Scissors"
    // }

    //Approach 2
    switch (Math.floor(Math.random()*3)) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        default:
            return "SCISSORS";
            break;
    }
}

function getHumanSelection() {
    let input = prompt("Enter your selection:'Rock', 'Paper' or 'Scissors':");
    let valid = false;
    while (!valid) {
        if (input.toUpperCase() !== "ROCK" && input.toUpperCase() !== "PAPER" && input.toUpperCase() !== "SCISSORS") {
            input = prompt("Invalid input. Please enter one of 'Rock', 'Paper' or 'Scissors':");
        } else {
            valid = true;
        }
    }
    return input.toUpperCase();

}

function getWinner() {
    let computerSelection = computerPlay();
    let playerSelection = getHumanSelection();

    if (computerSelection == playerSelection) {
        return "It's a tie! You both picked " + computerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    } else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection+ ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
        
    } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    } else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    }

}

function game(){
    var i = 1;
    while (i<=5) {
        console.log(getWinner());
        i++;
    }
    if (computerScore == playerScore) {
        console.log("The game is a tie! Both scored: " + computerScore);
    } else if (computerScore > playerScore) {
        console.log("You lose! You scored: " + playerScore + ", Computer scored: " + computerScore);
    } else if (playerScore > computerScore) {
        console.log("You win! You scored: " + playerScore + ", Computer scored: " + computerScore);
    }
}

game();