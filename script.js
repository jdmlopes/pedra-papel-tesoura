let botMove = getComputerChoice();
let playerMove = getHumanChoice();

console.log("Você escolheu " + playerMove);
console.log("O computador escolheu " + botMove);



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