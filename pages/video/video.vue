<template>
	<view class="video_box">
		<video id="myVideo" autoplay="true" direction="90" :src="video"></video>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				id: "",
				video: ""
			}
		},
		onLoad(opt) {
			let that = this;
			that.id = opt.id;
			that.video = opt.video;
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
