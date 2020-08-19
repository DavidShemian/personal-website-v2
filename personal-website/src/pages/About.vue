<template>
	<div>
		<MobileViewDeciderVue :mobile="AboutMobileVue" :desktop="AboutDesktopVue" />
	</div>
</template>

<script>
import MobileViewDeciderVue from '../components/MobileViewDecider.vue';
import AboutMobileVue from '../components/About/AboutMobile.vue';
import AboutDesktopVue from '../components/About/AboutDesktop.vue';

export default {
	components: {
		MobileViewDeciderVue,
	},
	data() {
		return {
			AboutMobileVue,
			AboutDesktopVue,
			isMobileView: false,
		};
	},
};
</script>

<style></style>
