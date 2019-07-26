<template>
	<view class="settings_box">
		<view class="page_bg"></view>
		<view class="change_box">
			<view class="change_avatar">
				<image :src="avatar" mode="aspectFit" class="set_avatar"></image>
				<view class="camera" @click="changeAvatar"><image src="../../static/camera.png" mode="widthFix"></image></view>
			</view>
			<view class="ca_till">修改头像</view>
		</view>
		<form @submit="formSubmit" class="form">
			<view class="section">
				<text>昵称</text>
				<input type="text" name="username" @input="getUsername" :value="username" />
			</view>
			<view class="btn-area">
				<button formType="submit" class="submit_btn">确定修改</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				username: "",
				avatar: "../../static/person_avatar.png"
			}
		},
		methods:{
			getUsername: function(e){
				this.username = e.detail.value;
			},
			changeAvatar: function(e){
				let that = this;
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
 						uni.uploadFile({
							url: that.$api+'default/upload-image', //图片接口
							filePath: res.tempFilePaths[0],
							name: 'image',
							success: (uploadFileRes) => {
									var data = JSON.parse(uploadFileRes.data);
  								if(data.code == 0){
									console.log(44654);
									that.avatar = data.data.url;
 								}else{
									uni.showToast({
										title:data.msg,
										icon:'none',
										duration: 1000
									});
								}
								
							}
						});
					}
				});
			},
			formSubmit: function(e){
				 var that = this;
				 uni.request({
				 	url: that.$api+'user/setting-edit/&access_token='+that.$access_token,
					data:{
						nickname:that.username,
						avatar_url:that.avatar
					},
				 	dataType: "json",
				 	method: 'GET',
				 	header: {
				 		'content-type': 'application/x-www-form-urlencoded'
				 	},
				 	success: res => {
 				 		uni.showToast({
				 			title:res.data.msg,
				 			icon:'none',
				 		});
						if(res.data.code = 1){
							setTimeout(function(){
								 uni.switchTab({
								 	url: "/pages/person/person"
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
			}
		},
		onLoad(opt) {
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
			uni.request({
				url: that.$api+'user/setting/&access_token='+that.$access_token,
				dataType: "json",
				method: 'GET',
				header: {
					'content-type': 'application/x-www-form-urlencoded'
				},
				success: res => {
					var data = res.data.data
					if(res.data.code == 0){
						that.username = data.nickname
						that.avatar = data.avatar_url
					}
				},
				fail: (res) => {
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
	page{background: #f5f5f7 !important;}
	.change_box{
		padding: 35upx;
		box-sizing: border-box;
		background: #fff;
		margin-bottom: 8upx;
		.change_avatar{
			width: 132upx;
			height: 132upx;
			position: relative;
			border-radius: 50%;
			margin: 0 auto 20upx;
			.set_avatar{
				display: block;
				width: 100%;
				height: 100% !important;
				border-radius: 50%;
			}
			.camera{
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
				background: rgba(0,0,0,.4);
				border-radius: 50%;
				z-index: 5;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					display: block;
					width: 34upx;
					height: 29upx !important;
				}
			}
		}
		.ca_till{
			color: #00001f;
			font-size: 24upx;
			text-align: center;
		}
	}
	.form{
		display: block;
		overflow: hidden;
		.section{
			background: #fff;
			padding: 10upx 20upx;
			box-sizing: border-box;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			text{
				color: #00001f;
				font-size: 24upx;
				padding-right: 60upx;
				border-right: 1upx solid #eee;
			}
			input{
				padding: 0 40upx 0 50upx;
				box-sizing: border-box;
				color: #333;
				font-size: 22upx;
			}
		}
		.submit_btn{
			width: 80%;
			margin-top: 200upx;
			color: #fff;
			font-size: 24upx;
			background: #00001f;
			border-radius: 5upx;
			padding: 10upx 0 12upx;
		}
	}
</style>
