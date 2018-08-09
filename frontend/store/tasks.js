// STATES
// new(start:delete) /
// running(stop:done:delete) /
// stopped(restart:done:delete) /
// done(startAgain:delete)

export const state = () => ({
	//running task
	runningTask: {},
	//showed by click
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
			currentTime: 0,
			state: 'stopped',
			progress: {
				monks: 1,
				lap: 2
			}
		}
	],
	done: [

	]
});

export const mutations = {
	addTask(state, task){
		let date = new Date();
		let newTask = {
			...task,
			id: Math.ceil((Math.random().toFixed(Math.random().toFixed(1) * 10) * 1000)),
			time: {
				created_at: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
				done: ''
			},
			currentTime: 0,
			state: 'new',
			progress: {
				monks: 0,
				lap: 0
			}
		}
		state.tasks.unshift(newTask);
	},
	chTask(state, {task, props}){
		let {tasks} = state;
		let {id} = task;

		for(let i = 0; i < tasks.length; i++){
			if(tasks[i].id === id){
				for(let j = 0; j < props.length; j++){
					state.tasks[i][props[j]] = task[props[j]];
				}
				return;
			}
		}
	},
	addTaskDone(state, task){
		state.done.unshift(task);
	},
	addTaskToEnd(state, task){
		state.tasks.push(task);
	},
	chActiveTask(state, task){
		state.activeTask = task;
	},
	rmTaskByIndex(state, i){
		state.tasks.splice(i, 1);
	},
	rmActiveTask(state){
		state.activeTask = {};
	},
	chRunningTask(state, task){
		state.runningTask = task;
	},
	rmRunningTask(state){
		state.runningTask = {};
	}
}

export const actions = {
	rebaseTaskDone(ctx, id){
		let {tasks} = ctx.state;

		for(let i = 0; i < tasks.length; i++){
			if(tasks[i].id === id){
				let date = new Date();
				let {created_at} = tasks[i].time;
				let newTask = {
					...tasks[i],
					time: {
						created_at,
						done: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
					},
					state: 'done'
				}

				ctx.commit('addTaskDone', newTask);
				ctx.commit('rmTaskByIndex', i);

				break;
			}
		}
	},
	startTask(ctx, task){
		$nuxt.$store.dispatch('timerGlobal/stop');
		$nuxt.$store.commit('tasks/chTask', {
			task: {...$nuxt.$store.getters['tasks/getRunningTask'], currentTime: 0, state: 'stopped'},
			props: ['state', 'currentTime']
		});
		$nuxt.$store.commit('tasks/rmRunningTask');


		$nuxt.$store.dispatch('timerGlobal/start');
		$nuxt.$store.commit('tasks/chTask', {
			task: {...task, state: 'running'},
			props: ['state']
		});
		$nuxt.$store.commit('tasks/chRunningTask', task);
	},
	stopTask(ctx, task){
		$nuxt.$store.dispatch('timerGlobal/stop');
		$nuxt.$store.commit('tasks/chTask', {
			task: {...task, state: 'stopped', currentTime: 0},
			props: ['state', 'currentTime']
		});
		$nuxt.$store.commit('tasks/rmRunningTask');
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
	},

	getRunningTask(state){
		return state.runningTask;
	}
}
