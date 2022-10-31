const num = [10, 9, 3];

// adicionar número na array -> ferramenta push

num.push(7,9,8); 

console.log(num)

// media

let media = (num[0] + num[1] + num[2] + num[3])/num.length

console.log(`A média é ${media}`)

// remover número na array -> ferramenta pop

const notas = [2.3, 4, 3,]

notas.pop() // o "pop" não aceita que inserimos valores. Ele é "vazio" e remove o ultimo numero da array

console.log(notas);

const arrayVazia = [,,,]
console.log(arrayVazia)
console.log(arrayVazia.length)
arrayVazia.push(50)
console.log(arrayVazia)
console.log(arrayVazia.length) //OBS.:O JavaScript manteve as posições vazias e adicionou o 50 ao final do array. Após a execução, ele passou a ter 4 posições, mas somente um elemento (o número 50)

