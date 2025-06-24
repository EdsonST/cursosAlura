let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let novoArray = array1.concat(array2);

console.log(novoArray);

novoArray.pop();

console.log(novoArray);

function embaralhar(novoArray) {
  for (let i = novoArray.length; i; i--) {
    let aleatorio = Math.floor(Math.random() * i);
    [novoArray[i - 1], novoArray[aleatorio]] = [
      novoArray[aleatorio],
      novoArray[i - 1],
    ];
  }
}

embaralhar(novoArray);
console.log(novoArray);

function removerDuplicatas(array) {
  let resultado = [];

  for (let i = 0; i < array.length; i++) {
    if (!resultado.includes(array[i])) {
      resultado.push(array[i]);
    }
  }

  return resultado;
}
