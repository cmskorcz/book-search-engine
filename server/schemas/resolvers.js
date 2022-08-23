const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
        return userData;
      }
      throw new AuthenticationError('Not logged in');
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },

    saveBook: async (parent, { bookData }, context) => {
      if (context.user) {
        
        /*
          TODO:

          Create an mongoose query using findByIdAndUpdate(). You will be finding the current user and adding a new book to the array associated with that user.
          
          The id of the user is obtained via context.user._id (see removeBook below for an example)
          
          To add the new book, use the $push method, and add bookData the savedBooks array. The removeBook method below is very similar in coding. Use that as a guide.

          Add an options object at the end to return the updated value of the User being modified.

          Don't forget to then return the same variable you appied to the findByIdAndUpdate query. Again, the removeBook method below shows this.
        */

        // INSERT CODE HERE

      }

      throw new AuthenticationError('You need to be logged in!');
    },

    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
