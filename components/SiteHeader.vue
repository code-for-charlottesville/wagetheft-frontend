<template>
	<header class="site-header">
		<img src="~/assets/img/logo.png" alt="logo">
		<h1>VA Wage Theft</h1>
		<select-language></select-language>
	</header>
</template>

<script>
	import SelectLanguage from './SelectLanguage'
	export default {
		name: "site-header",
		components: { SelectLanguage },
	}
</script>

<style lang="scss" scoped>
	@import "~/assets/css/variables.scss";
	header {
		display: flex;
		background: $header-background;
	}
</style>
