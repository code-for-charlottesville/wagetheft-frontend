<template>
	<div class="home-page">
		<nuxt-link to="/moreinfo" class="page-link hand-drawn lined thick">{{$t("More Info")}}</nuxt-link>
		<nuxt-link to="/eligibilityrequirements" class="page-link hand-drawn lined thick">{{$t("eligibility test")}}</nuxt-link>
		<nuxt-link to="/filloutform" class="page-link hand-drawn lined thick">{{$t("go to form")}}</nuxt-link>
	</div>
</template>

<script>
export default {
	name: "home-page"
}
</script>

<style lang="scss" scoped>
	.home-page {
		display: flex;
	}
	.page-link {
		display: inline-block;
		padding: 30px;
	}
</style>
