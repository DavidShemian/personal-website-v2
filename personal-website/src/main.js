import Vue from 'vue';
import App from './App.vue';
import ToggleButton from 'vue-js-toggle-button';
import store from './store';
import i18n from './i18n'

Vue.config.productionTip = false;

Vue.use(ToggleButton);

new Vue({
    store,
    i18n,
    render: (h) => h(App)
}).$mount('#app');
