function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let primeiraFrase = num1 === num2 ? "são iguais" : "não são iguais";

	return `${num1} e ${num2} ${primeiraFrase}.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;

	let	comparaComDez = soma > 10 ? 'maior' : 'menor';
	
  let comparaComVinte = soma > 20 ? 'maior' : 'menor';

	return `Sua soma é ${soma}, que é ${comparaComDez} do que 10 e ${comparaComVinte} do que 20.`;
}

console.log(comparaNumeros(8, 10));