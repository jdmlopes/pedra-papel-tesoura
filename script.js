let playerScore = 0;
let botScore = 0;

playRound(getHumanChoice(),getComputerChoice());





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
        return;
    }

    if(playerMove == "PEDRA"){

        if(botMove == "TESOURA"){
            console.log("VOCÊ VENCEU");
            return;
        }

        if(botMove == "PAPEL"){
            console.log("VOCÊ PERDEU");
            return;
        }
    }

    if(playerMove == "PAPEL"){

        if(botMove == "PEDRA"){
            console.log("VOCÊ VENCEU");
            return;
        }

        if(botMove == "TESOURA"){
            console.log("VOCÊ PERDEU");
            return;
        }
    }

    if(playerMove == "TESOURA"){

        if(botMove == "PAPEL"){
            console.log("VOCÊ VENCEU");
            return;
        }

        if(botMove == "PEDRA"){
            console.log("VOCÊ PERDEU");
            return;
        }
    }
    
}