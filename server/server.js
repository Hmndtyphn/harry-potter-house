const express = require('express');
const { ApolloServer } = require('apollo-server-express');
// const path = require('path');

const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const app = express();
const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: authMiddlerware
  });

  await server.start();

  server.applyMiddleware({ app });
}

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// };

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`📡 API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
        // console.log(`Use GraphQL at localhost:${PORT}${server.graphqlPath}`);
    });
});