<template>
	<view class="common-swiper">
		<swiper class="swiper" :indicator-dots="indicatorDots" circular="true" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in swiperList" :key="index" @click="preview(index)">
				<view class="swiper-item"><image :src="item" mode="widthFix"></image></view>
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
			preview(e) {
				this.$emit('preview',e)
			}
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
