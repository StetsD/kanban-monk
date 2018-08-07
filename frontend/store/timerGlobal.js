const Timer = require('../assets/modules/Timer.class.js').default;
const timer = new Timer();

let that = this;

timer.on('stop', () => {

});

timer.on('monk', () => {
	let {$nuxt} = window;
	let runningTask = $nuxt.$store.getters['tasks/getRunningTask'];
	$nuxt.$store.commit('timerGlobal/stop', timer.time);

	if(runningTask.monks < 4){
		$nuxt.$store.commit('tasks/chTask', {
			task: {...runningTask, monks: runningTask.monks + 1, state: 'stopped'},
			props: ['monks', 'state']
		});
	}
	
	if(runningTask.monks >= 4){
		$nuxt.$store.commit('tasks/chTask', {
			task: {...runningTask, state: 'done'},
			props: ['state']
		});
		$nuxt.$store.dispatch('tasks/rebaseTaskDone', runningTask.id);
	}

});

export const state = () => ({
	time: 0
});

export const mutations = {
	tick(state, time){
		state.time = time;
	},
	stop(state, time){
		state.time = time;
	}
}

export const actions = {
	start({state, commit}, id){
		timer.start(commit, 'tick');
	},
	stop({state, commit}, id){
		timer.stop(commit, 'stop');
	}
}

export const getters = {
	getParseTime(state){
		return Timer.parseTime(state.time);
	}
}
