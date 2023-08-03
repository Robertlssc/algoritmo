let atividadeEmSala, atividadeParaCasa, situacaoAprendizagem, avaliacaoObjetivas, arquitetura , metodologias, logica , fundamentos, mediaSemestre

atividadeEmSala = Number(prompt("Na unidade de Arquitetura de Hardware e Software\nDigite a nota das atividades em sala (0 a 10): "))
atividadeParaCasa = Number(prompt("Na unidade de Arquitetura de Hardware e Software\nDigite a nota das atividades para casa(0 a 10): "))
situacaoAprendizagem = Number(prompt("Na unidade de Arquitetura de Hardware e Software\nDigite a nota da situação de aprendizagem(0 a 10): "))
avaliacaoObjetivas = Number(prompt("Na unidade de Arquitetura de Hardware e Software\nDigite a nota da avaliação obejetiva(0 a 10): "))

arquitetura = Number((atividadeEmSala + atividadeParaCasa + situacaoAprendizagem + avaliacaoObjetivas) / 4)

atividadeEmSala = Number(prompt("Na unidade de Metodologias de Desenvolvimento de Projetos\nDigite a nota das atividades em sala(0 a 10): "))
atividadeParaCasa = Number(prompt("Na unidade de Metodologias de Desenvolvimento de Projetos\nDigite a nota das atividades para casa(0 a 10): "))
situacaoAprendizagem = Number(prompt("Na unidade de Metodologias de Desenvolvimento de Projetos\nDigite a nota da situação de aprendizagem(0 a 10): "))
avaliacaoObjetivas = Number(prompt("Na unidade de Metodologias de Desenvolvimento de Projetos\nDigite a nota da avaliação obejetiva(0 a 10): "))

metodologias = Number((atividadeEmSala + atividadeParaCasa + situacaoAprendizagem + avaliacaoObjetivas) / 4)

atividadeEmSala = Number(prompt("Na unidade de Lógica Computacional\nDigite a nota das atividades em sala(0 a 10): "))
atividadeParaCasa = Number(prompt("Na unidade de Lógica Computacional\nDigite a nota das atividades para casa(0 a 10): "))
situacaoAprendizagem = Number(prompt("Na unidade de Lógica Computacional\nDigite a nota da situação de aprendizagem(0 a 10): "))
avaliacaoObjetivas = Number(prompt("Na unidade de Lógica Computacional\nDigite a nota da avaliação obejetiva(0 a 10): "))

logica = Number ((atividadeEmSala + atividadeParaCasa + situacaoAprendizagem + avaliacaoObjetivas) / 4)

atividadeEmSala = Number(prompt("Na unidade de Fundamentos de bancos de dados\nDigite a nota das atividades em sala(0 a 10): "))
atividadeParaCasa = Number(prompt("Na unidade de Fundamentos de bancos de dados\nDigite a nota das atividades para casa(0 a 10): "))
situacaoAprendizagem = Number(prompt("Na unidade de Fundamentos de bancos de dados\nDigite a nota da situação de aprendizagem(0 a 10): "))
avaliacaoObjetivas = Number(prompt("Na unidade de Fundamentos de bancos de dados\nDigite a nota da avaliação obejetiva(0 a 10): "))

fundamentos = Number((atividadeEmSala + atividadeParaCasa + situacaoAprendizagem + avaliacaoObjetivas) / 4)

mediaSemestre = Number (arquitetura + metodologias + logica + fundamentos / 4)

alert("As média do aluno são respectivamente: \nArquitetura de Hardware e Software: "+arquitetura.toFixed(2)+"\nMetodologias de Desenvolvimento de Projetos: "+metodologias.toFixed(2)+"\nLógica Computacional: "+logica.toFixed(2)+"\nFundamentos de bancos de dados: "+fundamentos.toFixed(2)+"\nMédia semestral: "+mediaSemestre.toFixed(2))

console.log(arquitetura)
console.log(metodologias)
console.log(logica)
console.log(fundamentos)
console.log(mediaSemestre)

// usar to.fixed enquanto atribui o valor de uma varíavel a transforma em string