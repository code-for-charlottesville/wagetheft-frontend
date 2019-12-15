<template>
	<div class="select-language">
		<dropdown-menu :alt="$t('Select Language')" :label="$t('Select Language')" :options="options" :current-selection="$i18n.locale" @click="changeLanguage"></dropdown-menu>
	</div>
</template>

<script>
	import DropdownMenu from './DropdownMenu'
	export default {
		name: "select-language",
		components: { DropdownMenu },
		computed: {
			options() {
				return [
					{ label: "English", value: "en" },
					{ label: "Español", value: "es" },
				]
			},
		},
		methods: {
			changeLanguage(language) {
				this.$router.push(this.switchLocalePath(language.selection));
			},
		},
	};
</script>

<style scoped>
</style>
