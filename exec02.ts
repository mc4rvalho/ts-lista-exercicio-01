import * as leia from "readline-sync";

const nome: string = leia.question("Digite o seu nome: ")
console.log(`Bem vindo, ${nome}.`);

const listaNumber: Set<number> = new Set<number>();

while (listaNumber.size < 10) {

  const numbers: number = leia.questionInt(`\nDigite até 10 valores, ${nome}: `)

  listaNumber.add(numbers);
  console.log(`\n${nome}, esse foi o número adicionado: `, listaNumber);
}

console.log(`\n${nome}, essa é a lista de números original: `, listaNumber);

console.log(`\n${nome}, essa é a lista de números ordenada: `, [...listaNumber].sort((a, b) => a - b));

console.log(`\nObrigado por adicionar os números, ${nome}. Até a próxima!`);