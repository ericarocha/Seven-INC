const resolvers = require('./resolvers')
const {makeExecutableSchema} = require('graphql-tools')


const funcionariosAttribs = 
    id: id
    name: String!
    document: String!
    email:String!
    phone: String!
    birth_date: String!
    salary: String!
    created_at: String!


const typeDefs = 
    type Funcionarios {
       ${funcionariosAttribs}

    }

    type Query {
        getFuncionario(id: ID!): funcionarios
        getFuncionarios: [Funcionarios]

    }

    input FuncionariosInput {
        ${funcionariosAttribs}
    }

    type Mutation {
        createFuncionario(input:FuncionariosInput): Funcionarios
    
    }

    module.exports =makeExecutableSchema({ typeDefs, resolvers})