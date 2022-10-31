const numeros = [10, 6.5, 8, 7.5]

let somaNumeros = 0

numeros.forEach(numeros => {somaNumeros += numeros}) // o forEach é uma função callback

console.log(`A média dos números é ${somaNumeros/numeros.length}`)