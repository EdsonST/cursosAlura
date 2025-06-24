function ehpositivo(numero) {
  if (numero > 0) {
    alert(`O numero ${numero} é positivo!`);
  } else if (numero < 0) {
    alert(`O numero ${numero} é negativo!`);
  } else {
    alert(`O numero é 0`);
  }
}

function ehAdulto(idade) {
  if (idade >= 18) {
    alert(`Você tem ${idade} anos, é considerado Adulto.`);
  } else {
    alert(`Você tem ${idade} anos, é considerado Menor de Idade.`);
  }
}

function estaVazio(texto) {
  if (texto === "") {
    alert(`O texto está vazio!`);
  } else {
    alert(`O texto NÃO está vazio!`);
  }
}

function anoBissexto(ano) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert(`${ano} é ano Bissexto`);
  } else {
    alert(`${ano} NÃO é ano Bissexto`);
  }
}

function media(numero1, numero2) {
  if (numero1 == "" || numero2 == "") {
    alert("Número inválido !");
    return;
  } else {
    let resultado = (Number(numero1) + Number(numero2)) / 2;
    alert(`A média é ${resultado}`);
  }
}

function tamanhoArray(array) {
  let tamanho = parseInt(array.length);
  alert(`Este Array possui ${tamanho} elementos`);
}

let temp = ["maçã", "banana", "laranja"];

function contemNoArray(item) {
  if (temp.includes(item)) {
    alert(`O item "${item}" está presente no array.`);
  } else {
    alert(`O item "${item}" NÃO está presente no array.`);
  }
}

let frutas = ["maçã", "banana", "laranja"];

function contemNoArray(fruta) {
  if (frutas.includes(fruta)) {
    alert(`O item "${fruta}" está presente no array.`);
  } else {
    alert(`O item "${fruta}" NÃO está presente no array, será adicionado`);
    frutas.push(fruta);
  }
}

let frutas = ["maçã", "banana", "laranja"];

function determinadaCoisa(fruta) {
  if (frutas.includes(fruta)) {
    alert(`A fruta "${fruta}" está presente no array.`);
  } else {
    alert(`A fruta "${fruta}" NÃO está presente no array.`);
  }
}

let alunos = [
  { nome: "Liliane" },
  { nome: "Bilu" },
  { nome: "Raul" },
  { nome: "Juanito" },
  { nome: "Fernando" }
];

function procuraAluno(alunoProcurado) {
  const encontrado = alunos.some(aluno => aluno.nome === alunoProcurado.nome);

  if (encontrado) {
    alert(`${alunoProcurado.nome} é nosso aluno`);
  } else {
    alert(`${alunoProcurado.nome} NÃO é nosso aluno`);
  }
}

function elemetosNumerais(numeros) {
  let somaPares = 0;
  let produtoImpares = 1;

  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      somaPares += numeros[i];
    } else {
      produtoImpares *= numeros[i];
    }
  }

  alert(`Soma dos pares: ${somaPares}`);
  alert(`Produto dos ímpares: ${produtoImpares}`);
}
