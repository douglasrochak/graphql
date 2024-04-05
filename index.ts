import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { gql } from "graphql-tag";

const users = [
  {
    id: 1,
    nome_completo: "Pedro Santos",
    email: "email@email.com",
    salario: 1304.5,
    vip: false,
  },
  {
    id: 2,
    nome_completo: "Joao Santos",
    email: "joao@email.com",
    salario: 11304.5,
    vip: false,
  },
  {
    id: 3,
    nome_completo: "Maria Santos",
    email: "maria@email.com",
    salario: 2304.5,
    vip: true,
  },
];

const perfis = [
  { id: 1, nome: "default" },
  { id: 2, nome: "admin" },
];

const typeDefs = gql`
  scalar Data

  type Query {
    ola: String!
    horaAtual: String
    dataAtual: Data
    melhorUsuario: Usuario!
    melhorProduto: Produto
    numerosMegaSena: [Int!]!
    usuarios: [Usuario]!
    usuario(id: Int): Usuario
    perfis: [Perfil]!
    perfil(id: Int): Perfil
  }

  type Perfil {
    id: Int
    nome: String
  }

  type Usuario {
    id: Int
    nome: String
    email: String
    salario: Float
    vip: Boolean
  }

  type Produto {
    id: Int
    nome: String
    preco: Float
    descont: Float
    precoComDesconto: Float
  }
`;

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
    nome(usuario: any) {
      return usuario.nome_completo;
    },
  },

  Produto: {
    precoComDesconto(produto) {
      return produto.preco - produto.desconto;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: +process.env.PORT! },
});

console.log(`Server running in ${url}`);
