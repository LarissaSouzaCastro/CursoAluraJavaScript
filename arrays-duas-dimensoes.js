const alunos = ['João', 'Juliana', 'Caio', 'Ana']

const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

// O índice zero indica que acessamos a lista de alunos e o segundo índice zero indica que acessamos o primeiro item desta lista.

// o índice um indica que acessamos a lista mediasDosAlunos e o índice zero indica que acessamos o primeiro item desta lista.
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${mediasDosAlunos[1][0]}`)