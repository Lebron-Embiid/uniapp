<template>
	<view class="audio_box">
		<!-- 音频 -->
		<view class="audio_list">
			<view class="audio_item">
				<view class="audio_img">
					<image :class="isRotate == true?'rotate':''" class="cd_img" src="../../static/audio_cd1.png" mode="widthFix"></image>
					<!-- <image :src="audio_logo" class="logo_img" mode=""></image> -->
				</view>
				<view class="ai_title">{{title}}</view>
				<view class="ai_info">听众：{{look}}</view>
				<imt-audio ref="audios" :control="control" :autoplay="auto" :isPause="ispause" :src="src" :duration="duration"></imt-audio>
			</view>
			<view class="audio_title">
				<block v-if="content!=''">
					<u-parse :content="content"></u-parse>
				</block>
				<!-- <image :src="audio_logo" class="logo_img" mode="widthFix"></image> -->
			</view>
		</view>
	</view>
</template>

<script>
import imtAudio from "@/components/imt-audio/imt-audio.vue"
import uParse from '@/components/u-parse/u-parse.vue'
import audio from '@/common/util.js'
const innerAudioContext = uni.createInnerAudioContext();
export default{
	data(){
		return{
			id: "",
			isRotate: true,
			title: "",
			look: "",
			src: "",
			duration: 0,
			audio_logo: "../../static/audio_logo.png",
			pic_url: "",
			control: false,
			auto: true,
			content: "",
			ispause: true
		}
	},
	components: {
		imtAudio,
		uParse
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
		that.id = opt.id;
	},
	onShow() {
		var that = this;
		that.$access_token = uni.getStorageSync("access_token");
		that.$level = uni.getStorageSync("level");
		uni.request({
			url: that.$api+'default/video-detail&access_token='+that.$access_token+'&id='+that.id,
			method: 'GET',
			dataType: "json",
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				that.title = res.data.data.title;
				that.look = res.data.data.num;
				that.src = res.data.data.url;
				innerAudioContext.src = res.data.data.url;
				console.log(innerAudioContext.src)
				innerAudioContext.onCanplay(function(){
					that.duration = parseInt(Math.ceil(innerAudioContext.duration));
				}) 
				that.audio_logo = res.data.data.pic_url;
				that.content = res.data.data.content;
			},
			fail: (res) => {
				uni.showToast({
					title:res.data.msg,
					icon:'none',
				});
			}
		});
	},
	onBackPress() {
		// audio.pause();
		this.$refs.audios.next();
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
	.audio_title{
		font-size: 28upx;
		image{
			display: block;
			max-width: 100%;
		}
	}
</style>
