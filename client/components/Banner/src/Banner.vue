<template>
    <div class="Banner">
        <div v-swiper:mySwiper="swiperOption">
    		<div class="swiper-wrapper" v-bind:style="{height: swiperOption.height}">
				<template v-for="(banner, index) in banners">
     				<div class="swiper-slide" v-bind:key="index">
						<img v-bind:src="banner" class="swiper-lazy banner-img">
						<div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
					</div>
				</template>		 
    		</div>
    		<!-- Add Pagination -->
    		<div class="swiper-pagination swiper-pagination-white"></div>
    		<!-- Navigation -->
   	 		<div class="swiper-button-next swiper-button-white"></div>
    		<div class="swiper-button-prev swiper-button-white"></div>
  		</div>
    </div>
</template>

<style lang="scss">
.Banner {
	display: flex;

	.swiper-slide {
		.banner-img {
			height: 100%;
    		width: 100%;
    		object-fit: cover;
		}
	}
}
</style>

/**
 * Banner
 */
<script>
export default {
	name: "BgBanner",
	props: {
		theme: {
			type: Object
		}
	},
	data () {
		return {
			banners: ["https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_960_720.jpg", "https://cdn.pixabay.com/photo/2016/12/01/18/18/manipulation-1875815_960_720.jpg", "https://cdn.pixabay.com/photo/2017/07/22/16/52/neuschwanstein-castle-2529319_960_720.jpg"],
			swiperOption: {
				lazy: true,
				spaceBetween: 30,
				effect: "fade",
				height: "400px",
				pagination: {
					el:	".swiper-pagination",
					clickable: true
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}
			}
		}
	},
	computed: {
	},
	methods: {
	}
}
</script>

