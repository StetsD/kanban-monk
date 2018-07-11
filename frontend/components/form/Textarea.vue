<template>
	<div :class="['form__group', cls ? cls : '']">
		<textarea class="form__field" :name="name" value="" :placeholder="ph">
		</textarea>
		<div class="form__msg"></div>
	</div>
</template>

<script>

export default {

	props: ['name', 'ph', 'cls']

}

</script>

<style lang="scss">
	@import '../../assets/css/vars/colors';



</style>
