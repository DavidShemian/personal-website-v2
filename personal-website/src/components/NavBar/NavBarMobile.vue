<template>
	<div>
		<div
			v-if="!isMenuOpen"
			class="header"
			v-bind:class="{ ...textCssBind(getIsLightMode), ...backgroundCssBindOdd(getIsLightMode), 'box-shadow': !getIsWindowTop }"
		>
			<div class="burger-container" v-on:click="changeBurgerButton">
				<img src="../../assets/images/menu.png" />
			</div>
			<div class="name">DAVIDSHEMIAN</div>
			<div class="hidden-for-centering"></div>
		</div>
		<div class="menu" v-bind:class="{ ...backgroundCssBindEven(getIsLightMode), 'slide-animation': isMenuOpen }">
			<div class="x-container">
				<img v-on:click="changeBurgerButton" width="15" height="15" src="../../assets/images/x-button.png" />
			</div>
			<div class="menu-items">
				<button>
					ABOUT
				</button>
				<button>
					EXPERIENCE
				</button>
				<button>
					SKILLS
				</button>
				<button>
					CONTACT
				</button>
				<button>
					RESUME
				</button>
				<img v-on:click="toggleViweMode" alt="change view mode" width="70" height="70" src="../../assets/images/sun-moon.png" />
			</div>
		</div>
	</div>
</template>

<script>
import { textCssBind, backgroundCssBindOdd, backgroundCssBindEven } from '../../common/cssBindings';

export default {
	created() {
		this.textCssBind = textCssBind;
		this.backgroundCssBindOdd = backgroundCssBindOdd;
		this.backgroundCssBindEven = backgroundCssBindEven;
	},
	data() {
		return {
			isMenuOpen: false,
		};
	},
	methods: {
		changeBurgerButton() {
			this.isMenuOpen = !this.isMenuOpen;
		},
		toggleViweMode() {
			this.$store.dispatch('toggleViewMode', !this.getIsLightMode);
		},
	},
	computed: {
		getIsLightMode() {
			return this.$store.getters.getIsLightMode;
		},
		getIsWindowTop() {
			return this.$store.getters.getIsWindowTop;
		},
	},
};
</script>

<style scoped lang="scss">
@import '../../common/variables.scss';

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;
	width: 100%;
	max-width: 100%;
	height: 48px;
	position: fixed;
	z-index: 100;
	text-align: center;
	vertical-align: middle;
	$burger-width-height: 20px;
	$burger-margin: 25px;
	.burger-container {
		margin-left: $burger-margin;
		img {
			width: $burger-width-height;
			height: $burger-width-height;
		}
	}
	.hidden-for-centering {
		margin-right: $burger-width-height + $burger-margin;
	}
}

.box-shadow {
	box-shadow: 0px 1px 1px #787878;
}

.name {
	font-family: $roboto-medium;
}

.menu {
	height: 100vh;
	z-index: 50;
	position: fixed;
	display: flex;
	flex-direction: column;
	width: 40vw;
	left: -40vw;
	transition: all 300ms linear;
	-webkit-transition: all 300ms linear;
	img {
		margin-right: 5px;
	}
	button {
		color: $White;
	}
}

.slide-animation {
	transform: translate3d(40vw, 0, 0);
	animation-timing-function: steps(4, start);
}

.menu-items {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-self: center;
	height: 60%;
	margin-top: 40%;

	@include transparent-button;
	button {
		display: inline-block;
		height: 40px;
		border: 1px solid #6a98f0;
		border-radius: 8px;
	}
}

.x-container {
	justify-self: flex-start;
	margin-top: 10px;
	display: flex;
	justify-content: flex-end;
	img {
		margin-right: 10px;
	}
}
</style>
