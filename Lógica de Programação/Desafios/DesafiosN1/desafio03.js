let contador = 1;

while (contador < 11) {
  console.log(`Número ${contador}`);
  contador++;
}

let contador2 = 10;

while (contador2 > 0) {
  console.log(`Número ${contador2}`);
  contador2--;
}

let numeroInformado = prompt("Informe um número");
console.log(`Contagem Regressiva...`);
while (numeroInformado >= 0) {
  console.log(`Número ${numeroInformado}`);
  numeroInformado--;
}

let i = 0;
let numeroInformado2 = prompt("Informe um número maior que 0");
console.log(`Contagem Progressiva...`);

while (i <= numeroInformado2) {
  console.log(`Número ${i}`);
  i++;
}
