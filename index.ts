import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { loadFiles } from "@graphql-tools/load-files";

const server = new ApolloServer({
  typeDefs: await loadFiles("./schema/*.graphql"),
  resolvers: await loadFiles("./resolvers/*.ts"),
});

const { url } = await startStandaloneServer(server, {
  listen: { port: +process.env.PORT! },
});

console.log(`Server running in ${url}`);
