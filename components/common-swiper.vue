<template>
	<view class="common-swiper">
		<swiper class="swiper" :indicator-dots="indicatorDots" circular="true" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view class="swiper-item"><image :src="item" mode="aspectFill"></image></view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 800
			}
		},
		props:{
			swiperList: Array
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.swiper{
		height: 400upx;
		.swiper-item image{
			display: block;
			width: 100%;
		}
	}
</style>
