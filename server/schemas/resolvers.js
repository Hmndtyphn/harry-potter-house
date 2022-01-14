const { AuthenticationError } = require('apollo-server-express');
const { User, Class, Trivia } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("wand")

        return userData;
      }
      throw new AuthenticationError('Stop! You need to Login to be a wizard!')
    },
    user: async (parent, { username }) => {
      User.findOne({ username })
        .select("-__v -password")
        .populate("wand")

    },
    users: async () => {
      return User.findAll()
        .select("-__v -password")
        .populate("wand")
    },
    classes: async() => {
      return Class.findAll()

    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
  login: async (parent, { email, password }) => {
    const user = await use.findOne({ email });

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

  updateUser: async (parent, args, context) => {
    if (context.user) {
      return await
      User.findByIdAndUpdate(context.user._id, args, { new: true});
    }
    throw new AuthenticationError('Not logged in');
    }

  }

  }
