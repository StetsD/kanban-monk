let mongoose = require('mongoose');

let Schema = new mongoose.Schema({
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
});

module.exports = {Schema};
