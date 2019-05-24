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
			<view class="form_top">
				<form class="form_box">
					<input @input="getAudioword" type="text" placeholder="请输入您要搜索的内容" value="" />
					<button><image src="../../static/search.png" mode=""></image></button>
				</form>
			</view>
			<commonVideo :video_list="video_list" :istype="0" :isDownload="0"></commonVideo>
		</view>
		<!-- 音频 -->
		<view class="audio_list" v-show="currentTab == 1">
			<view class="form_top">
				<form class="form_box">
					<input @input="getAudioword" type="text" placeholder="请输入您要搜索的内容" value="" />
					<button><image src="../../static/search.png" mode=""></image></button>
				</form>
			</view>
			<view class="audio_item" v-for="(item,index) in video_list" :key="index" @click="toAudioDetail(item)">
				<view class="audio_img">
					<image src="../../static/audio_cd1.png" class="cd_img" mode="widthFix"></image>
					<!-- <image :src="item.logo" class="logo_img" mode=""></image> -->
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
			page_video:1,
			page_video_count:1,
			page_movie:1,
			page_movie_count:1,
			navbar:[{name:"视频"},{name:"音频"}],
			currentTab:0,
			video_list:[],
			auto_list:[],
			keyword: ""
		}
	},
	components:{
		commonVideo
	},
	methods:{ 
		getAudioword: function(e){
			var that = this;
			that.keyword = e.detail.value; 
			uni.request({
				url: that.$api+'default/video-list&type='+that.currentTab+'&keyword='+that.keyword+'&access_token='+that.$access_token,
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
					if(that.currentTab == 0){							
						that.page_video_count = res.data.data.page_count;
					}else{							
						that.page_movie_count = res.data.data.page_count;
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
		},
		navbarTap: function(e){
			var that = this;
			that.currentTab = e;
				uni.startPullDownRefresh(); 
				uni.request({
					url: that.$api+'default/video-list&type='+that.currentTab+'&access_token='+that.$access_token,
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
						if(that.currentTab == 0){							
							that.page_video_count = res.data.data.page_count;
						}else{							
							that.page_movie_count = res.data.data.page_count;
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
		},
		toAudioDetail: function(e){
			uni.navigateTo({
				url: "/pages/audio/audio?id="+e.id
			})
		}
	},
	onLoad(opt) {
		var that = this;
		that.$access_token = uni.getStorageSync("access_token");
		that.$level = uni.getStorageSync("level");
		setTimeout(function () {
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
						id: item[i].id,
						poster: item[i].pic_url,
						// avatar: item[i].avatar,
						avatar: "../../static/video_img.png",
						title: item[i].title,
						look: item[i].num,
						video: item[i].url
					})
				}
				that.page_video_count = res.data.data.page_count;
				that.video_list = video_list;
			},
			fail: () => {
				uni.showToast({
					title:res.data.msg,
					icon:'none',
				});
			}
		});
		}, 1000);
		uni.startPullDownRefresh(); 
	},
	onPullDownRefresh() {
		var that = this;
		setTimeout(function () {
			uni.request({
				url: that.$api+'default/video-list&type='+that.currentTab+'&access_token='+that.$access_token,
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
					if(that.currentTab == 0){							
						that.page_video_count = res.data.data.page_count;
					}else{							
						that.page_movie_count = res.data.data.page_count;
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
			uni.stopPullDownRefresh();
		}, 1000);
	},
	//上拉触底
	onReachBottom(){
		let that = this;
		if(that.currentTab == 0){
			if(that.page_video == that.page_video_count){
			   uni.showToast({
				title:"没有更多数据了",
				icon:'none',
			   });
			   return false;
			}		
			that.page_video = parseInt(that.page_video)+parseInt(1)
			var page = that.page_video	
		}else{
			if(that.page_movie == that.page_movie_count){
			   uni.showToast({
				title:"没有更多数据了",
				icon:'none',
			   });
			   return false;
			}		
			that.page_movie = parseInt(that.page_movie)+parseInt(1)
			var page = that.page_movie	 
		} 
		
		uni.request({
			url: that.$api+'default/video-list&type='+that.currentTab+'&access_token='+that.$access_token,
			method: 'GET',
			data:{page:page},
			success: res => {
				let video_list = [];
				let item = res.data.data.list;
				for(let i in item){ 
					video_list.push({
						id: item[i].id,
						poster: item[i].pic_url,
						// avatar: item[i].avatar,
						avatar: "../../static/video_img.png",
						title: item[i].title,
						look: item[i].num,
						video: item[i].url							
					})
				}
				that.video_list = that.video_list.concat(video_list)
 			},
			fail: () => {
				uni.showToast({
					icon: 'none',
					title: res.data.msg,
					duration: 2000
				})
			}
		});
	}
}
</script>

<style scoped lang="scss">
	page{
		background: #f5f5f7 !important;
	}
	.form_top{
		padding: 0 0 20upx;
		overflow: hidden;
		box-sizing: border-box;
		.form_box{
			float: none;
			width: 100%;
			margin-top: 0;
		}
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
