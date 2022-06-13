const { Book, User } = require(`../models`);
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    book: async () => {
      return Book.find();
    },
  },
};

module.exports = resolvers;
