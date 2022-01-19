const { AuthenticationError } = require("apollo-server-express");
const { User, Subject, Question, House } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("wand");

        return userData;
      }
      throw new AuthenticationError("Stop! You need to Login to be a wizard!");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password").populate("wand");
    },
    users: async () => {
      return User.find().select("-__v -password").populate("wand");
    },
    subjects: async () => {
      return Subject.find().populate('questions')
    },
    subject: async (parent, { name }) => {
      return Subject.findOne({ name }).populate('questions')
    },
    questions: async () => {
        return Question.find()
    },
    houses: async () => {
      return House.find();
    }
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
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    // joinHouse: async (parent, { houseId, wizardName }, context) => {
    //   console.log(context);
    //   if (context.user) {
    //     const wizard = User.findOne({ _id: context.user._id });
    

    //     await House.findByIdAndUpdate(houseId, { $push: { wizards: wizardName }});

    //     return wizard;

    //   }
    // },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
