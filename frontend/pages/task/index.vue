<template lang="html">
	<div class="">
		<Menu/>
		<TaskList :tasks="task"/>
		<TaskAdder @taskAdd="taskAdd"/>
	</div>
</template>

<script>
import Menu from '~/components/Menu';
import TaskList from '~/components/TaskList';
import TaskAdder from '~/components/TaskAdder';

export default {
	components:{
		Menu,
		TaskList,
		TaskAdder
	},
	data(){
		return {
			task: this.$store.getters['tasks/getTasks']
		}
	},
	methods: {
		taskAdd(data){
			this.$store.dispatch('tasks/addTask', data);
		}
	}
}
</script>

<style lang="scss">

</style>
