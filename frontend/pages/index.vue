<template>
	<section class="gate">
	    <Logo/>
		<h1 class="gate__title">Sign in</h1>
		<form class="gate__form" autocomplete="off">
			<Input
				name="username"
				type="text"
				ph="Login"
				cls="form__group_i-user"/>
			<Input
				name="password"
				type="password"
				ph="Password"
				cls="form__group_i-key"/>
			<Btn
				text="Login"
				cls="btn_act"
				/>
			<nuxt-link
				class="gate__link-forgot"
				to="/plug">
				forgot your password?</nuxt-link>
		</form>
		<CallToAction/>

	</section>
</template>

<script>

import Logo from '~/components/Logo';
import Input from '~/components/form/Input';
import Btn from '~/components/Btn';
import CallToAction from '~/components/CallToAction';

export default {
    components: {
        Logo,
		Input,
		Btn,
		CallToAction
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
	        margin: 126px 0 0 33px;
		}

		&__form{
			margin: 30px auto 0;
			width: 80.5%;
			position: relative;
			left: -7px;

			.btn{
				position: absolute;
				right: 0;
			    margin: 17px 0 0 0;
			}
		}

		&__link-forgot{
			position: absolute;
			font-size: 18px;
			right: 0;
			color: $passiveLink;
		    margin: 103px 0 0 0;
		}
	}

</style>
