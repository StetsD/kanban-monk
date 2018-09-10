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

Schema.statics.getAll = async function(){
	return await this.find({});
}

Schema.statics.add = async function(data){
	return await new Model(data).save();
}

let Model = mongoose.model('Task', Schema);

module.exports = Model;
