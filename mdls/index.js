const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const config = require('../config');


module.exports = async () => {
	await mongoose.connect(`mongodb://${config.database.host}:${config.database.port}/${config.database.name}`,
	{ useNewUrlParser: true });
}
