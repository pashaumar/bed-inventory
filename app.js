import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./graphql/schemas/index.js";
import resolvers from "./graphql/resolvers/index.js";
import dotenv from "dotenv";
import knex from "./knexfile.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

// Determine environment-specific secret key
const jwtSecret =
  process.env.NODE_ENV === "production"
    ? process.env.JWT_SECRET_PROD
    : process.env.JWT_SECRET_STAGING;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    // Decode the token and fetch user info if needed
    const user = verifyToken(token); // A function you define to decode/verify JWT
    return { knex, user }; // Pass Knex and user to the context
  },
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });

  console.log(`🚀 GraphQL server ready at ${url}`);
};

startServer().catch((err) => {
  console.error("Error starting the server:", err);
});
