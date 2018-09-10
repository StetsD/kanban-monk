let mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	fixtures = require('node-mongoose-fixtures'),
	connectDB = require('./mdls');


//Temp redis session
let redis = require('redis'),
	client = redis.createClient();

let userSchema = new Schema({
	login: {
		type: String,
		unique: true,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	salt: {
		type: String,
		required: true
	},
	tasks: [{
		id: {
			type: Number,
			default: 0
		},
		title: {
			type: String,
			required: true
		},
		description: {
			type: String,
			default: ''
		},
		time: {
			created_at: {
				type: Date,
				default: Date.now
			},
			done: {
				type: Date
			}
		},
		currentTime: {
			type: Number,
			default: 0
		},
		state: {
			type: String,
			default: 'new'
		},
		progress: {
			monks: {
				type: Number,
				default: 0
			},
			lap: {
				type: Number,
				default: 0
			}
		}
	}]
});

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

		await client.hset('mazafaka', 'sukablyat', 'admin', redis.print);

		mongoose.connection.close();
		client.quit();
	});
})()
