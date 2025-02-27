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

let humanScore =0
let computerScore=0


function playRound(e){
    
    e.preventDefault()
    console.log("id: "+e.target.id)
     let humanChoice
    let computerChoice=getComputerChoice()
    const option= document.getElementById("options")
    const result = document.getElementById("result")

    
     if(e.target.id==="rock"){
        humanChoice="rock"
        console.log("human choice: "+humanChoice)
        console.log("comp choice: "+computerChoice)
        
     option.innerText= "Your choice is "+humanChoice+ " and The Coputer choice Is "+ computerChoice
        
     }
     else if(e.target.id==="paper"){
        humanChoice="paper"
        console.log("human choice: "+humanChoice)
        console.log("comp choice: "+computerChoice)
        option.innerText= "Your choice is "+humanChoice+ " and The Coputer choice Is "+ computerChoice

    }

    else if(e.target.id==="ss"){
        humanChoice="scissors"
        console.log("human choice: "+humanChoice)
        console.log("comp choice: "+computerChoice)
        option.innerText= "Your choice is "+humanChoice+ " and The Coputer choice Is "+ computerChoice

    }

    
    let winner
    
    
     if (humanChoice === computerChoice) {
         winner = "tie";
         result.textContent="its a tie this round "
     } 
     else if (
         (humanChoice === "rock" && computerChoice === "scissors") ||
         (humanChoice === "paper" && computerChoice === "rock") ||
         (humanChoice === "scissors" && computerChoice === "paper")
    ) {
         winner = "human";
         result.textContent="You won this round"
         humanScore++;
     } else {
         winner = "computer";
         result.textContent="Computer won this round"
         computerScore++;
     }
     
     
     console.log("Human choice: " + humanChoice);
     console.log("Computer choice: " + computerChoice);
     console.log("Winner: " + winner);
    console.log("Score - Human: " + humanScore + ", Computer: " + computerScore);

    if(humanScore==5){
        console.log("you won the game")
        result.innerText="Congradulations You have won the Game"
    humanScore=0
    computerScore=0
    }

else if(computerScore==5){
    console.log("computer won this game")
    result.innerText= "Sorry! the computer won the Game"
    humanScore=0
    computerScore=0
}

const score= document.getElementById("score")
score.innerText=`your score: `+humanScore+ ' | computer score: '+computerScore
}


