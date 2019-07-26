<template>
	<view class="release_mater">
		<view class="page_bg"></view>
		<view class="release_box">
			<view class="left_info">
				<view class="input_box"><input type="text" v-model="title" placeholder="输入标题" :value="title" /></view> 
			</view>
			<view class="release_item item_box" v-for="(item,index) in photos" :key="index">
				<image :src="item" class="photo_img" @click="previewPhoto(index)" mode="widthFix"></image>
				<image src="../../static/close.png" class="close_img" @click="deletePhoto(index)" mode="widthFix"></image>
			</view>
			<view class="release_btn item_box" @click="selectPhoto">
				<view class="btn_box">
					<image src="../../static/release_btn.png" mode="widthFix"></image>
					<text>上传图片</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uploadFile from "@/components/cos-wx-sdk-v5-master/demo/demo-no-sdk.js"
	export default{
		data(){
			return{
				title: "",
				photos: [],
				isClick: 0
			}
		},
		methods:{
			selectPhoto: function(e){
				var that = this;
				uni.chooseImage({
					count: 9, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(res.tempFilePaths);
						uni.showLoading({
							title: "上传中"
						})
						for(let i in res.tempFilePaths){
							console.log(res.tempFilePaths[i]);
							uni.uploadFile({
								url: that.$api+'default/upload-image', //图片接口
								filePath: res.tempFilePaths[i],
								name: 'image',
								success: (uploadFileRes) => {
									var data = JSON.parse(uploadFileRes.data);
									if(data.code == 0){
											// var type=/\.[^\.]+$/.exec(url)[0]; //获取后缀
											// var type = "."+data.data.extension;
											// getApp().globalData.pic_type = type;
											// uploadFile(res.tempFilePaths[0]);
										if(that.photos.length >= 9){
											uni.showToast({
												title: "最多发布图片9张",
												icon: 'none'
											})
											return false;
										}
										var url = data.data.url;
										that.photos.push(url);
									}else{
										uni.showToast({
											title:data.msg,
											icon:'none',
										});
									}
								}
							});
						}
						uni.hideLoading();
						
// 						var len = res.tempFilePaths.length;
// 						for(var i=0;i<len;i++){
// 							uni.getImageInfo({
// 								src: res.tempFilePaths[i],
// 								success: function (image) {
// 									console.log(image)
// 								}
// 							});
// 							that.photos.push(res.tempFilePaths[i])
// 						}
					},
					fail: (res) => {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
						});
					}
				});
			},
			previewPhoto: function(e){
				var that = this;
				uni.previewImage({
					urls: that.photos,
					current: that.photos[e]
				});
			},
			deletePhoto: function(e){
				uni.showModal({
					title: "提示",
					content: "确定删除图片？",
					success: (res) => {
						if(res.confirm){
							this.photos.splice(e, 1);
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
			// uni.startPullDownRefresh();
		},
		onPullDownRefresh() {
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onNavigationBarButtonTap: function(){
			var that = this;
			uni.showModal({
				title: "提示",
				content: "确定发布？",
				success: (res) => {
					if(res.confirm){
						if(that.isClick == 1){
							return false;
						}
						if(that.photos.length == 0){
							uni.showToast({
								title: "请上传图片！",
								icon: 'none',
								duration: 1000
							});
							return false;
						}
						if(that.title == ''){
							uni.showToast({
								title: "请输入标题！",
								icon: 'none',
								duration: 1000
							});
							return false;
						}
						uni.request({
							url: that.$api+'default/source-edit&access_token='+that.$access_token,
							dataType: "json",
							method: 'POST',
							data: {
								user_id:0,
								content: that.photos,
								title: that.title,
								type:0,
								browse_id:0
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
									},1500)
								}
							},
							fail: (res) => {
								uni.showToast({
									title:res.data.msg,
									icon:'none',
								});
							}
						});
					}else{
						console.log(this.photos)
					}
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
	.release_box{
		background: #fff;
		padding: 40upx 20upx;
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
		}
	}
	.release_item{
		float: left;
		margin: 0 20upx 20upx 0;
		position: relative;
		.photo_img{
			display: block;
			width: 220upx;
			height: 270upx !important;
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
		width: 220upx;
		height: 270upx;
		margin: 0 20upx 20upx 0;
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
</style>
