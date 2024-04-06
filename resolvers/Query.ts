import { perfis, users } from "../data/dados";

export default {
  Query: {
    ola() {
      return "Olá";
    },
    horaAtual() {
      const date = new Date();
      return `${date.getHours()}:${date.getMinutes()}`;
    },
    dataAtual() {
      return new Date();
    },
    melhorUsuario() {
      return {
        id: 1,
        nome_completo: "Pedro Santos",
        email: "email@email.com",
        salario: 1304.5,
        vip: false,
      };
    },
    melhorProduto() {
      return {
        id: 1,
        nome: "Cadeira",
        preco: 10,
        desconto: 2,
      };
    },
    numerosMegaSena() {
      const arr = Array(6)
        .fill(0)
        .map(() => Math.round(Math.random() * 60));
      const arrOrdenado = arr.sort((a, b) => a - b);
      return arrOrdenado;
    },
    usuarios() {
      return users;
    },
    usuario(_: unknown, args: { id: number }) {
      return users.find((user) => user.id === args.id);
    },
    perfis() {
      return perfis;
    },
    perfil(_: unknown, args: { id: number }) {
      return perfis.find((perfil) => perfil.id === args.id);
    },
  },
};
