// import * as mysql from "mysql";
var cookieParser = require('cookie-parser')
// var mysql = require('mysql');
var express = require('express')

var router = express.Router()
// .env
require('dotenv').config()

var path = require('path')
var logger = require('morgan')

// require express middleware body-parser
var bodyParser = require('body-parser')
// require express session
var session = require('express-session')

var cors = require('cors')

// var pool = require('./connection');

var app = express()

// var crypt = require('./crypt');

app.use(logger('dev'))
app.use(cors({ origin: process.env.ROOT_URL, credentials: true }))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

const mongo = require('./mongoose.js')
console.log('Its here' + mongo)

// use express session to maintain session data
app.use(
  session({
    secret: 'homeaway_dharma',
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000, // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
  })
)

app.get('/ping', function (req, res) {
  console.log('in ping')
  res.status(200)
  res.send('Backend is up and running')
})

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')
var phonesRouter = require('./routes/phones')

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/phones', phonesRouter)

app.listen(3001, function () {
  console.log('Server listening on port 3001')
})

module.exports = app
