<template lang="html">
	<div :class="['menu']">
		<div class="menu__links">
			<nuxt-link to="/task" :class="['menu__link', activeMenuItem === 'task' ? 'active' : '']">Tasks</nuxt-link>
			<nuxt-link v-if="hasDone" to="/done" :class="['menu__link', activeMenuItem === 'done' ? 'active' : '']">Done</nuxt-link>
		</div>
		<div class="menu__info">
			<div v-if="activeMenuItem == 'task'" class="menu__info-item">Status</div>
			<div v-else-if="activeMenuItem == 'done'" class="menu__info-item">Efficiency</div>
		</div>

	</div>
</template>

<script>
	export default {
		data(){
			return{
				timer: this.$store.getters['timerGlobal/get'],
				activeMenuItem: this.$route.name,
				hasDone: !!this.$store.getters['tasks/getTasksDone'].length
			}
		}
	}
</script>

<style lang="scss">
	@import '../assets/css/vars/colors';

	.menu{
		display: flex;
	    align-items: baseline;
		justify-content: space-between;
		margin: 55px 0 0 0;
	    width: 100%;
	    box-sizing: border-box;
	    padding: 0 32px;
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

	.menu__info-item{
		color: $menuInfoItem;
		font-size: 18px;
	}
</style>
