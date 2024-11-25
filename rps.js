function getComputerChoice(){
    let choice 
    let number = Math.round(Math.random()*2)
   
    if(number==0){
        choice="rock"
    }
    else if(number==1){
        choice="paper"
    }
    else{
        choice="scissors"
    }
    return choice
    console.log(choice)
}

function getHumanChoice(){
    let option= prompt("1.rock 2.paper 3.scissors, select number for choice", 1)
    let theChoice
    if(option==1){
        theChoice="rock"}
        else if(option==2){
            theChoice="paper"
        }
        else if(option==3){
            theChoice="scissors"
        }
        
    
    alert("your choice is " + theChoice)

    return theChoice
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    
    let winner
    if (humanChoice === computerChoice) {
        winner = "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        winner = "human";
        humanScore++;
    } else {
        winner = "computer";
        computerScore++;
    }

    console.log("Human choice: " + humanChoice);
    console.log("Computer choice: " + computerChoice);
    console.log("Winner: " + winner);
    console.log("Score - Human: " + humanScore + ", Computer: " + computerScore);

    alert("Human choice: " + humanChoice + "\nComputer choice: " + computerChoice + "\nWinner: " + winner + "\nScore - Human: " + humanScore + ", Computer: " + computerScore);


}
function playGame() {
   
    for(let i=0; i<5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    }

    if(humanScore>computerScore){
        alert("your total score is: " + humanScore + "\nComputer total score is: " + computerScore + "\nyou win " );

    }
    else if(computerScore>humanScore){
        alert("your total score is: " + humanScore + "\nComputer total score is: " + computerScore + "\nyou lose " );

    }
    else{
        alert("your total score is: " + humanScore + "\nComputer total score is: " + computerScore + "\nits a draw " );

    }

i=0
humanScore=0
computerScore=0
    // Ask if the user wants to play again
    let playAgain = confirm("Do you want to play again?");
    if (playAgain) {
        playGame(); // recursive call to play again
    }
}

// Start the game
playGame();

