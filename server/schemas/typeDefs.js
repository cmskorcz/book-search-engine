const { gql } = require('apollo-server-express');

const typeDefs = gql`

  # TODO: Create a data type for User. It should reference the properies of _id, username, email, and bookCount. It should also allow a property named savedBooks, which will be an array of the Book data type.

  # INSERT CODE HERE


  # TODO: Create a data type for Book. It should reference properties for bookId, authors, description, image, link, and title. Note that authors is plural, so you'll want make sure it's identified as an array. See BookInput below. Also, the title property should be required.

  ## INSERT CODE HERE


  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
    authors: [String]
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
