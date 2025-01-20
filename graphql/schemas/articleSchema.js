import { gql } from "apollo-server-lambda";

export const articleSchema = gql`
  type Article {
    id: ID!
    name: String!
    updated_at: String
    price: Float
    quantity: Int
    workshop_id: Int
  }

  type Workshop {
    id: ID!
    name: String!
  }

  type Query {
    getAllArticles(input: ArticleInput): [Article]
    getSingleArticle(input: ArticleInput): Article
    getAllWorkshops: [Workshop!]!
  }

  type Mutation {
    createArticle(input: createArticleInput!): Article

    editArticle(input: editArticleInput!): Article

    deleteArticle(input: deleteArticleInput!): Article
  }

  input ArticleInput {
    search: String
    workshop_id: Int
    id: ID
  }

  input createArticleInput {
    name: String!
    price: Float!
    quantity: Int!
    workshop_id: Int!
  }

  input editArticleInput {
    id: ID!
    name: String
    price: Float!
    quantity: Int
    workshop_id: Int
  }

  input deleteArticleInput {
    id: ID!
  }
`;
