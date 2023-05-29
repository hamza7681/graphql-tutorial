const { users, quotes } = require("./fakeData");

const resolvers = {
  Query: {
    users: () => users,
    user: (_, args) => users.find((u) => u.id === args.id),
    quotes: () => quotes,
    userQuote: (_, args) => quotes.filter((u) => u.by === args.id),
  },
  User: {
    quotes: (user) => quotes.filter((q) => q.by === user.id),
  },
  Mutation: {
    signupUserDummy: (_, { newUser }) => {
      const id = "234226";
      users.push({ id, ...newUser });
      return users.find((q) => q.id === id);
    },
  },
};

module.exports = resolvers;
