<template>
	<div class="task-adder">
		<div class="task-adder__inner">
			<input class="task-adder__input" type="text" value="" placeholder="Add new task here...">
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style lang="scss">
	@import '../assets/css/vars/colors';
	@import '../assets/css/tool/mixins';


	.task-adder{
		width: 100%;
		height: 82px;
		position: fixed;
		bottom: 0;
		background-color: $w;
		@include box-shadow(0px -4px 13px rgba(0, 0, 0, 0.04));
	}

	.task-adder__input{
		border: none;
		font-size: 18px;
		font-weight: 300;
		font-family: Roboto;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto;
		width: 100%;
	    padding: 0 36px;
		&::placeholder{
			color: $inputPlaceholder;
		}
	}
</style>
