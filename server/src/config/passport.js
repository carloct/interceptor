const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const { Strategy: BearerStrategy } = require('passport-http-bearer')
const { User } = require('../models/user')

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (username, password, done) => {

      let user = null

      try {
        user = await User.query()
          .where('email', username)
          .first()

        console.log(user)
      } catch (err) {
        if (err) {
          console.log(err)
          return done('User not found')
        }
      }

      try {
        const valid = await user.verifyPassword(password)

        return done(null, user, { message: 'Logged in'})

      } catch (err) {
        console.log(err)
        // if (!valid) {
        //   return done('Login credentials not valid')
        // }
      }
    }
  )
)

module.exports = passport;
