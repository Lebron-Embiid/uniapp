<template>
	<view class="message_box">
		<view class="page_bg"></view>
		<view class="m_till">请您把问题留下，我们为您提供专业化解的解决方案！</view>
		<form @submit="formSubmit">
			<view class="section">
				<textarea @input="getProblem" :value="problem" name="problem" maxlength="-1" placeholder="请把您的问题留给我们，我们会提供让您满意的答复~~" />
			</view>
			<view class="section">
				<input @input="getUsername" type="text" name="username" :value="username" placeholder="请输入你的称呼" />
			</view>
			<view class="section">
				<input @input="getPhone" type="number" name="phone" maxlength="11" :value="phone" placeholder="请输入你的手机联系方式" />
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
				problem: "",
				username: "",
				phone: ""
			}
		},
		onLoad:function(){
			var that = this;
			that.$access_token = uni.getStorageSync("access_token");
			that.$level = uni.getStorageSync("level");
		},
		methods:{
			getProblem: function(e){
				this.problem = e.detail.value;
			},
			getUsername: function(e){
				this.username = e.detail.value;
			},
			getPhone: function(e){
				this.phone = e.detail.value;
			},
			formSubmit: function(e){
				var that = this;
				if(that.problem == ""){
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
				if(that.phone == "" || that.phone.length !=11){
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
						cat_id: 1,
						name: that.username,
						content: that.problem,
						mobile: that.phone
					},
					dataType: "json",
					method: "POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					success: function(res) {
						if(res.data.code == 0){
							uni.showToast({
								title: res.data.msg,
								icon: 'none',
								duration: 1500
							})
							setTimeout(function(){
								 uni.navigateTo({ 
								 	url: "/pages/science/science"
								 })
							},1500)
						}
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
	page{
		background: #f5f5f7 !important;
	}
	.message_box{
		padding: 40upx 20upx;
		.m_till{
			color: #333;
			font-size: 26upx;
			margin-bottom: 30upx;
		}
		.section{
			background: #fff;
			border: 1px solid #E2E2E2;
			margin-bottom: 15upx;
			padding: 20upx 25upx;
			box-sizing: border-box;
			textarea{
				display: block;
				width: 100%;
				color: #737373;
				font-size: 20upx;
			}
			input{
				padding: 0 25upx;
				box-sizing: border-box;
				color: #00001f;
				font-size: 20upx;
			}
		}
		.btn-area{
			button{
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
