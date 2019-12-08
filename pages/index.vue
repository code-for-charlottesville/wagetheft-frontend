<template>
	<div class="home-page">
		<h2>
			The user-facing website for helping workers recover wages.
		</h2>
		<div>Switch to:
			<nuxt-link
				v-if="$i18n.locale !== 'en'"
				:to="switchLocalePath('en')"
			>English
			</nuxt-link>

			<nuxt-link
				v-if="$i18n.locale !== 'es'"
				:to="switchLocalePath('es')"
			>Español
			</nuxt-link>
		</div>
		<div>
			{{ $t('greeting') }}
		</div>
	</div>
</template>

<script>
export default {
	name: "home-page"
}
</script>

<style scoped>

</style>
