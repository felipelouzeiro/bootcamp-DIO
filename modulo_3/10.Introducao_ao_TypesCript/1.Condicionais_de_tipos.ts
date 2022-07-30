interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redireciona(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario) {
    // redireciona para a área de administração
  }

  // redireciona para a área de usuário
}
