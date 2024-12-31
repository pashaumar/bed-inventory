import { auth } from "./auth.js";
import { articles } from "./articles.js";
import { soldArticles } from "./soldArticles.js";
import { transferredArticles } from "./transferredArticles.js";

const resolvers = {
  Query: {
    ...auth.Query,
    ...articles.Query,
    ...soldArticles.Query,
    ...transferredArticles.Query,
  },
  Mutation: {
    ...auth.Mutation,
    ...articles.Mutation,
    ...soldArticles.Mutation,
    ...transferredArticles.Mutation,
  },
};

export default resolvers;
