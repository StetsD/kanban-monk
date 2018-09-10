let {Router} = require('express');
let {api, ep} = require('../config');
let taskRouter = require('./task');

let restRouter = Router();

restRouter.use(ep.task, taskRouter);

module.exports = app => {
	app.use(`/${api.name}/${api.version}`, restRouter);
}
