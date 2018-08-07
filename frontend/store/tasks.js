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
			state: 'stopped',
			monks: 1
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
			state: 'new',
			monks: 0
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
	rmTaskById(state, id){

	},
	rmTaskByIndex(state, i){
		state.tasks.splice(i, 1);
	},
	rmActiveTask(state){
		state.activeTask = {};
	},
	chTaskStatus({tasks}, {id, state}){
		tasks.forEach(elem => {
			if(id == elem.id){
				elem.state = state;
				return;
			}
		});
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
					}
				}

				ctx.commit('addTaskDone', newTask);
				ctx.commit('rmTaskByIndex', i);
				// нужно осознать
				// ctx.commit('addTaskToEnd', newTask);

				break;
			}
		}
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
		console.log(state.runningTask)
		return state.runningTask;
	}
}
