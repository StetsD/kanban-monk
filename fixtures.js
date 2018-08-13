let mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	fixtures = require('node-mongoose-fixtures');

let tasksSchema = new Schema({
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
})
