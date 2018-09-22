let mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	fixtures = require('node-mongoose-fixtures'),
	connectDB = require('./mdls'),
	{redis: redisConf} = require('./config'),
	{Schema: userSchema} = require('./mdls/user'),
	ai = require('mongoose-auto-increment');


//Temp redis session
let redis = require('redis'),
	client = redis.createClient();

mongoose.model('users', userSchema);

(async function(){
	await connectDB();

	fixtures({
		users: [
			{
				login: 'admin',
				email: 'admin@mail.ru',
				password: '987654321Qq',
				salt: 'check',
				tasks: [
					{
						id: 1,
						title: 'Green Elephant Tasks',
						description: `1.Stand how heron 20 times\n
									2.Push up 20 times\n
									3.discover how many jets were`,
						time: {
							created_at: '03.02.2018',
							done: ''
						},
						currentTime: 0,
						state: 'stopped',
						progress: {
							monks: 1,
							lap: 2
						}
					}
				]
			}
		]
	}, async (err, data) => {
		if(err){
			throw new Error(err);
		}

		await client.hset(redisConf.sessions, 'sukablyat', 'admin', redis.print);

		mongoose.connection.close();
		client.quit();
	});
})();
