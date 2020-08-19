<template>
	<div id="app">
		<NavBarVue />
		<WelcomePageVue />
	</div>
</template>

<script>
import NavBarVue from './pages/NavBar.vue';
import WelcomePageVue from './pages/WelcomePage';

export default {
	name: 'App',
	components: { NavBarVue, WelcomePageVue },
};
</script>

<style lang="scss">
@import './reset.scss';
@import './common/variables.scss';

#app {
	display: flex;
	flex-direction: column;
	font-family: roboto-light;
}
</style>
