// 05 - ACESSANDO DADOS COM COLCHETES

// DESAFIO - Acessar Chaves - Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes geradas pelo sistema e printar o resultado na tela.

const cliente = {
    nome:"André",
    idade:36,
    cpf:"12312312312",
    email:"andre@email.com",
};


/*
05
Acessando dados com colchetes
PRÓXIMA ATIVIDADE

Play Video
Transcrição
[00:00] Juliana: Continuando então com o nosso curso aqui de JavaScript com estrutura de dados objetos, vamos ver o que temos para o desafio deste vídeo, então nosso desafio agora é acessar chaves, lembrando que o objeto é um conjunto, uma dupla de chaves e valores.

[00:17] Então temos que consultar um objeto utilizando uma lista de chaves relativas a informações de clientes, foram geradas pelo sistema, e printar o resultado na tela, bom, consultar um objeto, mas utilizando uma lista de chaves, então qual que é o caso aqui?

[00:38] Vamos primeiro criar um novo arquivo, que eu vou chamar aqui de “acessar-lista.js”, para podermos trabalhar com ele e o caso é que nem sempre dá para fixar no código, qual que é a chave que queremos acessar, ao contrário que já fizemos anteriormente, que sabíamos que as nossas chaves eram nome, CPF, etc. Então André, como que fazemos nesse caso quando não conseguimos fixar no código exatamente qual é o nome da chave que queremos acessar.

[01:18] André: Então Ju, uma possibilidade que temos aqui é usar a notação de colchete, que é muito parecida aquela notação utilizada no array, então você passa a chave como uma variável, aí consultamos esse objeto, essa chave, através dessa variável que vamos estar passando.

[01:37] Juliana: Certo, eu vou copiar aqui o nosso objeto cliente aqui, que vamos continuar utilizando ele e para ficar mais fácil de trabalharmos, então André, vamos lá. Então o que o desafio quer dizer quando ele fala de uma lista de chaves, lista de chaves que vamos receber lá do sistema, receber de alguma outra parte do nosso programa.

[02:10] André: Então Ju, vamos fazer o seguinte, vamos criar um objeto, já temos o objeto aqui cliente, a chave que precisamos, para fazermos esse exemplo aqui e resolver o desafio, são o nome, idade, cpf, e-mail, então vamos fazer aqui, vê se concorda comigo, vou criar um array com as chaves que eu preciso, e passar esse array para uma função para eu consultar as informações do objeto.

[02:36] André: Então vou fazer aqui const chaves = [] e a estrutura do array e aqui eu vou passar chaves que eu quero, que eu vou utilizar, então vai ser [“nome”, “idade”. “cpf”, “email”], então defini um array como definimos no JavaScript, um *array com as chaves.

[03:08] Vou printar agora a informação que eu preciso, vou fazer printar uma informação só para começar, console.log(cliente[]) então eu tenho o objeto chamado cliente, eu vou passar para cá a chave que eu quero agora, então do cliente eu quero qual chave? Lembrando que o array aqui começa do zero, não é isso Ju?

[03:35] Juliana: Sim, começa com zero.

[03:37] André: Então eu quero o nome do cliente, então usando notação de colchete, então cliente eu quero na posição, nessa posição aqui, posição zero, chaves no índice zero, console.log(cliente[chaves[0]]).

[03:54] Juliana: Certo, só consertaria as chaves que escreveu com n.

[03:58] André: Acontece, vamos lá chaves, então quero exibir, do objeto a chave nome, que eu vou estar passando por colchete a chaves que é o meu array no índice zero que tem meu nome, certo? Vamos rodar, só para vermos a saída aqui.

[04:20] Juliana: Vamos sim, vou salvar aqui o arquivo, e vou chamar com node acessar-lista.js e imprimiu, André.

[04:32] Então, já tínhamos utilizado anteriormente a notação de ponto para acessar chaves de objetos e pegar o valor dessas chaves, e o que o André fez agora, foi usar a notação de colchetes para acessar essa chave vinda de um outro lugar, então lembrando que agora, estamos recebendo uma lista, essa array que o André fez, de algum outro lugar, por exemplo, pode estar vindo de alguma variável, uma lista de chaves, então tem a chave nome, tem a chave idade, etc..

[05:10] E utilizamos a notação de colchete para passar esse valor como variável, então funcionaria da mesma forma ou de uma forma parecida, se tivéssemos uma const chave = “nome” chamada somente chave e fosse uma string com o valor de nome, e poderíamos passar apenas [chave], console.log(cliente[chave]).

[05:37] Agora não conseguimos utilizar a notação de ponto com valores variáveis, ou seja, se tentássemos fazer, console.log(cliente.chave), então não conseguimos passar valores variáveis, mesmo que seja uma variável que está no mesmo arquivo, usando a notação de ponto, porque o JavaScript vai acessar o objeto cliente e ele não vai encontrar aqui .chave ele tenta encontrar aqui um nome ou uma idade, ou um cpf, ele tenta encontrar um dado exatamente com esse nome, ele não vai encontrar.

[06:17] Então sempre que queremos passar para o JavaScript, identificar, acessar uma chave de objeto utilizando uma variável, seja direto uma string ou seja uma posição em um array, precisamos utilizar a notação de colchete.

[06:37] Então para conseguirmos utilizar a lista de chaves que recebemos, acessamos aqui a rede chaves no índice zero para pegar nome, ou no índice um para pegar idade e etc., então o que o André fez foi, acessar a variável chaves na posição zero, e aqui é substituído aqui pela string nome e conseguimos acessar André. Mas e como é que fazemos para, por exemplo, printar na tela todas as propriedades, todas as chaves desse objeto aqui, não só o nome, como é que faríamos então.

[07:20] André: Então Ju, podemos usar o forEach do JavaScript para percorrer nosso array e passar como parâmetro para a função console a nossa chaves, vamos fazer isso? Vou fazer aqui, chaves.forEach() eu vou criar uma variável aqui, info usar a seta, arrow function, nome bonito, =>console.log()) e usar a notação de colchete, vou passar então o meu objeto cliente, e quero saber qual chave que eu quero exibir, cliente.[info].

[08:28] Juliana: Vamos sim, então vamos ver se deu tudo certo, node acessar-lista.js, eu vou apagar o console que estava na linha de cima, mais certinho, André, 36, o cpf, e o e-mail, então deu certo André, o que que o André fez aqui com esse tal de forEach() lembrando que forEach() é um método de array do JavaScript então falamos sobre toda essa parte de forEach() os métodos de array no nosso curso de array, então se você não deu uma olhada nele então você pode conferir que está tudo lá.

[09:01] E o método forEach(), lembrando, ele é um método que precisa de uma função callback para funcionar, então passamos info como sendo parâmetro, então para cada info para cada chave que tem dentro do nosso array de chaves o JavaScript percorreu e executou aqui console.log() acessando o nosso objeto cliente na posição info.

[09:27] Então da primeira vez que ele passar no forEach info se refere a nome, então cliente na chave nome, depois cliente na chave idade, depois cliente na chave cpf e até o fim, e ele conseguiu exibir no console todas as informações automaticamente.

[09:48] A notação de colchete de objetos ela também funciona se você quiser é exibir uma informação, console.log() passando a chave exatamente utilizando aspas, então podemos exibir cliente abre colchetes e passa o nome da chave exata que já sabemos assim entre aspas, console.log(cliente[“nome”]) no formato string também é uma forma de usarmos notação de colchete, dessa vez quando sabemos exatamente qual é o nome da chave que queremos pegar, também vai funcionar.

[10:31] Porém quando já trabalhamos com nome de chave fixo, costumamos usar mais a notação de ponto e a notação quando precisamos passar aqui a chave como variável por exemplo como no caso do forEach() que cada vez que passar no loop vai ser um índice diferente, vai ser um valor diferente, certo André?

[10:53] André: Certo. Ju uma pergunta agora, e quando queremos acessar uma chave de um objeto que não conhecemos, ou passa uma chave errada, o que acontece com o JavaScript?

[11:04] Juliana: Boa pergunta, vamos fazer o seguinte, vamos fazer um teste, eu vou tentar acessar cliente passando uma chave que não existe, por exemplo, conta, console.log(cliente[“conta”]), vamos ver o que acontece, ele deu undefined, indefinido, era isso que você esperava que acontecesse André?

[11:28] André: É isso aí.

[11:30] Juliana: Então ele não dá erro, isso é muito importante, quando tentamos acessar a chave de um objeto que não existe no JavaScript, ele não vai dar um erro de sintaxe, ou erro de tipo, nem erro de nada, ele vai só dizer que é indefinido, isso é muito importante sabermos disso quando vamos tentar debugar, tentando acessar meu objeto aqui ele não está trazendo, mas ele também não me dá erro, porque ele só diz que é indefinido, é assim em outras linguagens também André?

[11:58] André: Então por exemplo, no C Sharp, ou no Java, vai dar um erro para você, no JavaScript não, no JavaScript facilita bastante por algum lado a vida do programador.

[12:11] Sim, mas às vezes quando você quer debugar você quer receber um erro e você não está recebendo, então isso é uma característica do JavaScript, muitas coisas que dão erro em outras linguagens como CSharp, Java, Python, eles não vão dar erro no JavaScript, ele só vai dizer para você que é indefinido, então é importante sabermos esse tipo de coisa quando estamos debugando especialmente. Legal André, gostei, então vamos para o próximo vídeo?

[12:37] André: Próximo vídeo pessoal.
*/