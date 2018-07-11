<template>
	<div class="task-list">
		<Task
			v-for="(task, i) in tasks"
			:key="i"
			:title="task.title"
			:action="task.state"
		/>
	</div>
</template>

<script>
	import Task from '~/components/Task';

	export default {
		props: ['tasks'],
		components: {
			Task
		}
	}
</script>

<style lang="scss">
	.task-list{
	    margin: 11px 0 0 0;
	}
</style>
