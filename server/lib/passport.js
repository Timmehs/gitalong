var passport = require('passport')
var GitHubStrategy = require('passport-github2').Strategy
const User = require('../models/User')
const config = require('../config/.config')

function buildUserParameters(accessToken, data) {
  return {
    accessToken,
    login: data.login,
    name: data.name,
    lastLogin: Date.now(),
    githubId: data.id,
    githubUrl: data.html_url,
    avatarUrl: data.avatar_url
  }
}

const passportSetup = function(app) {
  passport.serializeUser((user, done) => done(null, user._id))

  passport.deserializeUser((id, done) => {
    User.findById(id, function(err, user) {
      if (err) {
        console.error(err)
        done(err, null)
      } else {
        done(null, user)
      }
    })
  })

  passport.use(
    // TODO: Manage ENV
    new GitHubStrategy(
      {
        clientID: config.GITHUB_ID,
        clientSecret: config.GITHUB_SECRET,
        callbackURL: config.GITHUB_CALLBACK_URL
      },
      function(accessToken, refreshToken, profile, done) {
        const githubId = profile.id
        const options = { upsert: true, passRawResult: true, new: true }
        User.findOneAndUpdate(
          githubId,
          buildUserParameters(accessToken, profile._json),
          options,
          function(err, doc, raw) {
            if (err) {
              console.error(
                'Passport/Github/Mongoose: Error upserting User ' + profile.id
              )
              console.log(err)
              done(err, null)
            } else {
              const userStatus = raw.lastErrorObject.updatedExisting
                ? 'Existing'
                : 'New'
              console.log(`${userStatus} User "${doc.login}" logged in.`)
              done(null, doc)
            }
          }
        )
      }
    )
  )

  app.use(passport.initialize())
  app.use(passport.session())
}

module.exports = {
  passportSetup,
  ensureAuthenticated: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    // Should this return empty JSON with a 401 Unauthorized?
    console.log('Unauthorized request for ' + req.url)
    res.redirect('/')
  }
}
