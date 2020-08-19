<template>
	<div>
		<div v-if="isMobileView">
			<component v-bind:is="mobile" />
		</div>
		<div v-if="!isMobileView">
			<component v-bind:is="desktop" />
		</div>
	</div>
</template>

<script>
import { MOBILE_WIDTH_SIZE } from '../common/constants';

export default {
	props: ['mobile', 'desktop'],
	components: {},
	data() {
		return {
			isMobileView: false,
		};
	},
	mounted() {
		this.isMobileView = window.innerWidth <= MOBILE_WIDTH_SIZE;
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		});
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize);
	},

	methods: {
		onResize() {
			this.isMobileView = window.innerWidth <= MOBILE_WIDTH_SIZE;
		},
	},
};
</script>

<style></style>
