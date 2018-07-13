const Timer = require('../assets/modules/Timer.class.js').default;

export const state = () => ({
	timer: new Timer()
});

export const mutations = {
	start(state, task){
		state.timer.start();
	}
}

export const actions = {
	example(ctx, id){

	}
}

export const getters = {
	get(state){
		return state.timer.time;
	}
}
