<template>
	<div class="main">
		<Logo/>
		<nuxt/>
	</div>
</template>

<script>
	import Logo from '~/components/Logo';

	let axios = require('axios');
	let {host,protocol,port,api} = require('../../config');

	axios.defaults.baseURL = `${protocol}://${host}:${port}/${api.name}/${api.version}`;

	export default {
		beforeCreate(){
			this.$store.dispatch('tasks/getTasks');
		},
		components: {
			Logo
		}
	}
</script>

<style lang="scss">

</style>
