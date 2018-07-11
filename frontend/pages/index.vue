<template>
	<section class="gate">
		<transition name="fade">
			<div v-if="vSignIn" class="gate__sign-in">
				<Title msg="Sign in" cls="title_gate"/>
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
				<CallToAction @tgl="tglForm"/>
			</div>
		</transition>
		<transition name="fade">
			<div v-if="vSignUp" class="gate__sign-up">
				<Title msg="Sign up" cls="title_gate"/>
				<form class="gate__form" autocomplete="off">
					<Input
						name="username"
						type="text"
						ph="Login"
						cls="form__group_i-user"/>
					<Input
						name="email"
						type="email"
						ph="Email"
						cls="form__group_i-user"/>
					<Input
						name="password"
						type="password"
						ph="Password"
						cls="form__group_i-key"/>
					<Input
						name="password2"
						type="password"
						ph="Retry password"/>
					<Btn
						text="Sign up"
						cls="btn_act"
						/>
					<div
						class="gate__link-forgot" @click="tglForm">
						Sign In</div>
				</form>
			</div>
		</transition>


	</section>
</template>

<script>

import Logo from '~/components/Logo';
import Title from '~/components/Title';
import Input from '~/components/form/Input';
import Btn from '~/components/Btn';
import CallToAction from '~/components/CallToAction';

export default {
    components: {
        Logo,
		Title,
		Input,
		Btn,
		CallToAction
    },
	data(){
		return {
			vSignIn: true,
			vSignUp: false
		}
	},
	methods: {
		tglForm(){
			this.vSignIn = !this.vSignIn;
			this.vSignUp = !this.vSignUp;
		}
	}
}

</script>

<style lang="scss">
	@import '../assets/css/vars/colors';
	@import '../assets/css/tool/mixins';

	.gate{
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
