let bairro

alert("Digite o número que corresponde ao seu bairro")

bairro = Number(prompt("(1) Clima bom \t (5) Bebedouro\n(2) Barro durro \t (6) Centro\n(3) Benedito bentes \t (7) Pajuara, Ponta verde ou Jatiúca\n(4) Antares"))

switch (bairro){
    case 1:
        alert("O valor da entrega será de: R$04,00")
    break;
    case 2:
        alert("O valor da entrega será de: R$05,00")
    break;
    case 3:
        alert("O valor da entrega será de: R$06,00")
    break;
    case 4:
        alert("O valor da entrega será de: R$07,00")
    break;
    case 5:
        alert("O valor da entrega será de: R$08,00")
    break;
    case 6:
        alert("O valor da entrega será de: R$10,00")
    break;
    case 7:
        alert("O valor da entrega será de: R$15,00")
    break;
    default:
        alert("Você digitou um número que não corresponde a um bairro")
    break;
}

if(bairro == 1){
    alert("O frete custa R$04,00")
}else if(bairro == 2){
    alert("O frete custa R$05,00")
}else if(bairro == 3){
    alert("O frete custa R$06,00")
}else if(bairro == 4){
    alert("O frete custa R$07,00")
}else if(bairro == 5){
    alert("O frete custa R$08,00")
}else if(bairro == 6){
    alert("O frete custa R$10,00")
}else if(bairro == 7){
    alert("O frete custa R$15,00")
}

console.log(typeof bairro)