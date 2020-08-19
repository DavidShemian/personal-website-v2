<template>
	<div class="container" v-bind:class="backgroundCssBindEven(getIsLightMode)">
		<img v-if="getIsLightMode" src="../../assets/images/about-black.png" />
		<img v-if="!getIsLightMode" src="../../assets/images/about-white.png" />
		<div class="text">
			<h1>{{ $t('about_title') }}</h1>
			<p>
				{{ $t('about_body') }}
			</p>
		</div>
	</div>
</template>

<script>
import { backgroundCssBindEven } from '../../common/cssBindings';

export default {
	name: 'About',
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
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		margin-right: 50px;
		width: 300px;
		height: 300px;
	}
}

.text {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 350px;
	height: 350px;
	color: $White;
	h1 {
		font-family: $roboto-black;
	}
	p {
		white-space: pre-line;
		letter-spacing: 0.04px;
	}
}
</style>
