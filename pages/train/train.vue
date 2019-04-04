<template>
	<view class="train">
		<view class="train_box">
			<view class="list_nav">
				<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
			</view>
		</view>
		<!-- 视频 -->
		<view class="mt44"></view>
		<view class="video_list" v-show="currentTab == 0">
			<commonVideo :video_list="video_list"></commonVideo>
		</view>
		<!-- 音频 -->
		<view class="audio_list" v-show="currentTab == 1">
			<view class="audio_item" v-for="(item,index) in auto_list" :key="index" @click="toAudioDetail(item)">
				<image src="../../static/audio_cd.png" mode="widthFix"></image>
				<view class="ai_title">{{item.title}}</view>
				<view class="ai_info">听众：{{item.look}}</view>
				<!-- <audio :src="item.src" controls></audio> -->
				<!-- <imt-audio continue :control="false" :src="item.src" :duration="item.duration"></imt-audio> -->
			</view>
		</view>
	</view>
</template>

<script>
import commonVideo from "../../components/common-video.vue"
export default{
	data(){
		return{
			navbar:[{name:"视频"},{name:"音频"}],
			currentTab:0,
			video_list:[
				{
					poster: "../../static/video_poster1.jpg",
					avatar: "../../static/video_img.png",
					title: "冬季水嫩肌肤养成法",
					look: "1.2w",
					video: "https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"
				},
				{
					poster: "../../static/video_poster2.jpg",
					avatar: "../../static/video_img.png",
					title: "问题性肌肤全解分析—说说色斑那点事",
					look: "10w",
					video: "https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"
				},
				{
					poster: "../../static/video_poster3.jpg",
					avatar: "../../static/video_img.png",
					title: "问题性肌肤全解分析—痘痘肌",
					look: "10w",
					video: "https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"
				}
			],
			auto_list:[
				{
					id: 1,
					title: "如何快速找到精准粉丝",
					look: "1.0w",
					src: "http://other.web.nf01.sycdn.kuwo.cn/resource/n2/23/43/994306111.mp3",
					duration: 229
				},
				{
					id: 2,
					title: "如何快速找到精准粉丝",
					look: "1.2w",
					src: "http://mouyizhan.com/4.mp3",
					duration: 205
				},
				{
					id: 3,
					title: "如何快速找到精准粉丝",
					look: "1.0w",
					src: "http://mouyizhan.com/5.mp3",
					duration: 228
				}
			]
		}
	},
	components:{
		commonVideo
	},
	methods:{
		navbarTap: function(e){
			this.currentTab = e;
		},
		toAudioDetail: function(e){
			uni.navigateTo({
				url: "/pages/audio/audio?id="+e.id+"&title="+e.title+"&look="+e.look+"&src="+e.src+"&duration="+e.duration
			})
		}
	}
}
</script>

<style scoped lang="scss">
	page{
		background: #f5f5f7;
	}
	.video_list{
		padding: 30upx 20upx;
		box-sizing: border-box;
	}
	.audio_list{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		.audio_item{
			width: 48%;
			padding: 20upx;
			image{
				width: 120upx;
				height: 120upx !important;
				margin-bottom: 20upx;
			}
		}
	}
	// 音频样式
	.ai_info{
		color: #4f4f50;
		font-size: 20upx;
		text-align: left;
		margin: 10upx 0 0;
	}
</style>
