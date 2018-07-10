<template>
	<div class="task-list">
		<Task title="How to be monk?" action="start"/>
		<Task title="How to be monk?" action="start"/>
		<Task title="How to be monk?" action="start"/>
		<Task title="How to be monk?" action="start"/>
		<Task title="How to be monk?" action="start"/>
	</div>
</template>

<script>
	import Task from '~/components/Task';

	export default {
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
