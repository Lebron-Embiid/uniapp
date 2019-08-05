<template>
	<view class="common_box">
		<view class="video_item" v-for="(item,index) in video_list" :key="index">
			<view class="v_poster" @click="toVideoDetail(item.id)">
				<image :src="item.poster" class="poster_img" mode="widthFix"></image>
				<view class="v_play">
					<image src="../../static/play_btn.png" mode="widthFix"></image>
				</view>
			</view>
			<view class="v_info">
				<view class="head_img">
					<image :src="item.avatar" mode="widthFix"></image>
				</view>
				<view class="v_title" :class="[istype == 1?'six':'']">{{item.title}}</view>
				<view class="v_look">观看数：{{item.look}}</view>
				<block v-if="isDownload == 1">
					<view class="v_download last" @click="toShare(item.title,item.poster,item.video)"><image src="../../static/share.png" mode="widthFix"></image></view>
					<view class="v_download" @click="toDownload(item.video)"><image src="../../static/download.png" mode="widthFix"></image></view>
				</block>
			</view>
		</view>
		<view class="down_process" :class="[isDown == true?'active':'']">下载中: {{process_num}}</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				process_num: '',
				isDown: false
			}
		},
		props:{
			isDownload: Number,
			video_list: Array,
			istype: Number,
		},
		methods:{
			toVideoDetail: function(e){
				if(this.istype == 0){
					uni.navigateTo({
						url: "/pages/video/video?id="+e+"&istype="+this.istype
					})
				}else{
					uni.navigateTo({
						url: "/pages/video1/video1?id="+e+"&istype="+this.istype
					})					
				}
			},
			toShare: function(title,pic,url){
				uni.share({
					provider: "weixin",
					scene: "WXSceneSession",
					type: 4,
					title: title,
					imageUrl: pic,
					mediaUrl: url,
					success: function (res) {
						console.log(JSON.stringify(res));
					},
					fail: function (err) {
						console.log(JSON.stringify(err));
					}
				});
			},
			toDownload: function(src){
				var that = this;
				uni.showModal({
					title: "提示",
					content: "确认下载该视频？",
					success: (res) => {
						if(res.confirm){
							that.isDown = true;
							// uni.showLoading({
							// 	title: '下载中:'+ that.process
							// })
							console.log(src);
							// uni.downloadFile({
							// 	url: src, //仅为示例，并非真实的资源
							// 	success: (res) => {
							// 		console.log(res);
							// 		if (res.statusCode === 200) {
							// 			uni.hideLoading();
							// 			uni.showToast({
							// 				title: '下载完成',
							// 				icon: 'none'
							// 			})
							// 		}
							// 	}
							// });
							
							const downloadTask = uni.downloadFile({
								url: src,
								success: (res) => {
									if (res.statusCode === 200) {
										console.log(res.tempFilePath);
										uni.saveVideoToPhotosAlbum({
											filePath: res.tempFilePath,
											success: function () {
												// uni.hideLoading();
												uni.showToast({
													title: '下载完成',
													icon: 'none'
												})
											}
										})
									}
								},
								fail: (res) => {
									uni.showToast({
										title: res.errMsg,
										icon: 'none'
									})
								}
							});
							
							downloadTask.onProgressUpdate((res) => {
								console.log('下载进度' + res.progress);
								// console.log('已经下载的数据长度' + res.totalBytesWritten);
								// console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);

								// 测试条件，取消下载任务。
								if (res.progress == 100) {
									that.process_num = '';
									that.isDown = false;
									// uni.hideLoading();
									// downloadTask.abort();
								}else{
									that.process_num = res.progress + '%'
								}
							});
						}
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		}, 
	}
</script>

<style scoped>
	.down_process{
		position: fixed;
		display: inline-block;
		padding: 30upx;
		box-sizing: border-box;
		border-radius: 10upx;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		background: rgba(0,0,0,.8);
		color: #fff;
		font-size: 32upx;
		text-align: center;
		display: none;
		z-index: 10;
	}
	.down_process.active{
		display: block;
	}
</style>
