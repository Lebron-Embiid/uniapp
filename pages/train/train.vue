<template>
	<view class="train">
		<view class="page_bg"></view>
		<view class="train_box">
			<view class="list_nav">
				<view v-for="(item,index) in navbar" :key="index" :class="[currentTab==index ? 'active' : '']" @click="navbarTap(index)">{{item.name}}</view>
			</view>
		</view>
		<!-- 视频 -->
		<view class="mt44"></view>
		<view class="video_list" v-show="currentTab == 0">
			<commonVideo :video_list="video_list" :isDownload="0"></commonVideo>
		</view>
		<!-- 音频 -->
		<view class="audio_list" v-show="currentTab == 1">
			<view class="audio_item" v-for="(item,index) in auto_list" :key="index" @click="toAudioDetail(item)">
				<view class="audio_img">
					<image src="../../static/audio_cd.png" class="cd_img" mode="widthFix"></image>
					<image :src="item.logo" class="logo_img" mode=""></image>
				</view>
				<view class="ai_title">{{item.title}}</view>
				<view class="ai_info">听众：{{item.look}}</view>
				<!-- <audio :src="item.src" controls></audio> -->
				<!-- <imt-audio continue :control="false" :src="item.src" :duration="item.duration"></imt-audio> -->
			</view>
		</view>
	</view>
</template>

<script>
import commonVideo from "@/components/common-video.vue"
export default{
	data(){
		return{
			navbar:[{name:"视频"},{name:"音频"}],
			currentTab:0,
			video_list:[
// 				{
// 					id: 1,
// 					poster: "../../static/video_poster1.jpg",
// 					avatar: "../../static/video_img.png",
// 					title: "冬季水嫩肌肤养成法",
// 					look: "1.2w",
// 					video: "https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"
// 				},
// 				{
// 					id: 2,
// 					poster: "../../static/video_poster2.jpg",
// 					avatar: "../../static/video_img.png",
// 					title: "问题性肌肤全解分析—说说色斑那点事",
// 					look: "10w",
// 					video: "https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"
// 				},
// 				{
// 					id: 3,
// 					poster: "../../static/video_poster3.jpg",
// 					avatar: "../../static/video_img.png",
// 					title: "问题性肌肤全解分析—痘痘肌",
// 					look: "10w",
// 					video: "https://vd.yinyuetai.com/sh.yinyuetai.com/uploads/videos/common/359E01658525D368F4C5CD4C60C9D479.mp4"
// 				}
			],
			auto_list:[
// 				{
// 					id: 1,
// 					title: "如何快速找到精准粉丝",
// 					look: "1.0w",
// 					src: "http://other.web.nf01.sycdn.kuwo.cn/resource/n2/23/43/994306111.mp3",
// 					duration: 229
// 				},
// 				{
// 					id: 2,
// 					title: "如何快速找到精准粉丝",
// 					look: "1.2w",
// 					src: "http://mouyizhan.com/4.mp3",
// 					duration: 205
// 				},
// 				{
// 					id: 3,
// 					title: "如何快速找到精准粉丝",
// 					look: "1.0w",
// 					src: "http://mouyizhan.com/5.mp3",
// 					duration: 228
// 				}
			]
		}
	},
	components:{
		commonVideo
	},
	methods:{
		navbarTap: function(e){
			var that = this;
			that.currentTab = e;
			if(that.currentTab == 0){
				uni.request({
					url: that.$api+'default/video-list&type=0&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						var video_list1 = [];
						var item = res.data.data.list;
						for(let i in item){
							video_list1.push({
								id: item[i].id,
								poster: item[i].pic_url,
								// avatar: item[i].avatar,
								avatar: "../../static/video_img.png",
								title: item[i].title,
								look: item[i].num,
								video: item[i].url
							})
						}
						that.video_list = video_list1;
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
					url: that.$api+'default/video-list&type=1&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						var auto_list = [];
						var item = res.data.data.list;
						for(let i in item){
							auto_list.push({
								id: item[i].id,
								title: item[i].title,
								look: item[i].num,
								src: item[i].url,
								logo: item[i].pic_url,
								duration: item[i].audio_num
							})
						}
						that.auto_list = auto_list;
					},
					fail: () => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
			}
		},
		toAudioDetail: function(e){
			uni.navigateTo({
				url: "/pages/audio/audio?id="+e.id
			})
		}
	},
	onLoad(opt) {
		var that = this;
		uni.request({
			url: that.$api+'default/video-list&type=0&access_token='+that.$access_token,
			method: 'GET',
			dataType: "json",
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: res => {
				var video_list = [];
				var item = res.data.data.list;
				for(let i in item){
					video_list.push({
						poster: item[i].pic_url,
						// avatar: item[i].avatar,
						avatar: "../../static/video_img.png",
						title: item[i].title,
						look: item[i].num,
						video: item[i].url
					})
				}
				that.video_list = video_list;
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
	page{
		background: #f5f5f7 !important;
	}
	.video_list{
		padding: 30upx 20upx;
		box-sizing: border-box;
	}
// 	.audio_list{
// 		display: flex;
// 		justify-content: space-between;
// 		flex-wrap: wrap;
// 		align-items: center;
// 		.audio_item{
// 			width: 48%;
// 			padding: 20upx;
// 			image{
// 				width: 120upx;
// 				height: 120upx !important;
// 				margin-bottom: 20upx;
// 			}
// 		}
// 	}
	// 音频样式
	.ai_info{
		color: #4f4f50;
		font-size: 20upx;
		text-align: left;
		margin: 10upx 0 0;
	}
</style>
