<template>
	<view class="my_promotion_box">
		<image :src="code_bg" class="code_bg" mode="widthFix"></image>
		<image :src="code_img[0]" class="code_img" @tap="previewImg" mode="widthFix"></image>
		<text class="invite_txt">邀请码：{{mobile}}</text>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				code_bg: "../../static/tuiguang_bg.jpg",
				code_img: ["../../static/code_img.jpg"],
				mobile: ""
			}
		},
		methods:{
			previewImg(){
				var that = this;
				console.log(that.code_img[0]);
				plus.nativeUI.previewImage(that.code_img, {  
					current: 0,  
					onLongPress: function(e){
						plus.nativeUI.actionSheet(
							{
								buttons:[
								{
									title:"保存图片"
								}
							]},
							function(e){
								console.log(e.index)
								if(e.index == 1){
									uni.saveImageToPhotosAlbum({
										filePath: that.code_img[0],
										success: function () { 
											uni.showToast({
												title: '图片已保存至相册',
												icon: 'none',
												duration: 1500
											})
										}
									});
								}
							}
						);
					}
				})
				// uni.previewImage({
				// 	current: that.code_img[0],
				// 	urls: that.code_img,
				// 	longPressActions: {
				// 		itemList: ['保存图片'],
				// 		success: function (res) {
				// 			console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
				// 			if(res.tapIndex == 0){
				// 				console.log(res.tapIndex);
				// 				uni.saveImageToPhotosAlbum({
				// 					filePath: that.code_img[0],
				// 					success: function () { 
				// 						uni.showToast({
				// 							title: '图片已保存至相册',
				// 							icon: 'none',
				// 							duration: 1500
				// 						})
				// 					}
				// 				});
				// 			}
				// 		},
				// 		fail: function (res) {
				// 			uni.showToast({
				// 				title: res.errMsg,
				// 				icon: 'none',
				// 				duration: 1500
				// 			})
				// 		},
				// 		complete: function(res){
				// 			uni.showToast({
				// 				title: res,
				// 				icon: 'none',
				// 				duration: 1500
				// 			})
				// 		}
				// 	} 
				// });
			}
		},
		onLoad: function(opt){ 
			this.code_img[0] = opt.code;
			this.mobile = opt.mobile;
			console.log(opt)
 		}
	}
</script>

<style scoped lang="scss">
	.code_bg{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		max-height: 100%;
		z-index: 3;
	}
	.code_img{
		position: relative;
		z-index: 5;
		width: 300upx;
		height: 300upx !important;
		top: 600upx;
		left: 50%;
		transform: translateX(-50%);
	}
	.invite_txt{
		position: relative;
		display: block;
		width: 100%;
		top: 620upx;
		color: #fff;
		font-size: 28upx;
		left: 0;
		text-align: center;
		z-index: 8;
	}
	@media(max-width: 330px){
		.code_img{
			top: 500upx;
		}
	}
</style>
