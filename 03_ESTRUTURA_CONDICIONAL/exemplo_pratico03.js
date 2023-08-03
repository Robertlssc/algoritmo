let altura, pesoIdeal, genero

altura = Number(prompt("Digite a sua altura(metros): "))
genero = String(prompt("Digite o seu gênero, M para masculino e F para feminino: "))
genero = genero.toUpperCase()

if(isNaN(altura) || altura <= 0.54 || altura >= 2.51){
    alert("Altura digitada inválida.")
    location.reload
}

if(genero === "M"){
    pesoIdeal = 22 * Math.pow(altura, 2)
    alert("Seu peso ideal é de: "+pesoIdeal.toFixed(2))
}else if(genero === "F"){
    pesoIdeal = 21 * Math.pow(altura, 2)
    alert("Seu peso ideal é de: "+pesoIdeal.toFixed(2))
}else{
    alert("Esse gênero não está catalogado.")
}