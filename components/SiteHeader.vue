<template>
	<header class="site-header hand-drawn lined thin">
		<div class="title">
			<nuxt-link :to="localePath({ path: '/' })">
				<img class="wide-only" src="~/assets/img/logo.png" alt="logo">
			</nuxt-link>
		<h1>{{$t("site title")}}</h1>
		</div>
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
		justify-content: space-between;
		padding: 0 5px;
	}
	.title {
		display: flex;
	}
	.wide-only {
		display: none;
	}

	@media screen and (min-width: 500px) {
		header {
			display: flex;
			padding: 0 15px;
			margin-bottom: 10px;
		}
		.wide-only {
			display: inherit;
		}
	}
</style>
