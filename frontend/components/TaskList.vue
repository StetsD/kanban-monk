<template>
	<div class="task-list">
		<Task
			v-for="(task, i) in tasks"
			:key="i"
			:task="task"
			:title="task.title"
			:action="task.state"
			:id="task.id"
			:description="task.description"
			:state="task.state"
			:time="task.time"
			:currentTime="task.currentTime"
			:monks="task.progress.monks"
			:lap="task.progress.lap"
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
