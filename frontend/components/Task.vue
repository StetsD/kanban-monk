<template>
	<div ref="task" class="task-list__item running">
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

						<div class="task-list__tool-running">
							<div class="task-list__tool-stat">
								13:22
							</div>
							<div class="task-list__tool-stat">
								stop task
							</div>
						</div>

						<div class="task-list__tool-resting">
							<div class="task-list__tool-stat">
								time to rest
							</div>
							<div class="task-list__tool-stat">
								4:59
							</div>
						</div>

						<div class="task-list__tool-ending">
							<div class="task-list__tool-stat">
								start again
							</div>
							<div class="task-list__tool-stat">
								task done
							</div>
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

			swipeTask.on('swipeleft', function(e){
				e.target.closest('.task-list__item').classList.add('swiped');
			});

			swipeTask.on('swiperight', function(e){
				e.target.closest('.task-list__item').classList.remove('swiped');
			});

			this.$refs.task.addEventListener('click', e => {
				this.$router.push(`${this.$route.path}/1`);
			}, false);
		}
	}
</script>

<style lang="scss">
	@import '../assets/css/vars/colors';
	@import '../assets/css/tool/mixins';

	//TASK STATES
	// - running
	// - resting
	// - ending

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
		@include transition(all 0.2s ease-out);
		.task-list__item:nth-child(1) & {
			border-top: 1px solid $taskBorder;
		}
			//state
		.task-list__item.swiped &{
			width: 55%;
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
		display: flex;
	    justify-content: center;
		width: 45%;
		height: 80px;
		position: absolute;
		right: 0;
		background: linear-gradient(35.88deg, $action -22.31%, $action_g 230.07%);
		box-shadow: 0px 3px 7px rgba(0, 201, 255, 0.21);
	}

	.task-list__tool-inner{
		display: flex;
		align-items: center;
	}

	.task-list__tool-stat{
		color: $w;
		position: relative;
			//state
		&:nth-child(1){
			.running &{
				font-size: 36px;
				font-family: Roboto Condensed;
				top: 3px;
			    margin: 0 20px 0 0;
			}
			.resting & {
				line-height: 15px;
				font-size: 18px;
				width: 55px;
				top: 2px;
			    margin: 0 15px 0 0px;
			}
			.ending & {
				line-height: 15px;
				font-size: 18px;
				width: 55px;
				top: 2px;
				margin: 0 15px 0 1px;
				&::after{
					content: '';
					display: block;
					background-color: $w;
					width: 1px;
					height: 32px;
					position: absolute;
				    right: -5px;
				    top: -2px;
				}
			}
		}
		&:nth-child(2){
			.running &{
				line-height: 15px;
				font-size: 18px;
				width: 35px;
				top: 3px;
			}
			.resting &{
				font-size: 36px;
				font-family: Roboto Condensed;
				top: 3px;
			}
			.ending &{
				line-height: 15px;
				font-size: 18px;
				width: 55px;
				top: 2px;
			    margin: 0 -6px 0 6px;
			}
		}
	}

	.task-list__tool-running,
	.task-list__tool-resting,
	.task-list__tool-ending{
		display: none;
	}
		//state
	.task-list__item.running .task-list__tool-running,
	.task-list__item.resting .task-list__tool-resting,
	.task-list__item.ending .task-list__tool-ending{
		display: flex;
		align-items: center;
	}


</style>
