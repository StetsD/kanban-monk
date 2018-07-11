<template lang="html">
	<div class="task-page">
		<Title msg="How to be monk?" cls="title_task-page"/>
		<div class="task-page__date">created, today</div>
		<div class="task-page__desc">
			What is the shortest working solution, to make tslint work with all <br/><br/>
			1. ts files in one specific directory of the project, without specifying every subdirectory manually.
			2. By all .ts files, I really mean ...
		</div>
		<div class="task-page__ctrl">
			<Btn text="Done" cls="btn_std"/>
			<Btn text="Start" cls="btn_act"/>
			<Btn text="Close" cls="btn_minimal" @act="toTasks"/>
		</div>
	</div>
</template>

<script >
import Title from '~/components/Title';
import Btn from '~/components/Btn';

export default {
	components:{
		Title,
		Btn
	},
	methods: {
		toTasks(){
			this.$router.back();
		}
	}
}

</script>

<style lang="scss">
@import '../../../assets/css/vars/colors';

	.task-page{
		width: 100%;
		padding: 0 9.5% 57px;
		box-sizing: border-box;
		margin: 58px auto 0;
		box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.04);

		.btn_act{
    		margin: 19px 0px 0 19px;
		}
		.btn_std{
			margin: 16px 0 0 0;
		}
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

	.task-page__ctrl{
		display: flex;
		align-items: baseline;
	    margin: 28px 0 0 0;
	}
</style>
