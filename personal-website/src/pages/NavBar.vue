<template>
	<div>
		<MobileViewDeciderVue :mobile="NavBarMobileVue" :desktop="NavBarDesktopVue" />
	</div>
</template>

<script>
import NavBarMobileVue from '../components/NavBar/NavBarMobile.vue';
import NavBarDesktopVue from '../components/NavBar/NavBarDesktop.vue';
import MobileViewDeciderVue from '../components/MobileViewDecider.vue';

export default {
	components: {
		MobileViewDeciderVue,
	},
	data() {
		return {
			NavBarMobileVue,
			NavBarDesktopVue,
			isMobileView: false,
		};
	},
};
</script>

<style></style>
