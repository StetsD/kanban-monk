<template>
	<div v-if="text" :class="['btn', cls ? cls : '']">
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

	.btn{
		width: 53px;
		height: 29px;
		font-family: 'Roboto Condensed', sans-serif;
		font-style: normal;
		font-weight: normal;
		line-height: normal;
		font-size: 24px;
		color: $w;
		border-radius: 30px;
		margin: 18px 0 0 0;
    	padding: 16px 31px;
		background: $b;

		&.btn_act{
			background: linear-gradient(33.61deg, $action -25.81%, $action_g 237.92%);
			box-shadow: 0px 3px 7px rgba(0, 201, 255, 0.21);
			color: $w;
		}
	}
</style>
