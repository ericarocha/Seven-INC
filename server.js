const express = require ('express')
const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = require('./api/schema')

const app = express()
app.use('/api', graphqlHTTP({
    schema,
    graphql: true
}))

app.listen(4000, () => console.log('Executando...'))