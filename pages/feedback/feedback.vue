<template>
	<view class="feedback_box">
		<view class="page_bg"></view>
		<form @submit="formSubmit">
			<view class="section">
				<textarea @input="getMessage" name="message" :value="message" maxlength="-1" placeholder="请输入您的问题，如是订单问题，请填写订单号和详细问题。如是邀请码问题，请填写上级手机号、邀请码和详细问题" />
			</view>
			<view class="section">
				<input @input="getUsername" type="text" name="username" :value="username" placeholder="称呼" />
			</view>
			<view class="section">
				<input @input="getPhone" type="text" name="phone" maxlength="11" :value="phone" placeholder="联系方式" />
			</view>
			<view class="section">
				<text style="display: block;color: #999;margin-bottom: 15upx;">问题图片</text>
				<view class="release_box">
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
			<view class="section def">
				<text>客服工作时间：周一至周五9:00-18:00</text>
				<text>客服邮箱：3347235855@qq.com</text>
				<text>非工作时间请留言，客服上班后将尽快给您答复或与您联系。</text>
			</view>
			<view class="btn-area">
				<button formType="submit">提交留言</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				message: "",
				username: "",
				phone: "",
				photos: [],
				isClick: 0
			}
		},
		onLoad:function(){
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
					that.username = res.data.data.user_info.nickname;
					that.phone = res.data.data.user_info.mobile;
					console.log(that.username,that.phone);
				}
			});
		},
		methods:{
			getMessage: function(e){
				this.message = e.detail.value;
			},
			getUsername: function(e){
				this.username = e.detail.value;
			},
			getPhone: function(e){
				this.phone = e.detail.value;
			},
			formSubmit: function(e){
				let that = this;
				if(that.isClick == 1){
					return false;
				}
				if(that.message == ""){
					uni.showToast({
						title: "请填写问题！",
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				if(that.username == ""){
					uni.showToast({
						title: "请填写称呼！",
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				if(that.phone == ""){
					uni.showToast({
						title: "请填写联系方式！",
						icon: 'none',
						duration: 1500
					})
					return false;
				}
				console.log(that.photos);
				uni.request({
					url: that.$api+'default/article-message&access_token='+that.$access_token,
					data: {
						cat_id: 2,
						name: that.username,
						content: that.message,
						mobile: that.phone,
						url: that.photos
					},
					dataType: "json",
					method: "POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						console.log(res);
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1500
						})
						if(res.data.code == 0){
							that.isClick = 1;
							setTimeout(function(){
								uni.navigateBack({
								 delta:1
								})
							},1500)
						}
					},
					fail:function(err){
						uni.showToast({
							title: "提交失败",
							icon: 'none',
							duration: 1500
						})
					}
				})
			},
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
								url: that.$api+'default/upload-kefu', //图片接口
								filePath: res.tempFilePaths[i],
								name: 'image',
								success: (uploadFileRes) => {
									var data = JSON.parse(uploadFileRes.data);
							        console.log(data);
									if(data.code == 0){
										if(that.photos.length >= 9){
											uni.showToast({
												title: "最多发布图片9张",
												icon: 'none'
											})
											return false;
										}
										var url = data.data.url;
										that.photos.push(url);
							console.log(that.photos);
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
		}
	}
</script>

<style scoped lang="scss">
	page{background: #f5f5f7 !important;}
	.feedback_box{
		.section{
			background: #fff;
			border: 1px solid #E2E2E2;
			border-left: 0;
			border-right: 0;
			margin-bottom: 15upx;
			padding: 20upx 25upx;
			box-sizing: border-box;
			overflow: hidden;
			&.def{
				background: none;
				border: 0;
			}
			textarea{
				display: block;
				width: 100%;
				color: #737373;
				font-size: 24upx;
			}
			input{
				padding: 0 25upx;
				box-sizing: border-box;
				color: #00001f;
				font-size: 24upx;
			}
			text{
				display: block;
				font-size: 24upx;
				margin-bottom: 10upx;
			}
		}
		.btn-area{
			button{
				width: 80%;
				color: #fff;
				font-size: 24upx;
				background: #00001f;
				border-radius: 5upx;
				padding: 6upx 0 8upx;
				margin-top: 70upx;
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
			height: 220upx !important;
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
		height: 220upx;
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
