<template>
	<div class="container" v-bind:class="backgroundCssBindEven(getIsLightMode)">
		<div class="text">
			<h1>{{ $t('about_title') }}</h1>
			<p>
				{{ $t('about_body') }}
			</p>
		</div>
		<img v-if="getIsLightMode" src="../../assets/images/about-black.png" />
		<img v-if="!getIsLightMode" src="../../assets/images/about-white.png" />
	</div>
</template>

<script>
import { backgroundCssBindEven } from '../../common/cssBindings';

export default {
	name: 'AboutMobile',
	created() {
		this.backgroundCssBindEven = backgroundCssBindEven;
	},
	computed: {
		getIsLightMode() {
			return this.$store.getters.getIsLightMode;
		},
	},
};
</script>

<style scoped lang="scss">
@import '../../common/variables.scss';

.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	padding: 20;
	img {
		width: 250px;
		height: 250px;
		align-self: flex-end;
	}
}

.text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 30px;

	color: $White;
	h1 {
		font-family: $roboto-black;
		margin-top: 10px;
	}
	p {
		align-self: flex-end;
		white-space: pre-line;
		letter-spacing: 0.04px;
		line-height: 25px;
	}
}
</style>
