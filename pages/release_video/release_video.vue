<template>
	<view class="release_mater">
		<view class="page_bg"></view>
		<view class="edit_video_info">
			<view class="left_info">
				<view class="input_box"><input type="text" @input="getTitle" placeholder="输入标题" :value="title" /></view> 
			</view>
			<view class="right_photo" @click="toEditPoster">
				<view class="poster_box" v-if="poster != ''"><image :src="poster" mode="widthFix"></image></view>
				<block v-else>
					<view class="edit_poster">编辑封面</view>
				</block>
			</view>
		</view>
		<view class="release_box">
			<view class="release_item item_box" v-if="video != ''">
				<video :src="video" :controls="isControls" :show-center-play-btn="isPlay"></video>
				<image src="../../static/close.png" class="close_img" @click="deleteVideo" mode="widthFix"></image>
			</view>
			<view class="release_btn item_box" v-else @click="selectVideo">
				<view class="btn_box">
					<image src="../../static/release_btn.png" mode="widthFix"></image>
					<text>上传视频</text>
				</view>
			</view>
		</view>
		<text style="color: #f00;font-size: 24upx;padding: 10upx 30upx;">视频格式：mp4，封面图尺寸建议为：710*356</text>
	</view>
</template>

<script>
	import uploadFile from "@/components/cos-wx-sdk-v5-master/demo/demo-no-sdk.js"
	export default{
		data(){
			return{
				title: "",
				info: "",
				poster: "",
				video: "",
				isControls: false,
				isPlay: false,
				isClick: 0
			}
		},
		methods:{
			getTitle: function(e){
				this.title = e.detail.value;
			},
			getInfo: function(e){
				this.info = e.detail.value;
			},
			toEditPoster: function(e){
				var that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(res)
						uni.uploadFile({
							url: that.$api+'default/upload-image', //图片接口
							filePath: res.tempFilePaths[0],
							name: 'image',
							success: (uploadFileRes) => {
								var data = JSON.parse(uploadFileRes.data);
								that.poster = data.data.url;
								console.log(that.poster);
							}
						});
					}
				});
			}, 
			selectVideo: function(e){
				var that = this; 		
// 				  uni.chooseVideo({
// 				  		count: 1,
// 				  		sourceType: ['album', 'camera'],
// 				  		success: function (res) {
// 				  			var path = res.tempFilePath;
// 							getApp().globalData.pic_type = ".mp4";
// 				  			uploadFile(path);
// 				  	},
// 				})
				uni.chooseVideo({
					count: 1,
					sourceType: ['album', 'camera'],
					success: function (res) {
						console.log(res)
						uni.showLoading({
							title: '上传中...'
						});
						var path = res.tempFilePath;
                            uni.uploadFile({
                            	url: that.$api+'default/upload-video', //图片接口
                            	filePath: res.tempFilePath,
                            	name: 'file',
								 formData: {
									'name': "123.mp4"
								},
                            	success: (uploadFileRes) => {
                            		var data = JSON.parse(uploadFileRes.data);
										that.video = data.data.url
									uni.hideLoading();
										// var url = "http://gao2.demenk.com/youlanphp/web/uploads/video/store_1/a32f727f1d5b311daeef57fea87f7120e51ca415.mp3"
						             // uploadFile(that.video);
								      console.log(that.video)
                            	}
                            });
					}
				});
			},
			deleteVideo: function(e){
				var that = this;
				uni.showModal({
					title: "提示",
					content: "确定删除视频？",
					success: (res) => {
						if(res.confirm){
							that.video = "";
						}
					}
				})
			}
		},
		onLoad(opt) {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			getApp().globalData.url = "";
			uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			var that = this;
			setTimeout(function () {
				that.video = getApp().globalData.url;
				console.log(that.video);
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onNavigationBarButtonTap: function(){
			var that = this;
			uni.showModal({
				title: "提示",
				content: "确定发布？",
				success: (res) => {
						if(that.isClick == 1){
							return false;
						}
					// if(res.confirm){
						if(that.title == ""){
							uni.showToast({
								title: "请填写标题！",
								icon: 'none',
								duration: 1000
							});
							return false;
						}
						
						if(that.poster == ""){
							uni.showToast({
								title: "请上传封面图！",
								icon: 'none',
								duration: 1000
							});
							return false;
						}
						if(that.video == ""){
							uni.showToast({
								title: "请上传视频！",
								icon: 'none',
								duration: 1000
							});
							return false;
						}
                        // that.video = "http://gao2.demenk.com/shop/web/uploads/video/test.mp3";
						console.log(that.video)
						// return false;
						uni.request({
							url: that.$api+'default/movies-edit&access_token='+that.$access_token,
							dataType: "json",
							method: 'POST',
							data: { 
								title: that.title,
								cove_pic: that.poster,
								url: that.video
							},
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							success: res => {
								that.isClick = 1;
								if(res.data.code == 0){
									uni.showToast({
										title: res.data.msg,
										icon: 'none',
										duration: 1000
									});
									setTimeout(function(){
										uni.navigateBack({
											delta: 1
										})
									},1000)
								}
							},
							fail: (res) => {
								uni.showToast({
									title:res.data.msg,
									icon:'none',
								});
							}
						});
					// }
				},
				fail: (err) => {
					console.log(err)
				}
			})
		}
	}
</script>

<style scoped lang="scss">
	page{
		background: #f5f5f7 !important;
	}
	.edit_video_info{
		margin: 20upx 0;
		padding: 30upx;
		background: #fff;
		box-sizing: border-box;
		overflow: hidden;
		.left_info{
			// float: left;
			// width: 480upx;
			.input_box{
				padding-bottom: 10upx;
				border-bottom: 1px solid #E3E3E3;
				margin-bottom: 20upx;
				input{
					color: #595959;
					font-size: 24upx;
				}
			}
// 			textarea{
// 				display: block;
// 				width: 100%;
// 				height: 130upx;
// 				color: #808080;
// 				font-size: 20upx;
// 			}
		}
		.right_photo{
			// float: right;
			width: 180upx;
			height: 230upx;
			border: 1px solid #f2f2f2;
			box-sizing: border-box;
			image{
				display: block;
				width: 100%;
				height: 230upx !important;
			}
			.edit_poster{
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				background: #f2f2f2;
				color: #808080;
				font-size: 24upx;
			}
		}
	}
	.release_box{
		background: #fff;
		padding: 30upx;
		box-sizing: border-box;
		overflow: hidden;
	}
	.release_item{
		float: left;
		// margin: 0 20upx 20upx 0;
		position: relative;
		video{
			display: block;
			width: 190upx;
			height: 190upx !important;
		}
		.close_img{
			display: block;
			width: 50upx;
			height: 50upx !important;
			position: absolute;
			top: 0;
			right: 0;
			z-index: 5;
		}
	}
	.release_btn{
		float: left;
		border: 1px dashed #EDEDED;
		width: 190upx;
		height: 190upx;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #9e9e9e;
		font-size: 24upx;
		image{
			display: block;
			width: 57upx;
			height: 47upx !important;
			margin: 0 auto 10upx;
		}
	}
	.item_box:nth-of-type(3n){
		margin-right: 0;
	}
</style>
