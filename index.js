const express = require('express');
 	app = express(),
 	connectDB = require('./mdls'),
 	config = require('./config'),
	ctrls = require('./ctrls');

let path = require('path');

let indexPublicPath = path.resolve(__dirname, 'public'),
	indexFilePath = path.resolve(indexPublicPath, 'index.html');

// Temp middleware inits
let cors = require('cors');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
app.use(express.static(indexFilePath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
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
