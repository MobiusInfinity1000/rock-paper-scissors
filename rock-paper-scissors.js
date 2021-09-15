let computerScore = 0;
let playerScore = 0;
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const retry = document.querySelector("#retry");
const gameComment = document.getElementById("gameComment");
const humanScore = document.getElementById("humanScore");
const pcScore = document.getElementById("computerScore");
const modalComment = document.getElementById("modalContent");

// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function resetGame(){
    if (computerScore > playerScore) {
        modalComment.textContent = "You lost 😟! Play again?"
    } else if(computerScore < playerScore){
        modalComment.textContent = "Congratulations! You won 😎 Do you want to try your luck again?"
    } else {
        modalComment.textContent = "You have breached the space-time continuum to arrive at neither a win nor a loss. Try again?"
    };
    playerScore = 0;
    computerScore = 0;
    humanScore.textContent = "Human Score: " + playerScore;
    pcScore.textContent = "Computer Score: " + computerScore;
    gameComment.textContent = "";
    modal.style.display = "none";
};

console.log(gameComment.textContent);
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

// function getHumanSelection() {
    

//     let input = prompt("Enter your selection:'Rock', 'Paper' or 'Scissors':");
//     let valid = false;
//     while (!valid) {
//         if (input.toUpperCase() !== "ROCK" && input.toUpperCase() !== "PAPER" && input.toUpperCase() !== "SCISSORS") {
//             input = prompt("Invalid input. Please enter one of 'Rock', 'Paper' or 'Scissors':");
//         } else {
//             valid = true;
//         }
//     }
//     return input.toUpperCase();

// }

function getWinner() {
    let computerSelection = computerPlay();
    //let playerSelection = getHumanSelection();

    if (computerSelection == playerSelection) {
        humanScore.textContent = "Human Score: " + playerScore;
        pcScore.textContent = "Computer Score: " + computerScore;
        gameComment.textContent = "Tie! Both picked " + computerSelection;
        return "It's a tie! You both picked " + computerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    } else if (computerSelection == "ROCK" && playerSelection == "PAPER") {
        playerScore++;
        humanScore.textContent = "Human Score: " + playerScore;
        pcScore.textContent = "Computer Score: " + computerScore;
        gameComment.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
        return "You win! " + playerSelection + " beats " + computerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") {
        computerScore++;
        humanScore.textContent = "Human Score: " + playerScore;
        pcScore.textContent = "Computer Score: " + computerScore;
        gameComment.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";
        return "You lose! " + computerSelection + " beats " + playerSelection+ ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
        
    } else if (computerSelection == "PAPER" && playerSelection == "ROCK") {
        computerScore++;
        humanScore.textContent = "Human Score: " + playerScore;
        pcScore.textContent = "Computer Score: " + computerScore;
        gameComment.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";
        return "You lose! " + computerSelection + " beats " + playerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") {
        playerScore++;
        humanScore.textContent = "Human Score: " + playerScore;
        pcScore.textContent = "Computer Score: " + computerScore;
        gameComment.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
        return "You win! " + playerSelection + " beats " + computerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    } else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        playerScore++;
        humanScore.textContent = "Human Score: " + playerScore;
        pcScore.textContent = "Computer Score: " + computerScore;
        gameComment.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!"; 
        return "You win! " + playerSelection + " beats " + computerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        computerScore++;
        humanScore.textContent = "Human Score: " + playerScore;
        pcScore.textContent = "Computer Score: " + computerScore;
        gameComment.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";
        return "You lose! " + computerSelection + " beats " + playerSelection + ". Your score: " + playerScore + ". Computer Score: " + computerScore; 
    };

};


// function game(){
//     var i = 1;
//     while (i<=5) {
//         console.log(getWinner());
//         i++;
//     }
//     if (computerScore == playerScore) {
//         console.log("The 5 game set is a tie! Both scored: " + computerScore);
//     } else if (computerScore > playerScore) {
//         console.log("You lose the 5 game set! You scored: " + playerScore + ", Computer scored: " + computerScore);
//     } else if (playerScore > computerScore) {
//         console.log("You win the 5 game set! You scored: " + playerScore + ", Computer scored: " + computerScore);
//     }
// }


retry.addEventListener('click', resetGame);


// document.addEventListener("click", )
rock.addEventListener('click', () => {
    playerSelection = rock.id.toUpperCase();
    console.log(getWinner());
    if (computerScore == 5 || playerScore ==5){
        resetGame();
        modal.style.display = "block";
    };
});

paper.addEventListener('click', () => {
    playerSelection = paper.id.toUpperCase();
    console.log(getWinner());
    if (computerScore == 5 || playerScore ==5){
        resetGame();
        modal.style.display = "block";
    };
});

scissors.addEventListener('click', () => {
    playerSelection = scissors.id.toUpperCase();
    console.log(getWinner());
    if (computerScore == 5 || playerScore ==5){
        resetGame();
        modal.style.display = "block";
    };
});


// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }