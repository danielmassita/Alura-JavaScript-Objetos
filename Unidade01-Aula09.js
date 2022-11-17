/*
09
Faça como eu fiz: Criando objetos
PRÓXIMA ATIVIDADE

Nesta aula, começamos a aprender sobre a estrutura de dados chamada de objetos no Javascript, muito importante em linguagens de programação modernas. Estudamos como criar um objeto, adicionar propriedades e alterar seus valores. Agora é com você! Crie um objeto Peter Parker no Javascript de acordo com o que fizemos no vídeo.

Para criar um objeto literal no Javascript podemos utilizar a estrutura definida como o do objeto pessoa (código abaixo), na qual definimos a estrutura do objeto criando um conjunto chave-valor, como a definição da chave nome e do valor Peter Parker.*/

const pessoa = {
   nome:"Peter Parker",
   dataNascimento:"25/05/1989",
   carteiraIdentidade:"999362-1",
   email:"peterparker@email.com",
   telefone:"+552711112222",
   cidade:"Cariacica",
   estado:"ES"
};
console.log(pessoa);

/*Para adicionar uma nova chave e valor podemos fazer como no código abaixo.*/

pessoa.cpf = "11111111122"
console.log(pessoa);

/*
E agora, você consegue incrementar ainda mais este objeto com informações de uma pessoa?

10
O que aprendemos?
PRÓXIMA ATIVIDADE

Nessa aula, você aprendeu:
Que objeto é um tipo de dado que reflete uma abstração dos objetos da vida real;
Que a estrutura de um objeto literal no JavaScript é composta por pares de chave: valor separados por vírgula, dentro de chaves { };
Que para acessar dados em um objeto podemos usar as notações de ponto e de colchete;
Que para adicionar e manipular dados em um objeto precisamos saber como acessar suas propriedades.
*/