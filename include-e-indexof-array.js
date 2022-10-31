const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota =  (nomeDoAluno) => {
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){ // o índice "0" indica que queremos consultar a lista de Alunos. Já o método Includes irá fazer a investigação dentro da lista de Alunos e irá verificar se nesta lista tem o nomeDoAluno informado no console 
        let index = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // o índice "0" indica que queremos consultar a lista de Alunos. Já o método IndexOf irá capturar o índice que representa o nomeDoAluno
        return listaDeNotasEAlunos[0][index] + ', sua média é ' + listaDeNotasEAlunos[1][index] // o índice "0" indica que queremos consultar a lista de Alunos e o "Index" indica que vamos pegar o nome do aluno que corresponde ao índice do "Index". Já o índice "1" indica que vamos consultar a lista mediaDosAlunos e "Index" indica que vamos pegar a média do aluno que corresponde ao índice do "Index"
    }
    else {
        return 'Aluno não está cadastrado'
    }
} 

console.log(exibeNomeNota('Ana'))