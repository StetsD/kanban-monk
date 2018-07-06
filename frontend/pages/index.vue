<template>
	<section class="gate">
	    <Logo/>
		<h1 class="gate__title">Sign in</h1>
		<form class="gate__form">
			<Input/>
		</form>
	</section>
</template>

<script>

import Logo from '~/components/Logo';
import Input from '~/components/form/Input';

export default {



    components: {
        Logo,
		Input
    }
}

</script>

<style lang="scss">
	@import '../assets/css/vars/colors';

	.gate{
		&__title{
			width: 106px;
			height: 43px;
			font-weight: 300;
			font-size: 36px;
			color: $title;
		    margin: 126px 0 0 24px;
		}
	}

</style>
