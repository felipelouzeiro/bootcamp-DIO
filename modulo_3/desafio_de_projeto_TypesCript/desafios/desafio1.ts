// Como podemos rodar isso em um arquivo .ts sem causar erros?

interface IEmployee {
  code: number;
  name: string;
}

let employee: IEmployee = { code: 201, name: 'Felipe' };
employee.code = 10;
employee.name = 'John';
