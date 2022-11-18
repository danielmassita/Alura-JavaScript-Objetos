// 03 - MÉTODOS DE OBJETOS

// DESAFIO - Oferta de Seguro - Percorrer um objeto, verificar se existe a chave 'dependentes' e, caso exista, enviar uma mensagem de oferta de seguro.

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
    depositar:function(valor)
    {
        this.saldo += valor
    }
};

const propsClientes = Object.keys(cliente); // retorna um [array] com todas as chaves do objeto...
console.log(propsClientes);

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj); // já é uma array
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferecer o Seguro de Vida para ${obj.nome}!`)
    } else {

    }; // retorna true/false pra verificar if
}; 

oferecerSeguro(cliente);

console.log(Object.keys(cliente)); // retorna arrays com chaves dos dados em ordem
console.log(Object.values(cliente)); // retorna arrays com valores dos dados em ordem
console.log(Object.entries(cliente)); // retorna arrays com chave[0]-valor[1]


/*
03
Métodos de objeto
PRÓXIMA ATIVIDADE

Play Video
Transcrição
[00:00] Juliana: Continuando com o nosso curso de objetos com JavaScript, vamos ver qual que é o desafio para este vídeo, oferta de seguro. Percorrer um objeto, no caso nosso objeto cliente, verificar se existe a chave dependente, se existir, enviar uma mensagem de oferta de seguro, normalmente as pessoas que têm dependentes elas estão mais interessadas em, por exemplo, um seguro de vida, um seguro de casa, etc., do que as pessoas que não tem dependentes, ou pelo menos é isso que o pessoal lá do banco acha.

[00:34] Então já criei um arquivo aqui, oferta-seguro.js, transferir para ele o nosso objeto cliente da forma que deixamos nos últimos vídeos, e o caso é, André como é que fazemos aqui para verificar se uma chave existe, e se a chave existir fazermos alguma coisa com ela, já usamos o método for in que é o método de percorrer objetos pela string da chave, porém, existem alguns outros métodos e acho que podemos usar um deles agora.

[01:09] André: Então Ju no JavaScript temos um método que é o Object.keys, que vai nos retornar, ele vai criar na verdade um array a partir das chaves de um objeto, o que que você acha de usarmos esse método?

[01:21] Juliana: Vamos usar para vermos como ele funciona.

[01:23] André: Então podemos começar aqui, vamos criar uma variável const propsClientes =, vou deixar no plural por enquanto, e vou só usar aqui o Object.keys(cliente) e vou passar para ele o objeto cliente, só para vermos o que esse método faz, e vou dar um console.log(propsClientes), você roda Ju só para vermos?

[02:07] Juliana: Então rodando aqui com node oferta-seguro.js então o que o terminal nos trouxe foi um array com todas as keys, com todas as chaves do nosso objeto cliente, ou seja, o que esse método do JavaScript está fazendo, o nome dele é Object.keys mesmo, é a forma como utilizamos, e passamos o objeto que queremos trabalhar como parâmetro, e o .keys aqui se refere as chaves do objeto e ele cria para nós um array pegando todas as chaves do objeto que passamos por parâmetro.

[02:53] Pensando aqui que agora temos um array com todas as propriedades do objeto, todas as chaves do objeto, o que que podemos fazer com isso então para resolver o nosso desafio André?

[03:04] André: Então Ju, vamos imaginar o seguinte, vamos criar uma função que passamos esse objeto, o que você acha, e vamos exibir, como ele é um array, ele tem método de array então podemos filtrar o array identificando o dependente, o que que você acha?

[03:21] Juliana: Certo, pode ser.

[03:24] André: Então eu vou só outra função aqui, depois eu jogo só para dentro da função essas constantes que criamos aqui, function oferecerSeguro(obj){} que vai receber um objeto, abre e fecha chaves, e vou jogar essa const que já criamos para dentro da função, daqui a pouco acerto esse monte de espaços, e vou apagar esse console.log() que não faz muito sentido, pelo menos não por agora, e vou fazer um if aqui, porque o propsClientes já é um array, então temos a função, então vou fazer um if, vou fazer a verificação, vou fazer esse filtro, if(propsClientes.includes()), Ju você quer falar um pouco sobre o includes()?

[04:49] Juliana: includes é um método de array do JavaScript que podemos chutar pelo nome, ele verifica se o array que estamos trabalhando, no caso o array propsClientes, ele inclui determinado dado, então passamos por parâmetro aqui do includes() qual que é o dado que queremos verificar se ele existe no array ou não.

[05:15] Lembrando que propsClientes é um array que tem várias strings, cada string se refere a uma chave do objeto, então passamos aqui como parâmetro do includes(“dependentes”) uma string com o nome dependentes, que é o nome da chave que queremos procurar.

[05:33] Esse método includes(), ele sempre retorna true ou false, então se inclui, se o JavaScript encontra no array o dado que ele está procurando, ele retorna true, se não falso, então true e false é justamente o que usamos aqui como verificador dentro do if, então se a condição do if for true ele entra dentro do bloco, então o que esperamos é que ele encontre dentro array a string dependentes, e faça o que vamos passar dentro do bloco do if.

[06:06] André: Então agora fazer um console.log() e vou usar para o console o template string, (Oferta de seguro de vida para ${obj.nome});, então eu exibir aqui o nome do dependente, se tiver o dependente, essa prop dependente dentro desse meu array, o propsClientes, eu venho aqui executo o que está dentro da chaves aqui do if.

[07:09] Juliana: Tem algum detalhe aqui André que eu acho que vai dar erro, porque utilizamos aqui a nossa const propsClientes fora da função passando para ela diretamente o nome do nosso objeto, mas agora vamos passar isso como parâmetro da função.

[07:29] André: Isso então vai ser na obj ficando o código, const propsClientes = Object.keys(obj).

[07:31] Juliana: Isso é normal gente, quando começamos a colocar coisas dentro de função e fora de função, às vezes temos que fazer esse tipo de correção,

[07:41] André: Então eu vou dar um console aqui.

[07:45] Juliana: Eu acho que se você só rodar a função oferecer seguro, como ela já tem um console.log() dentro dela, ela já deve exibir no terminal.

[07:57] André: Então oferecerSeguro(cliente), isso aí.

[08:04] Juliana: Eu vou salvar, vamos rodar aqui e ver se deu tudo certo, oferta de seguro de vida para André, afinal de contas o André é o cliente, só queríamos saber se o André tinha dependentes, então o que fizemos aqui?

[08:16] Primeiro com o Object.keys pedimos para o JavaScript extrair do objeto uma lista de chaves, lista de propriedades desse objeto, salvamos dentro da const propsClientes e em seguida fizemos uma verificação aqui para ver se inclui a chave que queremos, que é a chave dependentes.

[08:38] Se o objeto em questão, o cliente em questão ele tinha dependentes no cadastro dele, exibíamos uma mensagem direcionada para o André, ou seja, o ponto nome .nome que está dentro do objeto que passamos, por parâmetro aqui da função que é o objeto cliente, que é o objeto que estamos passando para a função na hora que executamos ela.

[09:04] Lembrando que a função ela tem dois momentos, o momento onde definimos ela passando um parâmetro que não sabemos o que vai ser recebido e quando executamos, aí sim passamos o dado, ou o objeto, ou o array que queremos que ela trabalhe, e ai tudo certo, oferta de seguro para o André, se ele aceita ou não já é com ele, certo André?

[09:28] André: Certo Ju, é isso aí.

[09:30] Juliana: Além do Object.keys o JavaScript também tem o correspondente dele que podemos inclusive fazer um console.log(), então se trabalhamos com o Object.keys() para pegar as chaves, podemos pensar que existe também o Object.values() para pegar os valores de um objeto, então eu vou rodar aqui, para ver se vem para nós, então aqui, o Object.values() ao invés de um array com as chaves ele traz um *array com os valores.

[10:09] Então ele trouxe inclusive aqui a função depositar, trouxe um array dentro de outro array que é nosso array de dependentes, um outro array com os telefones, e alguns outros dados que são strings e números, lembrando que o JavaScript ele permite que os arrays tenham dados variados, array com strings, arrays, com números, array com objetos, aqui no caso não temos, temos alguns outros arrays, até aqui veio uma função dentro dele, isso aqui é uma estrutura que o JavaScript permite que nem toda linguagem de programação permite.

[10:44] E além do Object.keys() que já vimos, Object.values() que acabamos de ver também, você também pode utilizar o Object.entries() que se já criamos um array de chaves, já criamos um array de valores de chaves, podemos supor então que o Object.entries() é a última opção que nos traz um array com várias arrays dentro dele, e cada um sendo um conjunto de chave e valores só que agora em outra estrutura, em uma estrutura de array, então o índice zero se refere a chave, e o índice um vai se referir ao valor, e isso sempre se repetindo, no índice zero aqui a chave, no índice um o valor, e por aí vai.

[11:30] Então esses são os 3 métodos que podemos utilizar para converter chaves e valores de um objeto para array, Object.keys(), deixar aqui no console feito, Object.values() e Object.entries(), certo André?

[11:51] André: Certo Ju.

[11: 53] Juliana: Então por esse vídeo é só, já vimos bastante coisa, vai praticando, testando, tentando acessar os valores, montar objetos com os valores que você acessa e nos vemos no próximo vídeo.

[12:04] André: Até o próximo vídeo pessoal.
*/