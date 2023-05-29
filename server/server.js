require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const PORT = process.env.PORT;
const resolvers = require("./resolvers/resolvers");
const typeDefs = require("./graphql/schemaGql");
const connection = require("./connection/config");
const auth = require("./middlewares/auth.middleware");

connection();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: auth,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(PORT).then(({ url }) => {
  console.log("server is running on", url);
});
