// -2 - FOR ... IN

// Desafio - Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco.

// Array funciona como uma lista ordenada, percorrendo os arrays pelo índice. O objeto é uma "lista" com par chave-valor como elementos, e podem ser mais manipuladas, embora sejam não-ordenadas.

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

let relatorio = "";

// for (let info in cliente) {
//     relatorio += `${info}`
// };

/* console.log(relatorio); // retorna as "chaves" dentro do objeto, a saber: nomeidadecpfemailfonesdependentessaldodepositar

for (let info in cliente) {
    relatorio += ` - ${cliente[info]}`
};
/* console.log(relatorio); // nomeidadecpfemailfonesdependentessaldodepositar
nomeidadecpfemailfonesdependentessaldodepositar - André - 36 - 12312312312 - andre@email.com - 5511969835986,5521985591085 - [object Object],[object Object] - 100 - function(valor)
    {
        this.saldo += valor
    }
O console CLI só retorna tipos primitivos (strings, number, boolean) mas na hora do Objecto, dos Arrays, dá pau... 
*/

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue // continua sem fazer nada se for object ou function...
    } else { // atribui ao relatório a respectiva chave["nome"] ==> valor["André" com quebra de linha dentro do string!
        relatorio += `
        ${info} ==> ${cliente[info]} 
        `
    };// variável do valor como notação de colchetes
};
console.log(relatorio);
console.log(typeof cliente);
console.log(typeof cliente.depositar);


/*
02 - For...in
PRÓXIMA ATIVIDADE

Play Video
Transcrição
[00:00] Juliana: Continuando então com o nosso curso de objetos com JavaScript, vamos ver qual que é o desafio deste vídeo, puxando o relatório, temos que percorrer o objeto e extrair informações básicas do cliente em um formato mais legível, no caso, legível aqui é para quem não vai ler o código.

[00:22] E de forma automatizada para fornecer a outros departamentos do banco, é normal termos que passar as informações de cliente de um lado para o outro e não podermos passar as informações para outras áreas. No formato que estamos usando no código aqui está meio esquisito, então o que temos que fazer é pegar apenas as informações básicas, ou seja, nome, idade, cpf, e-mail, essas informações que estão aqui já em formato de string, ou número, e o saldo.

[00:55] Então vamos pensar quando trabalhamos com arrays sabemos percorrer arrays porque os arrays eles são listas ordenadas, então conseguimos acessar cada um dos índices do array pelo número do índice, então índice zero, índice um, e os métodos de loop do JavaScript, eles vão percorrendo um a um através do número do índice e vai pulando, e conseguimos acessar cada um dos índices, cada um dos elementos dos arrays.

[01:29] Então como que fazemos para percorrer um objeto, uma vez que um objeto ele não tem número de índice, ele é uma lista não ordenada, então nome, idade, cpf, eles não necessariamente podem estar na mesma ordem, então André como que fazemos para percorrer um objeto sem precisar dos índices do array, e sem precisar ficar fazendo, o cliente.nome, cliente.idade, cliente.cpf, etc.

[02:01] André: Então uma possibilidade que podemos utilizar aqui é o método for in, o que você acha?

[02:08] Juliana: O método for in é um método do JavaScript que é para objetos.

[02:15] André: Então vou começar aqui criando uma variável relatório, para esse exemplo que estamos falando aqui let relatório = “”; vai receber uma string vazia a princípio só para inicializarmos ela, e vou usar o for, ele lembra muito a estrutura for que é aquele for clássico, for(let info in cliente), não é Ju, não é isso?

[02:42] Juliana: Isso, aquele for que utilizamos com array, ele tem uma estrutura bem parecida, você usa a palavra-chave for, abre parênteses, cria a let ,nós criamos a let, chamamos de let info aqui, para info é uma das informações do cliente, só que ao invés das outras informações que o for normalmente usa, que é ver a condição de parada, etc., estamos usando só a palavra-chave in.

[03:12] E passando em seguida o nome do objeto que vamos trabalhar, então let info in dentro do, dentro de cliente, e aí abre o nosso bloco de código com chaves, e aí conseguimos passar dentro do bloco que queremos que aconteça a cada propriedade, a cada chave, que o for vai percorrer dentro do objeto.

[03:37] André: Então Ju, vamos colocar para exibir o relatório de uma vez, olha, relatorio, nossa variável, ela vai receber o conteúdo dela, += e vai receber a nossa string, definimos uma string, vai ser vamos usar aquele template.

[04:06] Juliana: Template string.

[04:07] André: Template string isso, ${info} e aqui, vamos rodar assim, só para vermos a saída Ju.

[04:19] Juliana: Vamos sim, vou só aqui puxar o nosso, umas linhas a menos para vermos melhor o que está acontecendo e rodar aqui no nosso terminal com o node puxando-relatorio.js, esquecemos uma coisa muito importante André, esquecemos de pedir para o console exibir a nossa let relatorio.

[04:49] André: Exatamente, então vamos fazer o seguinte, aqui vai ser, deixa eu tirar um espaço aqui, console.log(relatorio).

[05:10] Juliana: É agora sim, vamos lá, rodar novamente, o que aconteceu, ele exibiu aqui para nós no console nome, idade, cpf, e-mail, fone, dependentes, tudo junto, em uma string só, mas se formos ver o código que fizemos até agora, é exatamente isso que estamos pedindo.

[05:31] Criamos uma string vazia dentro da let relatorio e estamos adicionando a cada loop, não vamos chamar de loop, podemos dizer que está percorrendo o nosso objeto, então a cada info, info é o nome da let que criamos para dizermos que o cliente tem várias infos, então para cada info de um cliente, ou poderia ser para cada dado de um cliente também, pedimos para o JavaScript, incluir dentro da string relatório uma info, essa info aqui, se refere então ao que se formos ver aqui, a chave, se refere ao nome da chave, de cada uma das propriedades do nosso objeto.

[06:18] Então que podemos fazer aqui, já que agora já sabemos que info, o que está sendo guardado dentro da let info a cada propriedade que o for está percorrendo dentro do objeto, ela está guardando no formato string a chave.

[06:35] Então se já sabemos como pegar uma chave de um objeto usando aqui o nosso for in, como fazemos então André para pegarmos o valor dessa chave?

[06:48] André: Então vamos pegar o objeto, nosso objeto cliente, alterando o código dentro do for in relatorio += '${cliente[info]'}, é isso daqui Ju?

[07:17] Juliana: Sim, exatamente, vamos rodar mais uma vez, vamos fazer o seguinte, eu vou dar só um espaço aqui dentro do template string e um hífen para separar aqui as informações, vamos lá só para exibirmos.

[07:38] Então agora, apareceu separado por hífen, apareceu até um hífen no começo que não era necessário, agora sim temos os dados, ou seja, os valores de cada uma das chaves, então André, 36, o número do cpf, etc.

[07:55] Só que estão acontecendo duas coisas aqui, primeiro que o nosso relatório está meio esquisito porque ele está só jogando informações sem dizer o que elas são, então o que que é 36? O que é esse monte de número aqui? Não estamos mostrando.

[08:08] E uma outra coisa que o nosso console está exibindo, aqui nas propriedades que não são dados primitivos, por exemplo, strings, números, etc., o terminal, o console nos trouxe um array escrito, object object, e ele trouxe também uma tal de função valor aqui que obviamente que se uma pessoa lá no departamento financeiro receber ela não vai saber o que é.

[08:37] Então tem duas coisas para vermos aqui, a primeira é como que exibimos, deixa eu arrumar meu terminal aqui, como que exibimos apenas as informações básicas, essas informações que são aqui strings e números, sem percorrer também os que são arrays, e já vamos ver o que é esse object object, e também temos que pular a nossa função de depositar, porque isso não tem nada haver com o que estão pedindo para nós, certo André?

[09:06] André: Certo Ju, então temos que identificar dentro objeto o que é um objeto, o que que está dentro dele, e o que que é um array para não printarmos essas informações no nosso relatório, então vamos o seguinte, vamos fazer um if e fazer essa verificação? Dentro do bloco de código do for in colocamos if() vamos usar uma estrutura chamada typeof que é do JavaScript.

[09:36] Juliana: O typeof é uma palavra-chave que usamos no JavaScript para que o JavaScript nos diga qual que é o tipo de dado, ou seja, o tipo de dado de uma função ela vai retornar function, se pedirmos o typeof de um tipo de dado do que é uma string, ele tem que nos retorna string, então conseguimos fazer algumas verificações e validações, usando essa palavra-chave typeof.

[10:06] André: Então o typeof cliente na chave info que é a chave que está percorrendo if(typeof cliente[info]) se ela for igual, os 3 iguais do JavaScript, igual a === “object”, eu vou continuar, então eu não vou exibir essa informação quando encontrar esse tipo object.

[10:31] E como a Ju falou, precisamos verificar dois tipos, se é object e se é function, então vou colocar o ou aqui no código || fazer um outro typeof cliente[info] === “function”), verifiquei, se for igual a function eu abro chaves {continue} e dou a palavra-chave continue e se não for, ai sim, o else {relatorio += ' - ${cliente[info]}'}, se não for ele vai exibir a informação. É isso mesmo Ju?

[11:40] Juliana: Isso mesmo, podemos aproveitar já para melhorar um pouco a nossa exibição da nossa template string, colocando a chave e o valor para aparecerem juntos, que a pessoa já sabe, nome, André, e-mail, etc.

[11:52] André: Então vamos colocar aqui, então cifrão, abre e fecha chaves e a nossa info que é a nossa chave, vou colocar aqui, não é uma arrow function, mas só para a exibição ficar um pouco melhor, eu vou tirar esse traço daqui também, relatorio += '${info} ==> ${cliente[info]'}. É eu acho que é isso.

[12:24] Juliana: Então, vamos salvar e executar tudo isso que fizemos, limpar o terminal, ok, nome, André, idade 36, cpf, olha só, aparentemente está tudo funcionando, só temos que fazer aqui um pequeno detalhe que é quebrar uma linha no código anterior.

[12:45] O template string ele é uma estrutura de string que ele aceita quebra de linha no JavaScript, então podemos quebrar a linha para cada um dos itens, para cada uma das informações que vai ser percorrida no objeto, e podemos testar novamente, agora sim, nome André, idade 36, cpf, e-mail e saldo.

[13:10] Então esse if que o André fez ele funcionou perfeitamente, porque ele está verificando o typeof, verificando o tipo, se for objeto, ou, utilizamos aqui esse operador de dois pipes, essas riscas verticais, para dizer que se ou, for objeto ou for função, ou for tipo função, e esses retornos aqui em forma de string eles são do JavaScript, se dermos um console.log(typeof cliente.depositar), ele deve nos retornar uma string escrito function, isso é do JavaScript, então usamos function, é string, é number etc., para verificar justamente os tipos de dados e poder fazer verificações com eles.

[14:09] Então fez a verificação perfeitamente, só pedimos para caso fosse ou um, ou outro, continuar e não fazer nada, e no else para guardar dentro da nossa variável relatório, incrementar nossa variável relatório, com mais um pedaço de string que tem a chave que é info, já vimos anteriormente que cada vez que percorre o objeto, essa let info ela é uma das chaves, a chave da vez

[14:46] Juliana: E aqui o André usou a notação de colchetes, lembra lá anteriormente que vimos que a notação de colchetes elas servem para passarmos chaves de um objeto quando não temos como escrever aqui diretamente, porque não temos como escrever aqui .nome, depois .email, porque esse objeto ele vai ser percorrido automaticamente pelo for, então passamos isso como variável usando a notação de colchetes, e temos o nosso relatório aqui bonito, é isso André?

[15:21] André: É isso aí Ju.

[15:22] Juliana: Então esse for in ele é bem parecido com o for que usamos para arrays e vamos ver um pouco mais pra frente alguns outros métodos para percorrer objetos, e também vamos ver uma coisa que você pode ter ficado assim, achado um pouco interessante, que é, por que que o JavaScript interpretou os nossos arrays como objeto e não utilizamos aqui por exemplo um tipo array, essa é uma característica do JavaScript específica e vamos ver ela um pouco mais pra frente no curso, certo?

[16:02] André: Beleza Ju, é isso aí.

[16:04] Juliana: Então vamos para o próximo vídeo.

PRÓ
*/