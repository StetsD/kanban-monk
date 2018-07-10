<template lang="html">
	<h1 :class="['title', cls ? cls : '']">
		{{msg}}
	</h1>
</template>

<script>
	export default {
		props: ['msg', 'cls']
	}
</script>

<style lang="scss">
	@import '../assets/css/vars/colors';

	.title{
		font-weight: 300;
		font-size: 36px;
		color: $title;


		&_gate{
			margin: 126px 0 0 33px;
		}

		&_task{
			margin: 57px 0 0 32px;
		}
	}

</style>
