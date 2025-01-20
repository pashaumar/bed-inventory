import {
  getAllSoldArticles,
  addSoldArticle,
  // updateSoldArticle,
  // deleteSoldArticle,
} from "../../db/queries/soldQueries.js";

export const soldArticles = {
  Query: {
    getAllSoldArticles: async (_, { input: { search, workshop_id } = {} }) => {
      return await getAllSoldArticles(search, workshop_id);
    },
  },
  Mutation: {
    createSoldArticle: async (
      _,
      { input: { article_id, quantity_sold, workshop_id, name, price } }
    ) => {
      const result = await addSoldArticle(
        article_id,
        quantity_sold,
        workshop_id,
        name,
        price
      );
      return result[0];
    },
    // updateSoldArticle: async (_, { id, quantity_sold }) => {
    //   return await updateSoldArticle(id, quantity_sold);
    // },
    // deleteSoldArticle: async (_, { id }) => {
    //   return await deleteSoldArticle(id);
    // },
  },
};
