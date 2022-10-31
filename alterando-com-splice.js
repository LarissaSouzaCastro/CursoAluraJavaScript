const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Léo']

//listaDeChamada.splice(1,2,'Rodrigo') // O 1º parâmetro diz o índice que iremos iniciar a contagem, o 2º parâmetro diz a quantidade de itens que vamos remover eo 3º parâmetro diz o itm que vamos add

listaDeChamada.splice(2,0,'Aline') // O número 2 indica que vamos adicionar um item entre o índice 1 e 2. O número zero indica que não vamos remover nenhum item. E a Aline será adicionada entre a Ana e o Caio

console.log(`Lista de Chamada: ${listaDeChamada}`)
