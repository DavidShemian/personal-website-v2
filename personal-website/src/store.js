import Vue from 'vue';
import Vuex from 'vuex';
import i18n from './i18n';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLightMode: true,
		local: process.env.VUE_APP_I18N_LOCALE || 'en',
		isWindowTop: true,
	},
	mutations: {
		TOGGLE_VIEW_MODE(state, payload) {
			state.isLightMode = payload;
		},
		CHANGE_LOCAL(state, payload) {
			state.local = payload;
		},
	},
	actions: {
		toggleViewMode(context, value) {
			context.commit('TOGGLE_VIEW_MODE', value);
		},
		changeLocal(context, value) {
			context.commit('CHANGE_LOCAL', value);
			i18n.locale = value;
		},
		onScroll() {
			this.isWindowTop = window.top.scrollY === 0;
		},
	},
	getters: {
		getIsLightMode(state) {
			return state.isLightMode;
		},
		getIsRightToLeft(state) {
			return state.local === 'heb';
		},
		getIsWindowTop(state) {
			return state.isWindowTop;
		},
	},
	mounted() {
		window.addEventListener('scroll', this.onScroll);
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.onScroll);
	},
});
