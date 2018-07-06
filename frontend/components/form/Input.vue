<template>
	<div class="form__group">
		<input class="form__field" type="text" name="" value="" placeholder="Mazafaka">
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
	@import '../../assets/css/vars/colors';

	.form__field{
		position: absolute;
		width: 314px;
		height: 60px;
		left: 32px;
		top: 270px;

		border: 1px solid $inputBorder;
		box-sizing: border-box;
		border-radius: 1px;

		padding: 20px 0 0 45px;

		left: 77px;
		top: 290px;

		font-family: Roboto;
		font-size: 18px;

		color: $inputText;
		border-radius: 1px;
		&::placeholder {
			color: $inputPlaceholder;
		}

	}

</style>
