const express = require('express')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const passport = require('passport')
const cors = require('cors')

const app = express()

const routes = require('./routes')

app.set('host', '0.0.0.0')
app.set('port', process.env.PORT || 3001)
app.set('json spaces', 2)
app.use(cors())
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())

app.use('/api', routes)

app.listen(app.get('port'), () => {
  console.log(
    '%s App is running at http://localhost:%d in %s mode',
    chalk.green('✓'),
    app.get('port'),
    app.get('env')
  )
})
