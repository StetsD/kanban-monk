var timeout;

// STATES
// new(start:delete) /
// running(stop:done:delete) /
// stopped(restart:done:delete) /
// done(startAgain:delete)

export const state = () => ({
	activeTask: {},
	tasks: [
		{
			id: 1,
			title: 'Green Elephant Tasks',
			description: `1.Stand how heron 20 times\n
						2.Push up 20 times\n
						3.discover how many jets were`,
			time: {
				created_at: '03.02.2018',
				done: ''
			},
			state: 'stopped',
			monks: '4/5'
		}
	],
	done: [
		{
			id: 3,
			title: 'Steel Arny',
			description: '1.To Eat green berets\n2.Push up 20 times\n3.Smoke a сigar',
			time: {
				created_at: '03.02.2018',
				done: '05.02.2018'
			},
			state: 'done',
			monks: '5/5'
		}
	]
});

export const mutations = {
	chTasks(state, obj){
		// state.tasks =
	},
	chActiveTask(state, obj){
		state.activeTask = obj;
	},
	rmActiveTask(state){
		state.activeTask = {};
	}
}

export const actions = {
	callChangeState(ctx, obj){
		ctx.commit('changeState', obj);
		clearTimeout(timeout);
		timeout = setTimeout(()=>{
			//async
		}, 3000);
	}
}

export const getters = {
	getTasks(state){
		return state.tasks;
	},

	getTasksDone(state){
		return state.done;
	},

	getActiveTask(state){
		return state.activeTask;
	}
}
