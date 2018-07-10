<template>
	<div class="call-act">
		<div class="call-act__inner">
			<div class="call-act__desc">
				no account yet?<br/>
				<span>sign up - be like a monk</span>
			</div>
			<Btn text="Sign Up" cls="call-act__btn" @act="$emit('tgl')"/>
		</div>
	</div>
</template>

<script>
	import Btn from './Btn';
	export default{
		components: {
			Btn
		}
	}
</script>

<style lang="scss">
	@import '../assets/css/vars/colors';

	.call-act{
		width: 100%;
		height: 98px;
	    padding: 11px 0 0;
		box-sizing: border-box;
		background: linear-gradient(53.61deg, $action -1.98%, $action_g 184.46%);
		position: fixed;
		bottom: 0;

		&__inner{
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 85%;
			margin: 0 auto;
		}

		&__desc{
			font-weight: 300;
			font-size: 24px;
			color: $w;
			& > span {
				font-size: 18px;
				color: $b;
				position: relative;
				top: -5px;
			}
		}

		&__btn{
			position: relative;
		    top: -10px;
		    right: 5px;
		    padding: 16px 23px 16px;
			margin: 18px 0 0 0;
		}
	}

</style>
