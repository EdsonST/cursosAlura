let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

function verificarClick() {
  console.log("O botão foi clicado");
}

function mensagemAlerta() {
  alert("Eu amo JS");
}

function perguntaEResposta() {
  let cidade = prompt("Diga o nome de uma cidade do Brasil");
  alert(`Estive em ${cidade} e lembrei de você`);
}

function somaDosNumeros() {
  let numero1 = parseInt(prompt("Informe o primeiro número"));
  let numero2 = parseInt(prompt("Informe o segundo número"));
  let resultado = numero1 + numero2;

  alert(`A soma de ${numero1} e ${numero2} é igual á ${resultado}.`);
}