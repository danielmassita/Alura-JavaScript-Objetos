// 06 - ADICIONANDO E ALTERANDO

// Desafio - Adicionando Campos - Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores





/*
Transcrição
[00:00] Juliana: Continuando com o nosso curso de JavaScript com objetos, estamos vendo qual que é a estrutura do objeto, e como que manipulamos as informações que estão dentro dele, vamos ver qual que é o desafio para este vídeo, então temos que adicionar campos, adicionar informações importantes que ainda estão faltando, por exemplo no nosso objeto cliente, nos nossos clientes do banco, então como telefone e também os valores desses campos.

[00:31] Então trabalhamos com o nosso objeto cliente, eu vou inclusive copiar ele dos arquivos que usamos nos vídeos passados.

[00:41] Vou criar um novo arquivo, que vou chamar de “adicionar-campos.js”, copiar, colar o nosso objeto cliente, então o que que está acontecendo aqui, nosso cliente tem nome, idade, cpf e e-mail, mas ainda tem por exemplo, o que chamamos de campos faltando, então por exemplo, telefone, ou nosso cliente pode no futuro ter outras informações, como que fazemos então André para adicionarmos conjuntos de chave valor em um objeto?

[01:14] André: Então o que que podemos fazer Ju é o seguinte, pegar o objeto, e adicionar esse campo que precisamos, usando a notação de ponto, vou fazer aqui, definimos então o cliente, queremos adicionar o que nele agora? Um telefone para o cliente, então cliente.fone = e vai receber um telefone, também estou digitando a esmo aqui ”9242525252”, então cliente.fone.

[01:44] Então se você ficar um console aqui e passar o cliente, console.log(cliente), nesse primeiro log aqui não tem que aparecer para você o fone, depois eu adiciono o campo fone ao objeto, e vou dar um console aqui e vou copiar, e vou dar um console.log() no cliente de novo, vamos rodar para ver o que que acontece Ju?

[02:15] André: Vamos, então rodar aqui, chamar o node adicionar – campos.js e o nome do arquivo agora é “adicionar-campos.js”, então recebemos dois objetos, no primeiro console, vem o objeto que estávamos trabalhando com nome, idade, cpf e e-mail.

[02:35] Porém no segundo console depois que o André acrescentou uma chave fone e um valor aqui de string, o JavaScript já acessou o objeto, adicionou a chave fone com o valor que passamos, e foi só isso, é só isso André? Criamos aqui com a notação de ponto um campo novo, adiciono um valor nele e ele já funciona?

[03:01] André: É isso aí.

[03:02] Juliana: É muito mais fácil, muito mais descomplicado do que adicionar coisas em arrays. Mas André, o que acontece então se já existir o campo fone, cliente.fone e passarmos uma outra informação?

[03:19] André: Vamos testar, então aqui exibimos o cliente sem o campo fone, depois adicionamos o campo fone ao cliente e exibiu de novo, isso aí que Ju nos mostrou no terminal, então agora Ju, então temos que alterar o valor do fone, é isso?

[03:39] Juliana: É vamos supor que o telefone está errado ou que precisa de um nove a mais, não sei.

[03:44] André: Então vamos lá, vou colocar aqui console.log().

[04:03] Juliana: Na verdade estava certo, podemos primeiro alterar o fone e depois pedir o console.log de cliente de novo para ver se alterou.

[04:11] André: Vamos fazer isso aí, se não estou com os carros na frente dos bois aqui, então cliente.fone = 875254554, então o telefone alterou. Agora vai começar com 8, o número é o mesmo aqui. E vou dar um console.log, para exibir aqui o meu valor cliente.fone vamos exibir o cliente todo , não é? Só para vermos a alteração, vamos rodar Ju?

[04:47] Juliana: Vamos, deixa eu só salvar aqui, limpar o terminal e rodar de novo, então o primeiro console.log da linha 8, exibiu o nosso objeto cliente como ele veio e em seguida na linha 12, adicionamos com uma chave telefone, um valor que começa com 9924 etc., mas decidimos trocar o valor de fone e foi o que fizemos na linha 14, chamamos cliente.fone novamente e passamos um outro valor de string para ela, começando agora com 875.

[05:23] Então o que que acontece? Se determinada chave não existe no objeto e passamos aqui, objeto ponto chave no caso cliente.fone = já passamos o valor, o JavaScript cria essa chave, e atribui o valor que passamos, caso essa chave já exista no objeto e utilizemos a mesma sintaxe, objeto ponto chave e passe um valor diferente, atribui, o JavaScript vai substituir o atual, então foi exatamente o que fizemos nos 3 consoles que criamos.

[06:01] Primeiro na linha 10 criamos a chave fone, e em seguida simplesmente chamamos essa chave novamente e pedimos para trocar o valor dela e o JavaScript trocou e é assim que fazemos para criar novos campos no objeto literal, ou atualizar, modificar o valor desses campos, por enquanto é isso André?

[06:21] André: Ju acho que por enquanto é isso.

[06:23] Juliana: Vamos ver mais então como manipulamos valores, acessamos valores, porque ainda tem bastante coisa para vermos sobre isso, então até o próximo vídeo.

[06:31] André: Até o próximo vídeo pessoal.
*/