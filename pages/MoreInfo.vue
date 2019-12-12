<template>
	<div class="more-info">
		<div class="coming-soon hand-drawn lined thick">
			{{ $t('coming soon') }}
		</div>
	</div>
</template>

<script>
	export default {
		name: "more-info"
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
