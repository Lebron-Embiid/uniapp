<template>
	<view class="video_box">
		<video id="myVideo" autoplay="true" direction="-90" :show-fullscreen-btn="full" :show-play-btn="play" :show-center-play-btn="play" :src="video"></video>
		<view class="video_title">
			<block v-if="content!=''">
				<u-parse :content="content"></u-parse>
			</block>
		</view>
	</view>
</template>

<script>
	const innerAudioContext = uni.createInnerAudioContext();
	//#ifdef APP-PLUS
	const pp = plus.audio.createPlayer("_Doc/Audio/test.mp3");
	//#endif
	import uParse from '@/components/u-parse/u-parse.vue'
	export default{
		data(){
			return{
				controls: true,
				play: true,
				full: true,
				id: "",
				video: "",
				content: ""
			}
		},
		components:{
			uParse
		},
		onShow() {
			console.log(innerAudioContext.src+"123")
			innerAudioContext.src = "";
			innerAudioContext.pause();
			innerAudioContext.stop();
			//#ifdef APP-PLUS
			pp.close();
			pp.pause();
			pp.stop();
			//#endif
		},
		onLoad(opt) {
			this.videoContext = uni.createVideoContext('myVideo')
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
					fail: (res) => {
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
						that.video = res.data.data.url;
						this.videoContext.requestFullScreen(0);
					},
					fail: (res) => {
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
		/* position: fixed;
		left: 0;
		top: 0; */
		width: 100%;
		/* height: 100%; */
	}
	.video_title{
		font-size: 28upx;
		margin-top: 10upx;
	}
</style>
