import { perfis } from "../data/dados";

type Usuario = {
  id: number;
  nome_completo: string;
  email: string;
  salario: number;
  vip: boolean;
  id_perfil: number;
};

export default {
  Usuario: {
    nome(usuario: Usuario) {
      return usuario.nome_completo;
    },
    perfil(usuario: Usuario) {
      return perfis.find((perfil) => perfil.id === usuario.id_perfil);
    },
  },
};
