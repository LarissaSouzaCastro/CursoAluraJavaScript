const numeros = [10, 6.5, 8, 7.5]

let somaNumeros = 0

 for (i=0; i < numeros.length; i++){
    somaNumeros = numeros[i] + somaNumeros // outra forma de escrever este looping seria: somNumeros += numeros[i]
}

console.log(`A média dos números é ${somaNumeros/numeros.length}`)

