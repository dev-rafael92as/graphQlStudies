import { ApolloServer } from 'apollo-server';

function startServer({ typeDefs, resolvers }) {
    const server = new ApolloServer({typeDefs, resolvers});
    server.listen().then(({url}) => console.log(`Server rodando na ${url}`))
}

export default startServer;