const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

module.exports = {
  create: (user) => {

    const claim = {
      sub: '' + user.id,
      admin: false,
      iat: Date.now() / 1000,
      "https://hasura.io/jwt/claims": {
        "x-hasura-allowed-roles": ["user"],
        "x-hasura-user-id": '' + user.id,
        "x-hasura-default-role": "user"
      }
    }

    return jwt.sign(claim, secret)
  }
}
