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
			<view class="section def">
				<text>客服工作时间：周一至周五9:00-18:00</text>
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
				uni.request({
					url: that.$api+'default/article-message&access_token='+that.$access_token,
					data: {
						cat_id: 2,
						name: that.username,
						content: that.message,
						mobile: that.phone
					},
					dataType: "json",
					method: "POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
							that.isClick = 1;
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration: 1500
							})
							setTimeout(function(){
								uni.navigateBack({
								 delta:1
								})
							},1500)
					},
					fail:function(err){
						uni.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1500
						})
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
</style>
