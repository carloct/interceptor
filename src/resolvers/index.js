const { User } = require('./User')
const { Mutation } = require('./Mutations')

const resolvers = {
    User,
    Mutation
}

module.exports = {
    resolvers
}