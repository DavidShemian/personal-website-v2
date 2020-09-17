<template>
	<div class="container">
		<h1>WHAT I KNOW TO DO</h1>
		<div class="carousel">
			<div class="nav-button prev-button">
				<img src="../../assets/images/play-button-full.png" />
			</div>
			<swiper class="swiper" :options="swiperOption" @ready="onSwiperReady" @tap="onSwiperClick">
				<swiper-slide v-for="(skill, index) of skillsData" v-bind:key="index">
					<img :src="getImgPath(skill.img)" />
				</swiper-slide>
			</swiper>
			<div class="nav-button next-button">
				<img src="../../assets/images/play-button-full.png" />
			</div>
		</div>
		<div class="pagination">{{ getPagination }}</div>
		<div class="description">
			<div class="content">
				<img :src="getImgPath(currentChoosenSkill.img)" />
				<p>
					{{
						`
						My bread and butter. \n
                        I have been working with Javascript (and Typescript) for the last year and a half, with great enjoyment.
						Javascript is amazing in my opinion because of many reasons, but mainly because of its versatility and huge supporting
						community. I try to keep myself updated on new versions, features and packages, and I work with many major library, such as
						Lodash and Moment.
                        `
					}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { backgroundCssBindOdd } from '../../common/cssBindings';
import { skillsData } from './SkillsData';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
	name: 'SkillsDesktop',
	data() {
		return {
			skillsData,
			skillDataLength: skillsData.length,
			currentChoosenSkill: skillsData[0],
			pagination: `1/${skillsData.length}`,
			swiper: {},
			swiperOption: {
				slidesPerView: 'auto',
				centeredSlides: true,
				spaceBetween: 30,
				loop: true,
				navigation: {
					nextEl: '.next-button',
					prevEl: '.prev-button',
				},
			},
		};
	},
	components: {
		swiper,
		swiperSlide,
	},
	methods: {
		getImgPath(img) {
			return require(`../../assets/images/${img}`);
		},
		onSwiperReady(swiper) {
			this.swiper = swiper;
		},
		onSwiperClick() {
			const { clickedIndex, clickedSlide } = this.swiper;
			if (clickedIndex) {
				const clickedSkillIndex = clickedSlide.getAttribute('data-swiper-slide-index');
				this.currentChoosenSkill = skillsData[clickedSkillIndex];
				this.swiper.slideTo(clickedIndex);
			}
		},
	},
	created() {
		this.backgroundCssBindOdd = backgroundCssBindOdd;
	},
	computed: {
		getIsLightMode() {
			return this.$store.getters.getIsLightMode;
		},
		getPagination() {
			return `${this.swiper?.realIndex + 1} / ${this.skillDataLength}`;
		},
	},
};
</script>

<style scoped lang="scss">
@import '../../common/variables.scss';

.container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding-top: 150px;
	padding-bottom: 150px;
}

.carousel {
	// background-color: red;
	display: flex;
	width: 90%;
	justify-content: center;
	align-items: center;
	// height: 400px;
	// background-color: yellow;
	.swiper {
		width: 100%;
		height: 50%;
		padding-top: 50px;
		padding-bottom: 30px;

		.swiper-slide {
			display: flex;
			justify-content: center;
			align-items: center;
			box-shadow: 5px 8px 10px #0f1010;
			border-radius: 12px;
			width: 175px;
			height: 175px;
			img {
				width: 80%;
				height: 80%;
			}
		}

		.swiper-slide-active {
			width: 225px;
			height: 225px;
		}
	}
}

.nav-button {
	height: 35px;
	width: 35px;
	margin-left: 50px;
	margin-right: 50px;
}

.prev-button {
	transform: rotate(180deg);
}

.description {
	width: 70%;
	// display: flex;

	p {
		width: 70%;
	}
	img {
		width: 30%;
	}
}
</style>
