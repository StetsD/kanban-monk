let redis = require('redis'),
	client = redis.createClient();

exports.clinet = client;
