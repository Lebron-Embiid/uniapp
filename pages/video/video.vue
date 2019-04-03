<template>
	<view class="video_box">
		<video id="myVideo" autoplay="true" direction="90" src="https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"></video>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onLoad(opt) {
			console.log(opt)
		}
	}
</script>

<style scoped>
	.video_box{
		padding: 30upx 20upx;
		box-sizing: border-box;
	}
	#myVideo{
		display: block;
		width: 100%;
	}
</style>
