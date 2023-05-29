const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [Quote]
    userQuote(_id: ID!): [Quote]
  }
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }
  type Token {
    token: String
  }
  type Quote {
    name: String
    by: ID
  }
  

  # all mutations types
  type Mutation {
    register(newUser: UserInput!): User
    login(loginUser: LoginInput!): Token
    addQuote(name: String!): String
  }

  # Input Data for mutations
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
`;

module.exports = typeDefs;
