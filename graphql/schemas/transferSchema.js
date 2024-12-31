import { gql } from "apollo-server-express";

export const transferSchema = gql`
  type TransferredArticle {
    id: ID!
    name: String!
    transferred_from: Int!
    transferred_to: Int!
    quantity: Int!
    updated_at: String!
    updated_by: Int!
  }

  extend type Query {
    getAllTransferredArticles(
      input: TransferredAllArticleInput
    ): [TransferredArticle]
  }

  extend type Mutation {
    createTransferredArticle(
      input: TransferredArticleInput!
    ): TransferredArticle

    # updateTransferredArticle(id: ID!, quantity: Int!): TransferredArticle
  }

  input TransferredAllArticleInput {
    search: String
  }

  input TransferredArticleInput {
    article_id: Int!
    transferred_from: Int!
    transferred_to: Int!
    quantity: Int!
    name: String!
  }
`;
