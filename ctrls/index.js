let {Router} = require('express');
let {api} = require('../config');
let taskRouter = require('./task');

let restRouter = Router();

restRouter.use('/task', taskRouter);

module.exports = app => {
	app.use(`/${api.name}/${api.version}`, restRouter);
}
