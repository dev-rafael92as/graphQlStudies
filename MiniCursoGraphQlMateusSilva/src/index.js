const { ApolloServer, gql } = require('apollo-server');

// Toda request é POST
// Toda request bate no mesmo endpoint (/graphql)

// Query => Obter informações (GET)
// Mutation => Manipular informações (POST/PUT/DELETE/PATCH)
// Scalar Types => String, Int, Boolean, Float, ID

const typeDefs = gql `
    type Query = {
        hello: String
    }
`;

const resolvers = { 
    Query: {
        hello: () => "Hello, world!"
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server rodando na ${url}`))