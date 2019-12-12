<template>
	<div class="eligibility-requirements">
		<div class="request">
			<div class="question hand-drawn lined thick">
				{{ question }}
			</div>
		</div>
		<div class="choices">
			<button class="question hand-drawn lined thick" @click="answeredYes">
				{{ $t('Yes') }}
			</button>
			<button class="question hand-drawn lined thick" @click="answeredNo">
				{{ $t('No') }}
			</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		name: "eligibility-requirements",
		computed: {
			question() {
				if (this.currentEligibilityStep())
					return this.currentEligibilityStep()["en-question"];
				return "";
			},
		},
		methods: {
			...mapGetters(['currentEligibilityStep']),
			...mapActions(['nextEligibilityStep']),
			answeredYes() {
				this.nextEligibilityStep();
			},
			answeredNo() {
				this.nextEligibilityStep();
			},
		},
	};
</script>

<style lang="scss" scoped>
	.question {
		display: inline-block;
	}
	.request {
		display: flex;
		justify-content: space-evenly;
	}
	.choices {
		margin: 30px;
		display: flex;
		justify-content: space-evenly;
	}
</style>
