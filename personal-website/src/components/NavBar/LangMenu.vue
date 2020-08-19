<template>
	<div class="lang-menu-container" @mouseover="toggleIsLangMenuOpen(true)" @mouseleave="toggleIsLangMenuOpen(false)">
		<div class="button">
			<p>LANG</p>
			<img src="../../assets/images/down-arrow.png" v-bind:class="invertImageBind(getIsLightMode)" />
		</div>
		<div v-if="isLangMenuOpen" class="lang-menu" v-bind:class="backgroundCssBindOdd(getIsLightMode)">
			<button v-on:click="toggleLocal('en')">
				<div class="lang-menu-button">
					<img src="../../assets/images/english.png" />
					<p>ENGLISH</p>
				</div>
			</button>
			<button v-on:click="toggleLocal('heb')">
				<div class="lang-menu-button">
					<img src="../../assets/images/hebrew.png" />
					<p>HEBREW</p>
				</div>
			</button>
		</div>
	</div>
</template>

<script>
import { backgroundCssBindOdd, invertImageBind } from '../../common/cssBindings';

export default {
	name: 'LangMenu',
	created() {
		this.backgroundCssBindOdd = backgroundCssBindOdd;
		this.invertImageBind = invertImageBind;
	},
	data() {
		return {
			isLangMenuOpen: false,
			isHoveringButton: false,
			isHoveringMenu: false,
		};
	},
	methods: {
		toggleIsLangMenuOpen(value) {
			this.isLangMenuOpen = value;
		},
		toggleLocal(value) {
			this.$store.dispatch('changeLocal', value);
		},
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

.lang-menu-container {
	@include transparent-button;
	$button-height: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	.button {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: $button-height;
		img {
			margin-left: 10px;
			width: 16px;
			height: 16px;
		}
	}

	.lang-menu {
		display: flex;
		flex-direction: column;
		border: 1px solid $Grey;
		border-radius: 3px;
		position: fixed;
		margin-top: 100px;
		.lang-menu-button {
			display: flex;
			align-items: center;
			padding: 10px;
			img {
				width: 30px;
				height: 30px;
				margin-right: 10px;
			}
			p {
				font-size: 20px;
			}
		}
		button:hover {
			background-color: $LightGrey;
		}
	}
}
</style>
