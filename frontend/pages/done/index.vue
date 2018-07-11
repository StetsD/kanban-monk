<template lang="html">
	<div class="">
		<Menu/>
		<TaskList/>
		<TaskAdder/>
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
	}
}
</script>

<style lang="scss">

</style>
