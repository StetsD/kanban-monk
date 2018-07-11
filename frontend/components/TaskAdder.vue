<template>
	<div ref="taskAdder" :class="['task-adder', isActive ? 'active' : '']">
		<div class="task-adder__inner">
			<input
				type="text"
				placeholder="Add new task here..."
				class="task-adder__btn-plug"
				@focus="openPanel"/>
			<div class="task-adder__edit-panel">
				<Btn text="close" cls="btn_minimal task-adder__btn-close"/>
				<textarea
					class="task-adder__input"
					placeholder="Buy the milk and coff |">
				</textarea>
				<textarea
					class="task-adder__input-desc"
					placeholder="Add description for the task here...">
				</textarea>
				<Btn text="Add Task" cls="btn_act task-adder__btn-add"/>
			</div>
		</div>
	</div>
</template>

<script>
	import Btn from '~/components/Btn';

	export default{
		components: {
			Btn
		},
		data(){
			return {
				isActive: false
			}
		},
		methods: {
			openPanel(){
				this.isActive = true;
			}
		}
	}
</script>

<style lang="scss">
	@import '../assets/css/vars/colors';
	@import '../assets/css/tool/mixins';

		// mix
	.task-adder-input{
		border: none;
		font-size: 18px;
		font-weight: 300;
	    box-sizing: border-box;
		width: 100%;
	    padding: 0 36px;
		font-family: Roboto;
		&::placeholder{
			color: $inputPlaceholder;
		}
	}

	.task-adder{
		width: 100%;
		height: 82px;
		position: fixed;
		bottom: 0;
		background-color: $w;
		@include transition(all 0.2s ease-out);
		@include box-shadow(0px -4px 13px rgba(0, 0, 0, 0.04));
			//state
		&.active{
			bottom: inherit;
			top: 122px;
			height: 100%;
			z-index: 1;
		}
	}

	.task-adder__btn-plug{
		@extend .task-adder-input;
			//state
		.task-adder.active & {
			display: none;
		}
	}

	.task-adder__edit-panel{
		display: none;
			//state
		.task-adder.active & {
			display: block;
		}
	}

	.task-adder__input{
		@extend .task-adder-input;
		color: $taskText;
		font-size: 36px;
	}

	.task-adder__btn-close.btn.btn_minimal{
		font-size: 18px;
		color: $btnCloseTaskAdder;
		display: inline-block;
		margin: 0 0 0 6px;
		display: none;
			//state
		.task-adder.active &{
			display: inline-block;
		}
	}

	.task-adder__input-desc{
		@extend .task-adder-input;
	    margin: 23px 0 0 0;
		@include transition(all 0.2s ease-out);
		@include visy('&.active');
	}

	.task-adder__btn-add{
		@include transition(all 0.2s ease-out);
		@include visy('&.active');
	}
</style>
