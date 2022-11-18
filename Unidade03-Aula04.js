// 04 - SINTAXE DE ESPALHAMENTO

// DESAFIO - Lista de Dependentes - Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única para análise de outros departamentos do banco.

const clientes = [
    {
        nome:"André",
        cpf:"12312312312",
        dependentes:[{
                nome:"Sara Silva",
                parentesco:"filha",
                dataNasc:"20/03/2011",
            }, 
            {
                nome:"Sâmia Maria",
                parentesco:"filha",
                dataNasc:"04/01/2014",
            }],
    },
    {
        nome:"Juliana",
        cpf:"56756756756",
        dependentes:[{
                nome:"Sofia",
                parentesco:"filha",
                dataNasc:"30/08/2020",
            }],
    },            
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes];

console.log(listaDependentes); // todos os dependentes viraram uma única array com o OPERADOR DE ESPALHAMENTO [...], então o operador espalhou todos os dependentes do índice [0] André, acessou o objeto André, acessou os Dependentes dentro do objeto, pegou todos os itens do array (duas filhas) e espalhou na nova variável listaDependentes todos os respectivos valores... Em seguida, fez a mesma coisa pro índice [1] objeto Juliana, acesou objeto, acessou dependentes, espalhou os elementos dentro do array espalhados dentro de um único array.

console.table(listaDependentes);

/*
04
Sintaxe de espalhamento
PRÓXIMA ATIVIDADE

Play Video
Transcrição
[00:00] Juliana: Continuando a trabalhar aqui com objetos em JavaScript, vamos dar uma olhada qual que é o desafio para este vídeo, então nosso desafio é a lista de dependentes.

[00:12] Então temos que extrair de uma listagem de clientes apenas as informações de dependentes e aí montamos uma lista única com esses dependentes para análise de outros departamentos do banco, ver qual que é a idade dos dependentes, etc.

[00:23] Então onde estávamos trabalhando nos vídeos anteriores apenas com um objeto cliente, vamos ter agora uma lista de clientes, alguns clientes, eu já criei um arquivo aqui chamado “lista-unica.js”, André então como é que fazemos isso que o desafio está pedindo, acessar uma lista e extrair de uma lista de clientes, alguns dados, e juntar esses dados em um lugar só?

[00:52] André: Então Ju, em JavaScript, assim como em outras linguagens, podemos utilizar diversas maneiras para obter o mesmo resultado, mas no JavaScript específico temos um operador de espalhamento, o spread operator, que vai ser muito útil nesse caso aqui, nessa situação, vamos ver como fazer?

[01:09] Juliana: Vamos ver.

[01:10] André: Então eu vou primeiro criar aqui uma const clientes = que vai ser o nosso array de clientes, aí vamos ter mais informações resumidas que nem você falou, e aqui dentro vou colocar dois objetos [] para adiantar um pouco nossa vida, vou copiar, já tem salvo aqui o objeto André, vou colar dentro do array que criamos, e vou copiar o objeto Juliana também para termos dois objetos aqui dentro do nosso array então temos um array de objetos aqui chamado clientes.

[02:06] Juliana: E aí cada um desses clientes ele tem aqui alguns dependentes, um array com dependentes em cada um deles, certo.

[02:16] André: Então Ju agora eu vou usar o, vou criar uma variável chamada lista dependentes para extrair somente os dependentes desse nosso array de clientes, e ai utilizar o spread operator, então vou criar uma outra const aqui const listaDependentes = e vou usar o operador de espalhamento, que são 3 pontos.

[02:44] Juliana: Isso, como se fosse uma reticência.

[02:46] André: Isso, [...clientes[0]] e vou passar índice zero só para adiantarmos um pouco, então o array clientes no índice zero, eu quero que ele espalhe para mim, dentro desse array novo, listaDependentes, os meus dependentes, [...clientes[0].dependentes] e vou usar o operador de espalhamento também para o objeto 2 da minha lista, que é a Juliana, então spread operator, clientes no índice 1 [,...clientes[1].dependentes] usar até uma notação de ponto ali para acessarmos nossas chaves.

[03:31] Então Ju, vou usar para começar a exibir nossa listaDependentes, esse array criado a partir dos dependentes dos nossos objetos, vou usar o console.log() só para vermos a saída como que vai ficar, console.log(listaDependentes), você roda Ju para vermos como vai ficar?

[03:57] Juliana: Vamos salvar e executar aqui o node lista-unica.js, e o que aconteceu aqui? Todos os dependentes dos nossos objetos agora eles são parte de um único array, então o que afinal de contas fizeram esses 3 pontos? O nosso operador de espalhamento.

[04:26] Se voltarmos aqui na linha 27 onde o André criou nossa const listaDependentes, ele criou, abriu um array, e dentro desse array ele espalhou, é literalmente isso que esse operador faz, primeiro ele espalhou dentro do array o conteúdo de clientes no índice zero ponto dependentes, ou seja, o primeiro índice do nosso array, a primeira posição da nossaarray clientes, que é o objeto André, acessou a chave dependentes dentro do objeto André, ela é um array, pegou todos os itens desse array e espalhou dentro aqui do array que ele criou, do array listaDependentes.

[05:15] E em seguida fez a mesma coisa para o índice um da nossa array clientes que é nosso objeto Juliana, acessou clientes no índice um, ponto dependentes, então pegou esse array aqui que é o array que só tem um índice e espalhou o conteúdo dele dentro do nosso array listaDependentes, ou seja, ele tirou, o que esse operador fez foi, ele foi retirando cada um, os elementos dentro de seus arrays, e colocando eles literalmente espalhados dentro de um único array.

[05:54] Então agora temos uma lista com todos os dependentes sem mais nenhuma informação, e eles não estão mais separados, por exemplo, Sara e Samia, não estão mais dentro do seu array e Sophia dentro do seu array, estão separados, eles são todos parte, eles estão, todas as informações os índices estão espalhados dentro do array principal que é o nosso array listaDependentes que foi que criamos para colocar tudo isso aqui dentro.

[06:21] Nós inclusive temos um outro tipo de console que é o console.table() que vai exibir essas informações de um jeito mais interessante aqui para nós, não é André?

[06:31] André: Isso aí, Ju.

[06:33] Juliana: Então ele vai exibir no console aqui os itens desse array aqui pelo índice, e cada uma das chaves vira um nome de coluna, e os valores das chaves aqui estão listados, o nome, o parentesco, a data de nascimento.

[06:53] Então o operador de espalhamento ele tem vários usos dentro do JavaScript, esse aqui é somente um deles, vamos deixar um material extra para vocês praticarem com alguns outros exemplos, tanto com objetos, quanto com arrays e aí vai praticando, cria, incrementa aqui o seu array de clientes, pode colocar, se o que está funcionando aqui para dois clientes, vai funcionar para mais.

[07:18] Inclusive podemos deixar um desafio aqui para o pessoal André, para o invés de ir listando no índice zero, no índice um, pode fazer um loop no array clientes e para cada um deles ver como é que você puxa o espalhamento de cada um dos dependentes, deixamos como desafio para vocês, acho que é isso por enquanto sobre esse operador de espalhamento, eu acho que podemos ficar por aqui.

[07:48] André: Isso aí, Ju.

[07:49] Juliana: Então pratica bastante e nos vemos no próximo vídeo.

[07:51] André: Até o próximo vídeo pessoal.
*/