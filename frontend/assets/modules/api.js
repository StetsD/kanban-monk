const axios = require('axios');
const checkAuth = require('./check-auth');
const {task} = require('../../../config').ep;

async function _rq(props){
	let {method, endpoint, data} = props;
	try{
		return await axios[method](endpoint, data ? data : '');
	}catch(err){
		return checkAuth(err.response);
	}
}

const api = {
	//workers
	async getTasks(){
		return await _rq({
			method: 'get',
			endpoint: `${task}`
		});
	},
	async getTask(id){
		return await _rq({
			method: 'get',
			endpoint: `${task}/${id}`
		});
	},
	async addTask(data){
		return await _rq({
			method: 'post',
			endpoint: `${task}`,
			data
		});
	},
	async deleteTask(id){
		return await _rq({
			method: 'delete',
			endpoint: `${task}/${id}`
		});
	},
	async editTask(data){
		return await _rq({
			method: 'patch',
			endpoint: `${task}`,
			data
		});
	}
}

export default api;
