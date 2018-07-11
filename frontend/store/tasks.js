var timeout;

export const state = () => ({
	tasks: [
		{
			id: 1,
			title: 'Green Elephant Tasks',
			description: '1.Stand how heron 20 times\n2.Push up 20 times\n3.discover how many jets were',
			time: {
				created_at: '03.02.2018',
				completed: ''
			},
			state: 'stoped',
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
				completed: '05.02.2018'
			},
			state: 'completed',
			monks: '5/5'
		}
	]
});

export const mutations = {
	changeState(state, obj){
		// state.tasks =
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
	}
}
