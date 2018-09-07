let mongoose = require('mongoose');

let Schema = new mongoose.Schema({
	title: String,
	description: String,
	time: {
		created_at: {type: Date, default: Date.now},
		done: Date
	},
	currentTime: Number,
	state: String,
	progress: {
		monks: Number,
		lap: Number
	}
});

let Model = mongoose.model('Task', Schema);

async function get(){
	let res = await Model.find({});
	return res;
}

module.exports = {
	model: Model,
	get
};
