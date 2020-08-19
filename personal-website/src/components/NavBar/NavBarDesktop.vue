<template>
	<div class="container" v-bind:class="{ ...textCssBind(getIsLightMode), ...backgroundCssBindOdd(getIsLightMode), 'box-shadow': !getIsWindowTop }">
		<span class="name">
			DAVIDSHEMIAN
		</span>
		<div class="menu">
			<LangMenuVue />
			<button>
				{{ $t('menu_about') }}
			</button>
			<button>
				{{ $t('menu_experience') }}
			</button>
			<button>
				{{ $t('menu_skills') }}
			</button>
			<button>
				{{ $t('menu_contact') }}
			</button>
			<button>
				{{ $t('menu_resume') }}
			</button>
			<toggle-button
				:value="getIsLightMode"
				@change="toggleViweMode"
				:labels="{ checked: 'LIGHT', unchecked: 'DARK' }"
				:color="{ checked: '#516EE1', unchecked: '#2E2E2E' }"
				:width="90"
				:height="40"
			/>
		</div>
	</div>
</template>

<script>
import { textCssBind, backgroundCssBindOdd } from '../../common/cssBindings';
import LangMenuVue from './LangMenu.vue';
export default {
	components: {
		LangMenuVue,
	},
	created() {
		this.textCssBind = textCssBind;
		this.backgroundCssBindOdd = backgroundCssBindOdd;
	},
	methods: {
		toggleViweMode({ value }) {
			this.$store.dispatch('toggleViewMode', value);
		},
	},
	computed: {
		getIsLightMode() {
			return this.$store.getters.getIsLightMode;
		},
		getIsWindowTop() {
			console.log('getIsWindowTop -> this.$store.getters.getIsWindowTop', this.$store.getters.getIsWindowTop);
			return this.$store.getters.getIsWindowTop;
		},
	},
};
</script>

<style scoped lang="scss">
@import '../../common/variables.scss';
.container {
	display: flex;
	align-items: center;
	font-size: 16px;
	width: 100%;
	max-width: 100%;
	height: 10vh;
	position: fixed;
	z-index: 999;
}

.box-shadow {
	box-shadow: 0px 1px 1px #787878;
}

.name {
	margin-left: 100px;
	font-family: $roboto-medium;
}
.menu {
	@include transparent-button;

	display: flex;
	justify-content: space-between;
	margin-right: 30px;
	margin-left: auto;
	width: 60%;
}

@include for-big-desktop-up {
	.menu,
	.name {
		font-size: 30px;
	}
}
</style>
