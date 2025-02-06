import { gql } from "apollo-server-lambda";

export const soldSchema = gql`
  type SoldArticle {
    id: ID!
    name: String!
    article_id: Int!
    quantity_sold: Int!
    workshop_id: Int!
    updated_at: String!
    updated_by: Int!
    price: Float
  }

  extend type Query {
    getAllSoldArticles(input: SoldAllArticleInput): [SoldArticle]
  }

  input SoldAllArticleInput {
    search: String
    workshop_id: Int
    start_date: String
    end_date: String
  }

  extend type Mutation {
    createSoldArticle(input: SoldArticleInput!): SoldArticle

    # updateSoldArticle(id: ID!, quantity_sold: Int!): SoldArticle
    # deleteSoldArticle(id: ID!): SoldArticle
  }

  input SoldArticleInput {
    article_id: Int!
    quantity_sold: Int!
    workshop_id: Int!
    name: String!
    price: Float!
  }
`;
