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
    
}

const rock = document.getElementById("rock")

rock.addEventListener('click', playRound)


const paper = document.getElementById("paper")

paper.addEventListener('click', playRound)


const ss = document.getElementById("ss")

ss.addEventListener('click', playRound)

   

function playRound(e){
    e.preventDefault()
    console.log("id: "+e.target.id)
     let humanChoice
    let computerChoice=getComputerChoice()

     if(e.target.id==="rock"){
        humanChoice="rock"
        console.log("human choice: "+humanChoice)
        console.log("comp choice: "+computerChoice)
        
     }
     else if(e.target.id==="paper"){
        humanChoice="paper"
        console.log("human choice: "+humanChoice)
        console.log("comp choice: "+computerChoice)
    }

    else if(e.target.id==="ss"){
        humanChoice="scissors"
        console.log("human choice: "+humanChoice)
        console.log("comp choice: "+computerChoice)
    }

    
    let winner
    
     if (humanChoice === computerChoice) {
         winner = "tie";
     } 
     else if (
         (humanChoice === "rock" && computerChoice === "scissors") ||
         (humanChoice === "paper" && computerChoice === "rock") ||
         (humanChoice === "scissors" && computerChoice === "paper")
    ) {
         winner = "human";
    //     //humanScore++;
     } else {
         winner = "computer";
    //    // computerScore++;
     }

     console.log("Human choice: " + humanChoice);
     console.log("Computer choice: " + computerChoice);
     console.log("Winner: " + winner);
   // console.log("Score - Human: " + humanScore + ", Computer: " + computerScore);

   // alert("Human choice: " + humanChoice + "\nComputer choice: " + computerChoice + "\nWinner: " + winner + "\nScore - Human: " + humanScore + ", Computer: " + computerScore);


}
// function playGame() {
        
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//     playRound(humanChoice, computerChoice);

//     }

//     if(humanScore>computerScore){
//         alert("your total score is: " + humanScore + "\nComputer total score is: " + computerScore + "\nyou win " );

//     }
//     else if(computerScore>humanScore){
//         alert("your total score is: " + humanScore + "\nComputer total score is: " + computerScore + "\nyou lose " );

//     }
//     else{
//         alert("your total score is: " + humanScore + "\nComputer total score is: " + computerScore + "\nits a draw " );

//     }

// i=0
// humanScore=0
// computerScore=0
    // Ask if the user wants to play again
   // let playAgain = confirm("Do you want to play again?");
   // if (playAgain) {
     //   playGame(); // recursive call to play again
   // }
//}

// Start the game
//playGame();

