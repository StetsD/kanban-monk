const express = require('express');
 	app = express(),
 	connectDB = require('./mdls'),
 	config = require('./config'),
	ctrls = require('./ctrls');

let path = require('path');

let indexPublicPath = path.resolve(__dirname, 'public'),
	indexFilePath = path.resolve(indexPublicPath, 'index.html');

let cors = require('cors');

app.use(express.static(indexFilePath));
app.use(cors());

ctrls(app);

app.get(/\/[\w+|\d+|-]+\.[\w+|\d+]+/, (req, res) => {
	res.sendFile(path.normalize(indexPublicPath + req.originalUrl));
});

app.get("/*", (req, res) => {
	res.sendFile(indexFilePath);
});

app.listen(config.port, async () => {
	await connectDB();
});
