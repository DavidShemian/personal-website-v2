<template>
	<div id="app">
		<NavBarVue />
		<WelcomePageVue />
		<AboutVue />
		<ExperienceDekstopVue />
	</div>
</template>

<script>
import NavBarVue from './pages/NavBar.vue';
import WelcomePageVue from './pages/WelcomePage';
import AboutVue from './pages/About.vue';
import ExperienceDekstopVue from './components/Experience/ExperienceDekstop.vue';

export default {
	name: 'App',
	components: {
		NavBarVue,
		WelcomePageVue,
		AboutVue,
		ExperienceDekstopVue,
	},
};
</script>

<style lang="scss">
@import './reset.scss';
@import './common/variables.scss';

#app {
	display: flex;
	flex-direction: column;
	font-family: $roboto-light;
}
</style>
