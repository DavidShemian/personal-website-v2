import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLightMode: true,
	},
	mutations: {
		TOGGLE_VIEW_MODE(state, payload) {
			state.isLightMode = payload;
		},
	},
	actions: {
		toggleViewMode(context, value) {
			context.commit('TOGGLE_VIEW_MODE', value);
		},
	},
	getters: {
		getIsLightMode(state) {
			return state.isLightMode;
		},
	},
});
