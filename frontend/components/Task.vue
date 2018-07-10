<template>
	<div class="task-list__item">
		<div class="task-list__item-inner">
			<div class="task-list__essence">
				<div class="task-list__title">
					{{title}}<br/>
					<span class="task-list__status">3 & 3/4 done</span>
				</div>
				<div class="task-list__action">{{action}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props: ['title', 'action']
	}
</script>

<style lang="scss">
	@import '../assets/css/vars/colors';

	.task-list__item{
		position: relative;
		width: 100%;
		height: 80px;
		border-bottom: 1px solid $taskBorder;
	    overflow: hidden;
		&:nth-child(1){
			border-top: 1px solid $taskBorder;
		}
	}

	.task-list__item-inner{

	}

	.task-list__essence{
		padding: 0 32px;
		width: 100%;
        height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	.task-list__title{
		color: $taskText;
		font-size: 18px;
	}

	.task-list__status{
		font-size: 14px;
		color: $taskStatus;
		display: block;
		margin: 0;
	}

	.task-list__action{
		color: $taskAction;
		font-size: 18px;
	}
</style>
