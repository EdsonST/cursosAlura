function calculoIMC(altura, peso) {
  let imc = peso / (altura * altura);
  return imc;
}

function calculoFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

function conversao(valor) {
  return parseFloat(valor) * 4.8;
}

function calculoArea(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  console.log(`Área: ${area} m²`);
  console.log(`Perímetro: ${perimetro} m`);
}

function calculoCirculo(raio) {
  let pi = 3.14;
  let area = pi * Math.pow(raio, 2);
  let perimetro = 2 * pi * raio;

  console.log(`Área do Círculo: ${area.toFixed(2)} m²`);
  console.log(`Perímetro do Círculo: ${perimetro.toFixed(2)} m`);
}

function tabuada(n) {
  for (let i = 1; i <= 10; i++) {
    let resultado = n * i;
    console.log(`${n} x ${i} = ${resultado}`);
  }
}
