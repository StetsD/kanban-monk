<template lang="html">
	<div class="">
		<Menu/>
		<TaskList :tasks="done"/>
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
			done: this.$store.getters['tasks/getTasksDone']
		}
	}
}
</script>

<style lang="scss">

</style>
