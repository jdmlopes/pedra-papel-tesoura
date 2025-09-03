let playerScore = 0;
let botScore = 0;

playGame();

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    switch(rand){
        case 0:
            return "PEDRA";
            break;
        case 1:
            return "PAPEL";
            break;
        case 2:
            return "TESOURA";
            break;
        default:
            console.log("Algo inexperado aconteceu");
    }
}

function getHumanChoice(){
    return prompt("Escolha entre PEDRA, PAPEL ou TESOURA").toUpperCase();
}

function playRound(playerMove, botMove){
    console.log("Você escolheu: " + playerMove);
    console.log("O computador escolheu: " + botMove);

    if(playerMove == botMove){
        console.log("EMPATE");
        return "draw";
    }

    if(playerMove == "PEDRA"){

        if(botMove == "TESOURA"){
            console.log("VOCÊ VENCEU, Pedra ganha de Tesoura");
            return "player";
        }

        if(botMove == "PAPEL"){
            console.log("VOCÊ PERDEU, Pedra perde para Papel");
            return "bot";
        }
    }

    if(playerMove == "PAPEL"){

        if(botMove == "PEDRA"){
            console.log("VOCÊ VENCEU, Papel ganha de Pedra");
            return "player";
        }

        if(botMove == "TESOURA"){
            console.log("VOCÊ PERDEU, Papel perde para Tesoura");
            return "bot";
        }
    }

    if(playerMove == "TESOURA"){

        if(botMove == "PAPEL"){
            console.log("VOCÊ VENCEU, Tesoura ganha de Papel");
            return "player";
        }

        if(botMove == "PEDRA"){
            console.log("VOCÊ PERDEU, Tesoura perde para Pedra");
            return "bot";
        }
    }
    
}

function updateScore(result){
    if(result == "player") playerScore++;
    if(result == "bot") botScore++;
    console.log("\tPontuação:\n Player: " + playerScore + "\tComputador: " + botScore +"\n");

}

function playGame(){
    let roundWinner = "";
    for(let i = 0; i < 5; i++){
        roundWinner = playRound(getHumanChoice(),getComputerChoice());
        updateScore(roundWinner);
    }
    if(playerScore > botScore){
        console.log("Você venceu o jogo, Parabéns!!!!")
    }else if(playerScore < botScore){
        console.log("Você perdeu o jogo, que pena!")
    }else{
        console.log("O jogo terminou em empate");
    }
    
}