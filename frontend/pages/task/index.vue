<template lang="html">
	<div class="">
		<Title msg="Tasks" cls="title_task"/>
		<TaskList/>
	</div>
</template>

<script>
import Title from '~/components/Title';
import TaskList from '~/components/TaskList';

export default {
	components:{
		Title,
		TaskList
	}
}
</script>

<style lang="scss">

</style>
