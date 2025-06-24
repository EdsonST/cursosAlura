let numero = parseInt(document.getElementById("numero").value);
console.log(numero);

function calculadora(numero1, operador, numero2) {
  let resultado;
  let operacao;

  if (operador === "+") {
    resultado = numero1 + numero2;
    operacao = "adição";
  } else if (operador === "*" || operador === "X" || operador === "x") {
    resultado = numero1 * numero2;
    operacao = "multiplicação";
  } else if (operador === "-") {
    resultado = numero1 - numero2;
    operacao = "subtração";
  } else if (operador === "/") {
    if (numero2 == 0) {
      alert(`O número ${numero1}, não pode ser dividido por 0`);
      return;
    }

    resultado = numero1 / numero2;
    operacao = "divisão";
  } else {
    alert("Operação não pode ser realizada!");
    return;
  }

  alert(`O resultado da sua ${operacao} é igual a: ${resultado}`);
}

function ehpar(numero) {
  if (numero % 2 == 0) {
    console.log(`O número ${numero} é par.`);
  } else {
    console.log(`O número ${numero} é impar.`);
  }
}

function temperatura(numero, conversor) {
  if (conversor === "F") {
    let fahrenheit = ((numero - 32) * 5) / 9;
    console.log(`A temperatuda em Fahrenheit é ${fahrenheit}F°`);
  } else {
    let celsius = (numero * 9) / 5 + 32;
    console.log(`A temperatuda em Celsius é ${celsius}C°`);
  }
}
