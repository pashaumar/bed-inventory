import {
  getAllTransferredArticles,
  addTransferredArticle,
  updateTransferredArticle,
} from "../../db/queries/transferQueries.js";

export const transferredArticles = {
  Query: {
    getAllTransferredArticles: async (_, { search }) => {
      return await getAllTransferredArticles(search);
    },
  },
  Mutation: {
    createTransferredArticle: async (
      _,
      {
        input: { article_id, transferred_from, transferred_to, quantity, name },
      }
    ) => {
      const result = await addTransferredArticle(
        article_id,
        transferred_from,
        transferred_to,
        quantity,
        name
      );
      return result[0];
    },
    // updateTransferredArticle: async (_, { id, quantity }) => {
    //   return await updateTransferredArticle(id, quantity);
    // },
  },
};
