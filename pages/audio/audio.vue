<template>
	<view class="audio_box">
		<!-- 音频 -->
		<view class="audio_list">
			<view class="audio_item">
				<image :class="isRotate == true?'rotate':''" src="../../static/audio_cd.png" mode="widthFix"></image>
				<view class="ai_title">{{title}}</view>
				<view class="ai_info">听众：{{look}}</view>
				<imt-audio continue :control="false" :autoplay="true" :src="src" :duration="duration" @click="changeRotate"></imt-audio>
			</view>
		</view>
	</view>
</template>

<script>
import imtAudio from "@/components/imt-audio/imt-audio.vue"
export default{
	data(){
		return{
			isRotate: true,
			title: "",
			look: "",
			src: "",
			duration: 0
		}
	},
	components: {
		imtAudio
	},
	methods:{
		changeRotate: function(e){
			if(this.isRotate == true){
				this.isRotate = false;
				console.log(this.isRotate)
			}else{
				this.isRotate = true;
				console.log(this.isRotate)
			}
		}
	},
	onLoad(opt) {
		var that = this;
		uni.request({
			url: that.$api+'default/video-detail&access_token='+that.$access_token+'&id='+opt.id,
			method: 'GET',
			dataType: "json",
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				that.title = res.data.data.title;
				that.look = res.data.data.num;
				that.src = res.data.data.url;
				that.duration = parseInt(res.data.data.audio_num);
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
</script>

<style scoped lang="scss">
	.ai_info{
		color: #4f4f50;
		font-size: 20upx;
		margin: 10upx 0 20upx;
		text-align: right;
	}
</style>
