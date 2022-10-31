const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André']

const sala1 = nomes.slice(0, nomes.length/2) // a função Slice divide o array em partes. Aqui começamos com o item de ícone 0 e fomos até o íncone que representa a metade do array
const sala2 = nomes.slice(nomes.length/2) // Aqui começamos com o íncone que representa a metade do array e não colocamos o item final, porque ele entende que vai até o final.

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
