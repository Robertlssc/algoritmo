let nota1, nota2, nota3, nota4, media

nota1 = Number(prompt("Digite a primeira nota do aluno: (1 a 10 "))
nota2 = Number(prompt("Digite a segunda nota do aluno: (1 a 10 "))
nota3 = Number(prompt("Digite a terceira nota do aluno: (1 a 10 "))
nota4 = Number(prompt("Digite a quarta nota do aluno: (1 a 10 "))


if(isNaN(nota1) || nota1 > 10 || nota1 < 1){
    alert("Foi observado uma número invalido na nota 1: ")
    location.reload()
}else if(isNaN(nota2) || nota2 > 10 || nota2 < 1){
    alert("Foi observado uma número invalido na nota 2: ")
    location.reload()
}else if(isNaN(nota3) || nota3 > 10 || nota3 < 1){
    alert("Foi observado uma número invalido na nota 3: ")
    location.reload()
}else if(isNaN(nota4) || nota4 > 10 || nota4 < 1){
    alert("Foi observado uma número invalido na nota 4: ")
    location.reload()
}
media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7 && media <= 10){
    alert("O aluno foi aprovado")
}else if (media < 7 && media >= 0){
    alert("O aluno foi reprovado")
}else{
    alert("Número invalido digitado!")
}