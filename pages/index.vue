<template>
	<div class="home-page">
		<div class="coming-soon hand-drawn lined thick">
			{{ $t('coming soon') }}
		</div>
	</div>
</template>

<script>
export default {
	name: "home-page"
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
