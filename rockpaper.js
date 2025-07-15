

function getComputerChoice(){
    let random = Math.floor(Math.random()*3);
let choice;
    switch(random){
        case 0: choice = "rock";
        break;
        case 1: choice = "paper";
        break;
        case 2: choice = "scissors";
        break;
    }
    return choice;
}
function getHumanChoice(){  
    return prompt("Give me your choice, it can be rock, paper or scissors, do not mistype!").toLowerCase()

}

function playGame(){
    
let humanScore =0;
let computerScore = 0;
function playRound(){
    const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
    if (humanSelection == computerSelection){
        return "It's a tie, go again";
    }
    if ((humanSelection == "rock" && computerSelection == "scissors") || (humanSelection == "paper" && computerSelection == "rock")|| (humanSelection == "scissors" && computerSelection == "paper")){
        humanScore++;
        return "You have won great job!" + " "+ computerSelection +" loses to "+ humanSelection

    }
    else{
        computerScore++;
        return "You have lost " + computerSelection + " beats " + humanSelection
    }
}
    for (let i = 0; i<=4;i++)
    {
    console.log(playRound());
    }
    console.log(humanScore + " "+ computerScore);
if ( humanScore > computerScore){
    return "You have won in a best of 5 match, congrats!"
}
else if ( humanScore < computerScore){
    return "You have lost in a best of 5 match, buu!"
}
else return "Tie"
}

console.log(playGame());