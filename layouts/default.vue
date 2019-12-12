<template>
  <div>
	  <site-header></site-header>
    <nuxt />
  </div>
</template>

<script>
	import { mapActions } from 'vuex';
	import SiteHeader from '../components/SiteHeader'
	export default {
		components: { SiteHeader },
		mounted() {
			this.initData();
		},
		methods: {
			...mapActions(['initData']),
		},
	}
</script>

<style>

</style>
