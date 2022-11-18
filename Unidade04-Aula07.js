/*
07
Faça como eu fiz: Cadeia de protótipos
PRÓXIMA ATIVIDADE

O Javascript é uma linguagem que a partir do ES2015 possibilitou o trabalho com classes para quem desenvolve em outras linguagens. Porém, ainda permanece sendo baseada em protótipos.

Será que conseguimos utilizar herança com protótipos?

A resposta é: Sim. Para tratar a herança com protótipos podemos criar uma cadeia em que um protótipo acessa o outro de um nível superior e assim por diante. E aí? Vamos praticar? Como fizemos no vídeo, escreva uma função construtora para criar um novo cliente.

VER OPINIÃO DO INSTRUTOR
Opinião do instrutor

Iniciaremos com a criação de um novo arquivo chamado ” clientePrototipo.js” e adicionando o código abaixo a ele, para definir construtores de objetos.

function Cliente (nome, cpf, email, saldo) {
 this.nome = nome
 this.cpf = cpf
 this.email = email
 this.saldo = saldo
  this.depositar = function(valor){
   this.saldo += valor
 }
}
const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100)COPIAR CÓDIGO
Agora vamos definir um construtor que utiliza o Cliente para gerar um novo tipo de cliente.

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
 Cliente.call(this, nome, cpf, email, saldo)
 this.saldoPoup = saldoPoup
}
const ju = new ClientePoupanca("Ju", "12312312312", "ju@email.com", 100, 200)COPIAR CÓDIGO
Agora vamos manipular o comportamento do protótipo do objeto ClientePoupanca, adicionando o código abaixo:

ClientePoupanca.prototype.depositarPoup = function(valor){
 this.saldoPoup += valor
}COPIAR CÓDIGO
Então podemos testar algumas propriedades e validar a ideia de cadeia de protótipos. Digite o seguinte:

console.log(andre.hasOwnProperty("saldoPoup"))
console.log(ju.hasOwnProperty("saldoPoup"))
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)COPIAR CÓDIGO
Na saída do console veremos que usando .hasOwnProperty(), a função “saldoPoup” só existe no objeto do tipo ClientePoupanca.

Os objetos andre e ju são do tipo object, ou seja, ambos herdam do protótipo de object, que está associado a todo objeto criado no JavaScript.

Pratique bastante e estude os protótipos em JavaScript, já que dominar esse conhecimento só tem a colaborar na criação de seus códigos.
*/