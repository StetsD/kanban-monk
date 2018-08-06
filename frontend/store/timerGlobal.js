const Timer = require('../assets/modules/Timer.class.js').default;
const timer = new Timer();


export const state = () => ({
	time: 0
});

export const mutations = {
	tick(state, time){
		console.log(time);
	}
}

export const actions = {
	start({state, commit}, id){
		timer.start(commit, 'tick');
	}
}

export const getters = {
	get(state){
		return timer.time;
	}
}
