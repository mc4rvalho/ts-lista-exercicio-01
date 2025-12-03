import leia = require("readline-sync");

const nome: string = leia.question("Digite o seu nome: ")
console.log(`Bem vindo, ${nome}.`);

const listaColors: Array<String> = new Array<String>();

for (let i = 0; i < 5; i++) {

  const colors: string = leia.question(`\nDigite até 5 cores, ${nome}: `)

  listaColors.push(colors);

  console.log(`\nEssa foi a cor adicionada, ${nome}: ${listaColors}.`);
}

console.log(`\n${nome}, essa é a lista original: ${listaColors}`);

listaColors.sort();
console.log(`\n${nome}, essa é a lista ordenada: ${listaColors}`);

console.log(`\nObrigado por adicionar as cores, ${nome}. Até a próxima!`);