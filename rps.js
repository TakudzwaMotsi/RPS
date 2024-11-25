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

getComputerChoice()