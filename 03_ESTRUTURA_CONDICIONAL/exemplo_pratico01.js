let valor1, valor2

valor1 = Number(prompt("Digite o primeiro valor: "))
valor2 = Number(prompt("Digite o segundo valor (Diferente): "))

if(isNaN(valor1 || valor2) || valor2 == valor1){
    alert("Algum caracter inválido foi digitado ou os valores são iguais.")
    location.reload()
}else if(valor1 > valor2){
    alert(Math.floor(valor1)+" é maior que "+Math.floor(valor2))
}else if(valor2 > valor1){
    alert(Math.floor(valor2)+" é maior que "+Math.floor(valor1))
}else{
    alert("Algo deu errado")
}