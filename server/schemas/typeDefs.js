const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    bookId: ID!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }

  input bookInfo {
    bookId: ID!
    author: [String!]
    description: string!
    title: string!
    image: string
    link: string
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInfo): User
    deleteBook(bookId: ID!): User
  }

  type Auth {
    token: String!
    user: [User]
  }
`;
