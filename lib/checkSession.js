let {getUser} = require('./redis'),
	{redis} = require('../config');

let checkSession = async key => {
	let user = await getUser(redis.sessions, key);
	if(user){
		return user;
	}

	return null;
}

module.exports = {
	checkSession
}
