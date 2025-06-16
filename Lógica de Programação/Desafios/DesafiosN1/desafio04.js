console.log("Boas vindas ! este é o teste numero 4");

let nome = "Edson";

console.log(`Olá, ${nome}!`);

alert(`Olá, ${nome} !`);

let resposta = prompt("Qual a linguagem de programação que você mais gosta?");

console.log(resposta);

let valor1 = 10;
let valor2 = 20;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

resultado = valor1 - valor2;

console.log(`A diferença de ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt("Por favor informe sua idade");

if (idade < 18) {
  console.log(
    `Você informou que tem ${idade} anos, você ainda é menor de idade`
  );
} else {
  console.log(`Você informou que tem ${idade} anos, você já é maior de idade`);
}

let numero = prompt("Informe um número");

if (numero == 0) {
  console.log(`Você informou ${numero} é 0`);
} else {
  if (numero < 0) {
    console.log(`Você informou ${numero} é negativo`);
  } else {
    console.log(`Você informou ${numero} é positivo`);
  }
}

let i = 1;

while (i < 11) {
  console.log(`${i}`);
  i++;
}

let nota = 8;

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

let aleatorio1 = Math.random();
console.log(aleatorio1);

let aleatorio2 = parseInt(Math.random() * 10 + 1);
console.log(aleatorio2);

let aleatorio3 = parseInt(Math.random() * 1000 + 1);
console.log(aleatorio3);
