<template>
	<div :class="['form__group', cls ? cls : '']">
		<input class="form__field" :type="type" :name="name" value="" :placeholder="ph">
		<div class="form__msg"></div>
	</div>
</template>

<script>

export default {

	props: ['name', 'type', 'ph', 'cls']

}

</script>

<style lang="scss">
	@import '../../assets/css/vars/colors';

	.form__field{
		width: 100%;
		border: 1px solid $inputBorder;
		box-sizing: border-box;
		border-radius: 1px;
	    padding: 21px 0 17px 45px;
		font-size: 18px;
		color: $inputText;
		border-radius: 1px;
		&::placeholder {
			color: $inputPlaceholder;
		}
		&:focus{
			outline-color: $action;
		}
	}

	.form__group{
		margin: 0 0 9px 0;
		position: relative;

		&::before{
			content: '';
			height: 12px;
			width: 15px;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 20px;
			margin: auto;
			background-image: none;
			background-repeat: no-repeat;
			background-size: contain;
		}
		&.form__group_i-user {
			&::before{
				background-image: url(/img/elems/i-user.svg);
			}
		}
		&.form__group_i-key {
			&::before{
				background-image: url(/img/elems/i-key.svg);
			}
		}
	}

</style>
