const { rule, and, shield } = require('graphql-shield')
const { getUserId } = require('../utils')

const rules = {
    isAuthenticated: rule()((parent, args, context) => {
        const userId = getUserId(context)
        return Boolean(userId)
    })
}

const permissions = shield({
    Query: {
        me: rules.isAuthenticated
    },
})

module.exports = {
    permissions
}