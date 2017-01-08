var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/home/index');
var users = require('./routes/admin/users');

//引入自定义模块 posts.js
var posts = require('./routes/home/posts.js');
var cats = require('./routes/admin/cats.js');

var article = require('./routes/admin/posts.js');
var admin = require('./routes/admin/index.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//设置将.html文件作为模板文件
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//将后台的views/admin目录也进行静态托管
app.use(express.static(path.join(__dirname, 'views/admin')));

app.use('/admin',admin);
app.use('/', index);
app.use('/users', users);
//针对admin/posts的请求，交给article来处理
app.use('/admin/posts',article);

//针对/catss的请求，交给cats中间件处理
app.use('/admin/cats',cats);

//针对/posts的请求，交给posts中间件处理
app.use('/posts',posts);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
