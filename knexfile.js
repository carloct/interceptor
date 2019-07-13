const {
  DATABASE_HOST,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD
} = process.env

const connectionUri = process.env.DATABASE_URI ||
  `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:5432/${DATABASE_NAME}`

module.exports = {
  client: 'pg',
  connection: connectionUri,
  migrations: {
    directory: __dirname + '/src/db/migrations'
  }
}
