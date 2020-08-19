import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en_messages from './locales/en';
import heb_messages from './locales/heb';

Vue.use(VueI18n);

export default new VueI18n({
	locale: process.env.VUE_APP_I18N_LOCALE || 'en',
	fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
	messages: {
		en: en_messages,
		heb: heb_messages,
	},
});
