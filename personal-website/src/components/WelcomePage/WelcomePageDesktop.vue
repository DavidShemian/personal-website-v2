<template>
	<div class="page" v-bind:class="backgroundCssBindOdd(getIsLightMode)">
		<div class="container">
			<img src="../../assets/images/welcome-page-dark-illustration.png" v-bind:class="{ 'invert-image': !getIsLightMode }" />
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
			<div class="vertical" v-bind:class="textCssBind(getIsLightMode)">
				<p class="email">davidshemian18@gmail.com</p>
				<div class="line"></div>
			</div>
		</div>
	</div>
</template>

<script>
import { backgroundCssBindOdd, textCssBind } from '../../common/cssBindings';

export default {
	name: 'WelcomePage',
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
	position: relative;
	margin: 0 auto;
	display: flex;
	justify-content: flex-end;
	width: 90%;
	margin-top: 50px;
}

.invert-image {
	-webkit-filter: invert(1);
	filter: invert(1);
}

.text {
	position: absolute;
	top: 50px;
	left: 100px;
}

.above-name {
	font-size: 30px;
	color: $LightBlue;
}

.name {
	font-size: 90px;
	font-family: roboto-black;
}

.under-name {
	font-size: 40px;
	color: $LightBlue;
	font-family: roboto-bold;
}

.vertical {
	align-self: flex-end;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 20px;
	.line {
		border-left: 1px solid;
		height: 100px;
		margin-top: 10px;
	}
	.email {
		writing-mode: vertical-rl;
		text-orientation: mixed;
	}
}

@include for-big-desktop-up {
	.above-name {
		font-size: 40px;
	}
	.name {
		font-size: 130px;
	}
	.under-name {
		font-size: 60px;
	}
}

@include for-desktop-up {
	.above-name {
		font-size: 40px;
	}
	.name {
		font-size: 100px;
	}
	.under-name {
		font-size: 60px;
	}
}

@include for-tablet-landscape-up {
	.above-name {
		font-size: 20px;
	}
	.name {
		font-size: 50px;
	}
	.under-name {
		font-size: 30px;
	}
}
</style>
