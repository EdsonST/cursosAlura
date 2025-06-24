function mostrarDados() {
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("phone").value;
  let endereco = document.getElementById("address").value;
  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);
  let cidade = document.getElementById("cidade");

  let soma = numero1 + numero2;

  let cidadeSelecionada = cidade.value;
  let nascimento = cidadeSelecionada.split(" ; ");

  if (nome.trim() === "" || telefone.trim() === "" || endereco.trim() === "") {
    alert("Por favor, preencha todos os campos!");
  } else {
    console.log("Nome:", nome);
    console.log("Telefone:", telefone);
    console.log("Endereço:", endereco);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>Endereço:</strong> ${endereco}</p>
      <p><strong>A soma do Número 1: ${numero1} e do Número 2: ${numero2} é igual a: </strong> ${soma}</p>
      <p><strong>O ID de nascimento da cidade de ${nascimento[0]} é: </strong> ${nascimento[1]}</p>
    `;
  }

  let novoTexto = document.getElementById("texto-resposta");
  novoTexto.textContent = `Estes dados estão corretos !`;
}
