<template>
	<div ref="task" class="task-list__item">
		<div class="task-list__item-inner">
			<div class="task-list__essence">
				<div class="task-list__title">
					{{title}}<br/>
					<span class="task-list__status">3 & 3/4 done</span>
				</div>
				<div class="task-list__action">{{action}}</div>
			</div>
			<div class="task-list__tool-wrapper">
				<div class="task-list__tool">
					<div class="task-list__tool-inner">
						<div class="task-list__tool-time">
							13:22
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default{
		props: ['title', 'action'],
		mounted(){
			let swipeTask = new Hammerjs(this.$refs.task);

			swipeTask.on('panleft', function(e){
				e.target.closest('.task-list__item').classList.add('swiped');
			});

			swipeTask.on('panright', function(e){
				e.target.closest('.task-list__item').classList.remove('swiped');
			});
		}
	}
</script>

<style lang="scss">
	@import '../assets/css/vars/colors';
	@import '../assets/css/tool/mixins';

	.task-list__item{
		position: relative;
		width: 100%;
		height: 80px;
	    overflow: hidden;
	}

	.task-list__item-inner{
		display: flex;
		align-items: center;
	}

	.task-list__essence{
		padding: 0 32px;
		width: 100%;
        height: 80px;
		position: relative;
		z-index: 1;
		background-color: $w;
		border-bottom: 1px solid $taskBorder;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		@include transition(all 0.3s ease-out);
		.task-list__item:nth-child(1) & {
			border-top: 1px solid $taskBorder;
		}
			//state
		.task-list__item.swiped &{
			width: 56%;
		}
	}

	.task-list__title{
		color: $taskText;
		font-size: 18px;
			//state
		.task-list__item.swiped &{
			text-overflow: ellipsis;
		    overflow: hidden;
		    white-space: nowrap;
		}
	}

	.task-list__status{
		font-size: 14px;
		color: $taskStatus;
		display: block;
		margin: 0;
			//state
		.task-list__item.swiped &{
			text-overflow: ellipsis;
		    overflow: hidden;
		    white-space: nowrap;
		}
	}

	.task-list__action{
		color: $taskAction;
		font-size: 18px;
			//state
		.task-list__item.swiped &{
			display: none;
		}
	}

	.task-list__tool-wrapper{
		width: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.task-list__tool{
		width: 44%;
		height: 80px;
		position: absolute;
		right: 0;
		background: linear-gradient(35.88deg, $action -22.31%, $action_g 230.07%);
		box-shadow: 0px 3px 7px rgba(0, 201, 255, 0.21);
	}

</style>
