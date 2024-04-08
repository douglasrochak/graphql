import { nextId, setUsers, users } from "../data/dados";

type NewUser = {
  nome: string;
  email: string;
  salario: number;
};

export default {
  Mutation: {
    criarUsuario(_: unknown, { nome, email, salario }: NewUser) {
      const emailJaCadastrado = users.some((user) => email === user.email);
      if (emailJaCadastrado) throw Error("Email já cadastrado");
      const novoUsuario = {
        id: nextId(),
        nome_completo: nome,
        email,
        salario,
        vip: false,
        status: "ATIVO",
        id_perfil: 1,
      };

      users.push(novoUsuario);
      return novoUsuario;
    },
    excluirUsuario(_: unknown, { id }: { id: number }) {
      const usuario = users.find((usuario) => usuario.id === id);
      if (!usuario) throw new Error("Usuário não existe");

      const novosUsuarios = users.filter((user) => user.id !== id);
      setUsers(novosUsuarios);

      return usuario;
    },
  },
};
