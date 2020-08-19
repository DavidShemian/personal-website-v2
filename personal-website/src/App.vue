<template>
	<div id="app">
		<NavBarVue />
		<WelcomePageVue />
		<AboutMobileVue />
	</div>
</template>

<script>
import NavBarVue from './pages/NavBar.vue';
import WelcomePageVue from './pages/WelcomePage';
import AboutMobileVue from './pages/AboutMobile.vue';
// import AboutVue from './pages/About.vue';
export default {
	name: 'App',
	components: {
		NavBarVue,
		WelcomePageVue,
		AboutMobileVue,
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
