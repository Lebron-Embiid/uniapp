<template>
	<view class="my_promotion_box">
		<image :src="code_bg" class="code_bg" @longpress="toDownImg" mode="widthFix"></image>
		<!-- <image :src="code_img[0]" class="code_img" @tap="previewImg" mode="widthFix"></image> -->
		<text class="invite_txt copy">您的邀请人编号：呦蓝VIP不设邀请码</text>
		<!-- {{invitation_code}} -->
		<block v-if="isproxy != 0">
			<text class="invite_txt invite_txt1" style="bottom: 77px" >选择邀请码复制，长按图片下载 </text>
		</block>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				code_bg: "http://yl.demenk.com/web/statics/images/tuiguang_bg.jpg",
				code_img: ["../../static/code_img.jpg"],
				invitation_code: "",
				isproxy: 0
			}
		},
		methods:{
			toDownImg(){
				var that = this;
				uni.showActionSheet({
					itemList: ["保存图片"],
					success: function (res) {
						console.log(res.tapIndex)
						if(res.tapIndex == 0){
							uni.saveImageToPhotosAlbum({
								filePath: that.code_bg,
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
					// fail: function (res) {
					// 	uni.showToast({
					// 		title: "保存失败！",
					// 		icon: 'none',
					// 		duration: 1500
					// 	})
					// }
				});
			},
		},
		onLoad: function(opt){ 
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			uni.request({
				url: that.$api+'user/extension&access_token='+that.$access_token,
				method: 'GET',
				dataType: "json",
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					that.code_img[0] = res.data.data.user_info.code;
					that.invitation_code  = res.data.data.user_info.invitation_code;
					that.isproxy = res.data.data.user_info.brand_id;
					uni.startPullDownRefresh()
				}
			});
 		},
		onPullDownRefresh() {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			setTimeout(function(){
				uni.request({
					url: that.$api+'user/extension&access_token='+that.$access_token,
					method: 'GET',
					dataType: "json",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: res => {
						console.log(res.data.data);
						that.code_img[0] = res.data.data.user_info.code;
						that.invitation_code  = res.data.data.user_info.invitation_code;
						that.isproxy = res.data.data.user_info.brand_id;
						uni.stopPullDownRefresh();
					}
				});
			},1000)
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
		position: absolute;
		display: block;
		width: 100%;
		bottom: 220upx;
		color: #fff;
		font-size: 28upx;
		left: 0;
		text-align: center;
		z-index: 8;
		&.copy{
			-webkit-user-select: text;
		}
	}
	.invite_txt1{
		bottom: 160upx;
	}
	@media(max-width: 330px){
		.code_img{
			top: 500upx;
		}
	}
</style>
