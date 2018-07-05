<template>
	<section class="gate">
	    <Logo/>
		<h1 class="gate__title">Sign in</h1>
	</section>
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
	@import '../assets/css/vars/colors';

	.gate{
		&__title{
			position: absolute;
			width: 106px;
			height: 43px;
			left: 33px;
			top: 197px;

			font-family: Roboto;
			font-style: normal;
			font-weight: 300;
			line-height: normal;
			font-size: 36px;

			color: $title;
		}
	}

</style>
