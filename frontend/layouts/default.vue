<template>
	<div class="main">
		<Logo/>
		<nuxt/>
	</div>
</template>

<script>
	import Logo from '~/components/Logo';

	export default {
		components: {
			Logo
		}
	}
</script>

<style lang="scss">
	@import '../assets/css/tool/reset.scss';
	@import '../assets/css/index.scss';
</style>
