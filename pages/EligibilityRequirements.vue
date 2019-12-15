<template>
	<div class="eligibility-requirements">
		<div v-if="!notEligible">
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
		<div class="explanation-wrapper" v-if="notEligible">
			<div class="explanation hand-drawn lined thick" v-html="explanation"></div>
			<button class="start-over hand-drawn lined thick" @click="startOver">{{$t('start over')}}</button>
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
					return this.currentEligibilityStep()[this.$i18n.locale + "-question"];
				return "";
			},
			explanation() {
				if (this.currentEligibilityStep())
					return this.currentEligibilityStep()[this.$i18n.locale + "-stop-explanation"];
				return "";
			},
		},
		data() {
			return {
				notEligible: false,
			};
		},
		methods: {
			...mapGetters(['currentEligibilityStep']),
			...mapActions(['nextEligibilityStep', 'setEligibilityStep']),
			answeredYes() {
				if (this.currentEligibilityStep()['action-yes'] === 'next')
					this.nextEligibilityStep();
				else
					this.notEligible = true;
			},
			answeredNo() {
				if (this.currentEligibilityStep()['action-no'] === 'next')
					this.nextEligibilityStep();
				else
					this.notEligible = true;
			},
			startOver() {
				this.setEligibilityStep(0);
				this.notEligible = false;
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
	.explanation-wrapper {
	}
	.choices {
		margin: 30px;
		display: flex;
		justify-content: space-evenly;
	}
	.explanation {
		display: inline-block;
	}
	.start-over {
		display: inline-block;
	}
</style>
