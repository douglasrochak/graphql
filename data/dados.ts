let id = 1;
export const nextId = () => id++;

export const setUsers = (novosUsuarios: any[]) => {
  users = novosUsuarios;
};

export let users = [
  {
    id: nextId(),
    nome_completo: "Pedro Santos",
    email: "email@email.com",
    salario: 1304.5,
    vip: false,
    status: "ATIVO",
    id_perfil: 1,
  },
  {
    id: nextId(),
    nome_completo: "Joao Santos",
    email: "joao@email.com",
    salario: 11304.5,
    vip: false,
    status: "BLOQUEADO",
    id_perfil: 2,
  },
  {
    id: nextId(),
    nome_completo: "Maria Santos",
    email: "maria@email.com",
    salario: 2304.5,
    vip: true,
    status: "INATIVO",
    id_perfil: 3,
  },
];

export const perfis = [
  { id: 1, nome: "default" },
  { id: 2, nome: "admin" },
];
