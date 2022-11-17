// 05 - FUNÇÕES 

// 

const cliente = {
    nome:"André",
    idade:36,
    cpf:"12312312312",
    email:"andre@email.com",
    fones:["5511969835986", "5521985591085"],
    dependentes:[
        {
            nome:"Sara Silva",
            parentesco:"filha",
            dataNasc:"20/03/2011",
        }, 
        {
            nome:"Sâmia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014",
        },
    ],
    saldo:100,
    depositar:function(valor) // Função dentro do objeto cliente, na chave saldo, função depositar:function(valor)... Função vai atribuir comportamentos, sendo um método .depositar(valor)...
    {
        this.saldo += valor
    }
};


// COMO dar a um objeto, além de propriedade, comportamento (pra um cliente, por exemplo, poder fazer algo, sacar um dinheiro?

console.log(cliente);
console.log(" ");
console.log(cliente.saldo);
cliente.depositar(30);
console.log(cliente.saldo);



/*
05 - Funções
PRÓXIMA ATIVIDADE

Play Video
Transcrição
[00:00] Juliana: Continuando então com o nosso curso de objetos em JavaScript, vamos ver qual que é o desafio deste vídeo, então nosso desafio é fazendo depósitos, temos que adicionar uma propriedade que permita ações, para que os clientes que estão cadastrados no sistema do nosso banco, consigam fazer operações bancárias, por exemplo, depositar, sacar, etc.

[00:25] Então eu já criei um arquivo chamado “fazendo-depositos.js” aqui no Visual Studio Code, e transferi para ele, o nosso objeto cliente, accept read and write aqui no pop-up do VS Code que apareceu, deixa eu deixar o André entrar aqui para conseguir editar o meu código.

[00:45] Então o nosso objeto cliente ele está com as últimas alterações que fomos fazendo nos vídeos anteriores, então já tem nosso array de telefones, tem um array de objetos que são os dependentes aqui do cliente André.

[01:00] Então já trabalhamos com vários tipos de dados nos valores aqui das nossas chaves, então strings, números, arrays de dados, arrays de strings, arrays de objetos, porém um objeto ele não tem só propriedades que as chaves estão representando, a pessoa não tem só nome, a pessoa tem idade, etc., a pessoa tem que poder fazer coisas.

[01:26] E como é que fazemos então André para dar para o objeto além de propriedade, para dar comportamento para ele, e aí conseguirmos fazer com que a pessoa saque dinheiro, deposite, etc.

[01:36] André: Então Ju, aí segue a mesma ideia que utilizamos para adicionar uma propriedade nova, ao objeto cliente, então vamos fazer aqui?

[01:47] Juliana: Vamos.

[01:50] André: Então primeiramente vou fazer umas alterações aqui no cliente, vou adicionar uma propriedade saldo, só para entendermos, que vamos fazer um esquema de depósito, então saldo: 100 reais.

[02:06] Juliana: Essa é só por enquanto uma propriedade com um valor de número que diz o saldo do cliente, certo?

[02:11] André: Isso ai, agora eu vou adicionar uma nova função, um comportamento a esse cliente, então da primeira forma, eu vou adicionar dentro do próprio objeto cliente, então depositar: function() ela vai receber como parâmetro um valor para alterarmos o saldo ali quando eu invocar essa função, então (valor){} e aqui dentro eu vou usar aquela palavra reservada, this que faz referência ao próprio objeto, correto Ju?

[03:00] Juliana: Correto.

[03:01] André: this.saldo += saldo vai ser o que tem lá no saldo mais o valor que eu vou passar aqui agora, salvar aqui.

[03:20] Juliana: E se colocar uma vírgula ai, entre uma propriedade e outra, sempre esquecemos essa vírgula, é normal.

[03:28] André: Então, vamos executar então agora, fazer dois consoles aqui para ver o saldo antes e depois de invocar o método, invocar a função, então console.log(cliente.saldo) usando a notação de ponto que vimos nas aulas anteriores, e vou invocar agora o método, a função depositar, vou depositar 30 reais para esse cliente, cliente.depositar(30) ele recebe por parâmetro um valor que vai ser o 30, e o console.log(cliente.saldo) de novo.

[04:23] Então a saída esperada é exibir 100 reais que é o saldo, depois vou invocar o comportamento de fazer depósito, depositar, vou passar 30 reais de valor para esse depósito e a saída esperada é que o cliente.saldo seja 130.

[04:42] Juliana: Podemos testar?

[04:43] André: Vamos testar Ju.

[04:44] Juliana: Então vou executar aqui com o node fazendo-depositos.js e perfeito, aqui no terminal apareceram dois valores, o primeiro console com 100 reais, 100 dinheiros, não especificamos e segundo com 130, então vamos dar uma revisada no que fizemos.

[05:02] Como o André falou, nós utilizamos funções, espera vou só tirar umas linhas aqui para ficar mais fácil de vermos tudo junto, utilizamos funções para dar comportamentos para um objeto, então depositar, sacar, no caso aqui no contexto do nosso banco, mas pode ser qualquer contexto do que você tiver trabalhando.

[05:26] O André falou algumas vezes de métodos, chamamos de métodos funções que estão ligadas, elas trabalham no contexto de um objeto, mas são funções, então quando uma função está ligada a um objeto no caso de cliente.depositar() depositar é uma função, que ela faz parte, ela trabalha em um contexto de um objeto cliente, chamamos de método, mas é essa a diferença de nome.

[05:57] Então o que fizemos aqui foi que criar uma função, ela é também um conjunto de chaves e valores, ela tem uma chave depositar e o valor dela é uma função, ao invés de ser um dado primitivo, usamos aqui a sintaxe clássica de função do JavaScript function, passando aqui um parâmetro de valor, que é o valor que vamos receber para ser depositado.

[06:22] E aqui dentro do bloco da função, entre as chaves, estamos passando this.saldo como o André falou, this é uma palavra reservada que se refere literalmente a isso, então quando falamos [this é este objeto aqui, está instância de objeto de cliente .saldo que é a propriedade que queremos trabalhar, += que é um operador de incremento aqui, então ele vai incrementar, saldo o valor da propriedade saldo, com o que estamos recebendo aqui como parâmetro da função.

[06:56] E aí no primeiro console.log trazemos o cliente.saldo antes de qualquer alteração, depois o André executou o método, a função depositar, passando como parâmetro 30 dinheiros aqui para ser depositado na conta do cliente, para ser incrementado aqui no valor da propriedade saldo e em seguida o segundo console.log traz o saldo atualizado de 130 reais.

[07:24] Então André, eu acho que é isso, faltou falarmos alguma coisa aqui nessa parte de métodos/funções?

[07:31] André: Acho que é isso mesmo Ju.

[07:33] Juliana: Então fechamos por aqui, lembra de praticar bastante, crie seus próprios métodos, invoque, execute, veja como é que o seu objeto cliente se comporta e nos vemos no próximo vídeo.

[07:45] André: Até o próximo vídeo pessoal.
*/