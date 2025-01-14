import {
  getAllArticles,
  addArticle,
  updateArticle,
  deleteArticle,
  getSingleArticle,
} from "../../db/queries/articleQueries.js";

export const articles = {
  Query: {
    getAllArticles: async (_, { input: { search, workshop_id } = {} }) => {
      console.log({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
      });
      return await getAllArticles(search, workshop_id);
    },
    getSingleArticle: async (_, { input: { id } }) => {
      const result = await getSingleArticle(id);
      return result[0];
    },
  },
  Mutation: {
    createArticle: async (
      _,
      { input: { name, price, quantity, workshop_id } }
    ) => {
      const result = await addArticle({ name, price, quantity, workshop_id });
      return result[0];
    },
    editArticle: async (
      _,
      { input: { id, name, price, quantity, workshop_id } }
    ) => {
      const result = await updateArticle({
        id,
        name,
        price,
        quantity,
        workshop_id,
      });
      return result[0];
    },
    deleteArticle: async (_, { input: { id } }) => {
      const result = await deleteArticle(id);
      return result[0];
    },
  },
};
