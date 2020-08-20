<template>
	<div class="container" v-bind:class="backgroundCssBindOdd(getIsLightMode)">
		<div class="cards">
			<h1 class="title" v-bind:class="textCssBind(getIsLightMode)">{{ $t('experience_title') }}</h1>
			<div v-for="(experience, index) in experienceData" v-bind:key="index">
				<ExperienceDekstopCardVue
					:position="experience.position"
					:company="experience.company"
					:dates="experience.dates"
					:description="experience.description"
					:tags="experience.tags"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { backgroundCssBindOdd, textCssBind } from '../../common/cssBindings';
import ExperienceDekstopCardVue from './ExperienceDekstopCard.vue';
import { experienceData } from './ExperienceData';

export default {
	name: 'ExperienceDesktop',
	data() {
		return {
			experienceData,
		};
	},
	components: {
		ExperienceDekstopCardVue,
	},
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

.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 20px;
	padding-bottom: 20px;

	.cards {
		.title {
			font-family: $roboto-black;
			margin-bottom: 20px;
		}
		width: 70%;
		height: 50%;
	}
}
</style>
