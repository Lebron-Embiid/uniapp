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
						that.video = res.data.data.url
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
		width: 100%;
	}
</style>
