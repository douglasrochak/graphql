import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadFiles } from "@graphql-tools/load-files";

const users = [
  {
    id: 1,
    nome_completo: "Pedro Santos",
    email: "email@email.com",
    salario: 1304.5,
    vip: false,
    status: "ATIVO",
    id_perfil: 1,
  },
  {
    id: 2,
    nome_completo: "Joao Santos",
    email: "joao@email.com",
    salario: 11304.5,
    vip: false,
    status: "BLOQUEADO",
    id_perfil: 2,
  },
  {
    id: 3,
    nome_completo: "Maria Santos",
    email: "maria@email.com",
    salario: 2304.5,
    vip: true,
    status: "INATIVO",
    id_perfil: 3,
  },
];

const perfis = [
  { id: 1, nome: "default" },
  { id: 2, nome: "admin" },
];

type Usuario = {
  id: Number;
  nome_completo: String;
  email: String;
  salario: Number;
  vip: Boolean;
  id_perfil: Number;
};

const resolvers = {
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
    usuario(_, args) {
      return users.find((user) => user.id === args.id);
    },
    perfis() {
      return perfis;
    },
    perfil(_, args) {
      return perfis.find((perfil) => perfil.id === args.id);
    },
  },

  Usuario: {
    nome(usuario: Usuario) {
      return usuario.nome_completo;
    },
    perfil(usuario: Usuario) {
      return perfis.find((perfil) => perfil.id === usuario.id_perfil);
    },
  },

  Produto: {
    precoComDesconto(produto) {
      return produto.preco - produto.desconto;
    },
  },
};

const server = new ApolloServer({
  typeDefs: await loadFiles("./schema/*.graphql"),
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: +process.env.PORT! },
});

console.log(`Server running in ${url}`);
