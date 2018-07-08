<template>
	<div v-if="text" :class="['btn', cls ? cls : '']" @click="$emit('act')">
		<div>{{text}}</div>
	</div>
</template>

<script>

	export default{
		props: ['cls', 'text']
	}

</script>

<style lang="scss">
@import '../assets/css/vars/colors';
@import '../assets/css/tool/mixins';

	.btn{
		cursor: pointer;
		font-family: 'Roboto Condensed', sans-serif;
		font-style: normal;
		font-weight: normal;
		line-height: normal;
		font-size: 24px;
		color: $action;
		border-radius: 30px;
		margin: 18px 0 0 0;
    	padding: 16px 31px;
		background: $w;
		font-weight: 300;

		&.btn_act{
			background: linear-gradient(33.61deg, $action -25.81%, $action_g 237.92%);
			box-shadow: 0px 3px 7px rgba(0, 201, 255, 0.21);
			color: $w;
			font-weight: normal;
			@include transition(all 0.3s 0.0s ease-out);
			&:hover{
				background: linear-gradient(33.61deg, $action 0%, $action_g 237.92%);
				box-shadow: 0px 0px 0px rgba(0, 201, 255, 0.21);
			}
		}
	}
</style>
