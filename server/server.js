require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const PORT = process.env.PORT;
const resolvers = require("./resolvers");
const typeDefs = require("./schemaGql");
const connection = require("./connection/config");

connection()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen(PORT).then(({ url }) => {
  console.log("server is running on", url);
});