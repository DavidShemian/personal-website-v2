<template>
	<div class="container" v-bind:class="backgroundCssBindEven(getIsLightMode)">
		<img v-if="getIsLightMode" src="../assets/images/about-black.png" />
		<img v-if="!getIsLightMode" src="../assets/images/about-white.png" />
		<div class="text">
			<h1>NICE TO MEET</h1>
			<p>
				{{
					`The world of software development is fast paced. \n
                New technologies arrive every day. \n 
                This is why I believe that the most important skill a software developer can have today
                is the ability to learn new things quickly and efficiently. \n
                I make sure to stay updated with all the new stuff that get released and experience as much and I can. \n
                My goal is to learn at least one new thing every day.`
				}}
			</p>
		</div>
	</div>
</template>

<script>
import { backgroundCssBindEven } from '../common/cssBindings';

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
@import '../common/variables.scss';

.container {
	width: 100%;
	height: 400px;
	display: flex;
	align-items: center;
	justify-content: center;

	img {
		width: 350px;
		height: 350px;
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
		line-height: 25px;
	}
}
</style>
