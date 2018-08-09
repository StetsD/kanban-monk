<template lang="html">
	<div class="task-page">
		<Title :msg="title" cls="title_task-page"/>
		<div class="task-page__date">created at {{time.created_at}}</div>
		<div v-if="state === 'done'" class="task-page__date">completed at {{time.done}}</div>
		<div v-if="description" class="task-page__desc">
			{{description}}
		</div>
		<div class="task-page__ctrl">
			<Btn v-if="state !== 'done'" text="Done" cls="btn_std" @act="rebaseTaskDone"/>
			<Btn
				:text="state === 'new' ? 'Start' :
				state === 'running' ? 'Stop' :
				state === 'stopped' ? 'Restart' :
				state === 'done' ? 'Start again' : ''"
				cls="btn_act"
				@act="controll"/>
			<Btn text="Close" cls="btn_minimal" @act="toTasks"/>
		</div>
	</div>
</template>


<script>
import Title from '~/components/Title';
import Btn from '~/components/Btn';

export default {
	components:{
		Title,
		Btn
	},
	data(){
		return {
			...this.$store.getters['tasks/getActiveTask']
		}
	},
	beforeDestroy(){
		this.$store.commit('tasks/rmActiveTask');
	},
	methods: {
		toTasks(){
			this.$router.back();
		},
		rebaseTaskDone(){
			this.$store.dispatch('tasks/rebaseTaskDone', this.id);
			this.toTasks();
		},
		controll(){
			let aTask = this.$store.getters['tasks/getActiveTask'],
				{state} = aTask;

			if(state === 'done'){
				this.$store.dispatch('tasks/rebaseTask', aTask.id);

				if(!this.$store.getters['tasks/getTasksDone'].length){
					this.$router.push('/task');
				}else{
					this.toTasks();
				}
			}
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
