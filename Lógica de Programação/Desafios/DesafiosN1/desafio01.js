alert("Boas vindas ao nosso site!");

let nome;
let idade;

nome = prompt("Infome seu nome");
idade = prompt("Informe sua idade");

if (idade >= 18) {
  alert("Pode Tirar a Habilitação");
} else {
  let liberação = 18 - idade;
  alert(`Só pode tirar a habilitação daqui a ${liberação} ano(s)`);
}
