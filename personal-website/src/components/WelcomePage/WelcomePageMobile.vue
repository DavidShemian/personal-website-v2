<template>
	<div class="page" v-bind:class="backgroundCssBindOdd(getIsLightMode)">
		<div class="container">
			<div class="text">
				<p class="above-name">
					HI! I AM
				</p>
				<p class="name" v-bind:class="textCssBind(getIsLightMode)">
					David Shemian
				</p>
				<p class="under-name">
					FULL STACK DEVELOPER
				</p>
			</div>
			<div class="img-cont">
				<img src="../../assets/images/welcome-page-dark-illustration.png" v-bind:class="{ 'invert-image': !getIsLightMode }" />
			</div>
		</div>
	</div>
</template>

<script>
import { backgroundCssBindOdd, textCssBind } from '../../common/cssBindings';

export default {
	name: 'WelcomePageMobile',
	created() {
		this.backgroundCssBindOdd = backgroundCssBindOdd;
		this.textCssBind = textCssBind;
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

.page {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.container {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 50%;
}

.img-cont {
	align-self: flex-end;
}

.invert-image {
	-webkit-filter: invert(1);
	filter: invert(1);
}

.text {
	margin-left: 20px;
}

.above-name {
	font-size: 20px;
	color: $LightBlue;
}

.name {
	font-size: 35px;
	font-family: $roboto-black;
}

.under-name {
	font-size: 20px;
	color: $LightBlue;
	font-family: $roboto-bold;
}
</style>
