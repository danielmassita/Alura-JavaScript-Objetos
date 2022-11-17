/*
07
Manipulando objetos
PRÓXIMA ATIVIDADE

Trabalhar com objetos no Javascript permite que utilizemos diversos tipos de dados, desde primitivos (string, number, bool) até tipos mais elaborados como arrays ou outros objetos. Observe o código abaixo:*/

const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
   }
    cliente.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
   }]
    cliente.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
   })
   
/*
Na representação do cliente, o objeto é composto por outras propriedades de diversos tipos e objetos .

Sabendo disso, analise as afirmações abaixo e selecione a verdadeira.

Selecione uma alternativa


A - O cliente possui uma propriedade chamada animalEstimacao, um array de objetos, o que nos permite usar funções comuns a arrays como filter().
Alternativa correta! É isso mesmo! Um objeto pode conter um array de objetos, o que nos permite invocar desde funções comuns até arrays como filter().

B - Na composição de objetos em JavaScript, para acessar os campos de um objeto que compõe um objeto maior deve-se obrigatoriamente usar a notação de colchetes.
Alternativa Errada! Para acessar as propriedades de um objeto dentro de um objeto 
podemos utilizar a notação de ponto ou a notação de colchetes.

C - Podemos utilizar o filter() para acessar um objeto do array e exibir o nome do objeto filtrado por meio do seguinte código:
const animalEstimacao = cliente.animalEstimacao.filter(animalEstimacao => animmalEstimacao.raca === "Cão")
console.log(animalEstimacao.nome)
Alternativa Errada. Por se tratar de um array de objetos, a propriedade animalEstimacao tem disponível as funções comuns para manipulação de array. Contudo, precisamos nos atentar que a função filter() retorna um array. Portanto, para exibir o nome do animal filtrado deve-se usar console.log(animalEstimacao[0].nome).

*/