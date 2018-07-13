<template>
	<div @keyup.esc="closePanel" ref="taskAdderWrapper" :class="['task-adder__wrapper', isActive ? 'active' : '']">
		<input
			ref="taskAdderPlug"
			type="text"
			placeholder="Add new task here..."
			class="task-adder__btn-plug"
			@click="openPanel"/>

		<div ref="taskAdder" class="task-adder">
			<div class="task-adder__inner">
				<div class="task-adder__edit-panel">
					<Btn
						text="close"
						cls="btn_minimal task-adder__btn-close"
						@act="closePanel"/>
					<textarea
						v-model="taskTitle"
						ref="taskAdderInput"
						class="task-adder__input"
						placeholder="Add new task here..."
						@input="checkTaskTitle">
					</textarea>
					<textarea
						v-model="taskDescription"
						ref="taskAdderInputDesc"
						class="task-adder__input-desc"
						placeholder="Add description for the task here...">
					</textarea>
					<Btn
						@act="taskAdd"
						ref="taskAdderBtnAdd"
						text="Add Task"
						cls="btn_act task-adder__btn-add"/>
				</div>
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
				isActive: false,
				taskTitle: '',
				taskDescription: ''
			}
		},
		mounted(){
			let taskAdderSwipe = new Hammerjs(this.$refs.taskAdder);
			let swipeLock = true;
			taskAdderSwipe.on('press', e => {
				swipeLock = false;
			});
			taskAdderSwipe.on('panend', e => {
				if(!swipeLock){
					swipeLock = true;
					let direction = e.additionalEvent === 'panleft' ? '-100%' : '100%';
					this.$refs.taskAdder.style.left = direction;
					this.$refs.taskAdderBtnAdd.$el.classList.remove('active');
					setTimeout(()=>{
						this.closePanel();
						this.$refs.taskAdder.style.left = 0;
					}, 400);
				}
			});

			autosize(this.$refs.taskAdderInput);
			autosize(this.$refs.taskAdderInputDesc);
		},
		methods: {
			// UI
			openPanel(){
				this.isActive = true;
				this.$refs.taskAdderPlug.blur();
				setTimeout(()=>{
					this.$refs.taskAdderInput.focus();
				}, 200);

			},
			closePanel(){
				this.isActive = false;
				this.$refs.taskAdderPlug.blur();
				this.clearTaskText();
				this.hideAddTools();
			},
			checkTaskTitle(){
				if(this.$refs.taskAdderInput.value.length){
					this.showAddTools();
				}else{
					this.hideAddTools();
				}
			},
			showAddTools(){
				this.$refs.taskAdderBtnAdd.$el.classList.add('active');
				this.$refs.taskAdderInputDesc.classList.add('active');
			},
			hideAddTools(){
				this.$refs.taskAdderBtnAdd.$el.classList.remove('active');
				this.$refs.taskAdderInputDesc.classList.remove('active');
			},
			clearTaskText(){
				this.taskTitle = '';
				this.taskDescription = '';
			},
			// DATA
			taskAdd(){
				let {taskTitle, taskDescription} = this;
				taskTitle && taskTitle.length &&
				this.$emit('taskAdd', {title: taskTitle, description: taskDescription});
				this.closePanel();
			}
		}
	}
</script>

<style lang="scss">
	@import '../assets/css/vars/colors';
	@import '../assets/css/tool/mixins';

		// mix
	@mixin taskAdderInput(){
		border: none;
		font-size: 18px;
		font-weight: 300;
	    box-sizing: border-box;
		width: 100%;
	    padding: 0 36px;
		font-family: Roboto;
		resize: none;
		&::placeholder{
			color: $inputPlaceholder;
		}
	}

	.task-adder{
		width: 100%;
		height: 0;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: $w;
		padding: 28px 0 0 0;
		box-sizing: border-box;
		@include transition(all 0.2s ease-out);
		@include box-shadow(0px -4px 13px rgba(0, 0, 0, 0.04));
			//state
		.task-adder__wrapper.active & {
			padding: 0;
			bottom: inherit;
			top: 122px;
			height: 100%;
			z-index: 1;
		}
	}

	.task-adder__btn-plug{
		@include taskAdderInput();
		background-color: $w;
		bottom: 0;
		position: fixed;
	    z-index: 2;
		padding: 32px 36px;
		@include box-shadow(0px -4px 13px rgba(0, 0, 0, 0.04));
		@include transition(all 0.2s ease-out);
			//state
		.task-adder__wrapper.active & {
			bottom: -100px;
		}
	}

	.task-adder__edit-panel{
		display: none;
			//state
		.task-adder__wrapper.active & {
			display: block;
		}
	}

	.task-adder__input{
		@include taskAdderInput();
		color: $taskText;
		font-size: 36px;
	    height: 43px;
	}

	.task-adder__btn-close.btn.btn_minimal{
		font-size: 18px;
		color: $btnCloseTaskAdder;
		display: inline-block;
		margin: 0 0 0 6px;
		display: none;
			//state
		.task-adder__wrapper.active &{
			display: inline-block;
		}
	}

	.task-adder__input-desc{
		@include taskAdderInput();
	    margin: 31px 0 0 0;
		height: 22px;
		@include visy('&.active');
	}

	.task-adder__btn-add{
		position: fixed;
		right: 39px;
		bottom: 43px;
		@include transition(all 0.2s ease-out);
		@include visy('&.active');
	}
</style>
