// Gerar número secreto
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Contador de tentativas
let tentativas = 1;

// Loop para as tentativas
while (tentativas <= 10) {
  // Ler palpite do usuário
  const palpite = parseInt(prompt("Digite um palpite: "));

  // Verificar se o palpite está correto
  if (palpite === numeroSecreto) {
    console.log("Parabéns! Você adivinhou o número secreto em " + tentativas + " tentativas!");
    break;
  } else if (palpite > numeroSecreto) {
    console.log("O número secreto é menor que " + palpite);
  } else {
    console.log("O número secreto é maior que " + palpite);
  }

  // Incrementar o contador de tentativas
  tentativas++;
}

// Mensagem de derrota
if (tentativas > 10) {
  console.log("Você perdeu! O número secreto era " + numeroSecreto);
}