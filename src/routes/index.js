const glob = require('glob')
const path = require('path')

const routes = glob.sync('./src/routes/**/*.js',
  { "ignore": ['./src/routes/index.js'] }
).map((file) => {
  return require(path.resolve(file))
})

module.exports = routes
