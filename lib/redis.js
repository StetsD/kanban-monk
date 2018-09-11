let redis = require('redis'),
	client = redis.createClient(),
	{promisify} = require('util');

let getUser = promisify(client.hget).bind(client);

module.exports = {
	getUser
}
