const Knex = require('knex')
const { Model } = require('objection')
const connection = require('../../knexfile')

// Initialize Knex
const knex = Knex(connection)

Model.knex(knex);

module.exports = {
  knex,
  Model
}
