<template>
	<div class="page" v-bind:class="backgroundCssBindOdd(getIsLightMode)">
		<div class="container">
			<img src="../../assets/images/welcome-page-dark-illustration.png" v-bind:class="invertImageBind(getIsLightMode)" />
			<div class="text" v-bind:class="{ ...textCssBind(getIsLightMode), ...rightToLeftBind(getIsRightToLeft) }">
				<p class="above-name">
					{{ $t('welcome_page_above_name') }}
				</p>
				<p class="name" v-bind:class="textCssBind(getIsLightMode)">
					{{ $t('welcome_page_name') }}
				</p>
				<p class="under-name">
					{{ $t('welcome_page_under_name') }}
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
import { backgroundCssBindOdd, textCssBind, invertImageBind, rightToLeftBind } from '../../common/cssBindings';

export default {
	name: 'WelcomePage',
	created() {
		this.backgroundCssBindOdd = backgroundCssBindOdd;
		this.textCssBind = textCssBind;
		this.invertImageBind = invertImageBind;
		this.rightToLeftBind = rightToLeftBind;
	},
	computed: {
		getIsLightMode() {
			return this.$store.getters.getIsLightMode;
		},
		getIsRightToLeft() {
			return this.$store.getters.getIsRightToLeft;
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
	font-family: $roboto-black;
}

.under-name {
	font-size: 40px;
	color: $LightBlue;
	font-family: $roboto-bold;
}

.vertical {
	align-self: flex-end;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-left: 20px;
	.line {
		border-left: 1px solid;
		height: 150px;
		margin-top: 10px;
	}
	.email {
		font-size: 20px;
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
	.vertical {
		.email {
			font-size: 25px;
		}
		.line {
			border-left: 2px solid;
			height: 200px;
		}
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
	.vertical {
		.email {
			font-size: 15px;
		}
		.line {
			border-left: 1px solid;
			height: 100px;
		}
	}
}
</style>
