const bcrypt = require('bcrypt')
const { Model } = require('../db')

class User extends Model {
  static get tableName() {
    return 'users'
  }

  static get idColumn() {
    return 'id'
  }

  verifyPassword(password) {
    return bcrypt.compareSync(password, this.password)
  }
}

module.exports = { User }
