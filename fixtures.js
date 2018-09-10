let mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	fixtures = require('node-mongoose-fixtures'),
	connectDB = require('./mdls');

let taskSchema = new Schema({
	id: {
		type: Number,
		default: 0
	},
	title: String,
	description: String,
	time: {
		created_at: String,
		done: String
	},
	currentTime: Number,
	state: String,
	progress: {
		monks: Number,
		lap: Number
	}
});

let userSchema = new Schema({
	login: String,
	email: String,
	password: String,
	salt: String
});

mongoose.model('tasks', taskSchema);
mongoose.model('users', userSchema);

(async function(){
	await connectDB();

	fixtures({
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
		],
		users: [
			{
				login: 'admin',
				email: 'admin@mail.ru',
				password: '987654321Qq',
				salt: 'check'
			}
		]
	}, (err, data) => {
		if(err){
			throw new Error(err);
		}

		mongoose.connection.close();
	});
})()
