<template lang="html">
	<div :class="['menu']">
		<nuxt-link to="/task" data-route="task" class="menu__link">Tasks</nuxt-link>
		<nuxt-link to="/done" data-route="done" class="menu__link">Done</nuxt-link>
	</div>
</template>

<script>
	export default {
		mounted(){
			document.querySelector(`[data-route=${this.$route.name}]`).classList.add('active');
		}
	}
</script>

<style lang="scss">
	@import '../assets/css/vars/colors';

	.menu{
		display: flex;
	    align-items: baseline;
	    margin: 55px 0 0 32px;
	}

	.menu__link{
		font-size: 18px;
		color: $menuLink;
		margin: 0 32px 0 0;
		&:last-child{
			margin:0 0 0 0;
		}
			// state
		&.active{
			font-size: 36px;
		}
	}
</style>
