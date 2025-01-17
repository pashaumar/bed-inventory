import {
  getAllArticles,
  addArticle,
  updateArticle,
  deleteArticle,
  getSingleArticle,
  getAllWorkshops,
} from "../../db/queries/articleQueries.js";

export const articles = {
  Query: {
    getAllArticles: async (_, { input: { search, workshop_id } = {} }) => {
      return await getAllArticles(search, workshop_id);
    },
    getSingleArticle: async (_, { input: { id } }) => {
      const result = await getSingleArticle(id);
      return result[0];
    },
    getAllWorkshops: async (_, { input: { search, workshop_id } = {} }) => {
      return await getAllWorkshops;
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
