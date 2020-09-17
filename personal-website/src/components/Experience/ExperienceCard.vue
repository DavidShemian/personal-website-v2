<template>
	<div
		class="card"
		v-bind:style="[
			isOpen ? { height: 'auto', padding: '20px 0px 20px 0px' } : { height: '80px', 'justify-content': 'center' },
			getIsLightMode
				? { 'background-color': '#d0d0d0', 'box-shadow': '5px 8px 10px #9a9a9a' }
				: { 'background-color': '#2E2E2E', 'box-shadow': '5px 8px 10px #0F1010' },
		]"
	>
		<div class="content" v-bind:class="textCssBind(getIsLightMode)">
			<div class="header">
				<p class="position">
					{{ position }}
				</p>
				<p class="company">{{ company }}</p>
				<img v-if="!isOpen" v-on:click="openCard" src="../../assets/images/play-button-empty.png" />
				<img v-if="isOpen" v-on:click="closeCard" src="../../assets/images/play-button-full.png" class="open-card-play-button" />
			</div>
			<div v-if="isOpen" class="extended">
				<div class="description">
					<div>{{ dates }}</div>
					<p>
						{{ description }}
					</p>
				</div>
				<div class="tags">
					<div class="tag" v-for="tag in tags" v-bind:key="tag">
						{{ tag }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { backgroundCssBindEven, textCssBind } from '../../common/cssBindings';

export default {
	name: 'ExperienceCard',
	data() {
		return {
			isOpen: false,
		};
	},
	props: {
		position: String,
		company: String,
		description: String,
		dates: String,
		tags: Array,
	},
	methods: {
		closeCard() {
			this.isOpen = false;
		},
		openCard() {
			this.isOpen = true;
		},
	},
	created() {
		this.backgroundCssBindEven = backgroundCssBindEven;
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

.card {
	height: 10vh;
	border-radius: 12px;
	margin-bottom: 50px;
	background: 0% 0% no-repeat padding-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.content {
		width: 90%;
		font-size: 14px;
	}

	.header {
		display: flex;
		align-items: center;

		p {
			font-size: 30px;
			font-family: $roboto-medium;
		}
		img {
			width: 25px;
			height: 25px;
			margin-left: auto;
		}
		.position {
			margin-right: 50px;
		}
		.company {
			color: $Blue;
		}
		.open-card-play-button {
			transform: rotate(90deg);
		}
	}

	.description {
		width: 80%;
		margin-top: 10px;
		p {
			margin-top: 10px;
			line-height: 25px;
		}
	}

	.tags {
		display: flex;
		.tag {
			margin-top: 25px;
			padding: 5px 10px 5px 10px;
			border: 2px solid #516ee1;
			border-radius: 8px;
			margin-right: 10px;
		}
	}
}

@include for-phone-only {
	.card {
		.header {
			// background-color: green;
			p {
				font-size: 16px;
			}
			img {
				width: 15px;
				height: 15px;
				margin-left: auto;
			}
			.position {
				margin-right: 15px;
			}
		}
		.tags {
			flex-wrap: wrap;
			// background-color: green;
		}
	}
}
</style>
