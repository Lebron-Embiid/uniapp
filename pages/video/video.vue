<template>
	<view class="video_box">
		<video id="myVideo" autoplay="true" direction="0" :show-fullscreen-btn="full" :show-play-btn="play" :show-center-play-btn="play" :src="video"></video>
		<view class="video_title">
			<block v-if="content!=''">
				<u-parse :content="content"></u-parse>
			</block>
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/u-parse/u-parse.vue'
	export default{
		data(){
			return{
				controls: true,
				play: true,
				full: false,
				id: "",
				video: "",
				content: ""
			}
		},
		components:{
			uParse
		},
		onLoad(opt) {
			let that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			that.id = opt.id;
			var istype = opt.istype;
			console.log(istype)
			if(istype == 0){
				uni.request({
					url: that.$api+'default/video-detail&access_token='+that.$access_token+'&id='+opt.id,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						that.video = res.data.data.url,
						that.content = res.data.data.content
					},
					fail: () => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
			}else{
				uni.request({
					url: that.$api+'default/movies-detail&access_token='+that.$access_token+'&id='+opt.id,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						that.video = res.data.data.url
					},
					fail: () => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
			}
			
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
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	.video_title{
		font-size: 28upx;
		margin-top: 10upx;
	}
</style>
