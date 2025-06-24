function verificarPalindromo(texto) {
  // Remove espaços, acentos e deixa tudo minúsculo
  texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  texto = texto.replace(/\s+/g, "").toLowerCase();

  // Inverte o texto
  let invertido = texto.split("").reverse().join("");

  // Compara original com invertido
  if (texto === invertido) {
    console.log("É um palíndromo!");
  } else {
    console.log("Não é um palíndromo.");
  }
}

/*Exemplos de uso
verificarPalindromo("A base do teto desaba");
verificarPalindromo("Socorram-me subi no ônibus em Marrocos");
verificarPalindromo("Não é palíndromo");
*/

function ordenarNumeros(a, b, c) {
  let numeros = [a, b, c];
  numeros.sort((x, y) => x - y); // ordena em ordem crescente
  return numeros;
}

/* Exemplo de uso:
let resultado = ordenarNumeros(15, 3, 8);
console.log("Números em ordem crescente:", resultado);
*/
