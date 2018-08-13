const mongoose = require('mongoose');
const config = require('../config');


module.exports = async () => {
	await mongoose.connect(`mongodb://${config.database.host}:${config.database.port}/${config.database.name}`,
		{ useNewUrlParser: true });
}
