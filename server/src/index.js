const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const { resolvers } = require('./resolvers')
//const { permissions } = require('./permissions')

const server = new GraphQLServer({
  typeDefs: '../graphql/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    }
  }
})

server.start(() => console.log('GraphQL server running on http://localhost:4000'))
