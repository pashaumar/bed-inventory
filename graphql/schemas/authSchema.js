import { gql } from "apollo-server-lambda";

export const authSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    token: String
  }

  type Mutation {
    signUp(input: SignUpInput!): User
    login(input: LoginInput!): AuthPayload
  }

  input SignUpInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type AuthPayload {
    user: User!
    token: String!
  }
`;
