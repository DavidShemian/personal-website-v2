<template>
	<SkillsDesktopVue />
</template>

<script>
import SkillsDesktopVue from '../components/Skills/SkillsDesktop.vue';

export default {
	name: 'Skills',
	components: {
		SkillsDesktopVue,
	},
};
</script>

<style scoped lang="scss">
@import '../common/variables.scss';
.VueCarousel-navigation-next {
	font-size: 50px;
	background-color: green;
}

.VueCarousel-navigation-prev {
	font-size: 50px;
}
</style>
