let {Router} = require('express');
let taskRouter = require('./task');

module.exports = app => {
	app.use('/task', taskRouter);
}
