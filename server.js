const express = require('express'),
	mongoose = require('mongoose'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	path = require('path'),

	app = express(),
	port = process.env.PORT || 3000,
	Task = require('./models/todoList'), // created model loading here
	todoList = require('./routes/todoList'),
	index = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/todoList', {}, true)
	.then(() =>  console.log('MongoDB Connection Succesful!'))
	.catch((err) => console.error(err));

app.use('/', index);
app.use('/todoList', todoList); // Register routes

// catch 404 and forward to error handler
app.use((req, res, next) => {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(port);

console.log('API started on '+port);