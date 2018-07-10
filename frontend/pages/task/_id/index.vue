<template lang="html">
	<div class="task-page">
		<Title msg="How to be monk?" cls="title_task-page"/>
		<div class="task-page__date">created, today</div>
		<div class="task-page__desc">
			What is the shortest working solution, to make tslint work with all <br/><br/>
			1. ts files in one specific directory of the project, without specifying every subdirectory manually.
			2. By all .ts files, I really mean ...
		</div>
	</div>
</template>

<script >
import Title from '~/components/Title';

export default {
	components:{
		Title
	}
}

</script>

<style lang="scss">
@import '../../../assets/css/vars/colors';

	.task-page{
		width: 81%;
		margin: 58px auto 0;
	}

	.task-page__date{
		color: $taskStatus;
		font-size: 18px;
	}

	.task-page__desc{
		color: $taskDesc;
	    margin-top: 21px;
		font-weight: 300;
		line-height: 30px;
		font-size: 14px;
	}
</style>
