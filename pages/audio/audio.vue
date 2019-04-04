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
import imtAudio from "../../components/imt-audio/imt-audio.vue"
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
		this.title = opt.title;
		this.look = opt.look;
		this.src = opt.src;
		this.duration = parseInt(opt.duration);
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
