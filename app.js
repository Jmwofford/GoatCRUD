
require('dotenv').config()

var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

const mongoose= require('mongoose')
//need methodOverride

const methodOverride = require('method-override')

var goatController = require('./routes/goatController');
var accoladeController = require('./routes/accoladeController');
var historyController = require('./routes/historyController');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'hbs');

app.use(logger('dev'));

app.use(methodOverride('_method'))

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/goats', goatController)
app.use('/goats/:goatId/accolade', accoladeController)
app.use('/goats/:goatId/history', historyController)

app.get('/', (req, res) => {
  res.redirect('/goats')
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected2MongoDB')
})

.catch((err)=>{
    console.log('ERROR', err)
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
