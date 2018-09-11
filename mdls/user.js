let mongoose = require('mongoose'),
	task = require('./task');

let Schema = new mongoose.Schema({
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
	tasks: [task.Schema]
});

Schema.statics.getTasks = async function(login){
	return await this.findOne({login}, '-_id').select('tasks');
}

Schema.statics.addTask = async function(login, data){
	let user = await this.findOne({login});
	user.tasks.push({...data, id: user.tasks.length++});
	return await user.save();
}

let Model = mongoose.model('User', Schema);

module.exports = {
	Schema, Model
};
