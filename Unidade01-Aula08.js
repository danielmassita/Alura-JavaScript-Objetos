/*
08
Novos campos
PRÓXIMA ATIVIDADE

No JavaScript, vimos que objetos são estruturas de dados compostas por chave e valor, informações que ajudam a representar algo da vida real. Observe a representação abaixo:*/

const pessoa = {
   nome:"Bruce Banner",
   dataNascimento:"25/01/1980",
   carteiraIdentidade:"997776-X",
   email:"profbanner@email.com",
   telefone:"+552877776666",
   cidade:"Cachoeiro de Itapemirim",
   estado:"ES"
}

/*
Usando a representação do objeto pessoa, foi solicitado que adicionássemos os campos seguro social e cpf no formato string. Além disso, quando forem exibidas as informações da pessoa em um relatório, deverão aparecer somente os 4 primeiros dígitos do CPF e da carteira de identidade.

Sabendo disso, analise as afirmações abaixo e selecione a verdadeira.

A - Para adicionar os campos de seguro social e CPF, deve-se necessariamente recriar o objeto e adicionar as novas propriedades junto às demais. Para exibir os 4 primeiros dígitos da identidade e CPF, podemos chamar uma função de string chamada substring() e passar início e o fim da string que queremos da seguinte forma: pessoa.cpf.substring(0,4).
Alternativa Errada. Em Javascript, quando queremos adicionar um novo campo a um objeto, não é necessário recriá-lo. Basta adicionar o novo campo a ele, com um valor atribuído. Como os campos identidade e CPF são do tipo string, podemos invocar o método substring() passando para a função a faixa da string que queremos retornar.

B - Para adicionar as novas propriedades precisamos somente informar o novo campo e o seu valor, ou seja,pessoa.cpf="15346626522-65" e pessoa.seguroSocial="854321985-9" .Para exibir os 4 primeiros dígitos da identidade e CPF, podemos chamar uma função de string chamada substring() e passar início e o fim da string que queremos como pessoa.cpf.substring(0,4).
Alternativa Correta! É isso mesmo! Podemos usar a notação de ponto para adicionar novos campos a objetos já criados, lembrando de iniciar o campo adicionado. Como os campos identidade e CPF são do tipo string, podemos invocar o método substring() passando para a função a faixa da string que queremos retornar.

C - Para adicionar os campos de seguro social e cpf, deve-se utilizar a notação de ponto como pessoa.cpf e pessoa.seguroSocial. Para exibir os 4 primeiros dígitos da identidade e CPF, podemos chamar uma função de string chamada substring() e passar início e o fim da string que queremos como pessoa.cpf.substring(0,4).
Alternativa Errada. Desta maneira, apesar de não acusar nenhum erro, pessoa.cpf e pessoa.seguroSocial estarão vazios quando formos exibir as informações do objeto no console.

D - Para adicionar os campos de seguro social e cpf, deve-se utilizar a notação de colchetes como pessoa[cpf]="15346626522-65". Para exibir os 4 primeiros dígitos da identidade e CPF, podemos chamar uma função de string chamada substring() e passar início e o fim da string que queremos na forma pessoa[cpf].substring(0,4).
Alternativa Errada. Escrevendo pessoa[cpf]="15346626522-65" acontecerá um erro de referência (ReferenceError: cpf is not defined). pois estaríamos tentando acessar uma posição no array pessoa de chave cpf. E pelo mesmo motivo a sentença pessoa[cpf].substring(0,4) da substring() não funcionaria.
*/