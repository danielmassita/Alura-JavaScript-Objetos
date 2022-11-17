// 04 - ACESSANDO DADOS

// DESAFIO - Printar as infos - Acessar um objeto com informações de um cliente e exibir essas informações no console.

const cliente = {
    nome:"André",
    idade:36,
    cpf:"12312312312",
    email:"andre@email.com",
};

console.log(cliente.nome); // acessando através da NOTAÇÃO DE PONTO na chave nome e acessando o valor "André"

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade}.`) // template string

console.log(cliente.cpf.substring(0,3)); // começamos a puxar o índice 0 até 2 da string, "up to but not included".

console.log(`Por razões de segurança, mostramos apenas seu CPF parcialmente. O seu CPF é ${cliente.cpf.substring(0,3)}.***.***-${cliente.cpf.substring(9,)}.`)



/*
04
Acessando dados
PRÓXIMA ATIVIDADE

Play Video
Transcrição
[00:00] Juliana: Olá, então continuando com o nosso curso de JavaScript focado em objetos, já vimos a estrutura do objeto como funciona, agora vamos ver, continuar, vendo como manipula cada uma das partes do objeto.

[00:13] Aqui neste curso vamos trabalhar com desafios, então cada aula, cada vídeo, vamos ter um desafio diferente que vai nos ajudar a entender como trabalhamos com objetos no dia a dia.

[00:24] Para este primeiro desafio vamos ter que acessar um objeto com informações de um cliente, e exibir essas informações no console, aqui durante esse curso, vamos trabalhar com o contexto de banco, então o banco tem clientes, os clientes têm conta corrente, e por aí vai, então o que temos que fazer aqui, o nosso desafio é criar aqui um objeto, ter um objeto com informações de um cliente, e conseguir acessar, vamos printar, como dizemos, essa informações do cliente no console.

[00:55] Então eu vou criar um novo arquivo, eu vou chamar de “print-infos.js”, e o André que está aqui comigo vai nos dizer como podemos resolver esse desafio.

[01:11] André: Então pessoal, vamos acessar agora os valores de um objeto, já vimos na última aula como criar um objeto no JavaScript, e eu vou acessar ele usando notação de ponto, vamos criar um objeto, vou escrever agora com vocês, e vamos printar na tela as informações desse objeto, posso começar?

[01:33] Juliana: Pode, se você quiser André, podemos usar o mesmo objeto cliente que usou no vídeo passado, o nosso cliente aqui, o próprio André.

[01:42] André: Beleza, vamos lá.

[01:43] Juliana: Então eu vou dar um “Ctrl + C” no nosso arquivo do vídeo anterior, e eu vou colar, então nós temos aqui um cliente André, então como é que fazemos André para printar na tela o que precisamos.

[01:55] André: Então pessoal, olha só, já temos o objeto aqui, o objeto cliente, de novo, o objeto é formado por par, chave e valor, então tem a chave nome, e o valor André, e agora para printar a informação no nosso console, eu uso aquela função console.log() e eu vou mostrar para vocês como fazer isso, de maneira bem simples.

[02:17] Vamos lá, console.log() e dentro do console.log vamos colocar o valor que queremos exibir no nosso console, nesse caso eu quero receber informações de um cliente, de um objeto cliente, e como eu falei, já mencionei, vamos usar a noção de ponto, então eu vou mostrar aqui bem rápido aqui, a ideia só.

[02:47] Eu já tenho um objeto criado, coloco dentro do console cliente, para acessar a informação que eu quero exibir, eu tenho que saber a chave que eu quero, então a chave que eu quero agora vai ser um nome, simples, então, console.log(cliente.nome). Então agora eu vou dizer para você o valor que está nessa chave aqui, chave nome, correto Ju?

[03:11] Juliana: Correto, vamos fazer o seguinte, eu vou salvar e antes de continuarmos, vamos rodar esse arquivo, e ver se tudo funcionou certo, então no terminal eu acesso, eu rodo esse arquivo utilizando a palavra node para entrarmos no ambiente do node, e o nome do arquivo que é node print-infos.js.

[03:34] Então apareceu aqui no nosso terminal, André, ou seja, console.log aqui acessou o nosso objeto cliente, e acessou o valor da chave nome, então usamos o que o André falou de notação de ponto, ou seja, acessamos a variável cliente, e através da notação de ponto conseguimos entrar na chave nome e exibir o valor dessa chave que é uma string com o valor de André, certo André?

[04:05] André: Certo, isso mesmo Ju, vou melhorar um pouco essa escrita de código aqui, escrever um pouco mais, vamos usar aquele template, a string literal.

[04:16] Juliana: Isso, podemos chamar de string literal, ou de template string.

[04:20] André: Isso, vamos lá, então agora eu vou continuar exibindo informação do cliente, só que dessa maneira, console.log('Meu nome é'), aqui eu vou usar aquela notação de template.

[04:46] Juliana: Template string, ou literal também pode usar as duas formas.

[04:51] André: Então agora eu vou colocar, ${cliente.nome} e tenho, opa, cifrão.

[05:04] Juliana: Cifrão e chaves.

[05:06] André: Cifrão e chaves, e a chave que eu quero exibir, do objeto que eu quero exibir, então continuando o código, ${cliente.idade} anos.') então a string vai ser montada, meu nome é o valor da chave, nome do cliente, e tenho o valor da chave idade do objeto cliente, anos, então isso que vai ser exibido, correto? Ju, você coloca no console para vermos o resultado da saída?

[05:44] Juliana: Vou rodar de novo aqui node print-infos.js, meu nome é André e tenho 36 anos, perfeito, lembrando então essa notação que usamos para escrever, para interpolar, é strings com variáveis, que é a chamada template string que utilizamos o acento agudo que usamos para fazer crase no lugar das aspas e o cifrão com a chave onde queremos inserir valores de variáveis, e aqui conseguimos chamar tanto o nome da variável cliente quanto já acessar o valor das chaves que estão dentro desse objeto, do objeto cliente, certo André?

[06:28] André: Isso aí Ju.

[06:29] Juliana: O que mais então podemos fazer aqui?

[06:32] André: Olha só, trabalhando com objeto, e criamos um objeto cliente com chaves do tipo string, o nome é string, cpf, e-mail, tem idade que é um number, então aqui também tem algumas propriedades de string para essas propriedades que colocamos nesse cliente, por exemplo, vou dar um console de novo aqui, console.log() e vou usar uma função de string para o cpf, então console.log(cliente.cpf) qual método podemos usar aqui Ju, para exibir aqui?

[07:13] Juliana: Podemos dizer que para a segurança, vamos só exibir os 3 primeiros números do cpf, lembrando que os números estão dentro de aspas então seriam os 3 primeiros caracteres dessa string, onde está o nosso cpf.

[07:33] André: Isso, então vamos fazer o seguinte, vamos usar a função aqui, substring(), que é uma função do JavaScript para trabalhar com strings em JavaScript e vou passar aqui para essa função a faixa que eu quero exibir, que eu quero apanhar da string, então os 3 primeiros dígitos, ficando o código console.log(cliente.cpf.substring(0,3)), então de 0 até o 3, é isso mesmo Ju?

[07:53] Juliana: Isso, que começamos no índice zero, da nossa array de caracteres, que é uma string, lembrando que uma string podemos dizer que é um array de caracteres, então estamos começando no índice zero, que é o número 1 e está indo até o índice 3 e parando antes dele, ou seja, vai exibir o índice zero, o índice um e o índice dois, ou seja, os 3 primeiros números, os 3 primeiros algarismos, caracteres dessa string.

[08:23] André: Isso, vamos rodar então ele aqui no console.

[08:25] Juliana: Vamos, então node print-infos.js, meu nome é André e tenho 36 anos, e a segunda informação que pedimos 125 que são exatamente os 3 primeiros dígitos aqui do cpf, ou seja, conseguimos, acessar o valor, aqui no segundo console.log() que o André fez, acessamos a chave cpf, dentro do objeto cliente, e a partir do momento que você acessa essa chave você consegue utilizar qualquer método do JavaScript que seja de acordo com o tipo de dado.

[09:08] Ou seja, o tipo de dado do valor aqui da chave cpf, é uma string, então conseguimos utilizar um método de string próprio do JavaScript, que é o método substring() e trabalhar com ele normalmente, da mesma forma que se acessássemos a chave idade, conseguiríamos utilizar com 36, qualquer método que fosse um método de número, por exemplo, o parseFloat() que transforma de inteiro de int em float. Certo André?

[09:37] André: Certo, Ju.

[09:40] Juliana: Então eu acho que passamos pelo desafio, já acessamos um objeto aqui e imprimimos algumas informações no nosso terminal e acho que já estamos prontos para seguir para o próximo.

[09:51] André: Beleza Ju, é isso aí.

[09:52] Juliana: Então até o próximo vídeo.

[09:54] André: Até o próximo vídeo pessoal.


*/