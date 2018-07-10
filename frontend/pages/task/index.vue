<template lang="html">
	<div class="">
		<Title msg="Tasks" cls="title_task"/>
		<TaskList/>
		<TaskAdder/>
	</div>
</template>

<script>
import Title from '~/components/Title';
import TaskList from '~/components/TaskList';
import TaskAdder from '~/components/TaskAdder';

export default {
	components:{
		Title,
		TaskList,
		TaskAdder
	}
}
</script>

<style lang="scss">

</style>
