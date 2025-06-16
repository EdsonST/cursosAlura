alert("Olá, qual o dia da semana ?");
alert("Lembre-se de informar entre 1 e 7 ok?");

let diaSemana;

diaSemana = prompt("Qual o dia ?");

if (diaSemana <= 0) {
  alert("O número deve estar entre 1 e 7");
} else {
  if (diaSemana <= 5) {
    alert("Boa Semana !");
  } else {
    alert("Bom Fim de Semana !");
  }
}
