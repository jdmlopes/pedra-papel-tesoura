let botMove = getComputerChoice()

console.log("O computador escolheu " + botMove);



function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3);
    switch(rand){
        case 0:
            return "Pedra";
            break;
        case 1:
            return "Papel";
            break;
        case 2:
            return "Tesoura";
            break;
        default:
            console.log("Algo inexperado aconteceu");
    }
}