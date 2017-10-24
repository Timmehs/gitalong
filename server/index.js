const open = require('open')
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const createAuthRouter = require('./routes/authentication')
const { passportSetup } = require('./lib/passport')

const app = express()
const port = 3000
const SESSION_LENGTH = 72 * 60 * 60 * 1000 // 72 hours

// Dev
if (process.env.NODE_ENV !== 'production') {
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const wpConfig = require('../webpack.config.js')
  const compiler = require('webpack')(wpConfig)
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: wpConfig.output.publicPath
    })
  )
}

// Middleware, Session, Passport
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride())
app.use(
  session({
    cookie: {
      maxAge: SESSION_LENGTH
    },
    resave: false,
    saveUninitialized: false,
    secret: 'onomonopoeia wouldnt want to be ya',
    store: new MongoStore({ url: 'mongodb://127.0.0.1:27017/gitalong' })
  })
)
passportSetup(app)

// TODO: Remove this and serve a static index.html in public
app.set('views', process.cwd() + '/server/views')

app.set('view engine', 'pug')

// Serve static assets
app.use(express.static(process.cwd() + '/public'))

/* Routes */
app.use('/', require('./routes/index'))
app.use('/user', require('./routes/user'))
app.use('/auth', require('./routes/authentication'))

app.listen(port, function(error) {
  console.log('Express server running on port ' + port)
  if (error) {
    console.log(error)
  }
})
