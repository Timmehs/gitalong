const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const { passportSetup } = require('./lib/passport')

const app = express()
const port = 3000
const SESSION_LENGTH = 72 * 60 * 60 * 1000 // 72 hours

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

// Dev
if (process.env.HOT) require('./hot-middleware.js')(app)

// TODO: Remove this and serve a static index.html in public
app.set('views', process.cwd() + '/server/views')

app.set('view engine', 'pug')

// Serve static assets
app.use(express.static(process.cwd() + '/public'))
  
/* Routes */
app.use('/user', require('./routes/user'))
app.use('/repos', require('./routes/repos'))
app.use('/auth', require('./routes/authentication'))
app.use('/', require('./routes/index'))

app.listen(port, function(error) {
  console.log('Express server running on port ' + port)
  if (error) {
    console.log(error)
  }
})
