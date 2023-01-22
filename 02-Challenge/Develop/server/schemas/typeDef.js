const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User!
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(author: array, description: String!, title: String!, bookId: ID, image: Float, link: String): User!
    removeBook(bookId:ID): User!
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID
    description: String
    title: String
    image: Float
    link: String
}

type Auth {
    token: String
    user: [User]
}
`;

module.exports = typeDefs;