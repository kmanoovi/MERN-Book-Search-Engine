const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
      return Profile.findOne({ _id: context.user._id });
         }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, args, { name, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async ( { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, args) => {
        const book = await Book.create(args);
        return book;
    },
    removeBook: async (parent, args, context) => {
        if (context.book) {
            return Book.findOneAndDelete({_id:context.book._id});
        }
        throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;