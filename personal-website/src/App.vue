<template>
	<div id="app">
		<NavBarVue />
		<WelcomePageVue />
		<AboutVue />
		<ExperienceVue />
		<SkillsVue />
	</div>
</template>

<script>
import NavBarVue from './pages/NavBar.vue';
import WelcomePageVue from './pages/WelcomePage';
import AboutVue from './pages/About.vue';
import ExperienceVue from './pages/Experience.vue';
import SkillsVue from './pages/Skills.vue';

export default {
	name: 'App',
	components: {
		NavBarVue,
		WelcomePageVue,
		AboutVue,
		ExperienceVue,
		SkillsVue,
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
// .VueCarousel-navigation-next {
// 	font-size: 50px;
// 	background-color: green;
// }

// .VueCarousel-navigation-prev {
// 	font-size: 50px;
// }
</style>
