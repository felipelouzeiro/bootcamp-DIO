function calculadora() {
  const operacao = Number(prompt("Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Divisão (/)\n4 - Multiplicação (*)\n5 - Divisão Inteira (%)\n6 - Potenciação (**)"));
  
  if (!operacao || operacao >= 7) {
    alert("Escolha um numero de operação válido.");
    calculadora();
  }

  let n1 = Number(prompt("Insira o primeiro valor:"));
  let n2 = Number(prompt("Insira o segundo valor:"));

  if (!n1 || !n2) {
    alert("Insira números válidos.");
    calculadora();
  }
  
  let resultado;
  
  function soma() {
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaOperacao();
  }
  
  function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`);
    novaOperacao();
  }
  
  function divisao() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaOperacao();
  }
  
  function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    novaOperacao();
  }
  
  function divisaoInteira() {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
    novaOperacao();
  }
  
  function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2}º é igual a ${resultado}`);
    novaOperacao();
  }

  function novaOperacao() {
    let opcao = prompt("Deseja fazer outra operação?\n1 - Sim\n2 - Não");

    if(opcao == 1) {
      calculadora();
    } else {
      alert("Entendi, até mais!")
    }
  }

  switch (operacao) {
    case 1:
      soma();
      break;
    case 2:
      subtracao();
      break;
    case 3:
      divisao();
      break;
    case 4:
      multiplicacao();
      break;
    case 5:
      divisaoInteira();
      break;
    case 6:
      potenciacao();
    default:
      break;
  }
}

calculadora();