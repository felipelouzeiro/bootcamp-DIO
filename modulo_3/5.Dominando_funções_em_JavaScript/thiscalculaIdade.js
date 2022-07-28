function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: 'Felipe',
  idade: 23,
};

const pessoa2 = {
  nome: 'Márcia',
  idade: 20,
};

const pessoa3 = {
  nome: 'Pedro',
  idade: 13,
};



console.log(calculaIdade.apply(pessoa1, [30]))
console.log(calculaIdade.call(pessoa1, 30))