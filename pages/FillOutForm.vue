<template>
	<div class="fill-out-form">
		<div class="coming-soon hand-drawn lined thick">
			{{ $t('coming soon') }}
		</div>
	</div>
</template>

<script>
	export default {
		name: "fill-out-form"
	}
</script>

<style lang="scss" scoped>
	.coming-soon {
		padding: 40px;
		margin: 10px auto;
		max-width: 300px;
		font-size: 30px
	}
</style>
