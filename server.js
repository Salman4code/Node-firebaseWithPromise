var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var validator = require('express-validator');
var cors = require('cors');
var morgan = require('morgan');
// var session = require('cookie-session');
// var cookieParser = require('cookie-parser')
//var RedisStore = require('connect-redis')(session);
// app.use(cookieParser());
//app.use(cookieParser());
app.use(morgan('dev'));
var cookieSession = require('cookie-session')
app.use(cookieSession({
  //  secret: 'ssshhhhh',
  name: 'logged_in_user',
  keys: ['key1'],
  maxAge: 24 * 60 * 60 * 1000,
  // saveUninitialized: false,
  //     resave: true
  // Cookie Options
  //maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("./public"));

app.use(cors());
app.use(bodyParser.json());
app.use(validator());

app.use(require('./controller'));
port = process.env.PORT || 8081;

app.listen(port, function() {
  console.log("Sever Started %d", port);

})
