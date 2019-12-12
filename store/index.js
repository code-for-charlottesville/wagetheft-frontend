export const state = () => ({
	eligibility: [],
	currentEligibilityIndex: 0,
	eligibilityBail: false,
});

export const getters = {
	currentEligibilityStep: state => {
		return state.eligibility[state.currentEligibilityIndex];
	},
};

export const mutations = {
	eligibility(state, payload) {
		state.eligibility = payload;
	},
	currentEligibilityIndex(state, payload) {
		state.currentEligibilityIndex = payload;
	},
};

export const actions = {
	initData: (context, payload) => {
		const eligibility = require("./eligibility");
		context.commit("eligibility", eligibility);
	},
	setEligibilityStep: (context, payload) => {
		context.commit("currentEligibilityIndex", payload);
	},
	nextEligibilityStep:(context, payload) => {
		const next = context.state.currentEligibilityIndex + 1;
		if (next < context.state.eligibility.length-1)
			context.commit("currentEligibilityIndex", next);
	},
};

