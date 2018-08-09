const Timer = require('../assets/modules/Timer.class.js').default;
const timer = new Timer();

let that = this;

timer.on('start', () => {

});

timer.on('stop', () => {

});

timer.on('tick', () => {
	let {$nuxt} = window;
	let runningTask = $nuxt.$store.getters['tasks/getRunningTask'];

	$nuxt.$store.commit('tasks/chTask', {
		task: {
			...runningTask,
			currentTime: runningTask.currentTime + 1,
		},
		props: ['currentTime']
	});
});

timer.on('monk', () => {
	let {$nuxt} = window;
	let runningTask = $nuxt.$store.getters['tasks/getRunningTask'];
	$nuxt.$store.commit('timerGlobal/stop', timer.time);

	if(runningTask.progress.lap < 4){
		$nuxt.$store.commit('tasks/chTask', {
			task: {
				...runningTask,
				progress: {
					monks: runningTask.progress.monks,
					lap: runningTask.progress.lap + 1
				},
				state: 'stopped'
			},
			props: ['progress', 'state']
		});
	}

	if(runningTask.progress.lap >= 4){
		$nuxt.$store.commit('tasks/chTask', {
			task: {
				...runningTask,
				progress: {
					monks: runningTask.progress.monks + 1,
					lap: 0
				}
			},
			props: ['progress', 'state']
		});
	}

	$nuxt.$store.commit('tasks/rmRunningTask');
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
