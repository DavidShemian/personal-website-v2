<template>
	<div class="container" v-bind:class="textCssBind(getIsLightMode)">
		<span class="name">
			DAVIDSHEMIAN
		</span>
		<div class="menu">
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
import { textCssBind } from '../../common/cssBindings';

export default {
	created() {
		this.textCssBind = textCssBind;
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
	background: rgba(0, 0, 0, 0);
}
.name {
	margin-left: 100px;
	font-family: roboto-medium;
}
.menu {
	@include transparent-button;

	display: flex;
	justify-content: space-between;
	margin-right: 30px;
	margin-left: auto;
	width: 60%;
}
</style>
