// Como podemos melhorar o esse código usando TS?
interface IPessoa {
  nome: string;
  idade: number;
  profissao: string;
}

let pessoa1: IPessoa = {
  idade: 22,
  nome: 'Matheus',
  profissao: 'Desenvolvedor',
};

pessoa1.nome = 'maria';
pessoa1.idade = 29;
pessoa1.profissao = 'atriz';

let pessoa2: IPessoa = {
  idade: 24,
  nome: 'Rafael',
  profissao: 'Desenvolvedor',
};

pessoa2.nome = 'roberto';
pessoa2.idade = 19;
pessoa2.profissao = 'Padeiro';

let pessoa3: IPessoa = {
  nome: 'Allison',
  idade: 32,
  profissao: 'Atriz',
};

let pessoa4: IPessoa = {
  nome: 'Carlos',
  idade: 19,
  profissao: 'padeiro',
};
