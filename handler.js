import { ApolloServer } from "apollo-server-lambda";
import typeDefs from "./graphql/schemas/index.js";
import resolvers from "./graphql/resolvers/index.js";
import db from "./db.js";

const lambdaPlayground =
  require("graphql-playground-middleware-lambda").default;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ db }),
});

export const graphqlHandler = server.createHandler();

export const playgroundHandler = lambdaPlayground({
  endpoint: "/dev/graphql",
});
