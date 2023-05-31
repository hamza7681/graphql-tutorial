const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const { tokenGenerator } = require("../utils/tokenGenerator");
const Quote = require("../models/quoteModel");

const resolvers = {
  Query: {
    users: async () => await User.find(),
    quotes: async () => await Quote.find().populate("by", "_id firstName"),
    user: async (_, { _id }) => await User.findOne({ _id }),
    userQuote: async (_, { by }) =>
      await User.find({ by }).populate("by", "_id firstName"),
    myProfile: async (_, args, { userId }) => {
      if (!userId) throw new Error("You must be logged in");
      return await User.findOne({ _id: userId });
    },
  },
  User: {
    quotes: async (ur) => await Quote.find({ by: ur._id }),
  },
  Mutation: {
    register: async (_, { newUser }) => {
      const user = await User.findOne({ email: newUser.email });
      if (user) {
        throw new Error("User already exist!");
      }
      const hashPassword = await bcrypt.hash(newUser.password, 12);
      const userNew = new User({
        ...newUser,
        password: hashPassword,
      });
      return await userNew.save();
    },
    login: async (_, { loginUser }) => {
      const findUser = await User.findOne({ email: loginUser.email });
      if (!findUser) {
        throw new Error("No user found!");
      }
      const isMatch = await bcrypt.compare(
        loginUser.password,
        findUser.password
      );
      if (isMatch) {
        const token = await tokenGenerator(findUser.id);
        return { token };
      } else {
        throw new Error("Invalid Credentials");
      }
    },
    addQuote: async (_, { name }, { userId }) => {
      if (!userId) {
        throw new Error("You are not logged in!");
      }
      const newQuote = await Quote({ name, by: userId });
      await newQuote.save();
      return "Quote save successfully";
    },
  },
};

module.exports = resolvers;
