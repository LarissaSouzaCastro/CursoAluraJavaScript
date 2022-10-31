const notas = [10,9,8,7,6]

// const notasAtualizadas1 = notas.map(notas => notas + 1) // aqui adicionamos uma unidade em cada elemento da array
//console.log(notasAtualizadas1)

// const notasAtualizadas2 = notas.map(notas => notas == 10 ? notas : notas++) // aqui colocamos a condição se o elemento for igual a 10 ele voltará como 10 e caso o elemento seja difernte de 10 ele irá somar uma unidade. Mas aqui como colocamos nota++, a nota do elemento retornará primeiro e não realizará a soma da unidade.
// console.log(notasAtualizadas2)

const notasAtualizadas3 = notas.map(notas => notas == 10 ? notas : ++notas) // aqui colocamos a condição se o elemento for igual a 10 ele voltará como 10 e caso o elemento seja difernte de 10 ele irá somar uma unidade. Mas aqui como colocamos ++nota, desta maneira somará uma unidade antes de retornar o elemento propriamente dito. Então somará uma unidade para cada elemento.

console.log(notasAtualizadas3)

// A diferença entre o 'forEach" e o "map" é que o forEach não retorna, ele apenas executa os comandos do bloco. Já o map consegue retornar valores, e neste caso ele retornou uma nova array