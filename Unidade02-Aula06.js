/*
06 - Para saber mais: Objeto literal e referência
PRÓXIMA ATIVIDADE

Vimos anteriormente como é a estrutura de um objeto, com seus pares de chave e valor:*/

var objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}
/*
O exemplo acima, assim como o que estamos criando durante esta aula, é o de um objeto literal.

Um objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves { }, que atribuímos a uma variável para que o valor possa ser acessado depois. Exatamente como no exemplo acima.

Objetos literais funcionam bem quando queremos ter um objeto único, com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele. Vejamos o código a seguir:*/

var objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}
console.log(objPersonagem);

var objPersonagem2 = objPersonagem;
console.log(objPersonagem);
console.log(objPersonagem2);

/*
Se alterarmos apenas o objPersonagem2, o resultado é:*/

var objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

/*
A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):*/

let num = 50
let num2 = num; // num2 é uma nova cópia d num, por acaso, com o mesmo valor...
console.log(num); // num1 com valor de 50
console.log(num2); // num2 com valor de 50

num2 = 100; // atribuindo a num2 um novo valor,a gora de 100
console.log(num) // 50
console.log(num2) // 100

// O objeto {chave:valor} trabalha com referência de memória, e não com uma nova cópia.  

/*
Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():
*/
var objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

var objPersonagem2 = Object.create(objPersonagem); // cria um novo objeto, cópia do primeiro
objPersonagem2.nome = "Gandalf, o Cinzento" // altera o .nome do novo objeto

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o CinzentoCOPIAR CÓDIGO
/*
O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro. Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.

Você pode ver mais exemplos desse método na documentação do MDN.

Nas próximas aulas veremos também outra forma de criar objetos, utilizando funções construtoras.

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create


*/