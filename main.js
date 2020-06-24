const rock = 0;
const paper = 1;
const scissors = 2;
let player;
let computer;
let draw = 0;
let win = 0;
let lose = 0;
let count = 0;


while(count < 5){
    playRound();
}
console.log(`Wins: ${win} Losses: ${lose} Draws: ${draw}`)





//Compare the players input and the computers generated move
function playRound(){

    playerChoice();
    compChoice();

    switch(computer){
        case 0:
            switch(player){
                case rock:
                    console.log(`Draw`);
                    draw++;
                    break;
                case paper:
                    console.log(`You Win!`);
                    win++;
                    break;
                case scissors:
                    console.log(`You Lose`);
                    lose++;
                    break;
            }
        break;
        case 1:
            switch(player){
                case rock:
                    console.log(`You Lose`);
                    lose++;
                    break;
                case paper:
                    console.log(`Draw`);
                    draw++;
                    break;
                case scissors:
                    console.log(`You Win`);
                    win++;
                    break;
            }
        break;
        case 2:
            switch(player){
                case 0:
                    console.log(`You Win`);
                    win++;
                    break;
                case 1:
                    console.log(`You Lose`);
                    lose++;
                    break;
                case 2:
                    console.log(`Draw`);
                    draw++;
                    break;
            }
        break;
    }
    count++;
 }



//Run the game five times while keeping track of win, lose, or draw



function playerChoice(){
    player = prompt("Which do you choose? Rock, Paper, or Scissors?");
    console.log(`You have chosen ${player}!`);

    if(player === 'rock'){
        return player = rock;
    }else if(player === 'scissors'){
        return player = scissors;
    }else if(player === 'paper'){
        return player = paper;
    }

}

function compChoice(){
    computer = randomOutput(3);
    switch(computer){
        case 0:
            console.log("The Computer has chosen Rock!");
            break;
        case 1:
            console.log("The Computer has chosen Paper!");
            break;
        case 2:
            console.log("The Computer has chosen Scissors!");
            break;
        default:
            console.log("The Computer does not want to play");
            break;
    }
}

//function that randomly generates the computers play of "rock, paper, or scissors"
function randomOutput(max){
    return Math.floor(Math.random() * Math.floor(max));
}