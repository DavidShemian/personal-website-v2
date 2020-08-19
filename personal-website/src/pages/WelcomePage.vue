<template>
	<div>
		<MobileViewDeciderVue :mobile="WelcomePageMobileVue" :desktop="WelcomePageDesktopVue" />
	</div>
</template>

<script>
import WelcomePageMobileVue from '../components/WelcomePage/WelcomePageMobile.vue';
import WelcomePageDesktopVue from '../components/WelcomePage/WelcomePageDesktop.vue';
import MobileViewDeciderVue from '../components/MobileViewDecider.vue';

export default {
	components: {
		MobileViewDeciderVue,
	},
	data() {
		return {
			WelcomePageMobileVue,
			WelcomePageDesktopVue,
		};
	},
};
</script>

<style></style>
