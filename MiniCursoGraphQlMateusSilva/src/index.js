const { ApolloServer, gql } = require('apollo-server');

// Toda request é POST
// Toda request bate no mesmo endpoint (/graphql)

// Query => Obter informações (GET)
// Mutation => Manipular informações (POST/PUT/DELETE/PATCH)
// Scalar Types => String, Int, Boolean, Float, ID


const typeDefs = gql `
    type User {
        _id: ID!
        name: String!
        email: String!
        active: Boolean!
    }

    type Post {
        _id: ID!
        title: String!
        content: String!
        author: User!
    }

    type Query {
        hello: String
        users: [User!]!
        getUserByEmail(email: String!): User!
    }

    type Mutation {
        createUser(name: String!, email: String!): User!
    }
`;

const users = [
    { _id: String(Math.random()), name: "Rafael A", email: "rafaela@email.com", active: true},
    { _id: String(Math.random()), name: "Rafael B", email: "rafaelb@email.com", active: false},
    { _id: String(Math.random()), name: "Rafael C", email: "rafaelc@email.com", active: true},
];

const resolvers = { 
    Query: {
        hello: () => "H☺ello, world!",
        users: () => users,
        getUserByEmail: (_, args) => {
            return users.find((user) => user.email === args.email)
        },
    },
    Mutation: {
        createUser: (_, args) => {
            const newUser = {
                _id: String(Math.random()),
                name: args.name,
                email: args.email,
                active: true,
            }
            users.push(newUser)
            return newUser
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Server rodando na ${url}`))


