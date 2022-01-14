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
        } 
    }
}