//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const hbs = require('hbs');
const hbsUtils = require('hbs-utils')(hbs);
let expressSessions = require('express-session');
let flash = require('connect-flash');
//creacion dos constantes hbs//
const winston = require('winston');
const Logger = require('./Configuration/winston');
//const hbsemail = require('nodemailer-express-handlebars');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/integration');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//view engine partials//
hbsUtils.registerPartials(`${__dirname}/views/partials`);
//donde estan los partials para que los concatene todos y los ponga juntos en public/dist//
hbsUtils.registerWatchedPartials(`${__dirname}/views/partials`);
//obliga a nodemon a ver los Partials nuevos todo el tiempo//




//Getión de sesiones.
app.use(expressSessions({
  secret: 'GeekshubsAcademy',
  name:'SesionGeek',
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

app.use(logger('dev'));
app.use(Logger('combined', {stream:winston.stream}));
//usamos a partir de ahora el logger de winston
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('bower_components', express.static(`${__dirname}/public/components`));
//app.use('components', express.static(`${__dirname}/public/components`));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
 // next(createError(404));
 res.status('error404');
 res.render('error404');
});

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
